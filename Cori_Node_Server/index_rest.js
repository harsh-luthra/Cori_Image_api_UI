const express = require('express');
var cors = require('cors')
const { execFile } = require('child_process');
const mysql = require("mysql2");
// const conn = require('./Connection_mysql.js');

const app = express ();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

// var server = app.listen(PORT, function () {
   // var host = server.address().address
   // var port = server.address().port
   // console.log("Example app listening at http://%s:%s", host, port)
// })


// const connection = mysql.createConnection({
        // host     : 'sql.freedb.tech',
		// port	 :  3306,
        // user     : 'freedb_Harsh2580',
        // password : 'KXeSmFc*$7@9JQ5',
        // database : 'freedb_cori2580',
// })

app.get('/status', (request, response) => {
   const status = {
      'Status': 'Running'
   };
   // RunApp();
   console.log(request.body);
   const obj = (request.body);
   console.log(obj['Hi']);
   response.send(status);
});

app.post('/status', (request, response) => {
   const status = {
      'Status': 'Running'
   };
   RunApp();
   console.log(request.body);
   const obj = (request.body);
   console.log(obj['Hi']);
   response.send(status);
});

app.put('/start', (request, response) => {
   const status = {
      'Status': 'Starting'
   };
   RunApp();
   console.log(request.body);
   const obj = (request.body);
   console.log(obj['done']);
   response.send(status);
});

// app.get('/data', (request, response) => {
   // const status = {
      // 'Status': 'Running'
   // };
  
	// // Connecting to database
	// connection.getConnection(function (err, conn) {
		// if (err) {
			// console.log("Error in the connection")
			// console.log(err)
		// }
		// else {
			// console.log(`Database Connected`)
			// connection.query(`SHOW DATABASES`,
				// function (err, result) {
					// if (err)
						// console.log(`Error executing the query - ${err}`)
					// else
						// console.log("Result: ", result)
				// })
			// connection.releaseConnection(conn);
		// }
	// })
	
  
   // response.send(status);
// });


function RunApp(){
	
const child = execFile('C:/Program Files/Adobe/Adobe Photoshop 2021/Photoshop.exe', [], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

}
