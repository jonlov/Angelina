Angelina Website
==

Angelina Website was develop as a landing page using JQuery, HTML5, CSS3, GULP and PHP.

It has a script in php to download mp3 files and send mails via a form thru AJAX.

## Installation

To run this project local, clone the git and then inside the folder with the terminal run **(If you dont have nodejs installed, install it first)**

```
npm install
```

that's it! Now you can run the "Start Server" bash file if you are on a mac or just run in the terminal (In the git clone folder)

```
node_modules/grunt-cli/bin/grunt
```

the server will start at [localhost:8080][] and it will watch for code changes and reload automatically, **you don't need to restart the server everytime you change something**.

IMPORTANT !!!!
==
* If you install a new bower dependency and you want to load it in the "index.html" file, just open the "pipeline.js" file inside the "tasks" folder and add the bower css and js files there.

	**PLEASE DON'T ADD THE JAVASCRIPT SCRIPTS AND CSS LINKS DIRECTLY TO THE "INDEX.HTML" FILE.**


* The "assets" folder is where all the public files go, do not try to put new files outside the "assets" folder.

# License

This project is licensed under [MIT][].

[localhost:8080]: http://localhost:8080/
[MIT]: https://github.com/jonlov/Angelina/blob/master/LICENSE
