const express = require("express");
const app = express();
const port = 3011;
const cors = require("cors");
app.use(cors());


const nav =[
    {id : "1", title : "All"},
    {id : "2", title : "coke studio"},
    {id : "3", title : "UX"},
    {id : "4", title : "Case study"},
    {id : "5", title : "Music"},
    {id : "6", title : "bnagla lofi"},
    {id : "7", title : "Tour"},
    {id : "8", title : "Saintmartin"},
    {id : "9", title : "Tech"},
    {id : "10", title : "iphone 13"},
    {id : "11", title : "User Interface Design"},
    {id : "12", title : "computer"},
]



app.get('https://yt-backend-3w3m.onrender.com/nav', (req,res)=>{
    res.json(nav);
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});