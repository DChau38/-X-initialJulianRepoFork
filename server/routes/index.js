//functions:  addStudentsToDBFromCsvFile, addStudentsToDBFromExcelFile, parseCsv
const xlsx = require('xlsx');
const fs=require('fs');
//variables: used for storing file into local storage
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
  });
const upload = multer({storage:storage});

//function: for parsing Csv files
const csv=require('csv-parser');
const parseCsv=async(filePath)=>{
    try {
        const data=[];
        await new Promise((resolve,reject)=>{
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data',(row)=>data.push(row))
                .on('end',()=>resolve(data))
                .on('error',()=>reject(error))
        });
        return data;
    }
    catch (e){
        throw new Error('Error parsing Csv:', e);
    }
}
//function: for adding students to db from excel file
const addStudentsToDBFromExcelFile=async(filePath)=>{
    const workbook = xlsx.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0]; 
    const worksheet = workbook.Sheets[firstSheetName];
    const excelData = xlsx.utils.sheet_to_json(worksheet);
    for (const row of excelData) {
        console.log(row);
    }
}
//funciton: for adding students to db from csv file
const addStudentsToDBFromCsvFile=async(filePath)=>{
    try {
        const CsvData=await parseCsv(filePath);
        console.log(CsvData);

    }
    catch (e){
        throw new Error('Error processing CSV file:', e);
    }

}

//variables: used to find what type of file it is
const EXCEL_FILE_TYPES = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx (Excel 2007+)
    'application/vnd.ms-excel', // .xls (Excel 97-2003)
  ];
//endpoint: for handling file uploads

router.post('/upload', upload.any(), async (req, res) => {
    try {
        console.log("file:",req.files);
        const file=req.files[0];
        
        //console.log("FILE FOUND NO PROBLEM");
        //A. if (excel sheet)
        if (EXCEL_FILE_TYPES.includes(file.mimetype)){
            addStudentsToDBFromExcelFile(file.path);} 
        //B. if (csv)
        else if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
            console.log("ITS CSV");
            addStudentsToDBFromCsvFile(file.path);} 
        //C. if other type of file
        else {
            throw new Error('Unsupported file type.');
        }
        res.status(200).json({ message: 'File uploaded successfully.' });
    } 
    catch (error) {
        console.error('Error adding students to DB:', error);
        res.status(500).json({ error: error.message || 'Failed to upload students from file into DB.' });    }
});

  module.exports = router;