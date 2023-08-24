import crypto from 'crypto';
import LoggingService from '../../services/LoggingService.js';

const logger = LoggingService.getLogger('SignatureEncryptDecrypt');

const PRIVATE_KEY_CRYPTO = 'MC4CAQAwBQYDK2VuBCIEIMAuxrmkRPEp0oJlZtUi116bT6GvvXIUScTtItJX9elB';
// const PUBLIC_KEY_CRYPTO = 'MCowBQYDK2VuAyEA0omzfFfum7owKu/xAXWu+GD9qr6X6wUOIEyPCm7Qkww=';
const PUBLIC_KEY_ONDC = 'MCowBQYDK2VuAyEAa9Wbpvd9SsrpOZFcynyt/TO3x0Yrqyys4NUGIvyxX2Q=';

// Encrypt using AES-256-ECB
// function encryptAES256ECB() {
//   // const plaintext = '4977f4b6-437b-4328-af2a-5072ef6c8d66';
//   const plaintext = 'This is my secret message';
//
//   const privateKey1 = crypto.createPrivateKey({
//     key: Buffer.from(PRIVATE_KEY_CRYPTO, 'base64'),
//     format: 'der',
//     type: 'pkcs8',
//   });
//
//   const publicKey2 = crypto.createPublicKey({
//     key: Buffer.from(PUBLIC_KEY_ONDC, 'base64'),
//     format: 'der',
//     type: 'spki',
//   });
//
//   const sharedKey12 = crypto.diffieHellman({
//     privateKey: privateKey1,
//     publicKey: publicKey2,
//   });
//
//   const iv = Buffer.alloc(0); // ECB doesn't use IV
//   const cipher = crypto.createCipheriv('aes-256-ecb', sharedKey12, iv);
//
//   let encrypted = cipher.update(plaintext, 'utf8', 'base64');
//   encrypted += cipher.final('base64');
//
//   return encrypted;
// }

// Decrypt using AES-256-ECB
function decryptAES256ECB(encrypted) {
  logger.info('Encrypted crypto key received:', encrypted);

  const privateKey1 = crypto.createPrivateKey({
    key: Buffer.from(PRIVATE_KEY_CRYPTO, 'base64'),
    format: 'der',
    type: 'pkcs8',
  });

  const publicKey2 = crypto.createPublicKey({
    key: Buffer.from(PUBLIC_KEY_ONDC, 'base64'),
    format: 'der',
    type: 'spki',
  });

  const sharedKey12 = crypto.diffieHellman({
    privateKey: privateKey1,
    publicKey: publicKey2,
  });

  const iv = Buffer.alloc(0); // ECB doesn't use IV
  const decipher = crypto.createDecipheriv('aes-256-ecb', sharedKey12, iv);

  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  logger.info('Decrypted crypto key:', decrypted);
  return decrypted;
}

// function sampleExec() {
//   const encrypted = encryptAES256ECB();
//   decryptAES256ECB(encrypted);
// }
//
// sampleExec();
export default {
  decryptAES256ECB,
};
