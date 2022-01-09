const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

let data = ["Pizza", "IceCream", "Burger", "Fries"];

app.get("/random-pricing", (req, res) => {
  let itemIndex = Math.floor(Math.random() * 4);
  let randomData = {
    price: Math.floor(
      getRandomArbitrary(Math.random() * 10, Math.floor(Math.random() * 100))
    ),
    item: data[itemIndex],
  };
  let dataToSend = [];
  dataToSend.push(
    ["name", "price"],
    [randomData.item, parseInt(randomData.price)]
  );
  res.status(200).send({
    data: dataToSend,
    message: "random data got successfully",
  });
});

app.listen(5500, () => {
  console.log("server listening on port 5500");
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
