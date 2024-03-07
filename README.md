#Microservice 2

**ISBN Amazon Link Microservice**

1. Languages: Java, Node.js (Import axios for the HTTP Req)

**To REQUEST DATA:**
   - The request method depends on the chosen communication pipe, typically using HTTP requests from the browser to the server.
   - However, the communication pipe utilizes a txt file, so as long as the txt file contains text, the microservice should be activated.

**Process in between (activate microservice):**
   - Read from the txt file the ISBN that was pasted from the server.
   - Generate the Amazon link (Uses a local variable to save the ISBN).
   - Delete the content of the txt file.
   - Write in the txt file the Amazon Link.

**To make the microservice, you will need:**
   - Install Node.js.
   - Create a directory
     ```
     mkdir isbnTestLink
     ```
   - Open the terminal to navigate to the directory you just created that contains `testingLink.js` and `isbnPipeLine.txt`.
   - Run the following commands in the terminal:
   - To create the node app run this
     ```
     npm init
     ```
     Click yes in all of the options. Then your folder should contain package-lock.json and package.json
     I use express package so the next command should be
     ```
     npm i express
     ```
     You can add more packages if you would like to.
     This should get you started with the app so now you can install the app, install axios and debug your code with this other commands:
     ```
     npm install
     ```
     (This should install node_modules, package-lock.json, and package.json)
     ```
     npm install axios
     ```
     ```
     node testingLink.js
     ```

**To RECEIVE data:**
   - Once the ISBN Link is in the `isbnPipeLine.txt`, the server should be able to read from the file and return an HTTP response that contains the link back to the client.

**Heads Up:**
   - For this microservice to work, you need to download Node.js and axios. Regardless of the server request, the microservice will only work with an ISBN in the `isbnPipeLine.txt`.

![Sequence Diagram Interaction Use Example](https://github.com/michellenieto5/Microservice2/assets/114846462/43def2b2-c55e-4d6b-a5e2-374ae645c954)
