require('dotenv').config()

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  }
)

// async/await syntax:
//////////////////

// async function myFunction() {
//   await sequelize.authenticate()
//   console.log('Connection successful')
// }

// myFunction()

// .then/.catch syntax:
//////////////////

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection successful')
  })
  .catch((err) => {
    console.log('Error connecting', err)
  })
