const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Fetch the demo restaurant ID
    const [restaurant] = await queryInterface.sequelize.query(
      "SELECT id FROM restaurants WHERE name = 'Demo Restaurant' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (!restaurant) return;
    await queryInterface.bulkInsert('reports', [
      {
        id: uuidv4(),
        restaurant_id: restaurant.id,
        type: 'sales',
        data: JSON.stringify({ total_sales: 100, top_items: ['Margherita Pizza'] }),
        generated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('reports', { type: 'sales' }, {});
  },
}; 