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
