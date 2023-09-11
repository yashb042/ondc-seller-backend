import crypto from 'crypto';
import LoggingService from '../../services/LoggingService.js';

const logger = LoggingService.getLogger('SignatureEncryptDecrypt');

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
    key: Buffer.from(process.env.PRIVATE_KEY_CRYPTO, 'base64'),
    format: 'der',
    type: 'pkcs8',
  });

  const publicKey2 = crypto.createPublicKey({
    key: Buffer.from(process.env.ONDC_ENCRYPTION_PUBLIC_KEY, 'base64'),
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
