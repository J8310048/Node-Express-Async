const chance = require("chance").Chance();

module.exports = () => {
    return {
        lotteryWin: chance.integer({min: 1000, max: 1000000}),
        name: chance.name({nationality: "en"}),
        occupation: chance.profession({rank: true})
    }
}
