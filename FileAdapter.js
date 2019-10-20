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


const dataset = [ "provolone", 15];
const record = new Record(dataset);

const file = './resources/cheese.csv';
const writer = createCsvWriter({
    path: file,
    header: [ record ]
    
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


/**
 * @description Function writes an Array of the objects to a csv file
 */
writeToFile: function writeToFile() {
try {
  
    writer  
      async () => writeRecords(dataset)

    } catch (error) {
        throw new error();
    }

},

/**
 * @description Function takes a argument, parses it,
 * searchs array for arg, and returns that row
 * @param field
 * @param id
 */
searchRecords: function searchRecords(field, id) {

        for(i=0; i< dataset.length; i++) {
            if(dataset[i].field === id) {
                return dataset[i];       
            }
        }
},

deleteRecords: function deleteRecords(record) { 
        dataset.splice(record);
 },

addRecord: function addRecord(record) {
    dataset.push(record)
}

}