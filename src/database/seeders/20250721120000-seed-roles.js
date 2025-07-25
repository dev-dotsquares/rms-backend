const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('roles', [
      {
        id: uuidv4(),
        name: 'super_admin',
        description: 'Super Administrator',
      },
      {
        id: uuidv4(),
        name: 'restaurant_admin',
        description: 'Restaurant Administrator',
      },
      {
        id: uuidv4(),
        name: 'kitchen_manager',
        description: 'Kitchen Manager',
      },
      {
        id: uuidv4(),
        name: 'waiter',
        description: 'Waiter',
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('roles', null, {});
  },
}; 