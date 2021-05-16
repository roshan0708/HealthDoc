<p align="center">
  <img src="https://user-images.githubusercontent.com/60403638/118405967-e7c9a180-b697-11eb-9220-c7e534c4afe0.png" alt="Sublime's custom image"/>
  <h1 align="center">Project HealthDoc</h1>
  <p align="center">
    Bridging the gap between Patients and Doctors 
    <br />
    <a href="https://healthdoc.herokuapp.com/"><strong>Visit the website »</strong></a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Predictions](#predictions)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Future Updates](#future-updates)


## About The Project

<img src="https://user-images.githubusercontent.com/60403638/118406404-93272600-b699-11eb-8609-3e222af021b1.png" alt="project_img" />

The aim of **Project HealthDoc** is to make the interaction of patients and doctors **seamless**, **convenient** and **more organized**. This platform is built keeping in mind the problems and hassles one has to face while using any medical facility via hospitals.

:face_with_thermometer: **Here's what we provide for patients**:

:dna: Disease prediction services

:page_facing_up: Doctor appointment booking (Future Endeavour)

:pill: Generic drugs to brand name converter & recommendation system (Future Endeavour)


## Predictions

We used Random Forest Regression to train our models which predicts Heart and Liver Disease with accuracy of >90% for both.


## Built With

<p float = "left">

<img alt="SCSS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />

<img alt="JS" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">

<img alt="MUI" src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />

<img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white" />

<img alt="Redux" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />

<img alt="Nodejs" src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />

<img alt="Express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" />

<img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white" />

<img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" />

<img alt="Django" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" />

<img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />

</p>

## Getting Started

Follow these simple steps to run the project locally:

### Prerequisites

- Node.js
- Python 3.8+
- Yarn (we have used yarn for this project)

### Installation

#### Django API

1. Clone the repo

   ```
   git clone https://github.com/roshan0708/HealthDoc
   ```
   
2. Install requirements

   ```
   cd DjangoAPI
   pip3 install -r requirements.txt
   ```
   
3. Start the server (by default it listens to `http://127.0.0.1:8000/`)

   ```
   python manage.py runserver
   ```

#### React + Node

1. Install React and Node modules

   ```
   cd ..   (only if not in root directory)
   yarn install
   cd client
   yarn install
   ```
   
2. Create a `.env` file in the root directory of the project. Add environment-specific variables on new lines in the form of `NAME=VALUE` by following same structure as provided in `env.example` file

   ```dosini
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.cqdyk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    JWT_SECRET=jwtSecretkey
    SALT_ROUNDS=number_here
    EXPIRES_IN=jwtexpirytime

    # wrap SALT_ROUNDS inside Number() when using like this Number(SALT_ROUNDS)
   ```

3. Run the following command in the root directory to start the project

   ```
   yarn develop
   ```
   
🤩Viola! Project starts running at `localhost:5000`

## Future Updates

- Appointment System
- Generic Medicine Name List
- More models for disease prediction
- Improve UI/UX overall
- Enable PWA

And More! There's always room for improvement!
