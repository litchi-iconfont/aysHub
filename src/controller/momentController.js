const momentRouter = require('../router/momentRouter');
const momentService = require('../sevice/momentSevice')

class momentController {
    //发表评论接口
    async create(ctx, next) {
        // 1.获取数据(user_id, content)
        const userId = ctx.user.id;
        const content = ctx.request.body.content;
        // 2.将数据插入到数据库
        const result = await momentService.create(userId, content);
        ctx.body = result;
    }
    //读取评论接口
    async detail(ctx, next) {
        //获取数据
        const momentId = ctx.params.momentId;
        //根据id去查询这条数据
        const result = await momentService.getMomentById(momentId);
        ctx.body = result;
    }
    //获取多条评论接口
    async list(ctx, next) {
        //获取数据
        const { offset, size } = ctx.query;
        //查询列表
        const result = await momentService.getMomentList(offset, size);
        ctx.body = result;
    }
    //修改动态接口
    async update(ctx, next) {
        //获取参数
        const { momentId } = ctx.params;
        const { content } = ctx.request.body;
        //修改内容
        const result = await momentService.update(content, momentId);
        ctx.body = result;
    }
    async remove(ctx, next) {
        // 1.获取momentid
        const { momentId } = ctx.params;
        //2.删除内容
        const result = await momentService.remove(momentId);
        ctx.body = result;
    }
    //动态标签接口
    async addlabels(ctx, next) {
        const { labels } = ctx.request.body;
        console.log(labels);
        ctx.body = "给动态添加标签"
    }
}

module.exports = new momentController();

