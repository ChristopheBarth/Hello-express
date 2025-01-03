import express from "express";

// Création de l'application Express
const express = require('express');
const app = express();

// Déclaration des routes
const data = (req, res) => {
  res.json("lorem", "ipsum", "dolor", "sit", "amet");
};

app.get("/words", data);

// Écoute du port
const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});