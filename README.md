## Study Buddy

# Summary 

Study Buddy is a an app that allows users to connect with people to study with. The app allows users to create and find meetups in their area where students are studying together. User can login with google to create an account. From there, the user can create their own meetups to help encourage others to come and study with them! Or they can simply wait for others to create a meetup and choose to go and study.

# Screen shots

Landing Page - Not logged in

![Landing Page not logged in](https://github.com/libbymiller09/studyBuddy-api/blob/master/images/LoggedOutLanding.png?raw=true)
* Landing Page where user can view what the app does
* User can choose to Login with Google

Landing Page - Logged in

![Landing Page logged in](https://github.com/libbymiller09/studyBuddy-api/blob/master/images/LoggedInLanding.png?raw=true)
* Once logged in the user can see full nav bar and choose to click on the meetups page 

Meetup Page - With no current entries

![Meetup Page blank](https://github.com/libbymiller09/studyBuddy-api/blob/master/images/MeetupPage.png?raw=true)
* Meetup Page with the form for adding a new meetup and blank list of meetups
* User can fill out the form to create a new meetup

Meetup Page - With listed meetups

![Meetup Page with list](https://github.com/libbymiller09/studyBuddy-api/blob/master/images/MeetupList.png?raw=true)
* Once user has created meetups they show up on the meetups page


# Demo

Here is the [Live App](https://FILLMEINPLEASE.herokuapp.com/).

# Tech Stack

* HTML
* CSS
* React.js
* Node.js
* Express
* MongoDB

# Testing

* Mocha
* Chai 
* Chai-http

# Version 2.0 Goals
* Allow users to view data from meetups on google map with markers
* Allow users to sign in with other oath's e.g. facebook or others
* Allow users to interact with other users through the app

# API Documentation
 GET /auth/google
  - allows user to login with google oath
  
 GET /auth/google/callback
  - runs from a successful login with google oath
  
 GET /api/logout
  - Logs out the current user
  
 GET /api/current_user
  - Gets data from current user for authorization purposes
  
 GET /api/meetups 
  - Renders list of currently scheduled meetups
  - Renders form for user to add meetups
  
 GET /api/meetups/:id
  - Gets the id of a meetup
  
 POST /api/meetups
  - Allows user to save meetup entry
  - Submits redux form data to database, rerenders the meetup list
  
 DELETE /api/meetups/:id
  - Deletes a single meetup entry
