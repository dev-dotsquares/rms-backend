module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tables', 'current_order', {
      type: Sequelize.UUID,
      allowNull: true,
    });
    await queryInterface.addConstraint('tables', {
      fields: ['current_order'],
      type: 'foreign key',
      name: 'fk_tables_current_order',
      references: {
        table: 'orders',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeConstraint('tables', 'fk_tables_current_order');
    await queryInterface.removeColumn('tables', 'current_order');
  },
}; 