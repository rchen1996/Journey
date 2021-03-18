module.exports = (db) => {
  const getCoordinatesByLocationName = (locationName) => {
    const query = {
      text: `SELECT latitude as lat, longitude as lon
      FROM locations
      WHERE name = $1`,
      values: [locationName],
    };
    return db
      .query(query)
      .then((res) => res.rows[0])
      .catch((err) => err);
  };

  const addThenGetAttraction = (attraction) => {
    const {
      name,
      description,
      category,
      image,
      address,
      location,
    } = attraction;
    const query = {
      text: `with s as (
        select *
        from attractions
        where name = $1
        ), i as (
          insert into attractions (name,description,category,image, address,location)
          select $1,$2,$3,$4, $5,$6
          where not exists (select 1 from s)
          returning *
          )
          select *
          from i
          union all
          select *
          from s;`,
      values: [name, description, category, image, address, location],
    };
    return db
      .query(query)
      .then((res) => res.rows[0])
      .catch((err) => err);
  };

  return {
    getCoordinatesByLocationName,
    addThenGetAttraction,
  };
};
