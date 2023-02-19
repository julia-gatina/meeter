# meeter
Meeting scheduler application for mentors and mentees.
Used technologies (Postgres, Express, React, Node).

# Meeter build and start application
1. Run Postgres DB through Docker env 
```
  docker-compose up
```
or installed locally (run on port 5430)
https://www.postgresql.org/download/
2. Create database:
```
CREATE USER meeter WITH PASSWORD 'meeter';
CREATE DATABASE meeter;
GRANT ALL PRIVILEGES ON DATABASE meeter to meeter;
```
3. Run Backend server as a NodeJs App, Frontend as React App

```
npm run start:nodemon
```
Run Frontend as React App
```
npm run start
```
4. Swagger API Doc are available at http://localhost:{port}/api/docs

## View Meeter App demo video
_**Use a CTRL+click (on Windows and Linux) or CMD+click (on MacOS) to open video in the new tab._**

[<img src="assets/demo_video.png">](https://watch.screencastify.com/v/KOaLXR9Ffsl4moY9RI7Z "Meeter Demo Video")

#### Login Page:
![Login Page](assets/login.png)

#### Dashboard Page:
![Login Page](assets/dashboard.png)

#### Book A Meeting with Mentor:
![Login Page](assets/book_meeting.png)

#### Select Date and Time for Your Meeting:
![Login Page](assets/select_date.png)

#### Cancel Your Meeting
![Login Page](assets/cancel_meeting.png)

## View API calls executed in Swagger:
_**Use a CTRL+click (on Windows and Linux) or CMD+click (on MacOS) to open video in the new tab._**

[<img src="assets/mentor_api.png">](https://watch.screencastify.com/v/sXpJrzGhPZD0ivcz74qa "Mentor APIs")

[<img src="assets/mentee_api.png">](https://watch.screencastify.com/v/mGVxp3pliyFvPg2xav1E "Mentee APIs")

[<img src="assets/meeting_api.png">](https://watch.screencastify.com/v/JJvbCKe5PotJshv8SqYR "Meeting APIs")

##### Technologies used in this Project:
| Backend Server:  |Frontend UI: |
| ------------- | ------------- |
| NodeJS  | React |
| Express  | TypeScript |
| Postgres DB  | Axios |
| Liquibase - for database versioning and migration  | Bootstrap UI v5 |
| Sequelize - ORM (object relational model) tool for DB modelling and queries  | Node Sass |
| Swagger - for API Endpoints documentation and testing  |React Datepicker |
| Other tool: Linter, Prettier, UUID, etc..  | React Moment |











