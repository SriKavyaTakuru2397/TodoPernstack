//It is for connecting postgres database to node.js server
const Pool=require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports=pool;