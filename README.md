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
- use email user1@user1.com / password:user1@user1.com

### setup
nvm use 14
yarn install
yarn start
https://devcenter.heroku.com/articles/heroku-cli#download-and-install 

### cd yourproject and run
- `heroku create app-name --buildpack https://github.com/mars/create-react-app-buildpack.git`
- heroku will add heroku in front of the buld app build and deploy it.
- updated code must be in github master to be deployed to heroku
- `git push heroku master`

 
# Optional: Git + Heroku commands

- git push heroku master
Push your master branch to heroku 

2. Have sign-up(ed) for Heroku and logged-in via command-line:
$ heroku login // or you can do this online
Enter your Heroku credentials.
Email: user@example.com
Password:
Could not find an existing public key.
Would you like to generate one? [Yn]
Generating new SSH public key.
Uploading ssh public key /Users/adam/.ssh/id_rsa.pub


PART 2: but what does heroku and master indicate?

It is more of a Git question than Heroku - Heroku is a hosting platform, which depends on Git (Distributed Version Control System) for deployment.

The basic concept of 'push' is pushing some thing (file, app, ..) we have locally (in our working machine) to somewhere else, in this case to a remote repository (remote machine).

In Git before using 'push' we create a remote (handle) which acts as a reference to a remote repository (Complete URL), we do so using the following command:

$ git remote add <remote-name-of-our-choice> <URL-where-you-be-pushing-yourapp>
The basic structure of 'push' command is:

$ git push <remote-name> <branch>
So $ git push heroku master is actually pushing your code/app/file (from some local Git repo) to a remote repo 'heroku' .

wondering when this 'heroku' remote got created, it was added when you executed $ heroku create

$ heroku create
Creating stark-fog-398... done, stack is cedar
http://stark-fog-398.herokuapp.com/ | git@heroku.com:stark-fog-398.git
Git remote heroku added
Do notice the last line "Git remote heroku added".

to make it more clear, here's a Git command to check/output all the remotes: $ git remote -v will display something similar to the following

$ git remote -v
heroku     git@heroku.com:somerepo.git (fetch)
heroku     git@heroku.com:somerepo.git (push)
So we can assume that the following command was executed (implicitly) somewhere, when you did $ heroku create , hence creating the heroku remote to some heroku repo (url)*

$ git remote add heroku git@heroku.com:somerepo.git

