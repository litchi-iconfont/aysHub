const crypto = require('crypto');

const md5password = (ctx) => {
    const md5 = crypto.createHash('md5');
    const result = md5.update(ctx).digest('hex');
    return result;
}

module.exports = md5password;