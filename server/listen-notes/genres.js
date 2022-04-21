const client = require("./client");
const router = require("express").Router();

router.get("/genres", async (req, res) => {
  try {
    const { data } = await client.fetchPodcastGenres({
      top_level_only: 1,
    });
    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
