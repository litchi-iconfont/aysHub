const database = require('../app/database')
class LabelService {
    async create(name) {
        const statement = `INSERT INTO label (name) VALUES (?);`;
        const [result] = await database.execute(statement, [name]);
        return result;
    }
    async getLabels(limit, offset) {
        const statement = `SELECT * FROM label LIMIT ?, ?;`;
        const [result] = await database.execute(statement, [offset, limit]);
        return result;
    }
}

module.exports = new LabelService()