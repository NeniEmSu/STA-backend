# Students Assistant Server

Api backend for students assistant applications using express/knex/postgres/jest/supertest

## Deployed

- Client: <https://students-assistant.netlify.app/>
- Server: <https://sta-server.herokuapp.com/>

## I'll be using

- Server:
  - Postgre for the database
  - knex.js for the database migrations, seeds and queries.
  - express.js for the JSON routes
  - Convert api to graphql

## Check List

- [X] Create a server folder
  - [ ] Clone express knex boilerplate
- [ ] Setup preferred folder structure
  - [ ] Create controllers folder
  - [ ] Create error handler
  - [ ] Add GET `/` endpoint
- [x] Create database
- [x] Create user table migration
- [x] Seed user table with sample data
- [x] Connect to the database
  - [x] Create database connection file
  - [ ] Create a queries file
- [ ] List all users with GET /api/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
- [ ] Create auth middleware
  - [ ] Create query for auth middleware
- [ ] Sign up users with POST /api/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
- [ ] Login user with POST /api/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
- [ ] Logout user with POST /api/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
- [ ] Delete user with DELETE /api/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
- [ ] Deploy server to Heroku
  - [ ] Sign up and login to heroku
  - [ ] Install the heroku CLI
  - [ ] Create a heroku app
  - [ ] Push to heroku
  - [ ] View heroku logs
- [ ] Add Postgres DB to Heroku
  - [ ] Add postgres addon
  - [ ] Add production connection to knex
  - [ ] Run migrations on production DB
  - [ ] Run seeds on production DB

### API endpoints

## Deployment

- Server

  ```sh
  cd /server
  heroku login # login once
  heroku create sta-server # Initializes heroku app and adds remote.
  heroku addons:create heroku-postgresql:hobby-dev -app sta-server # add a postgres db addon to your heroku app where plane-name = hobby-dev
  git init # initialize app
  heroku git:remote -a sta-server # setup remote
  git commit -am "deploy to heroku" # commit
  git push heroku master # deploy latest code to heroku
  heroku run knex migrate:latest # run migrations on production db
  heroku run knex seed:run  # run seeds on production db
  heroku open # open heroku url in browser
  ```

## Development

Run server

```sh
  npm run dev #nodemon run server and watches for changes
```

Knex setup npx

```sh
  # Make migration
    npx knex migrate:make migration_name
  # Run migration
    npx knex migrate:latest
    npx knex migrate:latest --env testing
  # Rollback migrations
    npx knex migrate:rollback
  # Make seed
    npx knex seed:make seed_name
  # Run seed
    npx knex seed:run
```

= Testing

```sh
  cd /server
  npm run test # test with jest
```

### Useful Links

- [Timestamps update](<https://dev.to/morz/knex-psql-updating-timestamps-like-a-pro-2fg6>)
- [Stack overflow Timestamp trigger](<https://stackoverflow.com/questions/36728899/knex-js-auto-update-trigger>)
