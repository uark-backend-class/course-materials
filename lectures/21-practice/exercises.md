# Exercises

## Exercise 1

- We all work for a bank -- congratulations, we're rich! Not really. Our team has been tasked with migrating from our legacy API system to a new Node.js API. Unfortunately, the current legacy system is beginning to fail, and there is not a great way to retrieve the data.

- Your tasks:
  - Visit the legacy site (https://bob-legacy-185818.appspot.com/) and figure out how to migrate the data from the old system to a new, shiny MongoDB database.
  - The bank executives would really like a dashboard showing how the bank is performing. We'll leave it to the front-end team to make something pretty, but we need to get them the data. Here's what's on the scorecard:
    - How much money has been deposited in the bank?
    - How much money has left the bank (i.e. payments & withdrawals)?
    - How much does the bank owe? (invoices)
    - What's the current on-hand balance of the bank after all deposits and payments / withdrawals?
      - Does the bank have enough money to pay its bills (invoices)?
  - Our customers would like the ability to see a list of their current activity. This should be retrieved by their account number. Make sure this data is nicely formatted for them -- after all, they pay us.
  - The Finance Team of Definitely Good Decisions (what a name!) would like us to integrate with their Customer Satisfaction API. It's their flashy new way of showing our customers how much we like them! Whenever we're showing customer activity, we should pull information from their API by making a GET request to https://bob-ftodgd-185818.appspot.com/. We've heard delicious rumors that they're not very good programmers, so we have no idea what to expect from this API!

- Keep in mind:
  - This is a replacement for a production system. All of the following are expected:
    - Logging
      - Errors
      - Regular activity during development (i.e. debugging)
    - Linting
    - Unit tests
    - Error-handling
      - Things will definitely go wrong
    - Appropriately install NPM packages
    - Production and Development environments
      - Production should always run on port 8080

- Other considerations:
  - Use any libraries, etc that suit your needs. Anything goes as long as you can accomplish the task! Good luck! <3
