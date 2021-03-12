const models = require('../models/index');
const Op = models.Sequelize.Op;

class UserController {
    // 获取所有服务商
    static async getAllServer(req, res) {
        const {
            limit = 10,
                page = 1
        } = req.params;
        let offset = (page - 1) * limit;

        const servers = await models.User.findAndCountAll({
            where: {
                type: 1
            },
            offset,
            limit: parseInt(limit, 10),
        })
        res.json(servers);

    }

    // 所有客服
    static async getAllUser(req, res) {
        const {
            limit = 10,
                page = 1
        } = req.params;
        let offset = (page - 1) * limit;
        const users = await models.User.findAndCountAll({
            where: {
                type: 2
            },
            limit: parseInt(limit, 10),
            offset
        })
        res.json(users);
    }

    // 获取所有的服务商下的客服
    static async getUserByServer(req, res) {
        const {
            id
        } = req.params;
        const users = await models.User.findAndCountAll({
            where: {
                pid: parseInt(id, 10),
                type: 2
            }
        });
        res.json(users);
    }

    // 获取所有的服务商下的服务商
    static async getServerByServer(req, res) {
        const {
            id
        } = req.params;
        const servers = await models.User.findAndCountAll({
            where: {
                pid: parseInt(id, 10),
                type: 1
            }
        });
        res.json(servers);
    }

    static async generateTestData(req, res) {
        // 获取一级服务商
        /*  const serversFirst = await models.User.findAll({
             where: {
                 type: 1,
                 level: 1
             }
         }); */

        // 设置一级服务商path
        /* for (let item of serversFirst) {
            // 设置
            models.User.update({
                path: item.id + ','
            }, {
                where: {
                    id: item.id
                }
            })
        }
        res.json(serversFirst); */


        // 获取二级服务商
        /* const serversSecond = await models.User.findAll({
            where: {
                type: 1,
                level: 2
            }
        }); */

        /* let idArr = []; // 一级服务商id数组
        for (let item of serversFirst) {

            idArr.push(item.id);
        } */

        // res.json(idArr)

        // 设置二级服务商pid
        /* for (let item of serversSecond) {
            let index = Math.floor((Math.random() * idArr.length))
            let pid = idArr[index]
            // console.log(index, pid);

            models.User.update({
                pid
            }, {
                where: {
                    id: item.id
                }
            })
        }
        res.json(serversSecond); */

        // 设置二级服务商path
        /* for (let item of serversSecond) {
            const first = await models.User.findOne({
                where: {
                    id: item.pid
                }
            })

              models.User.update({
                  path: `${first.path}${item.id},`
              }, {
                  where: {
                      id: item.id
                  }
              });
        }
        res.json(serversSecond); */

        // 获取所有服务商
        const servers = await models.User.findAll({
            where: {
                type: 1
            }
        });
        // 获取所有客服
        const users = await models.User.findAll({
            where: {
                type: 2,
            }
        });
        /* let idArr = []; // 服务商id数组
        for (let item of servers) {
            idArr.push(item.id);
        }

        // 设置客服的pid
        for (let item of users) {
            models.User.update({
                pid: idArr[Math.floor(Math.random() * idArr.length)]
            }, {
                where: {
                    id: item.id
                }
            });
        }
        res.json(users); */

        // 设置客服的path
        /* for (let item of users) {
            const first = await models.User.findOne({
                where: {
                    id: item.pid
                }
            })

            models.User.update({
                path: `${first.path}${item.id},`
            }, {
                where: {
                    id: item.id
                }
            });
        }
        res.json(users); */


        // 设置订单表客服id
        /* let idArr = []; // 客服id数组
        for (let item of users) {
            idArr.push(item.id);
        }

        const orders = await models.Order.findAll({
            // 报错:Unhandled rejection SequelizeConnectionAcquireTimeoutError: Operation timeou
            // 加个条件把剩下的也执行玩
            where: {
                id: {
                    [Op.gt]: 156833
                }
            }
        });

        for (let item of orders) {
            models.Order.update({
                kfid: idArr[Math.floor(Math.random() * idArr.length)]
            }, {
                where: {
                    id: item.id
                }
            })
        }

        res.json(orders); */

        /*   let idArr = []; // 服务商id数组
        for (let item of servers) {
            idArr.push(item.id);
        }
 */

        const packages = await models.Package.findAll({

        });

        // 设置话务包的serverid
        /* for (let item of packages) {
            models.Package.update({
                serverid: idArr[Math.floor(Math.random() * idArr.length)],
            }, {
                where: {
                    packageid: {
                        [Op.gt]: 188325
                    }
                }
            })
        } */

        const orders = await models.Order.findAll();


        /* let idArr = []; // 服务商id数组
        for (let item of packages) {
            idArr.push(item.packageid);
        }

        for (let item of orders) {
            models.Order.update({
                packageid: idArr[Math.floor(Math.random() * idArr.length)],
            }, {
                where: {
                    id:{
                        [Op.gt]: 157482
                    }
                }
            })
        } */

        /*  for (let item of packages) {
             let orders = await models.Order.findAndCountAll({
                 where: {
                     packageid: item.packageid
                 }
             })
             models.Package.update({
                 num: orders.count,
                 finishnum: 0
             }, {
                 where: {
                     packageid: item.packageid
                 }
             })
         }
         res.json(1); */
    }
}

module.exports = UserController;


/*
    let result = await sequelize.query(
    'select ...', //原生 SQL 语句，参数用 ? 
    { replacements: [css, time], type:Sequelize.QueryTypes.SELECT } //replacements替换SQL中的参数
);

*/