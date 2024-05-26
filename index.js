const express=require("express");
const app=express();
const jobRoute=require("./routes/jobRoute.js");
const userRoute=require("./routes/user.route.js");
const applicationRoute=require("./routes/application.route.js");
const skillsRoute=require("./routes/skills.route.js");
const companyRoute=require("./routes/company.route.js");
const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/job",jobRoute);
app.use("/user",userRoute);
app.use("/application",applicationRoute);
app.use("/skills",skillsRoute);
app.use("/company",companyRoute)




app.listen(8800,()=>{
    console.log("Server is running on Port 8800")
})