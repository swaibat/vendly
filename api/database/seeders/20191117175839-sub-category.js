'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('SubCategories', [
        // vehicles
        {
        categoryId:1,
        name: 'Cars',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:1,
        name: 'Buses',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:1,
        name: 'Motocycles & scooters',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:1,
        name: 'Trucks & Trailers',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:1,
        name: 'Tractors',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:1,
        name: 'Watercraft & Boats',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        // property
        {
        categoryId:2,
        name: 'For Rent',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:2,
        name: 'For Sale',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        // electronics
        {
        categoryId:3,
        name: 'Laptops & Computers',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:3,
        name: 'Tv & Equiptments',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:3,
        name: 'Video Games',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:3,
        name: 'Audio & Music Equipments',
        createdAt: new Date(),
        updatedAt: new Date()
        },
      //  phones
        {
        categoryId:12,
        name: 'Mobile Phones',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:12,
        name: 'Smart Watches',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:12,
        name: 'Tablets',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        categoryId:12,
        name: 'Packaging & Advertising',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        //  beauty
        {
          categoryId:4,
          name: 'Tools & Accessories',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
          categoryId:4,
          name: 'Skin Care',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
          categoryId:4,
          name: 'Hair Care',
          createdAt: new Date(),
          updatedAt: new Date()
          },
        //  fashions
        {
          categoryId:17,
          name: 'Bags',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
          categoryId:17,
          name: 'Clothings',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
          categoryId:17,
          name: 'Jwellery',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
          categoryId:17,
          name: 'Shoes',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
          categoryId:17,
          name: 'Watches',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
            categoryId:17,
            name: 'Belts',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('SubCategories', null, {});
  }
};