const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USERNAME,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});
console.log("commit here dddd =====>");
console.log(process.env.GITHUB_COMMIT_MESSAGE);

transporter.sendMail({
    from: 'example@example.com',  
    to: 'recipient@example.com',   
    subject: 'GitHub Action Email',
    text: 'This is a test email sent from GitHub Actions using Nodemailer! <br> Cool'
  }, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
