# Exercise 1

For this exercise, we will be creating 3 separate applications that will interact with each other. You have the entire class period to complete this exercise and ask questions along the way.

## App 1 - Users

Create an Express app that does the following;
  - Contains a `users` module
    - This module should contain 5 unique users
    - Users consist of:
      - username
      - First Name
      - Last Name
      - password
      - id
        - should be a unique and un-guessable identifier (i.e. no single digits / letters)
      - created
        - timestamp that indicates the date (YYYY-MM-DD) the user was created
  - GET /
    - Returns all Users
  - POST /
    - Adds a user
      - If successful, creates a new user and a newly generated unique id. This new user is returned
      - If unsuccessful, returns an appropriate error
  - GET /user/:id
    - Returns the user whose id matches the id provided as a route parameter
  - Include tests

## App 2 - Tracking

Create an Express app that does the following;
  - GET /tracking
    - Returns an error if no query parameters are provided
    - Query parameters:
      - username
      - currentDate (YYYY-MM-DD)
    - Every time a user calls this app, it tracks the number of requests made. If the number exceeds 5 for a user on a single day, an error is returned stating that the user has exceeded the number of allowed attempts
  - Include tests

## App 3 - Login Service

Create an Express app that does the following:
  - GET /
     - Displays a welcome message
   - POST /
    - This service will take a user's credentials and ensure that the password matches the user's password from the User's service
    - This service then checks the Tracking service to makes sure the user has not exceeded the number of attempts for the day
      - If both of the above are true, then a successful message is returned including the user's information
      - If either one of the above fails, an appropriate error message should be true
  - Include tests
