const dbConnection = require("./mongodb");

const insert = async () => {
  const db = await dbConnection();
  const result = await db.insertOne({
    name: "rahul",
    age: 23,
    pnumber: 844865280,
  });
  if (result.acknowledged) {
    console.log("data inserted");
  }
  //   console.log(result.acknowledged);
};

insert();
