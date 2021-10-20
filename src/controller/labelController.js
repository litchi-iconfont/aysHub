const labelService = require('../sevice/labelService')
class labelController {
    async create(ctx, next) {
        const { name } = ctx.request.body;
        const result = await labelService.create(name);
        ctx.body = result;
    }
    async list(ctx, next) {
        const { limit, offset } = ctx.query;
        const result = await service.getLabels(limit, offset);
        ctx.body = result;
    }
}

module.exports = new labelController();