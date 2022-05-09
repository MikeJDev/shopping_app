# Shopping App API
## What is it?
This is a shopping app API. It is a RESTful API that allows you to create, read, update, and delete shopping lists. This api connects to the frontend application using a React frontend. 

## Dependencies
* [Express](https://expressjs.org/)
* [Nodemon](https://nodemon.io/)
* [cors](https://www.npmjs.com/package/cors)

## Before you start
A mysql database is required. This database is used to store the shopping lists.
A database and necessary tables are created when the app is started. You will need to have MySql installed on your machine. 

To Install MySql on windows:
* [MySql](https://dev.mysql.com/downloads/mysql/)

To install MySql on mac:
 - You will need [Homebrew](https://brew.sh/) installed on mac to install mysql.
  - Run the following command:
    * `brew install mysql`

Once Mysql is installed, set up your password and username then run the following commands below.

## Available Scripts

Steps to run the application:
## step 1: Open a terminal
### `mysql.server start`

## step 2: Open a new terminal
### `npm ci`
Installs dependencies. Only run this if first time installing the application.
## step 3:
### `npm run start`

Runs the app in the development mode and also creates the database called shoppingDb.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Or
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
App is ready to be deployed!
