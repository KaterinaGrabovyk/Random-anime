import express from "express"
import axios from "axios"

const port=3000;
const app=express();

app.use(express.static("public"));

app.get("/",async(req,res)=>{
    let random=Math.floor(Math.random()*10056)+1;    
    console.log(`anime id: ${random}`)
    try {
        const response = await axios.get("https://kitsu.io/api/edge/anime/"+random);
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