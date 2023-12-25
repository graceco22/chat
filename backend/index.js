// server.js

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://chat-pearl-ten.vercel.app/authenticate",
      { username: username, secret: username, first_name: username },
      { headers: { "PRIVATE-KEY": "ce2f5c66-ef2b-4153-866e-f69937f4a8e7" } }
    );
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
