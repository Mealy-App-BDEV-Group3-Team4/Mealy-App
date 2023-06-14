import speakeasy from 'speakeasy';

function generateOtp() {
  // Generate a new secret key
  const secret = speakeasy.generateSecret();

  // Generate the OTP code based on the secret key
  const otp = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32'
  });

  // Return the generated OTP as a response
  return otp ;
}

export default generateOtp
