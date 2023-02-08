import nodemailer from 'nodemailer'

interface ISendMail{
    to: string
    body: string
}


export default class EtherealMail{
    static async sendMail({to, body}: ISendMail) : Promise<void>{
        const account = await nodemailer.createTestAccount()
        const transporter = await nodemailer.createTransport({
            host : account.smtp.host,
            port : account.smtp.port,
            auth:{
                user: account.user,
                pass: account.pass
            }
        })
        const message = await transporter.sendMail({
            from: 'equipe_vendas@apivendas.com.br',
            to,
            subject: 'Recuperação de Senha',
            text: body
        })
        console.log('Message sent: %$', message.messageId)
        console.log('Preveiew url %$', nodemailer.getTestMessageUrl(message))
    }
}