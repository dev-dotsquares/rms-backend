const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    // Fetch the demo restaurant and main floor IDs
    const [restaurant] = await queryInterface.sequelize.query(
      "SELECT id FROM restaurants WHERE name = 'Demo Restaurant' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const [floor] = await queryInterface.sequelize.query(
      "SELECT id FROM floors WHERE name = 'Main Floor' LIMIT 1;",
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    if (!restaurant || !floor) return;
    await queryInterface.bulkInsert('tables', [
      {
        id: uuidv4(),
        restaurant_id: restaurant.id,
        floor_id: floor.id,
        label: 'T1',
        seats: 4,
        status: 'vacant',
        x: 10,
        y: 20,
        current_order: null,
        assigned_waiter: null,
        last_cleaned: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('tables', { label: 'T1' }, {});
  },
}; 