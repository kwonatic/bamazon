var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (error) {
    if (error) throw error;
    console.log("connect to DB")
    fetchItems()
});

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });
function fetchItems() {
    connection.query('SELECT * from products', function (error, results) {
        if (error) throw error;
        console.table(results)
        askForId()
    })
}
function askForId() {
    inquirer
        .prompt([

            /* Pass your questions in here */
            {
                type: 'input',
                name: "ID",
                message: "What is ID?"
            }
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers)
            connection.query('SELECT * from products where item_id =' + answers.ID, function(error, results) {
                if (error) throw error;
                console.table(results)
            })

        });
}


