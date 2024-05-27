const express = require("express");
const dal = require ("./DAL").DAL;
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/collections", async (req, res) => {
    try{
        const getCollection = await dal.getBook() && dal.getComic() && dal.getGame() && dal.getVinyl();
        return res.json(getCollection);
    }
    catch (e) {
        console.log(e);
    }
});


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});