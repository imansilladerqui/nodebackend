# Node Backend

**MOCKY FILES**

* Clients - http://www.mocky.io/v2/5808862710000087232b75ac

* Policies - http://www.mocky.io/v2/580891a4100000e8242b75c5


## List of endpoints

**GET**

All the GET endpoints must have an Authorization header with the value 'access-token: <JWT access token>'  

* /api/seed -> Call with axios to the mocky files and seed policies and clients datatable. No restriction.

* /api/clients?<param=param-value> -> Return the client's information with the id you want to search. Both user and admin client

* /api/policies/?<name=username> -> Return the list of policies linked to a client name.  Only admin client

* /api/policies/<id_of_policy> -> Return the user information linked to the given policy id. Only admin client

**POST**
* /api/authenticate -> Gives a JWT to have access to all the other endpoints. Requests: {"access-token": "xxx"} in the request header and returns the JWT access token needed for the rest of the api calls.

## Architecture
MVC - with components and routes folder for every endpoints. 
Middleware - and route file to distrubute the access to different components.
Centralize responses.
Centralize call to the DB.
Centralize axios request handler to seed the database.

## Database
MongoDB is the database I decided to use for this task. I needed a fast and easy to use database so I worked with mongodb (npm - library) to make it easier.  

All the data is stored in a free MongoDB server at https://www.mongodb.com/cloud.

## Tools used

In this assesment I used the following resources:
-Axios: to call to the Mocky Files
-Postman: to check the api response 
-express: this is the framework I decided to use  
-jsonwebtoken: an easy way to manage login and information about the client  
-mongodb: I decided to use MongoDB and mongoose is really nice to work with stored data  
-nodemon: monitoring tool for the nodejs project  
-lodash: to check the empty user in the authentication  
-dotenv: I stored passwords, port numbers, etc in a .env file and this package makes it easier to use   

## Env variables
I used a '.env' file to store some values, and that file is added to this project just because it is an assesment. This kind of files should always be added to the '.gitignore'  

## Installation

To install all the packages needed to run the app:
```
npm install
```

## Running the tests

With this command, the automated tests for this project will run
```
npm test
```

## Run the server

To run the server:
```
npm run dev
```