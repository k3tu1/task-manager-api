const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'k3tu1d@gmail.com',
        subject: 'Welcome to Task-App',
        text: `Hello ${name},
        Thank you so much for join with US.`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'k3tu1d@gmail.com',
        subject: 'Account Delete confirmation',
        text: `Hello ${name},\n
        We'll appricate the reason why you're cancelling your account. We'll try to improve our services.`
    })
}
module.exports = {
    sendWelcomeEmail, sendCancelationEmail
}