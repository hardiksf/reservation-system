import { html, render } from 'lit-html';
import '../sass/styles.sass';
import './calendar-element';
import bookingsJson from '../data/bookings.json';

const renderCalendar = html`
    <my-element></my-element>
`;

// Renders my-element web component
render(renderCalendar, document.body);

let displayedMonth;
let displayedYear;
const elementsWithBackgroundColorOnLoad = [];

// Sends clicked date to server
const handleDateClickEvent = () => {
    const dates = document.querySelectorAll('.date button');
    dates.forEach(date =>
        date.addEventListener('click', event => {
            const targetDate = event.target.innerText;
            displayedMonth = document.querySelector(`.month`).innerText;
            const targetDateInMyFormat = new Date(
                Date.parse(`${displayedMonth} ${targetDate} ${displayedYear}`),
            );
            const objectToSend = {
                date: targetDateInMyFormat,
                reserved: true,
            };
            sendRequest(objectToSend);
        }),
    );
};

// Gets all dates from bookingsJson and highlights it with yellow back ground color
window.addEventListener('load', event => {
    displayedMonth = document.querySelector(`.month`).innerText;
    displayedYear = document.querySelector(`.year`).innerText;
    for (const element in bookingsJson) {
        const date = new Date(bookingsJson[element].date);
        const dateInString = date.getDate().toString();
        const dateElement = document.querySelector(
            `.reserved${dateInString} button`,
        );
        elementsWithBackgroundColorOnLoad.push(dateElement);
        dateElement.style.backgroundColor = 'yellow';
        // }
    }
    handleDateClickEvent();
});

// This will send request to dev-server and we can see the data there; app.post() in dev-server.js
const sendRequest = requestedData => {
    postData(`http://localhost:8080/`, requestedData)
        .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
        .then(data => console.log(`data`, data))
        .catch(error => console.error(error));

    function postData(url = ``, data = {}) {
        // Default options are marked with *
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header,
        }).then(
            response => console.log(`response`, response), //type of response is object
            // response.json()
        ); // parses JSON response into native Javascript objects
    }
    console.log(`sends POST request from here`);
};
