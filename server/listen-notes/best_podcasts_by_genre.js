const client = require("./client");
const router = require("express").Router();

router.get("/best_podcasts/:genre_id", async (req, res) => {
  const { genre_id } = req.params;
  try {
    const { data } = await client.fetchBestPodcasts({
      genre_id,
      page: 1,
      region: "us",
      sort: "listen_score",
      safe_mode: 1,
    });

    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
