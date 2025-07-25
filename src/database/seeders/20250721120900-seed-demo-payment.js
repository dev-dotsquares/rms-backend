const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Fetch the demo bill ID
    const [bill] = await queryInterface.sequelize.query(
      "SELECT id FROM bills WHERE total = 100.00 AND payment_method = 'cash' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (!bill) return;
    await queryInterface.bulkInsert('payments', [
      {
        id: uuidv4(),
        bill_id: bill.id,
        amount: 100.00,
        method: 'cash',
        status: 'pending',
        transaction_id: null,
        created_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('payments', { amount: 100.00, method: 'cash' }, {});
  },
}; 