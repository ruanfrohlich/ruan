export default function Handler(req, res) {
  const nodemailer = require("nodemailer");

  const userData = JSON.parse(req.body);

  let transporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
       user: 'ruanfrohlich@gmail.com', 
       pass: 'wtpkvicpewmwgfzk' 
     } 
  });

  const mailOptions = {
    from: 'ruanfrohlih@gmail.com',
    to: `ruanp@gazetadopovo.com.br`,
    subject: 'NOVO CADASTRO DE DOADOR',
    html: `
      <p>Novo cadastro de doador</p>
      <ul>
        <li>Nome: ${userData.userName}</li>
        <li>E-mail: ${userData.email}</li>
        <li>Telefone: ${userData.phone}</li>
      </ul>
    `
  };

  transporter.sendMail(mailOptions, (err) => {
    if(err)
      res.json({
        error: true,
        message: 'Um erro ocorreu e o cadastro nao pode ser efetuado!'
      });
    else
      res.json({
        error: false,
        message: 'Cadastro efetuado com sucesso!'
      });
 });
}