const models = require('../models/index');

class OrderController {
    // 获取当前客服所有订单
    static async getAllOrder(req, res) {
        const {
            limit,
            page
        } = req.params;
        let offset = (page - 1) * limit;
        const orders = await models.Order.findAndCountAll({
            include: [{
                as: 'user',
                model: models.User
            }],
            limit: parseInt(limit, 10),
            offset
        })
        res.json(orders);
    }

    // 统计服务商, 订单, 客服
    static async getTotalData(req, res) {
        const {
            limit,
            page
        } = req.params;
        let offset = (page - 1) * limit;
        const count = await models.sequelize.query("select count(*) as count from users where type = 1");
        const total = await models.sequelize.query("select id, name, level, kfNum, orderNum from (select id, name, level, kfNum from users left join (select pid, count(*) as kfNum from users where type = 2 GROUP BY pid) as u1 on users.id = u1.pid where users.type = 1) as uu1 left join (select pid, count(*) as orderNum from users left join orders on users.id = orders.kfid where type = 2 GROUP BY users.pid) as uu2 on uu1.id = uu2.pid limit " + offset + ", " + limit + "");
        const countData = JSON.parse(JSON.stringify(count[0][0].count))
        const totalData = JSON.parse(JSON.stringify(total[0]));

        /* const total = await models.User.findAndCountAll({
            where: {
                type: 1 // 表示所有的服务商
            },
            include: [{ // 服务商下面的客服
                model: models.User,
                as: 'childs',
                where: {
                    type: 2
                },
                include: [{
                    model: models.Order,
                    as: 'user'
                }]

            }],
            limit: parseInt(limit, 10),
            offset
        });

        for (let item of total.rows) {
            let num = 0;
            for (let user of item.childs) {
                num += user.user.length;
            }
            item.setDataValue('ordersNum', num);
        }
        console.log(total.rows);
        
        res.json(total) */
        res.json({
            totalData,
            countData
        });

    }

    // 客服的所有订单
    static async getUserOrders(req, res) {
        const {
            id
        } = req.params;
        const orders = await models.Order.findAndCountAll({
            where: {
                kfid: id
            }
        })
        res.json(orders);
    }
}

module.exports = OrderController;