const router = require("express").Router();
const Axios = require("axios");

router.get("/apiToken", async (req, res) => {
    try {
        let token = {};
        await Axios.post("https://api.petfinder.com/v2/oauth2/token",
            {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: "client_credentials"
            }
        ).then((res) => {
            token.tokenType = res.data.token_type;
            token.accessToken = res.data.access_token;
        })
        res.send(token);

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;
