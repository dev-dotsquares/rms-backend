const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface) => {
        // Fetch the demo restaurant ID
        const [restaurant] = await queryInterface.sequelize.query(
            "SELECT id FROM restaurants WHERE name = 'Demo Restaurant' LIMIT 1;",
            { type: queryInterface.sequelize.QueryTypes.SELECT }
        );
        if (!restaurant) return;
        await queryInterface.bulkInsert('floors', [
            {
                id: uuidv4(),
                restaurant_id: restaurant.id,
                name: 'Main Floor',
                display_name: 'Main Dining Area',
                description: 'The main dining area of the restaurant',
                capacity: 50,
                status: 'active',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('floors', { name: 'Main Floor' }, {});
    },
}; 