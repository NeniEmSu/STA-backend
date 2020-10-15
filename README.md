# Students Assistant Server

Api backend for students assistant applications using express/knex/postgres/jest/supertest

## Deployed

- Client: <https://students-assistant.netlify.app/>
- Server: <https://sta-server.herokuapp.com/>
- Database model <https://app.lucidchart.com/invitations/accept/9e1edb07-7270-49a9-be45-faa034e2db53>

## I'll be using

- Server:
  - Postgre for the database
  - knex.js for the database migrations, seeds and queries.
  - express.js for the JSON routes
  - Convert api to graphql

## Modeling SQL Database

Every Record will have:
Created At - timestamptz
Updated At - timestamptz
Deleted At - timestamptz

How i'll name models and tables:

- Models in singular i.e User Model
- Tables in singular i.e User table

## Entities in the students assistant system

- [ ] User
- [ ] Question
- [ ] Payment
- [ ] Feedback
- [ ] Faq

## Payment Gateways

- [paymentwall](<https://www.paymentwall.com/products/subscriptions>)

## Seed the Database

- [ ] User
- [ ] Countries
- [ ] Ukraine States - Partial, more to do!
- [ ] Location
- [ ] Universities

## API Endpoints

- [ ] Users
  - [x] Sign up
  - [x] Login
  - [ ] Logout
  - [ ] Get One
  - [x] Get all
  - [ ] Update
  - [ ] Delete

### Check List

- [X] Create a server folder
  - [x] Clone express knex boilerplate
- [x] Setup preferred folder structure
  - [x] Create controllers folder
  - [x] Create error handler
  - [x] Add GET `/` endpoint
- [x] Create database
- [x] Create user table migration
- [x] Seed user table with sample data
- [x] Connect to the database
  - [x] Create database connection file
  - [x] Create a queries file
- [x] Setup migrations test
  - [x] Setup seeds
  - [x] Add seeds
- [x] Configure unit test
  - [x] Fix errors from tests
- [x] List all users with GET /api/users
  - [x] Create query
  - [x] Create controller
  - [x] Create route
  - [ ] Write tests
- [x] Create auth middleware
  - [x] Auth middleware for protected routes
  - [x] Validate auth route inputs
- [ ] Sign up users with POST /auth/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
  - [ ] Write tests
- [ ] Login user with POST /auth/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
  - [ ] Write tests
- [ ] Logout user with POST /auth/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
  - [ ] Write tests
- [ ] Delete user with DELETE /auth/users
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
  - [ ] Write tests
- [ ] Forgot password /auth/forgotPassword
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
  - [ ] Write tests
- [ ] Reset password /auth/resetPassword
  - [ ] Create query
  - [ ] Create controller
  - [ ] Create route
  - [ ] Write tests
- [x] Setup Docker
  - [x] docker compose
  - [x] .dockerignore
  - [ ] test project on docker container
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

## Deployment

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

### Useful Links

- [Timestamps update](<https://dev.to/morz/knex-psql-updating-timestamps-like-a-pro-2fg6>)
- [Stack overflow Timestamp trigger](<https://stackoverflow.com/questions/36728899/knex-js-auto-update-trigger>)
- [Testing express api with jest & supertest](<https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6>)
- [Timestamp vs Timestamptz](<https://medium.com/building-the-system/how-to-store-dates-and-times-in-postgresql-269bda8d6403>)
- [MVP basis](<https://www.thirdrocktechkno.com/blog/10-essential-steps-to-build-a-saas-mvp/>)
- [Design quiz db](<https://mysql.tutorials24x7.com/blog/guide-to-design-database-for-quiz-in-mysql>)
