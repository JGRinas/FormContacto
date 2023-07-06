const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/send-email", async (req, res) => {
  const { name, email, description, subject } = req.body;

  contentHTML = `
    <h1>Información del usuario</h1>
    <ul>
        <li>Usuario: ${name}</li>
        <li>Correo: ${email}</li>
        <li>Asunto: ${subject}</li>
    </ul>
    <p>${description}</p>
    `;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    }
  });

  const info = await transporter.sendMail({
    from: "'Derecho unne' <derecho@unne.com.ar>",
    to: process.env.EMAIL_TO,
    subject: "Formulario de contacto",
    //text: "hello world",
    html: contentHTML
  });

  console.log("Message sent", info.messageId);

  res.send("received");
});

module.exports = router;
