const { Pool } = require('pg')

const pool = new Pool({
    // connectionString: 'postgres://postgres:123456abdu@localhost:5432/mydata',
    connectionString:'postgres://gqwgjomh:nMTIH73Hb1xcgr-vULPuwp9KrzQlJIFK@tyke.db.elephantsql.com/gqwgjomh'
})

const fetch = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows: [row] } = await client.query(SQL, params.length ? params : null)
        return row
    } finally {
        client.release()
    }
}

const fetchAll = async(SQL, ...params)=> {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } finally {
        client.release()
    }
}

module.exports = {
    fetch,
    fetchAll
}