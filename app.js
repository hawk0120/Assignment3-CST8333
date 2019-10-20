
/**
 * @author Brady Hawkins
 * @description File represents the entry point for application
 *  - Provides simple CLI for CSV adapter project
 *  - CST8333 Research project Assignment 3
 */

const datasetReader = require("./src/DatasetReader");
const readline = require('readline-sync');


const loadDataset = 0
const addRecord = 1;
const findRecord = 2;
const deleteRecord = 3;
const updateRecord = 4; 
const saveFile = 5;
const exit = 6
var selection = 9;
var i = 0;



function menu() {

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

               var answer = readline.question("Enter a number to select an action: ");
               this.selection = answer;
               console.log(`You selected ${answer}`);
                
}               


// function getRecordvalues() {
//     console.log("What is the Che
// }






{
        menu();
        switch(i) {
            case loadDataset:
                    datasetReader.loadDataset;
                    break;
            case addRecord:
                //     this.getRecord();
                    
                    
            case findRecord:
                    
            case deleteRecord:
                   
            case updateRecord:
                   
            case saveFile:
                    datasetReader.writeFile();
                    
            case exit:
                    i = 9;
                    break;
            default:
                    i = 9;
                    break;
                        
        } while(i != 9);
}
