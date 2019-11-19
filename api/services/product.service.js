import db from '../database/models';

const ProductService = {
  async create(product) {
    const result = await db.Product.create(product,);
    return result.get({ plain: true });
  },

  postImages(img, ProductId) {
    const { name, size, mimetype } = img;
    return db.productFile.create({
      name, size, type: mimetype, ProductId
    });
  },
  async createVehicle(data) {
    const result = await db.Vehicle.create(data);
    return result.get({ plain: true });
  },

  async get(condition) {
    const result = await db.Product.findOne({
      where: condition,
      include: [
        { model: db.Vehicle,
          attributes: {
            exclude: ['CategoryId', 'createdAt', 'updatedAt', 'ProductId'] } },
        { model: db.productFile,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'ProductId'] } },
      ]
    });
    return result;
  },
};

export default ProductService;
