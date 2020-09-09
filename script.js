var xlsx = require("xlsx");

var wb = xlsx.readFile("07oct_13oct.xlsx",{cellDates:true});

var ws = wb.Sheets["DB errores"];

var data = xlsx.utils.sheet_to_json(ws);

var newData = data.map((row)=>{
    var net = row['Id_error']-row['Cantidad de Errores'];
    row.Resultado = net;
    return row;
});

console.log(newData);

var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(newData);
xlsx.utils.book_append_sheet(newWB, newWS, "new data");

xlsx.writeFile(newWB, "nuevo archivo.xlsx");

// console.log(wb.SheetNames);
// console.log(ws);
console.log(data);