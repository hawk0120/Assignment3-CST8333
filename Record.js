/** 
 * @Author Brady Hawkins   
 * @description This file represents a single row in a CSV file 
 *
 */

module.exports = class Record { 
   
    constructor (cheeseId, cheeseNameEn) {
       this.cheeseId = cheeseId;
       this.cheeseNameEn = cheeseNameEn;
    }
 }


