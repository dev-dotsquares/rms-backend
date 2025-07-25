const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Fetch the demo restaurant and super admin user IDs
    const [restaurant] = await queryInterface.sequelize.query(
      "SELECT id FROM restaurants WHERE name = 'Demo Restaurant' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const [user] = await queryInterface.sequelize.query(
      "SELECT id FROM users WHERE email = 'admin@example.com' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (!restaurant || !user) return;
    await queryInterface.bulkInsert('staff', [
      {
        id: uuidv4(),
        user_id: user.id,
        restaurant_id: restaurant.id,
        role: 'admin',
        name: 'Demo Staff',
        email: 'staff@restaurant.com',
        phone: '+1234567891',
        status: 'active',
        assigned_floor: null,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('staff', { email: 'staff@restaurant.com' }, {});
  },
}; 