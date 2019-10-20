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


const dataset = [];
const record = new Record();

const file = './resources/cheese.csv';
const writer = createCsvWriter({
    path: file,
    header: [ record ]
});


module.exports = {

        /**
         * @description Function loads array from file
         */
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
         * @description Function writes an Array of objects to a csv file
         */
        writeToFile: function writeToFile() {
        try {
        
            writer  
            async () => writeRecords(dataset)
                
            } catch (error) {
            console.log("Write Unsuccessful");
            }

        },

        /**
         * @description Function takes a argument, parses it,
         * searchs array for arg, and returns that row
         * @param field
         * @param id
         */
        searchRecords: function searchRecords( id) {
                for(i=0; i< dataset.length; i++) {
                    if(dataset[i].cheeseId === id) {
                        return dataset[i];       
                    }
                }
        },

        /**
         * @description Function gets array and returns it
         * @returns dataset
         */
        displayRecords: function displayRecords() {
                return dataset;
        },

        /**
         * @description Function removes record from 
         * @param record 
         */
        deleteRecords: function deleteRecords(record) { 
                const deletedRecord = searchRecords(record.cheeseId);
                dataset.splice(deletedRecord);
        },

        /**
         * @description Function adds record to the end of the dataset array
         * @param record 
         */
        addRecord: function addRecord(record) {
                dataset.push(record);
        }

}
