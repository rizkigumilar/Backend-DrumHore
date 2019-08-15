const connection = require('../config/connect')

module.exports = {
    getLeaderboard: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT users.username, users.userid, scores.score FROM users INNER JOIN scores ON users.userid = scores.userid ORDER BY score DESC`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getLeadById: (userid) => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT users.username,scores.score
				FROM scores 
				INNER JOIN users
                ON users.userid = scores.userid
                where users.userid = ?
                ORDER BY score Desc
				LIMIT 1 OFFSET 0`, userid, (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
        })
    },
    postBoard: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO scores SET ? ', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateBoard: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE scores SET score = ? WHERE userid =? `, [data.score, data.userid], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}



