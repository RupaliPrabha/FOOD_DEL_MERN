const foodModel = require("../models/foodModel");
const fs = require("fs");

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (e) {
    res.json({ success: false, message: "Server error" });
    console.log(e);
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: "Error" });
  }
};

//remove_food_item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food removed"})
  } catch (e) {
    console.log(e);
    res.json({success:false,message:"Error"})
    
  }
};
module.exports = { addFood, listFood, removeFood };
