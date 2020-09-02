const router = require("express").Router();
const Axios = require("axios");
const auth = require("../middleware/auth");
const Pet = require("../models/petModel.js");
const { route } = require("./userRoutes");

router.get("/apiToken", async (req, res) => {
  try {
    let token = {};
    await Axios.post("https://api.petfinder.com/v2/oauth2/token", {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "client_credentials",
    }).then((res) => {
      token.tokenType = res.data.token_type;
      token.accessToken = res.data.access_token;
    });
    res.send(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/addPet", auth, async (req, res) => {
  try {
    const {
      name,
      age,
      weight,
      breed,
      color,
      gender,
      birthday,
      microchip,
      vaccines,
      allergies,
      rabies,
    } = req.body;

    //validate

    if (!name)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newPet = new Pet({
      name,
      age,
      weight,
      breed,
      color,
      gender,
      birthday,
      microchip,
      vaccines,
      allergies,
      rabies,
      userId: req.user,
    });
    const savedPet = await newPet.save();
    res.json(savedPet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
