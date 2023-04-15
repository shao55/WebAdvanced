import mongoose from "mongoose";
import express from "express";

try {
  await mongoose.connect("mongodb://127.0.0.1:27017/university");
} catch (err) {
  console.log("Connection to DB refused");
  console.error(err);
  // gracefull shutdown
  process.on("SIGINT", async () => {
    await mongoose.disconnect();
    process.exit();
  });
}

const app = express();

const facultySchema = await mongoose.Schema({
  name: { type: String, enum: ["Engineering", "Law", "Economics"] },
  capacity: { type: Number, min: 10, max: 100 },
});

const studentsSchema = await mongoose.Schema({
  name: String,
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
});

const Faculty = await mongoose.model("Faculty", facultySchema);
const Student = await mongoose.model("Student", studentsSchema);

// const newFaculty = await new Faculty({
//   name: "Law",
//   capacity: 100,
// });
// await newFaculty.save();

// const newStudent = await new Student({
//   name: "Zhanar",
//   faculty: newFaculty._id,
// });
// await newStudent.save();
// console.log(newStudent.faculty);

app.get("/students/:facultyName", async (req, res) => {
  const facultyID = req.params.ID || "Law";

  //First try
  //   const faculty = await Faculty.find({ name: facultyName });
  //   const result = await Student.find({ faculty });

  //Second try
  //   const faculty = await Faculty.findById("64380e5df2605f3f197c6e58");
  //   const result = await Student.find({ faculty: faculty._id });

  //Third try
  //   const result = await Student.find({ faculty: "64380e5df2605f3f197c6e58" });
  const result2 = await Student.where("faculty").equals(
    "64380e5df2605f3f197c6e58"
  );
  res.send(result2);
});

app.listen(8000, () => {
  console.log("app is listening on port 8000");
});

//  Gracefull shutdown for express;
