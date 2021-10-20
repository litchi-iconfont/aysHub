const connection = require('../app/database')

class MomentService {
    async create(userId, content) {
        const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`;
        const [result] = await connection.execute(statement, [content, userId]);
        return result;
    }
    async getMomentById(id) {
        const statement = `SELECT * FROM moment WHERE id=?;`
        const [result] = await connection.execute(statement, [id]);
        return result;
    }
    async getMomentList() {
        const offset = `SELECT * FROM moment WHERE id=?;`
        const [result] = await connection.execute([offset, size]);
        return result;
    }
    async update(content, momentId) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
        const [result] = await connection.execute(statement, [content, momentId]);
        return result[0];
    }
    async remove(momentId) {
        const statement = `DELETE FROM moment WHERE id=?;`;
        const [result] = await connection.execute(statement, [momentId]);
        return result;
    }
};



module.exports = new MomentService();