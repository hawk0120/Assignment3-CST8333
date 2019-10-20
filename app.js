
/**
 * @author Brady Hawkins
 * @description File represents the entry point for application
 *  - Provides simple CLI for CSV adapter project
 *  - CST8333 Research project Assignment 3
 */

const datasetReader = require("./src/DatasetReader");
const prompt = require("prompt");


const loadDataset = 0
const addRecord = 1;
const findRecord = 2;
const deleteRecord = 3;
const updateRecord = 4; 
const saveFile = 5;
const exit = 6
const selection = 0;




function menu() {
prompt.start();
console.log("*********************************************************");
console.log("*                                                       *");
console.log("*           Welcome to the CSV Adapter Project          *");
console.log("*           Written and Designed by Brady Hawkins       *");
console.log("*            What would you like to do first?           *");
console.log("*                                                       *");
console.log("*********************************************************");
console.log();
console.log();
console.log("0. Load dataset from csv");
console.log("1. Add a record: ");
console.log("2. Find a record: ");
console.log("3. Delete a record: ");
console.log("4. Update a record: ");
console.log("5. Save to file: ");
console.log();
prompt.get(selection, (err, result) => { 
    console.log("Enter a number to select action: " + prompt.selection);
});
}


// function getRecordvalues() {
//     console.log("What is the Che
// }





const i = 0;
while(i != 9){
        menu() 
        switch(selection) {
            case loadDataset:
                    // datasetReader.loadDataset();
                    break;
            case addRecord:
                    
                    break;
            case findRecord:
                    break;
            case deleteRecord:
                    break;
            case updateRecord:
                    break;
            case saveFile:
                    datasetReader.writeFile();
                    break;
            case exit:
                    i=9;
                    break;
        }
}