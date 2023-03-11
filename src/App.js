import { convertJsonToXlsxAndDownload } from './utils/convertJsonToXlsx';

const data = require('./data.json');

function App() {
  const handleDownload = () => {
    convertJsonToXlsxAndDownload("convertedJsontoExcel", data);
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
