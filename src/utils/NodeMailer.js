import nodemailer from "nodemailer";
import ApiError from "ApiError.js";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

export const sendMail = async (receiverEmail, subject, text) => {
    try {
        const mailOptions = {
            from: process.env.SMTP_USERNAME,
            to: receiverEmail,
            subject,
            text,
        };

        const info = await transporter.sendMail(mailOptions);

        return info;

    } catch (error) {
        throw new ApiError(500, "Error sending email");
    }
}


// import nodemailer from "nodemailer"

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: "goutham02.ml@gmail.com",
//         pass: "rmmxggkdggttdora",
//     },
// });

// const mailOptions = {
//     from: "goutham02.ml@gmail.com",
//     to: "gouthamas0209@gmail.com",
//     subject: "This is a test mail form Nodemailer",
//     text: "Hello, world"
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.log("Error:", error);
//     } else {
//         console.log("Email sent:", info.response);
//     }
// });

