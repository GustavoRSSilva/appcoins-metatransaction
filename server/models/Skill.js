const mongoose = require('./init');
const Schema = mongoose.Schema;

const SkillSchema = Schema({
  name: String
});

const Skill = mongoose.models.Skill || mongoose.model('Skill', SkillSchema);

module.exports = Skill;