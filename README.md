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
3. Run Backend server as a NodeJs App

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
Demo user login (without authentication)

![Login Page](assets/login.png)

#### Dashboard Page:
Upon logging in user gets redirected to the Dashboard page

![Login Page](assets/dashboard.png)

#### Booked Meetings
User can see the booked meetings table, with the date of the meeting, Mentor's name and when the meeting was booked.

![Booked Meetings](assets/booked_meetings.png)

### No Meetings Yet
If there are no meetings booked in the system, the User will see this message displayed:

![No Meetings](assets/no_meetings.png)


### Find a Mentor
Then User can check all available mentors and find a mentor, then click on the yellow Book a Meeting button on the Mentors card

![Mentors](assets/mentors.png)

#### Book A Meeting with Mentor:
The modal form to book a meeting with specific Mentor

![Book Meeting](assets/book_meeting.png)


#### Select Date and Time for Your Meeting:
User can select an available weekday and a timeslot for booking a meeting.
After clicking Book a Meeting button, the new meeting will be added to the database and appear in the table on the Dashboard

![Select Date](assets/select_date.png)

#### Cancel Your Meeting
User can cancel a meeting clicking on the Cancel button, the meeting will be deleted from the database and will disappear form the table.

![Cancel Meeting](assets/cancel_meeting.png)

## View API calls executed in Swagger:
_**Use a CTRL+click (on Windows and Linux) or CMD+click (on MacOS) to open video in the new tab._**

[<img src="assets/mentor_api.png">](https://watch.screencastify.com/v/sXpJrzGhPZD0ivcz74qa "Mentor APIs")

[<img src="assets/mentee_api.png">](https://watch.screencastify.com/v/mGVxp3pliyFvPg2xav1E "Mentee APIs")

[<img src="assets/meeting_api.png">](https://watch.screencastify.com/v/JJvbCKe5PotJshv8SqYR "Meeting APIs")

##### Technologies used in this Project:
| Backend Server:                                                             |Frontend UI: |
|-----------------------------------------------------------------------------| ------- |
| NodeJS                                                                      | React |
| Express                                                                     | TypeScript |
| Postgres DB                                                                 | Axios |
| Docker                                                                           | Bootstrap UI v5 |
| Liquibase - for database versioning and migration                           | Node Sass |
| Sequelize - ORM (object relational model) tool for DB modelling and queries |React Datepicker |
| Swagger - for API Endpoints documentation and testing                       | React Moment |
| Other tools: Linter, Prettier, UUID, etc..                                  | date-fns |











