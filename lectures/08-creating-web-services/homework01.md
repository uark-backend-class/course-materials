# Homework 1

## Question 1

Create a web server that:
  - Handles the root endpoint `/` by returning a simple string
  - Handles the endpoint `/cat` for a GET request with any combination of query parameters, and returns something relevant to the data being sent
  - Handles the endpoint `cat` for a POST request that accepts a JSON body of data, and returns something relevant to the data being sent
  - Returns 404 for any endpoint other than `/` or `/cat`
