const express = require("express");

let app = express();
let port = 3000;

app.listen(port, () => {
    console.log(".+* Back listening on port <" + port + "> *+.")
})