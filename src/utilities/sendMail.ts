import nodemailer from "nodemailer";

export const sendMail = async (
  to: string,
  subject: string,
  body: string,
  fromEmail: string,
  fromPassword: string
): Promise<void> => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: fromEmail,
        pass: fromPassword,
      },
    });

    const mailOptions = {
      fromEmail,
      to,
      subject,
      html: body,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
