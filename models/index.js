const User = require('./User');
const Thought = require('./Thought');
const { reactionSchema } = require('./Reaction');

const Reaction = {
    schema: reactionSchema
};

module.exports = { User, Thought, Reaction };