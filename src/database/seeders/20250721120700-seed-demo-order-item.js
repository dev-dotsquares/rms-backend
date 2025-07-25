const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Fetch the demo order and staff IDs
    const [order] = await queryInterface.sequelize.query(
      "SELECT id FROM orders WHERE customer_name = 'John Doe' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const [staff] = await queryInterface.sequelize.query(
      "SELECT id FROM staff WHERE email = 'staff@restaurant.com' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (!order || !staff) return;
    await queryInterface.bulkInsert('order_items', [
      {
        id: uuidv4(),
        order_id: order.id,
        name: 'Margherita Pizza',
        quantity: 2,
        price: 50.00,
        notes: 'Extra cheese',
        chef_id: staff.id,
        prep_time: 15,
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('order_items', { name: 'Margherita Pizza' }, {});
  },
}; 