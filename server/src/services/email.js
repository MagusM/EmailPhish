const nodemailer = require("nodemailer");
const {insertMail, changeEmailStatus} = require ('../repositories/postgres')

let transporter;

async function init() {
    const testAccount = await nodemailer.createTestAccount();    
    transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });
}

init();


const onSendMailClick = (emailId) => {
    changeEmailStatus(emailId)
}

const sendMail = async (email, rcpt) => {
    console.log("Start sending mail")

    const body = `<b>Please click the next link</b> <button onclick=(${() => onSendMailClick(email)})>click me<button/>`

    mailId = await insertMail(email, body)
    
    let info = await transporter.sendMail({
        from: email ? email : 'default@gmail.com', // sender address
        to: rcpt, // list of receivers
        subject: "Phishing mail", // Subject line
        text: "Please click me", // plain text body
        html: body
    });

    if (info) {
        insertMail(email)
    }

    console.log("Got info", info)
    return info;
}

module.exports={sendMail}