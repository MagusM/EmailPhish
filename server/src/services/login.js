const {login} = require('../repositories/postgres')

const login = (email, password) => {
    if (await checkPassword(password)) {
        let userId = getUserIdByEmail(email);
        return await login(userId);
    }
}