import { v4 as uuid } from 'uuid';
import LoggingService from '../../services/LoggingService';
import SignatureHelper from './SignatureHelper';

const generateAuthorizationHeaderValue = async (body, privateKey) => {
  const logger = LoggingService.getLogger('AuthHeader');
  const createdAndExpiresValue = SignatureHelper.getCreatedAndExpires();
  const signature = await SignatureHelper.createSignature(body, createdAndExpiresValue, privateKey);
  const subscriberId = `${process.env.SUBSCRIBER_ID}`;
  const uniqueId = '27baa06d-f90a-486c-85e5-cc621b787f07';
  const header = `Signature keyId="${subscriberId}|${uniqueId}|ed25519",algorithm="ed25519",created="${createdAndExpiresValue[0]}",expires="${createdAndExpiresValue[1]}",headers="(created) (expires) digest",signature="${signature}"`;
  logger.debug(`Header value ${header}`);
  return header;
};

export default {
  generateAuthorizationHeaderValue,
};
