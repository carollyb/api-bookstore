const sequelize = require("./tests")


async function databaseSync() {
    try {
        await sequelize.sync({force: true})
        .then(() => {
            console.log(`Database rodando no ambiente de testes`);
        })
        return true
    } catch (e) {
        console.log("Não pôde conectar ao DB de teste");
        return false
    }
}

module.exports = databaseSync
