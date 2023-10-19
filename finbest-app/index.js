const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors=require("cors");
    const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
    }

app.use(cors(corsOptions))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Email API is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
     user: 'ronnybt99@gmail.com',
     pass: 'jlfp zhbw ubjb bfys',
    },
});

app.post('/send-email', (req, res) => {
    const { to, subject, message } = req.body;
  
    const mailOptions = {
      from: 'ronnybt1999@gmail.com',
      to,
      subject,
      text: message,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Email sending failed:', error);
        res.status(500).json({ message: 'Email sending failed' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
  });

    