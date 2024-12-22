const { Client } = require("podcast-api");
const dotenv = require("dotenv");

dotenv.config();

module.exports = Client({
	apiKey: process.env.LISTEN_NOTES_API_KEY || undefined,
});
