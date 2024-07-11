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
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT as unknown as number,
  secure: true,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD
  }
})

let mailTo = [process.env.MAIL_TO || '']
if (Array.isArray(process.env.MAIL_TO)) { mailTo = process.env.MAIL_TO.split(',').map(x => x.trim()) as string[] }

const getMailOptions = () => ({
  from: process.env.MAIL_FROM,
  to: mailTo,
  subject: process.env.MAIL_SUBJECT,
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

interface QuickContactData {
  name: string;
  phone: string;
  url: string;
}

export const sendQuickContactEmail = async (data: QuickContactData) => {
  try {
    const options = getMailOptions()
    options.html = generateQuickContactEmail(data)

    const info = await transporter.sendMail(options)
    return info
  } catch (error) {
    console.error(error)
  }
}

function generateQuickContactEmail (json: QuickContactData) {
  const template = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Correo de contacto</title>
        </head>
        <body>
          <h1>Contact Email</h1>
          <p>Nombre: ${json.name}</p>
          <p>Telefono: ${json.phone}</p>
          <p>URL: ${json.url}</p>
        </body>
      </html>
    `
  return template
}
