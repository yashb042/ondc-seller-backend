// import decrypt from './call_decrypt_shell.js';
import crypto from 'crypto';
import LoggingService from '../../../services/LoggingService.js';

const logger = LoggingService.getLogger('ConfirmService');

// Example usage
const cryptoPrivateKey = 'MC4CAQAwBQYDK2VuBCIEIMAuxrmkRPEp0oJlZtUi116bT6GvvXIUScTtItJX9elB';
const cryptoPublicKey = 'MCowBQYDK2VuAyEA0omzfFfum7owKu/xAXWu+GD9qr6X6wUOIEyPCm7Qkww=';
const message = 'ondc is great';
// const cipherString = 'CrwN248HS4CIYsUvxtrK0pWCBaoyZh4LnWtGqeH7Mpc=';
// const cipherString = 'OA63sAxmL722zyMRTgKOEg==';

// const argList = [cryptoPrivateKey, cryptoPublicKey, cipherString];

async function decrypt2(cipherString) {
  const privateKeyBuffer = Buffer.from(cryptoPrivateKey, 'base64');
  const publicKeyBuffer = Buffer.from(cryptoPublicKey, 'base64');
  const buffer = Buffer.from(cipherString, 'base64');

  const publicKey = crypto.createPublicKey({
    key: publicKeyBuffer,
    type: 'spki',
    format: 'der',

  });
  const privateKey = crypto.createPrivateKey({
    key: privateKeyBuffer,
    type: 'pkcs8',
    format: 'der',
  });

  const keyPair = crypto.diffieHellman({
    publicKey,
    privateKey,
  });

  const deCipher = crypto.createDecipheriv(
    'aes-256-ecb',
    keyPair,
    null,
  );
  const outputFormat = 'utf-8';
  let res = deCipher.update(buffer, outputFormat);
  res += deCipher.final(outputFormat);

  return res.toString('utf-8');
}

async function encrypt() {
  const privateKeyBuffer = Buffer.from(cryptoPrivateKey, 'base64');
  const publicKeyBuffer = Buffer.from(cryptoPublicKey, 'base64');
  const buffer = Buffer.from(message, 'base64');

  const publicKey = crypto.createPublicKey({
    key: publicKeyBuffer,
    type: 'spki',
    format: 'der',

  });
  const privateKey = crypto.createPrivateKey({
    key: privateKeyBuffer,
    type: 'pkcs8',
    format: 'der',
  });

  const keyPair = crypto.diffieHellman({
    publicKey,
    privateKey,
  });

  const cipher = crypto.createCipheriv(
    'aes-256-ecb',
    keyPair,
    null,
  );
  // deCipher.setAutoPadding(true);

  const outputFormat = 'base64';
  let res = cipher.update(buffer, outputFormat, outputFormat);
  // console.log(res.toString('base64'));
  res += cipher.final('base64');

  return res;
}

async function exe() {
  try {
    let encryptedText2 = '';
    encryptedText2 = await encrypt();

    console.log(encryptedText2);
    // encryptedText2 = encryptedText2.replaceAll('=', '');
    decrypt2(encryptedText2)
      .then((decodedString) => {
        logger.info('Decoded string:', decodedString);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  } catch (error) {
    console.error('Decryption error:', error);
  }
}

exe();

// console.log(crypto); // Print the imported crypto module

// Promisify the exec function
// const execPromise = util.promisify(exec);
//
// const decrypt = async () => {
//   try {
//     // eslint-disable-next-line no-template-curly-in-string
//     logger.info(cipherString.replace(/\n/g, ''));
//     let str = `sh ${scriptPath} "${cryptoPrivateKey.toString('utf-8')}"
//     "${cryptoPublicKey.toString('utf-8')}"
//     "${cipherString.toString('utf-8')}"`;
//     console.log(str);
//     const { stdout } = await execPromise(str);
//     // const decodedBuffer = Buffer.from(stdout, 'base64');
//     // const decodedString = stdout.toString('utf-8');
//     logger.info('Decoded string:', stdout);
//     return stdout;
//   } catch (error) {
//     console.error(`Error executing script: ${error}`);
//     throw error; // Re-throw the error to be caught by the caller
//   }
// };
