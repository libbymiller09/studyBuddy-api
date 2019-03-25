# Study Buddy

# Summary 

Study Buddy is a an app .....concise explanation of what your app does. Try to frame this from the standpoint of what the user does, or what the app enables for the user.
ScreenShots of app go here!

# Screen shots

Landing Page - Not logged in

![Landing Page not logged in](/studyBuddy-api/images/ "LoggedOutLanding.png")

Landing Page - Logged in

![Landing Page logged in](/studyBuddy-api/images/ "LoggedInLanding.png")

Meetup Page - With no current entries

![Meetup Page blank](/studyBuddy-api/images/ "MeetupPage.png")

Meetup Page - With listed meetups

![Meetup Page with list](/studyBuddy-api/images/ "MeetupList.png")


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
