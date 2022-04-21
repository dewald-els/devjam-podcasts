const client = require("./client");
const router = require("express").Router();

router.get("/episodes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await client.fetchEpisodeById({
      id,
      show_transcript: 1,
    });
    return res.status(200).json({ ...data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
