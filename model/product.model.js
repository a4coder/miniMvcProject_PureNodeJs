const products = require('./../data/products.json');

async function find() {
    return new Promise((resolve, reject) => {
        try {
            resolve(products);
        } catch (err) {
            reject(err);
        }
    });
}

const ProductModel = {
    find,
};

module.exports = ProductModel;
