const { EntitySchema } = require('typeorm');

const ProductSchema = new EntitySchema({
  name: 'Peoduct',
  tableName: 'product',  
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    productname: {
      type: 'varchar',
      length: 100,
    },
    price: {
      type: 'decimal',
      precision: 12,
      scale: 2
      
    },
    description: {
      type: 'varchar',
      length: 100,
    },
    detail: {
      type: 'varchar',
      length: 350,
    },

    is_newArrivals: {
      type: 'boolean',
      default: false,
    },

    is_topSelling: {
      type: 'boolean',
      default: false,
    },

    category: {
      type: 'int',
    },

    cover_image: {
      type: 'varchar',
    },

    first_image: {
      type: 'varchar',
    },
    second_image: {
      type: 'varchar',
    },
    third_image: {
      type: 'varchar',
    },

  },
});

module.exports = ProductSchema;  
