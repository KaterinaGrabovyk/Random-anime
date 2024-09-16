import express from "express"
import axios from "axios"

const port=3000;
const app=express();

app.get("/",async(req,res)=>{
    let random=Math.floor(Math.random()*10056)+1;
    try {
        const response = await axios.get("https://kitsu.io/api/edge/anime/"+random);
        console.log(`anime id: ${random}`)
        const result = response.data;
        res.render("index.ejs", { dani: result.data});
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });