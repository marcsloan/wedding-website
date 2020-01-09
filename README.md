## OVERVIEW

This was a personally designed website I made for my wedding in 2019. 

It's no longer hosted online but you can see what it looked like on `Website Screenshots.pdf`

# Design

Our wedding was festival themed and the core design revolved around a festival poster I had designed for our wedding. This can be seen as the homepage of the website. 

The functional parts of the website (RSVP, getting here etc) borrowed the same design, font, colours etc. 

# Setup

The infrastructure was set up by https://github.com/andrew0harney, it had a React frontend and Django backend, and was hosted on Heroku. 

## Django setup
        
        virtualenv -p python3.6 .venv
        source .venv/bin/activate
        pip install -r requirements.txt
        python manage.py migrate
        

## Node
        
        npm install

## Heroku Setup
       Install CLI
       https://devcenter.heroku.com/articles/getting-started-with-python#set-up      
       
       Conifigure
       heroku login
        
# Local Testing

    1. source .venv/bin/activate
    2. [optional] pip install -r requirements.txt
    3. [optional] python manage.py makemigrations
    4. [optional] python manage.py migrate
    5. npx webpack --mode development ./frontend/src/index.js --output ./frontend/static/frontend/main.js
    6. python manage.py collectstatic --no-input
    7. heroku local
    
    
        
# Deploying
1. `git add` Add changes and `git push` to master
2. Check the deploy status `https://dashboard.heroku.com/apps/marcsloan`
 
