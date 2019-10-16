/**
 * This Class will handle the lower level fileIO
 * 
 */
const Record = require("./Record");
const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");


module.exports = class FileUtil {

const dataset = [];
const file = '../resources/canadianCheeseDirectory.csv';
    
function loadFileToArray() {
    try{
        fs.createReadStream(file)
        .pipe(csv())
        .on('data', (data) => dataset.push(data))
    } catch (error) {
        console.log("File Loading Error");
    }
}

function writeToFile() {


}

/**
 * @description Function takes a argument, parses it,
 * searchs array for arg, and returns that row
 * @param array
 * @param arg
 */
function searchRecords(arg) {

    // if(Number.isNaN(arg)) {
    //     console.log(arg)
    //     console.log("This isn't a number")
    // } else {
    //     console.log("This is a number: "  + arg);
    // }
}

function deleteRecords() {}
    
}