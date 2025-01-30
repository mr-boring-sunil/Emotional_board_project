const express=require("express");
const { request } = require("http");
const app=express();
app.set("view engine","ejs");
const mongoose=require("mongoose");
var flash = require('connect-flash');
const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
const Note=require("./models/note.js");
const {motivational,data}=require("./models/mtv.js");
const note = require("./models/note.js");
app.use(express.urlencoded({extended:true}));
const session = require('express-session');
const {check}=require("./data.js");
app.use(session({
  secret: 'your-secret-key', // Replace with a strong secret key
  resave: false,             // Prevents session being saved repeatedly if not modified
  saveUninitialized: true,   // Forces a session to be saved uninitialized
  cookie: {                  // Configures the session cookie
    maxAge: 6000,           // Expiry time in milliseconds (e.g., 60 seconds here)
    secure: false            // Set to true in production for HTTPS-only cookies
  }
}));
 app.use(flash());

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/note');
}
main()
.then((res)=>{
  console.log("connection is established");
})
.catch((err)=>{
  console.log(err);
})

app.get("/login",(req,res)=>{
  let msg=req.flash("msg");
  res.render("login.ejs",{msg});
})


app.post("/home/login",async(req,res)=>{
  const {username,password}=req.body;
  const user=await Note.find({username:username});
  console.log(user);
  if(user.length>0){
    if(user[0].password==password){
      console.log("you are right");
      res.redirect(`/home/${user[0]._id}`);
    }
    else{
      req.flash("msg","you entered the wrong password");
      res.redirect("/login");
     }
   }
   else{
    req.flash("msg","no username found !");
      res.redirect("/login");
    }
  }
)
app.get("/home/:id",async (req,res)=>{
  //roadom motivational quotes
  const a=Math.floor(Math.random()*100)+1;
  const quote=await motivational.findOne({no:a});
  //finding the user
  const {id}=req.params;
 const user=await Note.find({_id:id});
 //const data=user[0]["stickynote"];
res.render("home.ejs",{quote,user});
})

// const sampleUser = new Note({
//   username: "sampleuser",
//   password: "sampleuser@123",
//   stickynote: [
//     { description: "Learn JavaScript basics" },
//     { description: "Complete backend project" },
//     { description: "Prepare for coding interview" },
//     { description: "Study MongoDB and Mongoose" },
//     { description: "Work on personal portfolio" },
//     { description: "Practice problem-solving on LeetCode" },
//     { description: "Read about REST APIs" },
//     { description: "Write a blog about web development" },
//     { description: "Watch a tutorial on Docker" },
//     { description: "Improve debugging skills" }
//   ]
// });

// //Save the user to the database
// sampleUser.save()
//   .then((res) => {
//     console.log("User and sticky notes saved successfully:", res);
//   })
//   .catch((err) => {
//     console.error("Error saving user:", err);
//   });



app.get("/newuser",(req,res)=>{
  res.render("newuser.ejs");
})

app.post("/newuser/add",async (req,res)=>{
  const {username,password}=req.body;
  const sampleUser = new Note({
  username: username,
  password: password,
  stickynote: []
});
let id;
//Save the user to the database
await sampleUser.save()
  .then((res) => {
    id=res._id;
    console.log("User and sticky notes saved successfully:", res);
  })
  .catch((err) => {
    console.error("Error saving user:", err);
  });
 await res.redirect(`/home/${id}`);
})


app.get("/home/:id/delete/:id1",async (req,res)=>{
  const {id,id1}=req.params;
  console.log(id,id1);
  const user= await Note.updateOne({_id:id},{$pull:{stickynote:{_id:id1}}});
  res.redirect(`/home/${id}`);
})

app.post("/home/add/:id",async (req,res)=>{
  const feeling = req.body.feeling;
  const type=await check(feeling);
  console.log(type);
  const newsticky={
    description:feeling,
    created_at:new Date(Date.now()).toString(),
    type: type
  }
  const {id}=req.params;
  console.log(id);
  const user=await Note.find({_id:id});
  console.log(user);
  user[0].stickynote.push(newsticky);
  const saved=await user[0].save();
  
res.redirect(`/home/${id}`);
})





app.use((req,res,next)=>{
  res.redirect("/login")
})    



app.listen(8000,(req,res)=>{
  console.log("app is listing");
})


