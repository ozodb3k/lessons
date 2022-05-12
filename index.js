const express = require("express");

const path = require("path");

const app = express();

app.use(express.json());

const lessons = [
  {
    cat: "web",
    lessons: [
      {
        title: "Web Development Full Course - 10 Hours",
        url: "https://www.youtube.com/embed/Q33KBiDriJY",
      },
      {
        title: "Learn HTML & CSS in 60 Minutes",
        url: "https://www.youtube.com/embed/-G7bJVAIiEI",
      },
      {
        title: "Python Web Development | Web Development Using Django",
        url: "https://www.youtube.com/embed/zuxzE7--RYM",
      },
      {
        title: "Web Development Full Course (Front End)",
        url: "https://www.youtube.com/embed/TdqQqyc7pfU",
      },
      {
        title: "5 Front-end Development Skills",
        url: "https://www.youtube.com/embed/-_X6PhkjpzU",
      },
      {
        title: "HTML Tutorial for Beginners",
        url: "https://www.youtube.com/embed/qz0aGYrrlhU",
      },
      {
        title: "How to create a registration form using HTML and CSS",
        url: "https://www.youtube.com/embed/nbLEaT3H-Lw",
      },
    ],
  },
  {
    cat: "android",
    lessons: [
      {
        title: "Android Development for Beginners",
        url: "https://www.youtube.com/embed/fis26HvvDII",
      },
      {
        title: "Android Studio Tutorial (2021 Edition)",
        url: "https://www.youtube.com/embed/kMI2jy-WlGM",
      },
      {
        title: "Android Full Course - Learn Android in 9 Hours",
        url: "https://www.youtube.com/embed/aS__9RbCyHg",
      },
      {
        title: "How I Made My First Android App in 2 Days",
        url: "https://www.youtube.com/embed/JhSa5aKDKMI",
      },
      {
        title: "Android Tutorial for Beginners 1",
        url: "https://www.youtube.com/embed/EknEIzswvC0",
      },
      {
        title: "The Complete Android App Development",
        url: "https://www.youtube.com/embed/KsNabzrQca8",
      },
      {
        title: "Android Development(Kotlin)",
        url: "https://www.youtube.com/embed/BCSlZIUj18Y",
      },
      {
        title: "Android Studio For Beginners Part 1",
        url: "https://www.youtube.com/embed/dFlPARW5IX8",
      },
      {
        title: "The Complete Android App Developer Course",
        url: "https://www.youtube.com/embed/NLvaOL6Cm48",
      },
    ],
  },
  {
    cat: "ios",
    lessons: [
      {
        title: "iOS Development Course",
        url: "https://www.youtube.com/embed/KCgYDCKqato",
      },
      {
        title: "Why I *highly dislike* iOS Development",
        url: "https://www.youtube.com/embed/JjwXgu56Nr8",
      },
      {
        title: "The Complete iOS 13 App Development Course",
        url: "https://www.youtube.com/embed/UNH0bE4zPtY",
      },
      {
        title: "How To Become a self-taught iOS Developer in 2022",
        url: "https://www.youtube.com/embed/m1XXjqej3OY",
      },
      {
        title: "iOS —App Development: UIKit dan SwiftUI gacha",
        url: "https://www.youtube.com/embed/DbfpeJ4xw_k",
      },
      {
        title: "IOS yoki Android development qay birini o`rganay?",
        url: "https://www.youtube.com/embed/bzv3_1zT5MY",
      },
      {
        title: "Flutter E-commerce App With Backend",
        url: "https://www.youtube.com/embed/7dAt-JMSCVQ",
      },
      {
        title: "Tutorial 01: What is iOS, App Bundle and Folder",
        url: "https://www.youtube.com/embed/Zu7E2VL2xa0",
      },
    ],
  },
  {
    cat: "smm",
    lessons: [
      {
        title: "SMM | #1 - DARS | MyMedia",
        url: "https://www.youtube.com/embed/u_8uDiVV1tg",
      },
      {
        title: "SMM | #2 - DARS | MyMedia",
        url: "https://www.youtube.com/embed/510XamUjhgU",
      },
      {
        title: "SMM | #3 - DARS | MyMedia",
        url: "https://www.youtube.com/embed/BL4KAHfTWw0",
      },
      {
        title: "SMM | #4 - DARS | MyMedia",
        url: "https://www.youtube.com/embed/BIfTKU8zfzo",
      },
      {
        title: "SMM | #5 - DARS | MyMedia",
        url: "https://www.youtube.com/embed/i8LqYgESDpg",
      },
      {
        title: "SMM | #7 - DARS | MyMedia",
        url: "https://www.youtube.com/embed/Dp2FsCHzXcY",
      },
      {
        title: "SMM sohasini bitirib oyiga 1000$ pul topishim mumkinmi ?",
        url: "https://www.youtube.com/embed/",
      },
      {
        title: "ADS manager'da reklama berish messenger usulida",
        url: "https://www.youtube.com/embed/",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "public", "index.html"));
});

app.get("/admin", (req, res) => {
  res.sendfile(path.join(__dirname, "public", "admin.html"));
});

// search
app.get("/search", (req, res) => {
  const data = req.query;

  if (data.cat) {
    const cat = lessons.filter((item) => item.cat === data.cat);
    res.send(cat[0].lessons);
  } else {
    res.status(400).send("400 bad request");
  }
});

// add
app.post("/add", (req, res) => {
  const data = req.body;

  console.log(data);

  lessons.forEach((lesson) => {
    if (lesson.cat == data.cat) {
      lesson.lessons.push({
        title: data.title,
        url: data.url,
      });
    }
  });
});

try {
  const port = process.env.port || 5000;
  app.listen(port, () => {
    console.log("Server listening on " + port);
  });
} catch (error) {
  console.log(error());
}
