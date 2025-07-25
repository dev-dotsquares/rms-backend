const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        name: 'Super Admin',
        email: 'admin@example.com',
        password_hash: '$2b$10$demoHashForSuperAdmin', // Replace with a real bcrypt hash in production
        role: 'super_admin',
        restaurant_id: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', { email: 'admin@example.com' }, {});
  },
}; 