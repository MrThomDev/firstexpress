//pulling in the express library
const express = require("express");

//create a new instance of a server
const app = express();

app.use("/", express.static("images"));

app.use("/", (req, res) => {
  //   res.setHeader("Content-Type", //type);
  //This is the response that is sent
  res.send("<html><body>HELLO</body></html>");
});

//Where (the port) is the server listening. Here is port 8080.
app.listen(8080, () => {
  //When ever the server starts it calls this function
  console.log("Server is listening");
});
