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
}) => {
  router.get('/:location_name/:query/:cat', (req, res) => {
    let { query, cat, location_name } = req.params;
    const attractionsArr = [];    
    axios
      .get(
        `https://www.triposo.com/api/20201111/poi.json?location_id=${location_name}&count=15&fields=id,name,score,images,snippet,tag_labels,coordinates,properties&order_by=-score&account=${account}&token=${token}`
      )
      .then((result) => {
        Promise.all(
          result.data.results.map(attractionObj => {
            const attraction = parseAttractionObj(attractionObj);
          return addThenGetAttraction(attraction)
          })
        ).then(items => {
          items.forEach(item=>{
            attractionsArr.push(item);
          })
          console.log(attractionsArr)
          res.send(attractionsArr)
        })        
      })      
   
  });

  return router;
};
