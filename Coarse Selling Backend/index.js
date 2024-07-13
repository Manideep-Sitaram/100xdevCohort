const express = require("express")
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

const app = express()

app.use(express.json())
app.use("/admin",adminRouter)
app.use("/user",userRouter)

app.listen(3000, () =>{
    console.log("The Server is running on PORT 3000");
})