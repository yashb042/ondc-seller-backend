import * as dotenv from 'dotenv';
import ContextBuilder from '../utilities/ContextBuilder';
import MessageRespository from '../repo/MessageRespository';

dotenv.config();

const select = async (selectRequest) => {
  // const logger = LoggingService.getLogger('SelectService');
  // const { message } = selectRequest;
  const context = ContextBuilder.getContextWithContext('select', selectRequest.context);
  // const selectPayload = {
  //   context,
  //   message,
  // };
  // const url = `${selectRequest.context.bpp_uri}/select`;

  // TODO - don't call actually call the BPP, just return a dummy response
  // const selectResponse = await Api.doPost(url, JSON.stringify(selectPayload));
  // const responseText = await selectResponse.text();
  // logger.debug(`Response ${responseText}`);
  return context;
};

const storeSelectResult = (response) => {
  MessageRespository.storeResult(response, 'select');
};

const getSelectResult = (messageId) => MessageRespository.getResult(messageId, 'select');

export default {
  select,
  getSelectResult,
  storeSelectResult,
};
