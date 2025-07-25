const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Get the admin user (assuming email is unique and known)
    const [admin] = await queryInterface.sequelize.query(
      "SELECT id FROM users WHERE email = 'admin@example.com' LIMIT 1;"
    );
    const adminId = admin && admin[0] && admin[0].id;

    if (!adminId) throw new Error('Admin user not found for restaurant seeder');

    await queryInterface.bulkInsert('restaurants', [
      {
        id: uuidv4(),
        name: 'Demo Restaurant',
        address: '123 Main St',
        phone: '+1234567890',
        email: 'demo@restaurant.com',
        currency: 'USD',
        timezone: 'America/New_York',
        status: 'active',
        plan: 'free',
        admin_id: adminId,
        created_at: new Date(),
        updated_at: new Date(),
        revenue: 0,
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('restaurants', { name: 'Demo Restaurant' }, {});
  },
}; 