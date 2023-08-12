const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const AppRouter = require("./routes/AppRoutes");

// enable cors
app.use(cors());

// enable post data
app.use(express.json()); // '{abc:10,xyz:123}'  ==> {abc:10,xyz:123}// allow row i.e json data
app.use(express.urlencoded({ extended: false })); // enable form data
// abc=10&xyz=123 ==> {abc:10,xyz:123}
// extended: false ==> will not allow parma or query params
//add routes
app.use("/api", AppRouter);

const PORT = 3040;
const MONGO_DB_URI =
  "mongodb+srv://souvik2018roy:7BRMTXpQgwK6mPvI@cluster0.a8clkoy.mongodb.net/zomatoDB";
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("db connected successfully");
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
