# SQL aka Structured Query Language

allows users to query manipulate and transform data from a relational database

a relational databse is a collection of related two dimensional tables

## SELECT QUERIES

`SELECT column, another_column, …
 FROM mytable;`

the result will be a two-dimensional set of rows and requested columns

if you want to select all the columns of data...

```SQL
SELECT *
FROM mytable;
```

## QUERIES & RESTRAINTS WITH WHERE CLAUSE

if you had a hundred millon rows of data
it would be inefficent to look through all of them

the where clause is applied to each row
by checking specific column values to see if it should be incuded

```SQL
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;
```

make sure all strings are in quotes

WHERE CLAUSE OPERATORS:
=, !=, < <=, >, >=
BETWEEN … AND …
NOT BETWEEN … AND …
IN (…)
NOT IN (…)
LIKE
NOT LIKE
%
_
IN (…)
NOT IN (…)
