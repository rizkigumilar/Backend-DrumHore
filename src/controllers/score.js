const scoreModels = require('../models/score')
const resultRespon = require('../helpers/helper')

const jwt = require('jsonwebtoken')

module.exports = {
    getLeaderboard: (req, res) => {
        scoreModels.getLeaderboard()
            .then((resultUser) => {
                const result = resultUser
                resultRespon.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    getScoreId: (req, res) => {
        const userid = req.params.userid
        scoreModels.getLeadById(userid)
            .then((resultUser) => {
                resultRespon.response(res, resultUser, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    postScore: (req, res) => {
        const data = {
            userid: req.body.userid,
            score: req.body.score
        }
        scoreModels.postBoard(data)
            .then(() => {
                resultRespon.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    updateScore: (req, res) => {
        const data = {
            userid: req.body.userid,
            score: req.body.score
        }
        scoreModels.updateBoard(data)
            .then(() => {
                resultRespon.response(res, data, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}