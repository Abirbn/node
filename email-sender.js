var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abirbouaouina0@gmail.com',
      pass: 'hihihi'
    }
  });
  
  var mailOptions = {
    from: 'abirbouaouina0@gmail.com',
    to: 'abirbouaouina067@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
