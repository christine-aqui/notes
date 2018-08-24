// refer to Sequelize
const Sequelize = require('sequelize');

// calling my Sequelize constructor function
// the Sequelize() needs the 'name of the db, username, password for mySQL
const connection = new Sequelize('demo-schema', 'root', 'kghost', {
  host: 'localhost',
  dialect: 'mysql'
});

// define the model
// this fucntion takes two params.
// takes the name of the model and the object that represents the properties  of the model.
// those properties here are title and body
// the value of the properties are the data types.
// the TEXT data type allows you to use a long sting length (unlimited) vs STRING (255) length
const Article = connection.define('articile', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
});

// sync database
//  it will connect
//  it will gen SQL tble data
//  db must be seed
//  this is using promise ".then"
// connection.sync().then(function(){
//   // Article.create() will call the table defined
//   // and create a row of table data
//   Article.create({
//     title: 'demo title',
//     body: 'some body test here'
//   })
// });

// to get a record
connection.sync().then(function () {
  // this method works if you know the id of the record
  // here we chain the promise
  Article.findAll().then(function (data) {
    console.log('this is the table meta data ', data); // works
    console.log('my table row data should be here ',data.dataValues);// not working...
  });
});