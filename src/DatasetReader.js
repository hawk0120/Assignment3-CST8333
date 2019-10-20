/**
 * @author Brady Hawkins
 * @description File handles the business logic 
 */


const fileUtil = require("./FileAdapter");
const Record = require("./Record");


module.exports = {


    loadDataset: function loadDataset() {
        fileUtil.loadFileToArray();
    },

    writeFile: function writeFile() {
        fileUtil.writeToFile();
    },

    findRecord: function findRecords(field, id) {
        fileUtil.searchRecords(field, id);
    },

    createNewRecord: function createNewRecord() {
        const record = new Record();
        fileUtil.addRecord(record);
    },

    displayAllRecords: function displayAllRecords() {
       
    },

    deleteRecords: function deleteRecords() {
        record.searchRecords(record);
        fileUtil.deleteRecords();
    }


}
