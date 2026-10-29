require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory (your frontend)
app.use(express.static(__dirname));

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this if using Outlook/Yahoo, etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Endpoint to handle lead submissions
app.post('/send-lead', async (req, res) => {
    const { user_name, user_email, user_phone, message } = req.body;

    if (!user_name || !user_email) {
        return res.status(400).json({ success: false, message: 'Name and email are required' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // sends to the receiver or back to yourself
        subject: `New Lead from RVCE Chatbot: ${user_name}`,
        text: `You have received a new lead!\n\nName: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone || 'N/A'}\nMessage: ${message || 'No additional message.'}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Lead sent successfully for ${user_name}`);
        res.status(200).json({ success: true, message: 'Lead email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send lead email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
