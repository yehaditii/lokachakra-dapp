const express = require("express");
const { getAdvice } = require("./openaiAgent");
const { uploadMetadata } = require("./ipfs");

const app = express();
app.use(express.json());

app.post("/get-advice", async (req, res) => {
  const { question } = req.body;
  const advice = await getAdvice(question);
  res.json({ advice });
});

app.post("/upload-metadata", async (req, res) => {
  const { metadata } = req.body;
  const ipfsPath = await uploadMetadata(metadata);
  res.json({ ipfsPath });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
