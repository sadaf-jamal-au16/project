const express = require('express')
const { initDatabaseConnection  } = require('../database connection/database')
const country_router = express.Router()
country_router.use(express.urlencoded({urlencoded:true}))

country_router.post('/required', async (req, res) => {
    let sql = `SELECT * FROM sakila.country`
    if (req.body.getid) {
        sql += ` WHERE country_id=${req.body.getid}`
        const [rows] = await (await initDatabaseConnection()).execute(sql)
        if (rows.length == 0) {
            res.json({success:false})
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

    if (req.body.newcountrypost) {
        let sql = `INSERT INTO country (country) VALUES('${req.body.newcountrypost}')`
        const [rows] = await (await initDatabaseConnection()).execute(sql)
        res.json({success:true})
        return
    }

    if (req.body.putid && req.body.putcountry) {
        let sql = `UPDATE country SET country='${req.body.putcountry}' WHERE country_id=${req.body.putid}`
        const [rows] = await (await initDatabaseConnection()).execute(sql)
        if (rows.affectedRows == 0) {
            res.json({success:false})
            return
        }
        res.json({success:true})
        return
    }
    
    if (req.body.deletecountry) {
        try {
            let sql = `DELETE FROM country WHERE country_id=${req.body.deletecountry}`
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

module.exports = country_router