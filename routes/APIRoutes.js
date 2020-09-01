const router = require("express").Router();
const Axios = require("axios");

router.get("/apiToken", async (req, res) => {
    try {
        let token = {};
        await Axios.post("https://api.petfinder.com/v2/oauth2/token",
            {
                client_id: "txUGcDgrbRsp2doKqVPp2Sepsj1SPDM0nhw9fSUF1chbfRQcar",
                client_secret: "zwDXZ52l0IUqQQxcuzxdb7S3wtAdg6X0pQXvnogm",
                grant_type: "client_credentials"
            }
        ).then((res) => {
            token.tokenType = res.data.token_type;
            token.accessToken = res.data.access_token;
            // return { tokenType: res.data.token_type, accessToken: res.data.access_token }
        })
        res.send(token);

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;
