/**
 * @author Brady Hawkins
 * @description File handles the business logic 
 */


const fileUtil = require("./FileAdapter");
const Record = require("./Record");


module.exports = {


    loadDataset: function loadDataset() {
        fileUtil.loadFileToArray();
        return "Success";
    },

    writeFile: function writeFile() {
        fileUtil.writeToFile();
        
    },

    findRecord: function findRecord (id) {
        fileUtil.searchRecords(id);
    },

    createNewRecord: function createNewRecord(field, id) {
        const record = new Record(field, id);
        fileUtil.addRecord(record);
    },

    displayAllRecords: function displayAllRecords() {
            fileUtil.displayRecords();
    },

    deleteRecords: function deleteRecords(record) {
        record.searchRecords(record.cheeseId);
        fileUtil.deleteRecords();
    }


}
