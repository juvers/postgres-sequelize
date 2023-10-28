module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "xxxx",
    DB: "postdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};