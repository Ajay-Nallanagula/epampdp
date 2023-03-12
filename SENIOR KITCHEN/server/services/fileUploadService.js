const xlsx = require('xlsx')

const convertExcelFileToJson = (path) => {
    // Read the file using pathname
    const file = xlsx.readFile(path);
    // Grab the sheet info from the file
    const sheetNames = file.SheetNames;
    const totalSheets = sheetNames.length;
    // Variable to store our data 
    let parsedData = [];
    // Loop through sheets
    for (let i = 0; i < totalSheets; i++) {
        // Convert to json using xlsx
        const tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]], { raw: false });
        // Skip header row which is the colum names
        tempData.shift();
        // Add the sheet's json to our data array
        parsedData.push([...tempData]);
    }
    // call a function to save the data in a json file
    //generateJSONFile(parsedData);
    return parsedData
}

const convertExcelFileToJsonObject = (path) => {
    const file = xlsx.readFile(path);
    const sheetNames = file?.SheetNames || [];
    const excelSheets = file?.Sheets || {}
    let parsedDataObj = sheetNames.reduce((acc, sheetKey) => {
        acc[sheetKey] = xlsx.utils.sheet_to_json(excelSheets[sheetKey], { raw: false });
        return acc
    }, {})
    console.log({parsedDataObj})
    return parsedDataObj
}

module.exports = {
    convertExcelFileToJson,
    convertExcelFileToJsonObject
}