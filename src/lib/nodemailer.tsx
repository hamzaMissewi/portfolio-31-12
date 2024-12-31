import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
// import * as fs from "node:fs";

export type MailFieldsType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// const email = process.env.NODEMAILER_EMAIL;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
  // port: 465, //process.env.MAIL_PORT, Gmail SMTP Port: 465 (SSL required) or 587 (TLS required)
  // host: "smtp.gmail.com",
  // secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  port: 587,
  secure: false, // use TLS
});

const CONTACT_MESSAGE_FIELDS: MailFieldsType = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

function isKeyOfEmailFields(key: string): key is keyof MailFieldsType {
  return key in CONTACT_MESSAGE_FIELDS;
}

export const generateEmailContent = (data: MailFieldsType): Mail.Options => {
  const entries = Object.entries(data);
  const textData = entries.reduce((str, [key, val]) => {
    if (isKeyOfEmailFields(key)) {
      str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`;
    }
    return str;
  }, "");

  const htmlData = entries.reduce((str, [key, val], index) => {
    if (isKeyOfEmailFields(key)) {
      str += `<h3 className="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p className="form-answer" style={{align:"left"}}>${val}</p>`;
    }
    // if (Object.values(data).indexOf(str) === entries.length - 1) {
    //   str += "</li></div></body></html>";
    // }
    return str;
  }, "");
  // }, `<!DOCTYPE html><html lang="en"><head><title>Contact Form Submission</title></head><body><div><li>`);
  // console.log("htmlData", htmlData);

  return {
    text: textData,
    html: `<!DOCTYPE html><html><head><title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

export const mailOptions = (data: MailFieldsType): Mail.Options => {
  return {
    from: data.email,
    to: process.env.NODEMAILER_EMAIL,
    ...generateEmailContent(data),
    subject: data.subject,
    // html: htmlTemplate,
    // html: template, //cleanedTemplate,
  };
};

// export const mailOptions: Mail.Options = {
//   from: email,
//   to: email,
// };

// const cleanedTemplate = htmlTemplate(data).replace(/\s+/g, " ").trim();
// const template = fs.readFileSync(
//   "@/components/templates/email.html",
//   "utf-8",
// );
// Read template and replace placeholders
// const html = template
//   .replace("{{name}}", data.name)
//   .replace("{{subject}}", data.subject);

export const htmlTemplate = (data: MailFieldsType) => `
               <!DOCTYPE html>
                <html lang="en">
                <head>
                    <title>Contact Form Submission</title>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta content="width=device-width, initial-scale=1" name="viewport"/>
                    <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
                <style type="text/css">
                    body,
                    table,
                    td,
                    a {
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                    }
                    table {
                        border-collapse: collapse !important;
                    }
                    body {
                        height: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 100% !important;
                    }

        @media screen and (max-width: 525px) {
            .wrapper {
                width: 100% !important;
                max-width: 100% !important;
            }

            .responsive-table {
                width: 100% !important;
            }

            .padding {
                padding: 10px 5% 15px 5% !important;
            }

            .section-padding {
                padding: 0 15px 50px 15px !important;
            }
        }

        .form-container {
            margin-bottom: 24px;
            padding: 20px;
            border: 1px dashed #ccc;
        }

        .form-heading {
            color: #2a2a2a;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            text-align: left;
            line-height: 20px;
            font-size: 18px;
            margin: 0 0 8px;
            padding: 0;
        }

        .form-answer {
            color: #2a2a2a;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 300;
            text-align: left;
            line-height: 20px;
            font-size: 16px;
            margin: 0 0 24px;
            padding: 0;
        }

        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>
</head>
<body style="margin: 0 !important; padding: 0 !important; background: #fff">
<!--<div-->
<!--        style="-->
<!--        display: none;-->
<!--        font-size: 1px;-->
<!--        color: #fefefe;-->
<!--        line-height: 1px;-->
<!--        max-height: 0px;-->
<!--        max-width: 0px;-->
<!--        opacity: 0;-->
<!--        overflow: hidden;-->
<!--      "-->
<!--&gt;</div>-->
 <h1>Hello, ${data.name}</h1>
 <p>${data.message}</p>
<div class="form-container"></div>
  <body style="margin: 0 !important; padding: 0 !important; background: #fff">
                   <div>
                      <h1>Welcome, {{name}}!</h1>
                      <p>Thank you for joining us. We're glad to have you!</p>
                   </div>        
                         <div class="container">
                    <h1>New Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Subject:</strong></p>
                    <p>${data.subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${data.message}</p>
                     <div class="footer">
                                <p>This email was sent from your portfolio contact form.</p>
                            </div>
                </div>
                            <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
                    <h1>Welcome, ${data.name}</h1>
                    <p>Thank you for joining us. We're glad to have you!</p>
            </div>       
            
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td
                align="center"
                bgcolor="#ffffff"
                class="section-padding"
                style="padding: 10px 15px 30px 15px"
        >
            <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="responsive-table"
                    style="max-width: 500px"
                    width="100%"
            >
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td>
                                    <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                    >
                                        <tr>
                                            <td
                                                    class="padding message-content"
                                                    style="
                                                          padding: 0 0 0 0;
                                                          font-size: 16px;
                                                          line-height: 25px;
                                                          color: #232323;
                                                        "
                                            >
                                                <h2>New Contact Message</h2>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table> 
    </body>
    </html>`;
