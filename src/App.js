import './App.css';

var xlsx = require('xlsx');
const data = require('./data.json');

function App() {
  const handleDownload = () => {
    const fileName = "convertedJsontoExcel";

    var workBook = xlsx.utils.book_new();
    var workSheet = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(workBook,workSheet)
    xlsx.writeFile(workBook, `${fileName}.xlsx`)
  }
  
  return (
    <div className="App">
      <h1>JSON to Excel File</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
            {data.map(info => 
              <tr key={info.ID}>
                <td>{info.ID}</td>
                <td>{info.NAME}</td>
                <td>{info.AGE}</td>
              </tr>
            )}
        </tbody>
      </table>
      <button type='submit' onClick={handleDownload}>Download Excel File</button>
    </div>
  );
}

export default App;
