import LoggingService from '../services/LoggingService';
import subscribeResponse from '../utilities/SubscribeResponse';
import signatureEncrpytDecrpyt from '../utilities/SignVerify/SignatureEncryptDecrypt';

const onSubscribe = async (req, res) => {
  const logger = LoggingService.getLogger('OnSubscribeController');
  logger.debug(`on_subscribe called with ${JSON.stringify(req.body)}`);

  const encrypted = req.body.challenge;
  try {
    const decryptedText = signatureEncrpytDecrpyt.decryptAES256ECB(encrypted);
    subscribeResponse.sendDecryptedText(res, decryptedText);
  } catch (err) {
    logger.error(`Error in onSubscribe ${err}`);
    subscribeResponse.sendErrorWithDecrpytion(res, err);
  }
};

export default {
  onSubscribe,
};
