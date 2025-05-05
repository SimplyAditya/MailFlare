import { getAppPasswordById } from "../repositories/appPassword.repository";
import { getMailTemplateById } from "../repositories/mailTemplate.repository";
import { sendMail } from "../utilities/sendMail";

export const sendEmailService = async (
  email: string[],
  mailTemplateId: number,
  appPasswordId: number
): Promise<boolean> => {
    try{

        const emailTemplate = await getMailTemplateById(Number(mailTemplateId));
        const appPassword = await getAppPasswordById(Number(appPasswordId));
      
        await Promise.all(
          email.map(async (individualEmail) => {
            await sendMail(
              individualEmail,
              emailTemplate.subject,
              emailTemplate.body,
              appPassword.email,
              appPassword.password
            );
          })
        );
        return true;
    }catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};
