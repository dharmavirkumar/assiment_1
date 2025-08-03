// const Route = require("express")
const item =require("../Model/shema")
// const route = Route()

// route.get("/",(req,res)=>{
//     const interns = item.findOne();
//     res.render("dasebord",{interns})
// })
// route.get("/addname",(req,res)=>{
//     res.render("addname")
// })

// route.post("/addname",async(req,res)=>{
//     const {name,referralCode,donations} = req.body;

//     const user = new item({name,referralCode,donations});
//     user.save()
//     res.redirect("addname")

// })

// route.get("/leaderboard", async (req, res) => {    
//   const interns = await item.find().sort({ donations: -1 });
//   res.render("leaderbord", { interns });
// });

// route.get("/login",(req,res)=>{
//     res.render("login");

// })


// // POST login form submission
// route.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {

//     const user = await item.findOne({email})
//     if(!user || user.email !== email){
//         return res.send("User and Password not found")

//     }
//     res.redirect("/user/")

//   } catch (error) {
//     console.log(error)
    
//   }
    
    
// });



// route.get("/signup",(req,res)=>{
//     res.render("signup");

// })
// route.post("/signup",async(req,res)=>{
//     const{email,password,cpassword} = req.body;
    

//     if(password !== cpassword){
//         return res.send("Password not match");
//     }
//     try {
        
//     const user = new item({email,password,cpassword})
//     await user.save();
//     res.redirect("/user/");
//     } catch (error) {
//          res.status(500).send('Server error or user already exists');
//     }
    
    
// })

// module.exports = route;

const express = require("express");
const router = express.Router();

// Dummy data
const userData = {
  name: "Dharmavir Singh",
  referralCode: "dharmavir2025",
  donationsRaised: 5600
};

const leaderboard = [
  { name: "Alice", code: "alice2025", donations: 8000 },
  { name: "Dharmavir Singh", code: "dharmavir2025", donations: 5600 },
  { name: "Bob", code: "bob2025", donations: 3000 },
];

// Routes
router.get("/login", (req, res) => res.render("login"));
router.get("/signup", (req, res) => res.render("signup"));
router.get("/", (req, res) => {
  res.render("Dasebord", { user: userData });
});
router.get("/leaderbord", (req, res) => {
  res.render("leaderbord", { leaderboard });
});

module.exports = router;
