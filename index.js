const { Adapter } = require('./src/Adapters');

const main = async () => {
    try {
        const result = await Adapter({ id: 2 })
        if (result.statusCode !== 200) throw (result.message)
        console.log("tu data es ", result.data)
    } catch (error) {
        console.error(error)
    }
}
main();
