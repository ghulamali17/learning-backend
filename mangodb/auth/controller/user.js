const User = require("../model/user");

const handleSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  // Simple check
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create user
    const user = await User.create({ name, email, password });

    // Send success response
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = {
  handleSignUp,
};
