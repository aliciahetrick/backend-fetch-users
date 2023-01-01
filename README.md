## Creating a CRUD RESTful API in Node.js

## that runs on an Express sever and uses a PostgreSQL database

CRUD operations - get, post, put, delete

RESTful API - an API that conforms to the REST style and constraints
REST systems are stateless, scaleable, cacheable and have uniform interface

CRUD API:

- Create: use `HTTP POST` method to create a resource in a rest enviornment.
- Read: Use the `GET` method to read a resource, retreiving data without altering it
- Update: use the `PUT` method to update a resource
- Delete: use the `DELETE` method to remove a resource

Express: framework for node.js

- framework is a tool that provides components/solutions to speed up development

PostgreSQL - database management system

Sequelize - a promise based node.js ORM (object relatioal mapping) for Postgres

- ORM connects OOP (Object oriented programing) to relational databases

node-postgres - collection of node.js modules for interfacing with postgres

## psql is a terminal-based front-end to PostgreSQL. It enables you to type in queries interactively, issue them to PostgreSQL, and see the query results.

`brew services start postgresql`
`psql postgres`

anything installed with brew, installs globally

You’ll see that we’ve entered into a new connection. We’re now inside psql in the postgres database. The prompt ends with a # to denote that we’re logged in as the superuser, or root:

`postgres=#`

Commands within psql start with a backslash \. To test our first command, we can check what database, user, and port we’ve connected to using the \conninfo command.

`postgres=# \conninfo`
You are connected to database "postgres" as user "your_username" via socket in "/tmp" at port "5432".

\q: Exit psql connection
\c: Connect to a new database
\dt: List all tables
\du: List all roles
\list: List databases
