const chance = require("chance").Chance();

module.exports = () => {
    return {
        lottery: chance.integer({min: 1000, max: 1000000})
    }
}
