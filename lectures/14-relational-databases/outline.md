# Databases
  - [MySQL Download](http://dev.mysql.com/downloads/mysql/)
    - cd /usr/local/mysql/bin
    - ./mysql -u root -p
    - SET PASSWORD FOR 'root'@'localhost' = PASSWORD('new-password-here');
    - ALTER USER 'root'@'localhost' PASSWORD EXPIRE NEVER;
  - [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
  - Terminology
    - Database
      - An organized collection of related data.
    - Database Management System (DBMS)
      - Software that manages a database and allows users to interact with
      - Allows you to create, add, modify and delete data as well as modify database structure.
    - Database System
      - The combination of a database, a database management system and the applications that access the database.
    - Relational Database
      - A database whose organization is based on the relational model of data.
      - Virtually all relational database systems use SQL (Structured Query Language).
    - Relational Model
      - An approach to organizing data using a table (relation) structure.
      - Defined by Edgar F. Codd in 1969/1970 while at IBM.
  - Relational Databases Structure
    - Tables and Columns
      - A single table usually represents a particular type of data being stored.
        - Example: user for a social network, product sold in an online store
      - Tables of data have columns and rows.
      - The structure of what tables the database has, and what attributes are in which table is called the schema.
      - Columns represent attributes that each instance of data stored in the database will have.
        - All users have a user id, user name, other general details about themselves
        - All products have a product id, description, price, categorization
    - Columns and Rows
      - The set of allowed values for any particular attribute is called that attribute's domain.
      - Attributes of a relation can appear in any order.
      - Rows represent entires of data into the database. These rows are also called records or tuples. A row will have one value per attribute.
      - The set of allowed values for any particular attribute is called that attribute's domain.
    - Rows and Quantities
      - Tuples of a relation can appear in any order.
      - Each tuple in a particular relation must be unique. There can be no duplicate data entries.
      - The degree of a relation is the number of attributes it contains.
      - The cardinality of a relation is the number of tuples it contains.
    - Normalization and Uniqueness
      - The process of determining the appropriate structure of a database, i.e. the relations in a database should be and what attributes individual relations should have, is determined via a process called normalization.
      - Each relation (table) must have a unique name relative to its schema.
      - Each tuple has only one entry per attribute.
      - Each attribute has a distinct name.
    - Normalization Demo
      - Normalization is done to both reduce the amount of repetition, and therefore, size on the server, but also, data formatted in this manner can be more easily used for analytics.
    - Spreadsheets are Not Databases
      - Appear superficially similar as spreadsheets can use a database-esque structure.
      - Spreadsheets are frontend, Databases are backend.
      - Spreadsheets are more rigid than databases.
      - Spreadsheets are used for data recording, calculations and analytics, databases are storage.
      - Databases independently handle requests, spreadsheets are just files.
      - A spreadsheet is a file that is opened and closed, a database is persistent.
  - Keys
    - Key Definitions and Types
      - Keys are used to identify individual entries in a table, as well as establish relationships between entries in different tables.
      - Superkey
      - Candidate Key
      - Composite Key
      - Primary Key
      - Alternate Key
      - Foreign Key
    - Superkey
      - An attribute or set of attributes that uniquely identifies a tuple within a relation.
      - A relation may contain multiple superkeys by various combinations of attributes.
      - Any given superkey may contain attributes that are not strictly necessary for unique identification.
    - Candidate Key
      - A superkey such that no proper subset is a superkey within the relation.
      - The minimum viable combination for unique identification.
      - A relation may contain multiple candidate keys.
    - Composite Key
      - A candidate key such that it must contain multiple attributes.
      - The data in the relation is organized such that multiple attributes are required to ensure a key's uniqueness. (add country to demo)
    - Primary Key
      - The candidate key that is selected as the preferred means to identify tuples within a relation.
      - Each relation in the database is required to have a primary key defined.
      - Candidate keys are named that because they are candidates to become the primary key.
    - Alternate Key
      - Candidate keys not choses to be the primary key.
    - Foreign Key
      - An attribute or set of attributes within one relation that matches the candidate key for some relation.
      - When an attribute appears in more than one relation, that usually indicates a relationship between the tuples of the two relations.
      - What makes normalization work.
    - Key Exercise
      - Identify candidate keys
        - Hotel: hotelNo
        - Room: roomNo + hotelNo
        - Booking: hotelNo + guestNo + dateFrom
        - Guest: guestNo
      - Determine primary key
        - Hotel: hotelNo
        - Room: roomNo + hotelNo
        - Booking: hotelNo + guestNo + dateFrom
        - Guest: guestNo
      - Are any primary keys also composite keys?
        - The primary keys for Room and Booking are composite keys
      - Are there any alternate keys?
        - No.
      - Identify foreign keys
        - Room: hotelNo to Hotel
        - Booking: hotelNo to Hotel, roomNo + hotelNo to Room, guestNo to Guest
  - Relational Algebra
    - The eight operations that can be done to relations.
      - Select
      - Project
      - Union
      - Intersection
      - Difference
      - Product
      - Join
      - Division
    - Select
      - A unary operation (only works with one relation).
      - Accepts a condition, then applies the condition and returns the tuples that satisfy the condition.
      - The degree remains unchanged, cardinality may or may not change.
    - Project
      - A unary operation (only works with one relation).
      - Accepts a list of attributes and returns only the values for those attributes for all tuples.
      - The degree will change, cardinality may or may not.
    - Union
      - A binary operation (only works with two relations).
      - Combines tuples from both relations, removing any duplicates.
      - Requires the relations be union compatible: the degree of the two relations must be equal, the domains of the corresponding attributes are the same.
    - Intersection
      - A binary operation (only works with two relations).
      - Finds the tuples that exist in both relations.
      - Requires the relations to be union compatible.
    - Difference
      - A binary operation (only works with two relations).
      - Finds the tuples that exist in one relation but not the other.
      - Requires the relations to be union compatible.
    - Product
      - A binary operation (only works with two relations).
      - Takes every tuple in one relation and appends every tuple in the other relation.
    - Join
      - A binary operation (only works with two relations).
      - Will combine the tuples of the different relations in different ways depending on the type of join.
    - Division
      - A binary operation (only works with two relations).
  - SQL
    - Creating the schema
      ```SQL
      CREATE SCHEMA IF NOT EXISTS store;

      SHOW DATABASES;
      USE store;
      SHOW TABLES;

      CREATE SCHEMA IF NOT EXISTS deleteme;
      DROP DATABASE deleteme;
      ```
    - Creating the tables
      ```SQL
      CREATE TABLE IF NOT EXISTS customer (userId INTEGER, firstname TEXT, lastname TEXT, addressId INTEGER);
      CREATE TABLE IF NOT EXISTS address (addressId INTEGER, streetName TEXT, city TEXT, state TEXT, zip TEXT);
      ```
    - Populating the tables with data
      ```SQL
      INSERT INTO address (addressId, streetName, city, state, zip) VALUES (1, '981 Main St', 'Fayetteville', 'AR', '72701');
      INSERT INTO address (addressId, streetName, city, state, zip) VALUES (2, '654 Second St', 'Bentonville', 'AR', '72712');
      INSERT INTO address (addressId, streetName, city, state, zip) VALUES (3, '147 Hazel St', 'Springdale', 'AR', '72762');

      INSERT INTO customer (userId, firstname, lastname, addressId) VALUES (123, 'John', 'Doe', 1);
      INSERT INTO customer (userId, firstname, lastname, addressId) VALUES (456, 'Jane', 'Smith', 2);
      INSERT INTO customer (userId, firstname, lastname, addressId) VALUES (789, 'Sarah', 'Brown', 3);
      INSERT INTO customer (userId, firstname, lastname, addressId) VALUES (921, 'Vince', 'James', 1);
      ```
    - Basic selects
      ```SQL
      SELECT * FROM customer;
      SELECT firstname, lastname FROM customer;
      ```
    - Altering the schema
      ```SQL
      UPDATE customer SET firstname = 'Gary' WHERE userId = 921;
      ALTER TABLE customer ADD COLUMN gender TEXT;
      ```
    - Updating data
      ```SQL
      UPDATE customer SET gender = 'F' WHERE userId IN (294, 456, 789);
      DELETE FROM customer WHERE userId = 921;
      ```
    - Advanced selects
      ```SQL
      SELECT DISTINCT gender FROM customer;
      SELECT * FROM customer WHERE gender = F;
      SELECT * FROM customer WHERE firstname LIKE 'Jo_n';
      SELECT * FROM customer WHERE firstname LIKE 'g%';
      SELECT * FROM customer WHERE firstname BETWEEN 'A' AND 'J';
      SELECT * FROM customer WHERE firstname BETWEEN 'A' AND 'J' AND gender = 'F';
      SELECT * FROM customer WHERE firstname = 'John' OR lastname = 'Brown';
      SELECT * FROM customer ORDER BY lastname DESC;
      SELECT * FROM customer ORDER BY lastname ASC;
      SELECT * FROM customer ORDER BY lastname ASC LIMIT 3;
      SELECT COUNT(*) FROM customer;
      SELECT COUNT(*) FROM customer WHERE lastname = 'Smith';
      SELECT lastname, COUNT(*) FROM customer GROUP BY lastname;
      ```
    - More alterations
      ```SQL
      ALTER TABLE customer ADD COLUMN numOrders INTEGER;
      UPDATE customer SET numOrders = 4 WHERE userId = 123;
      UPDATE customer SET numOrders = 7 WHERE userId = 294;
      UPDATE customer SET numOrders = 1 WHERE userId = 307;
      UPDATE customer SET numOrders = 12 WHERE userId = 456;
      UPDATE customer SET numOrders = 9 WHERE userId = 789;
      ```
    - Data operations
      ```SQL
      SELECT SUM(numOrders) FROM customer;
      SELECT gender, SUM(numOrders) FROM customer GROUP BY gender;
      SELECT MAX(numOrders) FROM customer;
      SELECT MIN(numOrders) FROM customer;
      SELECT AVG(numOrders) FROM customer;
      SELECT ROUND(AVG(numOrders), 2) FROM Users;
      ```
  - SQL and Node
    ```js
    'use strict';

    var mysql = require('mysql');

    var databaseConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'demopassword',
      database: 'demo'
    });

    databaseConnection.query('SELECT * FROM Users', function (error, rows) {
      if (error) {
        console.log('ERROR:');
        console.log(error);
      } else {
        console.log('RESULTS:');
        console.log(rows);
        console.log(rows[2].firstname);
      }
    });

    databaseConnection.end(function(error) {
      console.log('TERMINATED DATABASE CONNECTION');
    });
    ```
