const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface) => {
        // Fetch the demo restaurant ID
        const [restaurant] = await queryInterface.sequelize.query(
            "SELECT id FROM restaurants WHERE name = 'Demo Restaurant' LIMIT 1;",
            { type: queryInterface.sequelize.QueryTypes.SELECT }
        );
        if (!restaurant) return;
        await queryInterface.bulkInsert('settings', [
            {
                id: uuidv4(),
                restaurant_id: restaurant.id,
                user_id: null,
                key: 'theme',
                value: 'light',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('settings', { key: 'theme', value: 'light' }, {});
    },
}; 