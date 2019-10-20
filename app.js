
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
var selection;


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
                console.log("6. Exit Program");
                console.log();

               var answer = readline.question("Enter a number to select an action: ");
               selection = answer;
               console.log(`You selected ${answer}`);
               
}               


var i = 0;
do {
        menu();
        switch(selection) {
            case loadDataset:
                    console.log(datasetReader.loadDataset);
                    break;
            case addRecord:
                    var cheeseId = readline.question("What is the cheeeseId? ");
                    var cheeseNameEn = readline.question("What is the Cheese Name in English? ");
                    datasetReader.addRecord(cheeseId, cheeseNameEn);
                  
            case findRecord: 
                    var cheeseId = readline.question("What is the cheeeseId? ");
                    datasetReader.findRecord(cheeseId);
                    break;
            case deleteRecord:
                   var cheeseId = readline.question("What is the cheeseId? ");
                   
                   datasetReader.deleteRecords(datasetReader.findRecord(cheeseId));
            case updateRecord:
                   
            case saveFile:
                    datasetReader.writeFile();
                    
            case exit:
                    i = 9;
                    return;
        //     default:
        //             console.log("You didn't make a selection");
        //             break;
                        
        }
} while(i != 9);
        
