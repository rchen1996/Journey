# Routes

## Backend

### Users / Sessions

- POST /users/login (login)
- POST /users/logout (logout)
- POST /users/signup (user signup)

### User / Dashboard

- GET /api/users/:user_id (get user information)
- GET /api/users/:user_id/itineraries (get all itineraries for user)
- GET /api/users/:user_id/itineraries/:itinerary_id (get specific itinerary for specific user)
- GET /api/users/:user_id/bookmarks (get all bookmarks)
- DELETE /api/users/:user_id/bookmarks/:bookmark_id (delete an itinerary from bookmarks)

### CRUD Itinerary Collaborator

- GET /api/itineraries/:itinerary_id/users
- POST /api/itineraries/:itinerary_id/users with user (add user to travel party)
- DELETE /api/itineraries/:itinerary_id/users/:user_id (delete user from travel party)

### CRUD Itineraries

- GET /api/itineraries : list of all itineraries
- GET /api/itineraries/:itinerary_id : view an itinerary + literally everything
- POST /api/itineraries : add an itinerary + create travel party with host
- UPDATE /api/itineraries/:itinerary_id : edit an itinerary (name, description, image, start/end date, etc.)
- DELETE /api/itineraries/:itinerary_id : delete an itinerary

### CRUD Days

- GET /api/itineraries/:itinerary_id/:day_id :return the activities in that day + attraction objects
- POST /api/itineraries/:itinerary_id : add a day to an itinerary
- POST /api/itineraries/:itinerary_id/:day_id/activities : add an activity to a day
- UPDATE /api/itineraries/:itinerary_id/:day_id/ : edit a day in an itinerary (order of the day changes all the day orders for all the days in that location)
- DELETE /api/itineraries/:itinerary_id/:day_id : delete a day in an itinerary

### CRUD Activities

- POST /api/itineraries/:itinerary_id/days/:day_id/activities : add activity to a day (includes attraction information - if attraction doesn't exist, it needs to be created)
- POST /api/itineraries/:itinerary_id/activities - add activity to the my locations list
- UPDATE /api/itineraries/:itinerary_id/activities/:activity_id (update an activity from my locations to have a day)
- UPDATE /api/itineraries/:itinerary_id/days/:day_id/activities/:activity_id (edit an activity in a day)
- DELETE /api/itineraries/:itinerary_id/days/:day_id/activities/:activity_id (delete an activity from a day)

### Attractions

- GET /api/attractions/:params : api search (search attractions in db first, if not found, search api + add to db)

## Frontend

- / (homepage)
- /login (login form)
- /signup (signup form)

- /itineraries (list of all itineraries)
- /itineraries/:itinerary_id (view a specific itinerary)
- /itineraries/:itinerary_id/:day_id (view a specific day of itinerary)
- /itineraries/new (form for creating a new itinerary)
- /itineraries/:itinerary_id/edit (edit view for editing the itinerary overview)
- /itineraries/:itinerary_id/:day_id/edit (edit view for editing specific day of the itinerary)
- /itineraries/:itinerary_id/collaborators (view list of collaborators in trip)

- /dashboard/:userId (view user dashboard - shows a list of user's itineraries)
- /dashboard/:userId/bookmarks (view list of bookmarked itineraries)
