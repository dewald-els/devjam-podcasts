const client = require("./client");
const router = require("express").Router();

router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const { data } = await client.search({
      q: query,
      sort_by_date: 0,
      type: "episode",
      offset: 0,
      len_min: 10,
      len_max: 30,
      language: "English",
      only_in: "title,description,author",
      safe_mode: 1,
    });

    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
