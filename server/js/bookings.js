import fs from 'fs';
import bookingsJson from '../data/bookings.json';





// export default function () { console.log("hello!") }

import DotJson from 'dot-json';
let bookingsData = new DotJson( './server/data/bookings.json');

const bookings = () =>{
    console.log("hello! XYZ1");
    console.log(`typeof(bookingsData)`, typeof(bookingsData));

    const dateObj = new Date('1995-12-17');
    const bookingObj = {};
    bookingObj.date = dateObj;
    bookingObj.reserved = true;


   
    console.log(`printing bookingObj`);
    for (const prop in bookingObj) {
        console.log(`obj.${prop} = ${bookingObj[prop]}`);
      }

    //     bookingObj.bookings.push({
    //     date: date,
    //     reserved: true
    // });
    // bookingsData.set(`date`, dateObj).save();


    

    console.log(`bookingObj`,bookingObj);
};

export default bookings();

// export default function ()  {
//     {
//     const dateObj = new Date('1995-12-17');

//     const bookingObj = {
//     };
    
    
//     bookingObj.date = dateObj;
//     bookingObj.reserved = true;
    
//     // bookingObj.bookings.push({
//     //     date: date,
//     //     reserved: true
//     // });
    
//     // Converts object to string
//     const json = JSON.stringify(bookingObj);
    
//     // import bookingsJson from '../data/bookings.json';
    
   
//     // const fs = require('fs');
//     // fs.writeFile(bookingsJson, json, 'utf-8', callback);
//     fs.writeFile('../data/bookings.json', json, 'utf-8', (error)=>{
//         if(error) throw error;
//     });
// };

// export default bookings;
