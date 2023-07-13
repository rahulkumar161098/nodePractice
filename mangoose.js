const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testdb");
const productsch = new mongoose.Schema({
  name: String,
  age: Number,
  number: Number,
});

const saveData = async () => {
  // model
  const ProductModel = mongoose.model("test", productsch);
  let data = new ProductModel({ name: "Aaush", age: 10, number: 9847584756 });
  let res = await data.save();
  console.log(res);
};

const updateData = async () => {
  const Product = mongoose.model("tests", productsch);
  const data = await Product.updateOne(
    { name: "Aaush" },
    {
      $set: {
        number: 9875768009,
      },
    }
  );
  console.log(data);
};
updateData();
