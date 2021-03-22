# Journey

## About

Journey is a single page app for creating trip itineraries for groups in real time, and browsing public itineraries for inspiration. Journey is built with React and TailwindCSS on the frontend and Express and Node.js on the backend. PostgreSQL is used for the database, and Socket.io is used for WebSocket integration to allow for a real-time experience.

## Final Product

![home](docs/home.png?raw=true "Home Page")
![explore](docs/explore.png)
![activity search](docs/activity-search.png)
![overview](docs/overview.png)
![print](docs/print.png)

## Getting Started

## Tips

- Use the `npm run db:reset` command each time there is a change to the database schema or seeds.
  - Note: in doing this, you will lose any newly created data (not in seed files), as the schema will tend to `DROP` the tables and recreate them.

## Dependencies
