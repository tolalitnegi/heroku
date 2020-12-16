# Heroku deployment

- heroku-react-app-lalit
https://lalit-react.herokuapp.com/ 

## firebase config
```
const config = {
  apiKey: "AIzaSyDouYv9znYuedlBDK8CrfiGnRM9HVOBse0",
    authDomain: "app-grpql.firebaseapp.com",
    projectId: "app-grpql",
    storageBucket: "app-grpql.appspot.com",
    messagingSenderId: "448271751409",
    appId: "1:448271751409:web:0f3b07e8525fbe12a33150"
}
```

### login
- create a new user using signup and login

### setup
nvm use 14
yarn install
yarn start
https://devcenter.heroku.com/articles/heroku-cli#download-and-install 

### cd yourproject and run
- `heroku create app-name --buildpack https://github.com/mars/create-react-app-buildpack.git`
- heroku will add heroku in front of the buld app build and deploy it.
- `git push heroku master`

