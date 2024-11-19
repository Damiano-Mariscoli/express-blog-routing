const express = require("express");
const app = express();
const port = 3000;
const posts = [
  { title: "", content: "", img: "./public/images/ciambellone.jpeg", tags: ["", "", ""] },
  { title: "", content: "", img: "./public/images/cracker_barbabietola.jpeg", tags: ["", "", ""] },
  { title: "", content: "", img: "./public/images/pane_fritto_dolce.jpeg", tags: ["", "", ""] },
  { title: "", content: "", img: "./public/images/pasta_barbabietola.jpeg", tags: ["", "", ""] },
  { title: "", content: "", img: "./public/images/torta_paesana.jpeg", tags: ["", "", ""] },
];


app.use(express.static('public'))

app.get("/bacheca", (req, res) => {
    const postCount = posts.length;
    res.json({ posts: posts, count: postCount });
});

app.listen(port, () => {
  console.log("server");
});
