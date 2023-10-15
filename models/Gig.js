const {Sequelize} = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    technologies:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    budget:{
        type: Sequelize.STRING
    },
    contact_email:{
        type: Sequelize.STRING
    },
  },
  {
    createdAt: 'created_at',
    updatedAt:'updated_at'
  }
);

module.exports = Gig;