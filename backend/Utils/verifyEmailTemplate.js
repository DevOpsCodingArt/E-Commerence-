const verifyEmailTemplate = (username, otp) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Email Verification</title>
        <style>
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }
          .header {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
          }
          .content {
            padding: 20px;
            line-height: 1.6;
          }
          .otp {
            font-size: 32px;
            font-weight: bold;
            color: #007bff;
            text-align: center;
            margin: 20px 0;
            letter-spacing: 5px;
          }
          .footer {
            text-align: center;
            color: #6c757d;
            font-size: 12px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Email Verification</h1>
          </div>
          <div class="content">
            <p>Hello ${username},</p>
            <p>Thank you for registering with our E-Commerce platform. To verify your email address, please use the following OTP (One-Time Password):</p>
            <div class="otp">${otp}</div>
            <p>This OTP will expire in 10 minutes. If you didn't request this verification, please ignore this email.</p>
            <p>Best regards,<br>E-Commerce Team</p>
          </div>
          <div class="footer">
            <p>This is an automated message, please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = verifyEmailTemplate;
