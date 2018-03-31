const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')(initOptions); 
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'ita_dev',
    user: 'postgres',
    password: 'ubuntu'
}; 

const db = pgp(cn);

module.exports = db;