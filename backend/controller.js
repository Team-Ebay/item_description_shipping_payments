const pool = require('./connection.js')

const getAllItemData = async (req, res) => {
    try {
        let client = await pool.connect();
        let data = await client.query('SELECT * from itemspecifics;');
        res.json(data.rows)
        client.release();
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = { getAllItemData }
