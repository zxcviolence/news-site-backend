const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  image: String,
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
