const {db} = require('../Models');
const {setTimeout} = require('timers/promises')
async function FindUser({id}){
    try {
        if(db.some(e=> e.id === id)){
            const user = db.filter(us => us.id === id)[0];
            console.log('User',user);
            await setTimeout(5000);
            return { statusCode:200, data:user};
        }
        return { statusCode: 400, message: 'Usuario no encontrado'}       
    } catch (error) {
        console.log({step:'service FindUser', error: error.toString()})
        return {statusCode:500, message: error.toString()}
    }
}

async function ExistUser({ id }) {
    try {
        const match = db.some(e => e.id === id);
        return { statusCode: 200, data:match }
    } catch (error) {
        console.log({ step: 'service ExistUser', error: error.toString() })
        return { statusCode: 500, message: error.toString() }
    }
}

module.exports = {
    ExistUser,
    FindUser
}