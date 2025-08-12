const { model } = require("mongoose");
const { positionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = model("position", positionsSchema); // No `new`

module.exports = { PositionsModel };
