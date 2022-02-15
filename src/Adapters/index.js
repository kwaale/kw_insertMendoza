const { Services } = require('../Services');

async function Adapter({id}){
    try {
        let { statusCode, data, message } = await Services({id});
        return {statusCode, data, message}
    } catch (error) {
        console.error({step: 'adapter Adapter', error: error.toString()});
        return {statusCode:500, message: error.toString()};
    }
}
module.exports = {
    Adapter
}