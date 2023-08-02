const kue = require('kue');
const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
const nodemailer = require("nodemailer");


class Mailer {
  GMAIL_USERNAME = process.env.GMAIL_USERNAME
  GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;
  MAIL_SERVICE = process.env.MAIL_SERVICE;
  FROM_EMAIL = process.env.FROM_EMAIL;
  REDIS_URL = process.env.REDIS_URL

  transporter = nodemailer.createTransport({
    service: this.MAIL_SERVICE,
    auth: {
      user: this.GMAIL_USERNAME,
      pass: this.GMAIL_PASSWORD
    }
  });

  queue = kue.createQueue(
    {
      redis: this.REDIS_URL
    }
  );


  async sendMail(type , templateName) {
    const self = this
    const filePath = path.join(__dirname, `../email-templates/${templateName}.hbs`);
    const source = fs.readFileSync(filePath, 'utf-8').to();
    const emailTemplate = handlebars.compile(source);
    try {
      self.queue.process(type, function (job, done) {
        const emailData = job.data
        emailData.year =  new Date().getFullYear()
        const message = {
          from: `${self.FROM_NAME} <${self.FROM_EMAIL}>`,
          to: emailData.email,
          subject: emailData.subject,
          html: emailTemplate(emailData)
        };
        self.transporter.sendMail(message);
        console.log({
          level: 'verbose',
          message: `${emailData.subject} Mail Sent`,
        })
        done()
      })
    } catch (e) {
      throw e
    }
  }

}

module.exports = new Mailer();