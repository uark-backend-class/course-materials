# Cloud Infrastructure & Deployment

- What is "Dev Ops"?
  - Software Development + Information Technology Operations
  - Automation of software delivery and infrastructure
    - Typically also manages infrastructure for applications as well
  - Continuous Integration
    - Merging code into the "master" several times a day
      - Encourages small workloads and frequent commits
    - Automated merge process that checks for errors
    - Requires diligence and good testing (i.e. unit testing / integration testing) to be successful
  - Continuous Deployment / Delivery
    - Automation of delivery to enable multiple deliveries of software in short cycles
- What is "the cloud"?
  - The cloud is a network of computers, where each computer serves a very specific function
  - This is typically hosted by another company, who manages the physical infrastructure
  - Cost effective for large organizations
  - Easily scalable
- Cloud platforms
  - Microsoft Azure
    - Has free tier
  - Google Cloud
    - Has free tier
  - Amazon Web Services
    - Has free tier
  - Linode
  - Digital Ocean
  - Heroku
    - Has free tier
- Deploying our first app to the cloud
  - Cloud Database
    - [mLab](https://mlab.com/)
      - MongoDB Cloud Hosting
        - Sign up for an account
        - Create new
          - Google Cloud Platform
          - Single-node
          - Sandbox
          - DB Name: library
        - Add collection - books
        - Add collection - authors
        - Users
          - Create new user
        - Export Collection Data from localhost
          ```
          mongoexport --db library --collection authors --out authors.json
          mongoexport --db library --collection books --out books.json
          ```
        - Import Collection Data to mLab
          ```
          mongoimport -h [mLab URI] -d library -c authors -u [mLab username] -p [mLab password] --file authors.json
          mongoimport -h [mLab URI] -d library -c books -u [mLab username] -p [mLab password] --file books.json
          ```
        - Connect to mLab Database from Mongo Shell
          ```
          mongo [mLab URI]/[database name] -u [mLab username] -p [mLab password]
          ```
        - Change app to run using the mLab database
          ```
          function connect() {
            const uri = 'mongodb://[mLab username]:[mLab password]@[mLab URI]/[database name]';
            mongoose.connect(uri);
          }
          ```
        - Run locally to test mLab connection
  - Google Cloud
    - [NodeJS Runtime](https://cloud.google.com/appengine/docs/flexible/nodejs/runtime)
    - Setup
      - Sign up for account
      - Menu
        - Downloads
          - Install [Google Cloud SDK](https://cloud.google.com/sdk/docs/)
            - Software Development Kit
            - Update bash profile
      - Add `app.yaml` to project directory

```
#	Copyright 2015-2017, Google, Inc.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# [START runtime]
runtime: nodejs
env: flex
# [END runtime]

# Temporary setting to keep gcloud from uploading node_modules
skip_files:
 - ^node_modules$
 ```

- Add `npm start`
- Environment Variables
  - `PORT`
  - gcloud default is 8080
- Create new project on Google Cloud
- gcloud app deploy --project [projectId]
