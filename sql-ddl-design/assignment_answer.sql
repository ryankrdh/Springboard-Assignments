
https://app.quickdatabasediagrams.com/#/

------------------------------------------

# Part One: Medical Center

# Design the schema for a medical center.

# A medical center employs several doctors
# A doctors can see many patients
# A patient can be seen by many doctors
# During a visit, a patient may be diagnosed 
# to have one or more diseases.

Doctor
-
id PK int
name string

Patient
-
id PK int
name string
patient_information string

Diagnosis
-
id PK int
name string
disease_id int FK >- Disease.id

Disease
-
id PK int
name string
disease_information string

Appointment
-
id PK int
doctor_id int FK >- Doctor.id
patient_id int FK >- Patient.id
diagnosis_id int FK >- Diagnosis.id


--------------------------------------------------

# Part Two: Craigslist
# Design a schema for Craigslist! 
# Your schema should keep track of the following

# The region of the craigslist post 
# (San Francisco, Atlanta, Seattle, etc)

# Users and preferred region

# Posts: contains title, text, the user who has posted, 
# the location of the posting, the region of the posting

# Categories that each post belongs to

Region
-
id PK int
name string

Users
-
id PK int
username string
user_information string
region_id int FK >- Region.id

Posts
-
id PK int
title string
text string
location string
user_id string FK >- Users.id
region_id string FK >- Region.id
categories_id string FK >- Categories.id

Categories
-
id PK int
category_name string


--------------------------------------------------

# Part Three: Soccer League
# Design a schema for a simple sports league. Your schema should keep track of

# All of the teams in the league
# All of the goals scored by every player for each game
# All of the players in the league and their corresponding teams
# All of the referees who have been part of each game
# All of the matches played between teams
# All of the start and end dates for season that a league has
# The standings/rankings of each team in the league 
# (This doesn’t have to be its own table if the data can be captured somehow).


Teams
-
id PK int
team_name string

Players
-
id PK int
player_name string
team_id int FK >- Players.id

Goals
-
id PK int
player_id int FK >- Players.id
match_id int FK >- Matches.id

Matches
-
id PK int
team_one_id int FK >- Teams.id
team_two_id int FK >- Teams.id
location
date
referee_id int FK >- Referees.id
season_id int FK >- Season.id

Referees
-
id PK int
name string

Season
-
id PK int
start_date
end_date

Rankings
-
id PK int
team_id int FK >- Teams.id
match_id int FK >- Matches.id
result
