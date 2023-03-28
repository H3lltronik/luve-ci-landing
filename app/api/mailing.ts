import nodemailer from 'nodemailer'
interface ContactData {
  nombre: string;
  email: string;
  phone: string;
  state: string;
  giro: string;
  service: string;
  number: string;
  years: string;
  accept: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contacto@luveci.com',
    pass: 'luv3_@c1'
  }
})

const getMailOptions = () => ({
  from: 'contacto@luveci.com',
  to: ['esau.egs1@gmail.com', 'contacto@luveci.com'],
  subject: 'Nuevo correo de contacto',
  html: 'This is a test email sent using Next.js and Zoho mail!'
})

export const sendContactEmail = async (data: ContactData) => {
  try {
    const options = getMailOptions()
    options.html = generateContactEmail(data)

    const info = await transporter.sendMail(options)
    return info
  } catch (error) {
    console.error(error)
  }
}

function generateContactEmail (json: ContactData) {
  const template = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Correo de contacto</title>
        </head>
        <body>
          <h1>Contact Email</h1>
          <p>Nombre: ${json.nombre}</p>
          <p>Email: ${json.email}</p>
          <p>Teléfono: ${json.phone}</p>
          <p>Estado: ${json.state}</p>
          <p>Giro: ${json.giro}</p>
          <p>Servicios a solicitar: ${json.service}</p>
          <p>Número: ${json.number}</p>
          <p>Años: ${json.years}</p>
          <p>Acepto términos y condiciones: ${json.accept}</p>
        </body>
      </html>
    `
  return template
}
