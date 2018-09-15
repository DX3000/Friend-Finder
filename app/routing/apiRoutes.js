const path = require('path');
const friends = require('../data/friends');

module.exports = function (app) {
    app.post("/api/survey", (req, res) => {
        let bestFriend = {};
        let currentLowest = 100;
        for (let friend = 0; friend < friends.length; friend++) {
            let difference = 0;
            for (let i = 0; i < req.body.scores.length; i++) {
                difference += Math.abs(req.body.scores[i] - friends[friend].scores[i]);
            }
            if (difference <= currentLowest) {
                currentLowest = difference;
                bestFriend = friends[friend];
            }
        }
        res.json(bestFriend);
    });
};