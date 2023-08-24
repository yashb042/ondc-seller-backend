// async function decrypt(
//   cryptoPrivateKey: string,
//   cryptoPublicKey: string,
//   cipherString: string,
//   outputFormat: 'base64' | 'utf-8' = 'utf-8'
// ) {
//   const privateKeyBuffer = Buffer.from(cryptoPrivateKey, 'base64');
//   const publicKeyBuffer = Buffer.from(cryptoPublicKey, 'base64');
//   const buffer = Buffer.from(cipherString, 'base64')
//
//   const publicKey = crypto.createPublicKey({
//     key: publicKeyBuffer,
//     type: 'spki', format: 'der'
//
//   });
//   const privateKey = crypto.createPrivateKey({
//     key: privateKeyBuffer,
//     type: 'pkcs8', format: 'der'
//   });
//
//   const keyPair = crypto.diffieHellman({
//     publicKey: publicKey,
//     privateKey: privateKey
//   })
//
//   const deCipher = crypto.createDecipheriv(
//     'aes-256-ecb',
//     keyPair,
//     null
//   )
//
//   let res = deCipher.update(buffer, outputFormat)
//   res+= deCipher.final(outputFormat)
//
//   return res.toString('utf-8')
// }
//
// async function encrypt(
//   cryptoPrivateKey: string,
//   cryptoPublicKey: string,
//   message: string,
//   outputFormat: 'base64' = 'base64'
// ) {
//   const privateKeyBuffer = Buffer.from(cryptoPrivateKey, 'base64');
//   const publicKeyBuffer = Buffer.from(cryptoPublicKey, 'base64');
//   const buffer = Buffer.from(message, 'base64')
//
//   const publicKey = crypto.createPublicKey({
//     key: publicKeyBuffer,
//     type: 'spki', format: 'der'
//
//   });
//   const privateKey = crypto.createPrivateKey({
//     key: privateKeyBuffer,
//     type: 'pkcs8', format: 'der'
//   });
//
//   const keyPair = crypto.diffieHellman({
//     publicKey: publicKey,
//     privateKey: privateKey
//   })
//
//   const deCipher = crypto.createCipheriv(
//     'aes-256-ecb',
//     keyPair,
//     null
//   )
//
//   let res = deCipher.update(buffer, outputFormat)
//   res += deCipher.final('base64', outputFormat)
//
//   return res.toString('base64')
// }
