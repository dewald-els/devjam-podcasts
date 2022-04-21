const client = require("./client");
const router = require("express").Router();

router.get("/curated_podcasts", async (req, res) => {
  try {
    const { data } = await client.fetchCuratedPodcastsLists({
      page: 1,
    });
    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.get("/curated_podcasts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await client.fetchCuratedPodcastsListById({
      id,
    });
    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
