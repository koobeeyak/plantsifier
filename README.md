## plantsifier 🌴🌴

To run the app on your local machine:

### Run server application
From `server/` directory

`$ npm install`

`$ postgres` (may have to run with `-D /usr/local/var/postgres`) or boot up the [Posrgres client for Mac](https://postgresapp.com/)
  - default config for postgres user is "postgres", yours might be this or the name of your system user
  - can change this in `server/db/config/config.json`
  
`$ npm run db:create;npm run db:migrate;npm run db:seed`

`$ npm run dev` should run the app on localhost port `9000`

We will be able to direct all local API requests from the client to our server thanks to a proxy setting in the client's package.json.

### Run client application
From `client/` directory

`$ npm install`

`$ npm run start`

### Task list for building out sample application
- [x] create Employee and Plant resource and models in Sequelize, with foreign key relations
- [ ] create Comment resource and model with foreign key relations
- [x] start exposing Plants CRUD endpoints, Plants routes & controller via express.js
- [ ] start exposing Employee logout and login endpoints
- [ ] hash employee passwords using BCrypt (see `server/utils`)
- [ ] build in JWT authentication flow using PassportJWT
- [ ] track JWT on frontend with via cookie or `localStorage`
- [x] configure seed data and migrations
- [x] apply linting via eslint for client, server
- [x] integrate sass preprocessor
- [x] configure store with middleware for redux, redux-saga, redux-logger
- [x] create actions, actions creators, and reducers for starting resource
- [x] write resource API call using Axios client
- [x] create Saga for fetching resource from that API endpoint
- [ ] style Plants description and photos in SCSS, using flex-box
