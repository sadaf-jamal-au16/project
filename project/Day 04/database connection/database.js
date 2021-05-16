const mysql = require('mysql2/promise')
require('dotenv').config()
const {DATABASE_PASSWORD} = process.env

let connection = null
async function initDatabaseConnection() {
    connection = await mysql.createConnection({
        host:`127.0.0.1`,
        port:3306,
        user:'root',
        password:DATABASE_PASSWORD,
        database:'sakila'
    })
    await connection.connect()
    console.log('Connected to database')
    return connection
}

module.exports = {initDatabaseConnection,connection}