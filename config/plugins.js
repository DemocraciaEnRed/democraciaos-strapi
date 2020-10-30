module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: env('MAILER_HOST'), //SMTP Host
      port: env('MAILER_PORT', 465), //SMTP Port
      secure: env('MAILER_SECURE',true),
      username: env('MAILER_USERNAME'),
      password: env('MAILER_PASSWORD'),
      rejectUnauthorized: env('MAILER_REJECT_UNAUTHORIZED', true),
      requireTLS: env('MAILER_REQUIRE_TLS', true),
      connectionTimeout: env('MAILER_CONNECTION_TIMEOUT',true),
      nodemailer_default_from: env('MAILER_FROM'),
      nodemailer_default_replyto: env('MAILER_REPLY_TO')
    },
    settings: {
      from: env('MAILER_FROM'),
      replyTo: env('MAILER_REPLY_TO'),
    },
  },
});