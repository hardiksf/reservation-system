# Reservation System

## Steps to run the app

* Download or clone repo
* `npm install` to install all dependencies
* `npm run dev-serve` to run dev server
* Go to `http://localhost:8080/` from your wen browser. This will run dev server 
* `npm run dev-client` to run client server
* Go to `http://localhost:3000/` from your web browser. This will run client server. App should open

## App functionality

* Calender for the current month should display
* Reserved rooms should be highlighted in yellow
* To reserver a room, click on un-reserved date (not highlighted in yellow) and it will reserver the room and highlight the date in yellow
* To cancel the reservation, click on reserved room (highlighted in yellow) and it will cancel the room reservation

## Project description

* Stores data in a json file on server side
* Reads data from local file on loading the app
* Sends data to server and updates app when clicking on a date
* Uses `express` for running server
* Uses `LitElement` to create calender `web-component`
* Built in `webpack`
* `babel` to transpile code for `node.js`
* `SASS` for design
* Posts data to server via `fetch`

## Demo
![Reservation System](https://github.com/hardiksf/reservation-system/blob/master/reservation-system.gif)