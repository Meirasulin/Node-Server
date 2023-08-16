const express = require("express");
const app = express();
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const PORT = 9;
app.use(express.json());


const users = [
  {
    id: uuid.v4(),
    email: "meir@com",
    password: bcrypt.hashSync("meirPassword", 10),
  },
  {
    id: uuid.v4(),
    email: "israel@com",
    password: bcrypt.hashSync("israelPassword", 10),
  },
  {
    id: uuid.v4(),
    email: "david@com",
    password: bcrypt.hashSync("davidPassword", 10),
  },
];



// הצגת כל המשתמשים הקיימים במערך
app.get("/users", (req, res) => {
  res.send(users);
});
// הצגת משתמש בודד לפי id
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((e) => e.id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("Error");
  }
});
// הוספת משתמש עם בקשת post + בדיקה אם קיים id זהה
app.post("/add-user", (req, res) => {
  const newUserData = req.body;
  const newUser = {
    id: uuid.v4(),
    email: newUserData.email,
    password: bcrypt.hashSync(newUserData.password, 10),
  };
  //   בדיקה למקרה הזוי שיצא id זהה
  const fildeId = users.find((user) => user.id === newUser.id);
  if (fildeId) {
    res.status(510).send("filde ID: please try again");
  } else {
    users.push(newUser);
    res.send(users);
  }
});
// מחיקת משתמש עם בקשת delete
app.delete("/delete/:userId", (req, res) => {
  const userIdToDelete = req.params.userId;
  const findUserId = users.find((user) => user.id === userIdToDelete);
  const userIndex = users.indexOf(findUserId);
  if (!findUserId) {
    return res.status(404).json({
      status: "fail",
      message:
        "No user object with ID " + userIdToDelete + " is found to delete",
    });
  } else {
    users.splice(userIndex, 1);
    res.send(users);
  }
});
// בדיקת התחברות לפי מייל וסיסמה
app.post("/log-in", (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.password;
    const logIn = users.find((user) => user.email === email);
    const isVaild = bcrypt.compareSync(pass, logIn.password);
    if (!logIn) {
      throw new Error();
    } else {
      if (isVaild) {
        res.send("User is connected");
      } else {
        return res.status(404).json({
          status: "fail",
          message: "Invalid password",
        });
      }
    }
  } catch (Error) {
    res.status(404).json({
      status: "fail",
      message: "Invalid user",
    });
  }
});




app.listen(PORT, () => {
  console.log(`server run on: ${PORT}`);
});
