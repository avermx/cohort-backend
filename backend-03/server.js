const express = require("express");

const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");
const app = express();

app.use(express.json())
connectToDB()


app.post('/notes',async (req,res)=>{
  const {title, content} = req.body
  console.log(title,content);
  await noteModel.create({
    title,content
  })
  
  res.json("Note Successfully Created")
})
// app.use(express.json());

// const notes = [];

// app.post("/home", (req, res) => {
//   console.log(req.body);
//   notes.push(req.body);
//   res.send("notes added");
// });

// app.get("/home", (req, res) => {
//   res.json(notes);
// });

// app.delete("/home/:index", (req, res) => {
//   let index = req.params.index;
//   delete notes[index];
//   res.send("deleted");
// });

// app.patch("/home/:index",(req, res) => {
//   const index = req.params.index;
//   const { target } = req.body;
//   notes[index].target = target;
//   res.send("hogaya");

// });
app.listen(3000, () => {
  console.log("server running on 3000 port");
});
