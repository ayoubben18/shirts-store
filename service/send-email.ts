"use server";

import nodemailer from "nodemailer";
import { ServerEnv } from "../lib/env-server";
import logger from "../lib/logger";
import { render } from "@react-email/components";
import ReportEmailTemplate from "../constants/ReportEmailTemplate";

const transporter = nodemailer.createTransport({
  service: "titan",
  host: ServerEnv.SMTP_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: ServerEnv.SMTP_SERVER_USERNAME,
    pass: ServerEnv.SMTP_SERVER_PASSWORD,
  },
});

const sendFailureEmail = async (id: string) => {
  const isVerified = await transporter.verify();
  if (!isVerified) {
    throw new Error("SMTP Server is not verified");
  }

  const emailHtml = render(ReportEmailTemplate({ id }));

  const info = await transporter.sendMail({
    from: ServerEnv.SMTP_SERVER_USERNAME,
    to: ServerEnv.SITE_MAIL_RECIEVER,
    subject: `Payement Failed for subscription ${id}`,
    html: await emailHtml,
  });

  logger.info({ info, id }, "Email sent");
  return info;
};

export { sendFailureEmail };
