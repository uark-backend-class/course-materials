- JavaScript History
  - 1995
    - Netscape Navigator
      - Proprietary browser
    - Brendan Eich
      - Wrote the first version of JS in 10 days
      - Looks syntactically similar to Java
    - Shipped in Netscape 2.0 as LiveScript
  - 1996
    - Netscape submitted to Ecma International
      - ECMA
        - European Computer Manufacturers Association
        - ES6 Specification: http://www.ecma-international.org/ecma-262/6.0/
  - 1997
    - First edition of ECMAScript Standard Released
  - Subsequent Versions
    - ECMA–262 1st Edition June 1997
    - ECMA–262 2nd Edition June 1998
    - ECMA–262 3rd Edition December 1999
    - ECMA–262 5th Edition December 2009
    - ECMA–262 5.1 Edition June 2011
    - ECMA-262 6th Edition June 2015
    - ECMA-262 7th Edition June 2016
- Why are we learning Javascript?
  - It is the most popular and ubiquitous language in the world
  - Learning JS makes you more marketable as a developer today
  - It's fun, and provides immediate feedback
- Refresher: How to run JavaScript files using Node.js
  - node <filename>.js
- JavaScript Basics
  - Syntax
    - Case Sensitive
      - Standard practice to use camelCase for variable, snake-case for files
        - Some exceptions (constructors)
          - Will cover later
      - Use kebab-case when naming files
    - Semicolon
      - Automatic Semicolon Insertion (ASI)
        - Be explicit
        - http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/
          ```
          a = b + c
          (d + e).foo()    // a = b + c(d + e).foo()

          a = b + c;
          (d + e).foo();
          ```
    - Commenting code
    - Operators
      - Unary
        ```
        var x = 3;
        var y = -5;
        console.log(-x);
        console.log(-y);
        ```
