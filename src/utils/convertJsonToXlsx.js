var xlsx = require('xlsx');

export const convertJsonToXlsxAndDownload = (fileName, data) => {
    var workBook = xlsx.utils.book_new();
    var workSheet = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(workBook, workSheet)
    xlsx.writeFile(workBook, `${fileName}.xlsx`);
}