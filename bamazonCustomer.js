var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5361869LoL",
    database: "bamazon_db",
    port: 3306
    // multipleStatements: true
});
connection.connect();

var display = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("*********************************");
        console.log("*      Welcome to Bamazon!      *");
        console.log("*********************************");
        console.log("");
        console.log("Find Our Products Below");
        console.log("");
        var table = new Table({
            head: ['Product ID', 'Product Desciption', 'Department Name', 'Cost'],
            colWidths: [12, 30, 20, 12],
            colAligns: ["center", "left", "right"],
            style: {
                head: ["green"],
                compact: true
            }
        });
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price]);
        }
        console.log(table.toString());
        console.log("");
        shopping();
    });
};

var shopping = function() {
    inquirer
      .prompt({
        name: "productToBuy",
        type: "input",
        message: "Please enter the Product ID of the item you wish to purchase:"
      })
      .then(function(answer1) {
        var selection = answer1.productToBuy;
        connection.query("SELECT * FROM products WHERE item_id=?", selection, function(
          err,
          res
        ) {
          if (err) throw err;
          if (res.length === 0) {
            console.log(
              "That Product doesn't exist; Please enter a Product ID from the list above"
            );
  
            shopping();
          } else {
            inquirer
              .prompt({
                name: "quantity",
                type: "input",
                message: "How many items would you like to purchase?"
              })
              .then(function(answer2) {
                var quantity = answer2.quantity;
                if (quantity > res[0].stock_quantity) {
                  console.log(
                    "Our Apologies we only have " +
                      res[0].stock_quantity +
                      " items of the product selected"
                  );
                  shopping();
                } else {
                  console.log("");
                  console.log(res[0].product_name + " purchased");
                  console.log(quantity + " qty @ $" + res[0].price);
  
                  var newQuantity = res[0].stock_quantity - quantity;
                  connection.query(
                    "UPDATE products SET stock_quantity = " +
                      newQuantity +
                      "WHERE item_id = " +
                      res[0].item_id,
                    function(err, resUpdate) {
                      if (err) throw err;
                      console.log("");
                      console.log("Your Order has been Processed");
                      console.log("Thank you for Shopping with us...!");
                      console.log("");
                      connection.end();
                    }
                  );
                }
              });
          }
        });
      });
};
  
display();