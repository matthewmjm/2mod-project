# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
GitFit Workout Tracker
A great new workout tracking app.
Guide
Basic Info
Demo
Supporting Technologies
Install and Setup
Features
Status
Contact
License
1. Basic Info
GitFit is a workout tracking app that helps you track your gym sessions and make progress toward your fitness goals. The app is simple and intuitive to help its users stay focused on getting fit. Each user has a unique profile where their gym sessions are logged and their fitness goals can be updated as they are achieved.
2. Demo
Here's a video demo of 
GitFit
 on YouTube.
3. Supporting Technologies
Ruby -> 2.6.1
ActiveRecord -> 6.0
Sinatra-ActiveRecord -> 2.0
Rake -> 13.0
SQLite3 -> 1.4
tty-prompt
tty-font
tty-progressbar
tty-table
4. Install and Setup
To run GitFit clone it from the GitHub repository and install locally.
Run commands:
rake db:migrate
bundle install
5. Features
Create new Member Profile
See Member Profile
Edit Member Profile
Select Workout
Delete Member Profile
def self.create_new
  name = self.ask_for_name
  goal = self.ask_for_goal
  Member.create(:name=>name, :goal=>goal)
end 
def workout
  bar = TTY::ProgressBar.new($pastel.green("Work out in progress [:bar]"), total: 30)
  30.times do
    sleep(0.1)
    bar.advance(1)
  end
  puts $pastel.green("Great job! You finished your workout.")
end
def display_member_workouts_table
  hash = {}
  workout_array = self.workouts.map(&:body_part)
  workout_array.each { |value| hash[value] ? hash[value] += 1 : hash[value] = 1 }
  table = TTY::Table.new ['Body Part','Workouts Completed'], 
hash.to
_a
  $pastel.cyan.bold(table.render(:ascii))
end
6. Status
Current status: Functional MVP completed
To-do's:
 fix member sign in
 add styling
 complete documentation
 make demo video
 include descriptions of exercises (maybe with pictures or videos)
7. Contact
GitFit was created by 
Michael Navoy
, 
Brian Gordon
, and 
Derek Turner
.
8. License
Click here to view