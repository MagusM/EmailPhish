const { postgresConnection } = require('./dbConfig');

const { Pool } = require('pg');

const pool = new Pool(postgresConnection);

async function insertMail(userEmail, body) {
    const userId = await getUserIdByEmail(userEmail)
    return pool.query('INSERT INTO EMAILS(user_id, email, status, sentTime) values($1, $2, 0, NOW())', [userId, body])
}

async function getUserIdByEmail(email) {
    let returnedData = pool.query('SELECT id FROM users WHERE email=$1', [email])
    if (!returnedData) {
        return 1;
    };
    return returnedData
}

const changeEmailStatus = (emailId) => {
    pool.query('Update table emails set status=1 where emails.id=$1', [emailId])
}

const login = (userId) => {
    pool.query('Update table users set last_login=NOW() where users.id=$1', [userId])
}

const checkPassword = (email, password) => {
    // password hashed
    const userPassword = pool.query('SELECT password from users where users.email=$1', [email])
    return password === userPassword;
}

const getAllEmailsByUser = (userEmail) => {
    const userId = getUserIdByEmail(userEmail)
    const userEmails = pool.query('select email from emails where emails.user_id=$1', [userId])
    return userEmails;
}

module.exports = {insertMail, changeEmailStatus, login, checkPassword, getAllEmailsByUser}