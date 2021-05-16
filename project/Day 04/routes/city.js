const express = require('express')
const { initDatabaseConnection } = require('../database connection/database')
const city_router = express.Router()

city_router.post('/bonus', async (req, res) => {
    let sql = `SELECT * FROM city`
    if (req.body.getid) {
        sql += ` WHERE country_id=${req.body.getid}`
        const [rows] = await (await initDatabaseConnection()).execute(sql)
        if (rows.length == 0) {
            res.json({ success: false })
            return
        }
        res.json(rows[0])
        return
    }

    if (req.body.getall) {
        const [rows] = await (await initDatabaseConnection()).execute(sql)
        res.json(rows)
        return
    }


    if (req.body.newcitypost && req.body.postcountryid) {
        try {
            let sql = `INSERT INTO city (city, country_id) VALUES('${req.body.newcitypost}', ${req.body.postcountryid})`
            const [rows] = await (await initDatabaseConnection()).execute(sql)
            res.json({ success: true })
            return
        } catch (error) {
            console.log(error)
        }
    }

    if (req.body.putid && req.body.putcity && req.body.putcountry) {
        try {
            let sql = `UPDATE city SET city='${req.body.putcity}', country_id=${req.body.putcountry} WHERE city_id=${req.body.putid}`
            const [rows] = await (await initDatabaseConnection()).execute(sql)
            if (rows.affectedRows == 0) {
                res.json({success:false})
                return
            }
            res.json({success:true})
            return
        } catch(error) {
            console.log(error)
        }
    }

    if (req.body.deleteid) {
        try {
            let sql = `DELETE FROM city WHERE city_id=${req.body.deleteid}`
            const [rows] = await (await initDatabaseConnection()).execute(sql)
            if (rows.affectedRows == 0) {
                res.json({success:false})
                return
            }
            res.json({success:true})
            return
        } catch (error) {
            console.log(error)
        }
    }

    res.json({success:false})
})

module.exports = city_router