import speakeasy from 'speakeasy';


export function generateOtp() {
  // Generate a new secret key
  const secret = speakeasy.generateSecret();

  // Generate the OTP code based on the secret key
  const otp = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32',
    digits: 4
  });

  // Return the generated OTP as a response
  return otp ;
}



export function verifyOtp(otp) {
  const secret = generateOtp()

  const isValid = verifyOtp({
    secret: secret,
    encoding: "base32",
    token: otp
  });

  return isValid;
}
