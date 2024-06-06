const app = require("express")();
const PORT = 8080;

app.get("/tshirt", (req, res) => {;
    //req is short for request which means incoming data
    //res is short for response which the data you want to send back to the client/user
    res.status(200).send({
        tshirt: "👕",
        size: "large" 
    });
});

app.listen (
     PORT,
     () => console.log(`it's alive on http://localhost:${PORT}`)
 )

