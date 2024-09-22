const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../../models/user/client'); 


const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';


const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' });
};


const signup = async (req, res) => {
  try {
    const {firstName,lastName,email,password,street,city,state,postalCode,avatar,phoneNumber} = req.body;


    const hashedPassword = await bcrypt.hash(password, 10);


    const newClient = new Client({ firstnamelastName ,email,password: hashedPassword ,street,city,state,postalCode,avatar,phoneNumber});
    console.log("first",newClient)
    await newClient.save();


    const token = generateToken(newClient._id);

    res.status(200).json({ token, client: newClient });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const client = await Client.findOne({ email });
    if (!client) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
const token = generateToken(client._id);

    res.status(200).json({ token, client });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    const client = await Client.findOne({ email });
    if (!client) {
      return res.status(400).json({ message: 'Client not found' });
    }

    const isMatch = await bcrypt.compare(oldPassword, client.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Old password is incorrect' });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    client.password = hashedNewPassword;
    await client.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  signup,
  login,
  updatePassword
};
