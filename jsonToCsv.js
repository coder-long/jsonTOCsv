// import fs from 'fs';
// import path from 'path';
// import csvjson from 'csvjson'

const fs = require('fs');
const path = require('path');
const csvjson = require('csvjson')

// var data = fs.readFileSync(path.join(__dirname, 'jsoncsv.json'), { encoding: 'utf8' });
let data = [];

for (let i = 0; i < 99; ++i) {
    data.push({
        num: i + 1,
        aaa: 'kjsahd',
        bbb: 'kjsahdjk',
        ccc: 'slfjkasjfk',
        dddddddddddddddd: 'djshjfdhdsuduioau'
    })
}

var options = {
    delimiter: ",",
    wrap: false,
    objectDenote: '',
    arrayDenote: '',

}

/* supported options
 
    delimiter = <String> optional default value is ","
    wrap  = <String|Boolean> optional default value is false
    headers = <String> optional supported values are "full", "none", "relative", "key"
    objectDenote = <String> optional default value is "."
    arrayDenote = <String> optional default value is "[]"
*/


let csv = csvjson.toCSV(data, options);

fs.writeFile(path.join(__dirname, 'jsoncsv.csv'), csv, { encoding: 'utf-8' }, err => {
    if (err) throw err;
    console.log('success')
})

console.log(csv);

/*
returns

book.person[].firstName,book.person[].lastName,book.person[].age,book.person[].address.streetAddress,book.person[].address.city,book.person[].address.state,book.person[].address.postalCode,book.person[].hobbies[]
Jane,Doe,25,21 2nd Street,Las Vegas,NV,10021-3100,gaming;volleyball
Agatha,Doe,25,21 2nd Street,Las Vegas,NV,10021-3100,dancing;politics

*/


/*

[
    {
        "duration": 2100,
        "appid": "weixin",
        "page": "first page",
        "app_ver_name": "4.2.1"
    },
    {
        "duration": 3402,
        "appid": "qq",
        "page": "first page",
        "app_ver_name": "10.5.2"
    },
    {
        "duration": 1002,
        "appid": "qq",
        "page": "first page",
        "app_ver_name": "11.0.5",
        "access_num": 34
    }
]

*/