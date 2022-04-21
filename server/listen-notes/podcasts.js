const client = require("./client");
const router = require("express").Router();

router.get("/podcasts/:id", async (req, res) => {
  let response;
  try {
    const { id } = req.params;
    console.log(id);
    response = await client.fetchPodcastById({
      id
    });
    console.log(response);
    return res.status(200).json({ ...response.data });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
