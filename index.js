require('dotenv').config()

const { Sequelize } = require('sequelize')
const { DataTypes } = Sequelize

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  }
)

//////////////////
// async/await syntax to check sequelize connection:

// async function myFunction() {
//   await sequelize.authenticate()
//   console.log('Connection successful')
// }

// myFunction()

//////////////////
// .then/.catch syntax to check sequelize connection:

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection successful')
//   })
//   .catch((err) => {
//     console.log('Error connecting', err)
//   })

// creates the model/table:
// sequelize automatically pluralizes model names
const User = sequelize.define(
  'user',
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: `${this.name}@email.com`,
    },
  },
  {
    //optional third argument
  }
)

// console.log(sequelize.models.user)

//////////////////

// SYNCING AND DROPPING TABLES ARE DESTRUCTIVE:
// will loose data saved to the database

// connects the model/table to the database:
// only creates a table if it does not exist
// if it does exist already and you want to update, you have to pass optional arguments to .sync(argument)
// {force: true} drops the table if it already exosts and replaces it with a new one
// {alter: true} current state of the database is modified to match table, instead of dropping table and recreating it
// User.sync({ alter: true })
//   .then(() => {
//     // console.log('Table and model synced successfully!')
//     // .build() does not actually communicate with your database
//     const user = User.build({ name: 'alicia', email: 'alicia@example.com' })
//     // console.log(user.name)
//     // .save() is needed to add data to database
//     return user.save()
//   })
//   .then((data) => {
//     console.log('User added to the database')
//   })
//   .catch((err) => {
//     console.log('Error syncing table and model', err)
//   })

// can also sync multiple models at a time by calling .sync() on the sequelize instance:
// sequelize.sync({force: true})

// can drop/delete a whole table by using .drop method:
// User.drop()
// adding a safetly measure to srop only tables ending in _test:
// sequelize.drop({ match: /_test$/ })

User.sync({ alter: true })
  .then(() => {
    return User.create({
      name: 'bear',
      email: 'bear@example.com',
    })
  })
  .then((data) => {
    console.log('User added to the database')
    console.log(data.toJSON())
    ;(data.name = 'coco'), (data.email = 'coco@example.com')
    return data.save()
  })
  .then((data) => {
    console.log('User updated')
    console.log(data.toJSON())
  })
  .catch((err) => {
    console.log('Error syncing table and model', err)
  })
