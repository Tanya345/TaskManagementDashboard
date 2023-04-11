const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/connect');
const User = require('../models/userSchema')

router.get('/', (req, res) => {
    res.send("Hello from the server")
})

router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the details properly" })
    }

    try {
        const isUserExist = await User.findOne({ email: email });
        if (isUserExist) {
            return res.status(422).json({ error: "Email already exists" })
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Both passwords should be same" })
        }
        else {
            const user = new User({ name, email, phone, password, cpassword });
            await user.save();
            res.status(201).json({ message: "User Registered Successfully" });
        }
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill all the fields properly" })
        }
        const userData = await User.findOne({ email: email });
        if (userData) {
            const passMatch = await bcrypt.compare(password, userData.password);

            const token = await userData.generateAuthToken();
            console.log(token)

            res.cookie('jwttoken', token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!passMatch) {
                return res.status(400).json({ error: "Invalid Credentials" })
            }
            else {
                return res.status(200).json({ message: `Welcome ${userData.name}` })
            }
        }
        else {
            return res.status(400).json({ error: "Invalid Credentials" })
        }
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/contact', async (req, res) => {
    res.cookie('test', 'tyuiiiiioioioioi')
    res.send("Hello from about page")
})

module.exports = router;