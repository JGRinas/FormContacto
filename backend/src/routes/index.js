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
    host: "mail",
    port: "",
    secure: false,
    auth: {
      user: "email@",
      pass: "password",
    },
    tls: {
        rejectUnauthorized: false,
    }
  });

  const info = await transporter.sendMail({
    from: "'Titulo'",
    to: "correo destino",
    subject: "Formulario de contacto",
    text: "hello world",
  });

  console.log("Message sent", info.messageId);

  res.send("received");
});

module.exports = router;
