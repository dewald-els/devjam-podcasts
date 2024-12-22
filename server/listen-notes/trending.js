const client = require("./client");
const router = require("express").Router();

router.get("/trending", async (req, res) => {
	try {
		const { data } = await client.fetchTrendingSearches({
			page: 1,
		});
		return res.status(200).json({ ...data });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
});

module.exports = router;
