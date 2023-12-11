# Assignment3-CST8333 - Cheese Records Management

This project provides functionality for managing cheese records, including loading, writing, searching, displaying, deleting, and adding records. The system is designed to handle a dataset of cheese records stored in a CSV file.

## Record Class

The `Record` class represents a single row in a CSV file. It contains two properties:

- `cheeseId`: The unique identifier for the cheese record.
- `cheeseNameEn`: The English name of the cheese.

## File Adapter

The `FileAdapter` module handles lower-level file I/O operations. It uses the `csv-reader` and `csv-writer` libraries to read from and write to a CSV file.

### Functions

1. **`loadFileToArray`**
   - Description: Loads the dataset array from the CSV file.
   - Usage: `loadFileToArray()`

2. **`writeToFile`**
   - Description: Writes an array of objects to the CSV file.
   - Usage: `writeToFile()`

3. **`searchRecords`**
   - Description: Searches the dataset array for a specific record based on the `cheeseId`.
   - Usage: `searchRecords(id)`

4. **`displayRecords`**
   - Description: Returns the entire dataset array.
   - Usage: `displayRecords()`

5. **`deleteRecords`**
   - Description: Deletes a record from the dataset array based on the `cheeseId`.
   - Usage: `deleteRecords(record)`

6. **`addRecord`**
   - Description: Adds a new record to the end of the dataset array.
   - Usage: `addRecord(record)`

## Business Logic

The `CheeseManager` module handles the business logic of the application, utilizing the functionalities provided by the `FileAdapter` and `Record` modules.

### Functions

1. **`loadDataset`**
   - Description: Loads the dataset from the CSV file.
   - Usage: `loadDataset()`

2. **`writeFile`**
   - Description: Writes the dataset to the CSV file.
   - Usage: `writeFile()`

3. **`findRecord`**
   - Description: Finds a record in the dataset based on the `cheeseId`.
   - Usage: `findRecord(id)`

4. **`createNewRecord`**
   - Description: Creates a new record and adds it to the dataset.
   - Usage: `createNewRecord(field, id)`

5. **`displayAllRecords`**
   - Description: Displays all records in the dataset.
   - Usage: `displayAllRecords()`

6. **`deleteRecords`**
   - Description: Deletes a record from the dataset based on the `cheeseId`.
   - Usage: `deleteRecords(record)`

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `node your-app.js`

Feel free to explore and customize the functionalities according to your requirements. Enjoy managing your cheese records! 🧀📁
