import { html, render } from 'lit-html';
import '../sass/styles.sass';

import './calendar-element';

const renderCalendar = html`
    <my-element></my-element>
`;

render(renderCalendar, document.body);

import bookings from '../js/bookings';
// bookings;

const handleDateClickEvent = () => {
    const dates = document.querySelectorAll('.date button');
    dates.forEach(date =>
        date.addEventListener('click', event => {
            const targetDate = event.target.innerText;
            const displayedMonth = document.querySelector(`.month`).innerText;
            const displayedYear = document.querySelector(`.year`).innerText;
            const targetDateInMyFormat = new Date(
                Date.parse(`${displayedMonth} ${targetDate} ${displayedYear}`),
            );
            console.log(`targetDateInMyFormat`, targetDateInMyFormat);

            const objectToSend = { date: targetDateInMyFormat, reserved: true };
            sendRequest(objectToSend);
        }),
    );
};

const handleNextButtonClickEvent = () => {
    const nextButton = document.querySelector(`button.next`);
    nextButton.addEventListener(`click`, () => {
        sendRequest();
    });
};

window.onload = () => {
    handleDateClickEvent();
    // handleNextButtonClickEvent();
};

// handleDateClickEvent;
// window.onload = handleNextButtonClickEvent;

const test = () =>
    html`
        <button class="test">test button</button>
    `;
// const test = html `test this`;
const myTemplate = () =>
    html`
        <p>Hello there</p>
    `;
// render(test(), document.body);

const testButton = document.querySelector(`button.test`);

// This will send request to dev-server and we can see the data there; app.post() in dev-server.js
const sendRequest = (requestedData) => {
    // postData(`http://localhost:8080/`, { answer: 42 })
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
// testButton.addEventListener(`click`, sendRequest);

// function sendRequest(event) {
//     console.log(`sends`);
// }

// import bookingsJson from '../data/bookings.json';
// for (let booking of bookingsJson) {
//     console.log(booking);
// }
