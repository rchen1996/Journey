const axios = require('axios');
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const account = process.env.ACCOUNT_ID;
const token = process.env.TOKEN;
const { parseAttractionObj } = require('../helpers/dataHelpers');

module.exports = ({
  getCoordinatesByLocationName,
  addThenGetAttraction,
  addAddress,
}) => {
  router.get('/:location_name/:query/:cat', (req, res) => {
    let { query, cat, location_name } = req.params;
    location_name = location_name.split(',').join('2C_');
    location_name = location_name.split(' ').join('_');
    if (location_name === 'North_Cape') location_name = 'North_Cape_28Norway29';
    if (query === 'null') query = null;
    if (cat === 'null') {
      cat = null;
    } else {
      cat = cat
        .split(',')
        .map(category => {
          switch (category) {
            case 'adult':
              return '&tag_labels=nightlife';
            case 'amusement':
              return '&tag_labels=amusementparks|shopping';
            case 'accomodation':
              return '&tag_labels=hotels';
            case 'landmark':
              return '&tag_labels=sightseeing';
            case 'nature':
              return '&tag_labels=camping|national_park|exploringnature';
            case 'sport':
              return '&tag_labels=adrenaline|sports';
            case 'food':
              return '&tag_labels=cuisine';
            case 'cultural':
              return '&tag_labels=culture|history|museums|';
            default:
              return '&tag_labels=landmarks';
          }
        })
        .join('');
    }
    console.log(cat);

    axios
      .get(
        `https://www.triposo.com/api/20201111/poi.json?location_id=${location_name}${
          cat ? cat : ''
        }&count=10&fields=id,name,score,images,snippet,tag_labels,coordinates,properties&order_by=-score${
          query ? `&annotate=trigram:${query}&trigram=>=0.3` : ''
        }&account=${account}&token=${token}`
      )
      .then(result => {
        Promise.all(
          result.data.results.map(result => {
            let attraction = parseAttractionObj(result);
            return addThenGetAttraction(attraction);
          })
        ).then(attractions => {
          // console.log('first return from database', attractions);
          const placesWithNoAddress = [];
          const placesWithAddress = [];
          attractions.forEach(attraction => {
            if (attraction.address === 'not in database') {
              placesWithNoAddress.push(attraction);
            } else {
              placesWithAddress.push(attraction);
            }
          });
          if (placesWithNoAddress.length > 0) {
            // console.log('placesWithNoAddress', placesWithNoAddress);
            Promise.all(
              placesWithNoAddress.map(attraction => {
                const { x, y } = attraction.location;
                return axios.get(
                  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${x}&lon=${y}`
                );
              })
            )
              .then(results => {
                const idToUpdate = [];
                const addressToUpdate = [];
                results.forEach((result, index) => {
                  placesWithNoAddress[index].address = result.data.display_name;
                  idToUpdate.push(placesWithNoAddress[index].id);
                  addressToUpdate.push(result.data.display_name);
                });
                Promise.all(
                  idToUpdate.map((id, index) => {
                    addAddress(id, addressToUpdate[index]);
                  })
                ).catch(err => console.log(err));
                // console.log('should have address', placesWithNoAddress);
                res.send([...placesWithAddress, ...placesWithNoAddress]);
              })
              .catch(err => {
                res.send(placesWithAddress);
                console.log(err);
              });
          } else {
            res.send(placesWithAddress);
          }
        });
      });
  });

  return router;
};
