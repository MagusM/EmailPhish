const postgresConnectionLocal = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'pgadmin4320',
    port: 5433,
}

const postgresConnection = {
    user: 'mnldclhy',
    host: 'fanny.db.elephantsql.com',
    database: 'mnldclhy',
    password: '1MPMx4l1yv9B8iYGrmukXp9ueyISVMMJ',
    port: 5432,
}

// INSERT INTO Users(name, email, password, created, last_login)
// values('Test', 'test@gmail.com', '123456', NOW(), NOW())

module.exports = { postgresConnection };