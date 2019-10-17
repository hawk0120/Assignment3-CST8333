/**
 * @author Brady Hawkins
 * @description File handles the lower level fileIO
 * 
 */
const Record = require("./Record");
const csvReader = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const path = require("path");


const dataset = [15, "provolone"];
const file = './resources/cheese.csv';
const writer = createCsvWriter({
    path: file,
    header: new Record
});


module.exports = {

loadFileToArray: function loadFileToArray() {
    try{
        fs.createReadStream(file)
        .pipe(csvReader())
        .on('data', (data) =>  dataset.push(data));
    } catch (error) {
        console.log("File Loading Error");
    }
},

writeToFile: function writeToFile() {

try {
    writer
        .writeRecords(dataset)
        .then( () => console.log("CSV written to file"));
    } catch (error) {
        console.log("Write failed")
    }

},

/**
 * @description Function takes a argument, parses it,
 * searchs array for arg, and returns that row
 * @param array
 * @param arg
 */
searchRecords: function searchRecords(arg) {

        for(i=0; i< dataset.length; i++) {
            if(dataset[i].cheeseID === arg) {
                return dataset[i];       
            }
        }
},

deleteRecords: function deleteRecords() { 
            }
}
