const models = require('../models/index');
const Op = models.Sequelize.Op;

class PackageController {
    static async getAllPackage(req, res) {
        const {
            limit,
            page
        } = req.params;
        let offset = (page - 1) * limit;
        
        const packages = await models.Package.findAndCountAll({
            limit: parseInt(limit, 10),
            offset
        })
        res.json(packages);
    }

    static async getOrderByPackage(req, res) {
        const {
            packageid
        } = req.params;
        const orders = await models.Order.findAndCountAll({
            where: {
                packageid
            },
            include: [{
                as: 'user',
                model: models.User
            }]
        })
        res.json(orders);
    }
}
module.exports = PackageController;