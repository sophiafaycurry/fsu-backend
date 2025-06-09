1. `npm install express@latest`
2. Add "name" to package.json
3. In package.json, `"type": "module"` allows us to use import/export syntax. You'll see `require` and `module.exports` in other example code.
4. Import, create, & export our Express app in `app.js`.
5. Import the app & have it listen on a port in `server.js`.
6. Run the server with `node server.js`. It will lock in the version of the code at that time, and will not respond to changes. You need to restart the server to see the changes you make.
7. To close the server, press `CTRL C` in your terminal.
8. Define routing middleware in `app.js`.
9. In `package.json`, add scripts for commonly run terminal commands.
10. We can now do `npm run dev` to automatically restart our server as we develop it.
