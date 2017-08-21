# WhatDay.When??
A week-long planner for a weak planner, add tasks by the day(s).  
View tasks for each day.

## Built With
Javascript
Angularjs
Express
Node
PostgresSQL
Moment.js
HTML 5
CSS 5
Angular-Materials
Bootstrap

## Getting Started
Fork my repo.
clone to terminal.
Run npm install --save.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Moment.js](https://momentjs.com/)

### Installing

Steps to get the development environment running.

```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
CREATE TABLE tasks (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    taskname character varying(42),
    date DATE,
    time Time,
    notes character varying(142)
);
```

### Version 1
- [x] add tasks
- [x] view tasks for each day
- [x] view completed tasks

### Version 2
- [ ] Calendar View
- [ ] Multiple Logins for one HouseHold
- [ ] NodeMailer
- [ ] ability to edit tasks

## Deployment
Use Heroku

## Authors
* Brendin Barone

## Acknowledgments
* My Family: Chloe and Adriana
* My Instructors: Cris Black and Kris Szafranski
* My fellow Antarians
