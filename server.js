const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/static/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", req.path));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, () => {
    console.log("Server started and listening to::" + port);
});
