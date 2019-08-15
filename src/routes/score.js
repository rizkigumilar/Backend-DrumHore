const express = require('express')
const Route = express.Router()

const Score = require('../controllers/score')
const Auth = require('../helpers/auth')

Route
    .get('/scores', Auth.authInfo, Score.getLeaderboard)
    .get('/scores/:userid', Auth.authInfo, Score.getScoreId)
    .post('/scores', Auth.authInfo, Auth.accesstoken, Score.postScore)
    .patch('/scores', Auth.authInfo, Auth.accesstoken, Score.postScore)

module.exports = Route
