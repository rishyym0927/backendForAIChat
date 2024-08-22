const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  const { username } = req.body;

  try {
    // Check if user already exists
    let user = await userModel.findOne({ username });
    if (user) return res.status(203).json({  _id: user._id,
      username: user.username });

    user = new userModel({ username });
    await user.save();

    res.status(200).json({
      _id: user._id,
      username: user.username
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Server error, please try again" });
  }
};

module.exports = {
  registerUser
};
