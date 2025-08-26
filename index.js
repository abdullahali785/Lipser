import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const apiUrl = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios(apiUrl + "/random");
        res.render("index.ejs", {
            secret: response.data.secret,
            user: response.data.user
         });
    } catch (error) {
        console.log("Error: " + error.response.data);
    }
});

app.listen(port, (req, res) => {
    console.log(`Server has started on port ${port}.`);
});
