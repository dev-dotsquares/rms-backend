const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Fetch the demo restaurant, floor, table, and staff IDs
    const [restaurant] = await queryInterface.sequelize.query(
      "SELECT id FROM restaurants WHERE name = 'Demo Restaurant' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const [floor] = await queryInterface.sequelize.query(
      "SELECT id FROM floors WHERE name = 'Main Floor' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const [table] = await queryInterface.sequelize.query(
      "SELECT id FROM tables WHERE label = 'T1' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const [staff] = await queryInterface.sequelize.query(
      "SELECT id FROM staff WHERE email = 'staff@restaurant.com' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (!restaurant || !floor || !table || !staff) return;
    await queryInterface.bulkInsert('orders', [
      {
        id: uuidv4(),
        restaurant_id: restaurant.id,
        table_id: table.id,
        floor_id: floor.id,
        type: 'dine_in',
        status: 'pending',
        total: 100.00,
        waiter_id: staff.id,
        customer_name: 'John Doe',
        customer_phone: '+1234567899',
        notes: 'No onions',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('orders', { customer_name: 'John Doe' }, {});
  },
}; 