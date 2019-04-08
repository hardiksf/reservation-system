# Reservation System

## Steps to run the app
* Download or clone repo
* `npm install`
* `npm run dev-serve` to run dev server
* Go to `http://localhost:8080/` from your wen browser. This will run dev server 
* `npm run dev-client` to run client server
* Go to `http://localhost:3000/` from your web browser. This will run client server.

## App functionality
* Calander for the current month should open
* Reserved rooms should be highlighted in yellow
* To reserver a room, click on un-reserved date (not highlighted in yellow) and it will reserver the room and highlight the date in yellow
* To cancel the reservation, click on reserved room (highlighted in yellow) and it will cancel the room reservation

## Project description
* Stores data in a json file on serverside
* Reads data from local file on loading the app
* Sends data to server and updates app when clicking on a date
* Uses `express` for running server
* Uses `LitElement` to create calender `web-component`
* Built in `webpack`
* `babel` to transpile code for `node.js`
* `SASS` for design
* Posts data to server via `fetch`

## Demo