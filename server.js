const express = require("express");
const app = new express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const articleInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
    const db = client.db("mernBlog");
    await operations(db);
    client.close();
  } catch (error) {
    res.status(404).json({
      message: "Not Found!",
    });
  }
};

//routes
app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});
app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articlesName = req.params.name;
//   articleInfo[articlesName].comments.push({ username, comment });
//   res.status(200).send(articleInfo[articlesName]);

    withDB(async(db) =>{
        const articleInfo = await db.collection('articles').findOne({name: articlesName})
        await db.collection('articles').updateOne({name: articlesName}, {
            $set: {
                comments: articleInfo.comments.concat({username, text})
            }
        })
        const updateArticleInfo = await db.collection('articles').findOne({name: articlesName})
        res.status(201).json(updateArticleInfo)
    }, res)
    
});

//server
app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
