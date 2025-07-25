const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Fetch the demo order ID
    const [order] = await queryInterface.sequelize.query(
      "SELECT id FROM orders WHERE customer_name = 'John Doe' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (!order) return;
    await queryInterface.bulkInsert('bills', [
      {
        id: uuidv4(),
        order_id: order.id,
        total: 100.00,
        payment_method: 'cash',
        payment_status: 'pending',
        created_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('bills', { total: 100.00, payment_method: 'cash' }, {});
  },
}; 