import * as dotenv from 'dotenv';
import MessageRespository from '../repo/MessageRespository';
import ContextBuilder from '../utilities/ContextBuilder';
import LoggingService from './LoggingService';
import Api from '../api/Api.js';

dotenv.config();

const search = async (message) => {
  const logger = LoggingService.getLogger('SearchService');
  logger.debug(`Search called with ${JSON.stringify(message)}`);
  const context = ContextBuilder.getContext('search');

  logger.info(`Using Default Response for ${context.messageId}`);

  const url = `${process.env.SEARCH_URL}/search`;
  const searchRequest = {
    context,
    message,
  };

  const response = await Api.doPost(url, JSON.stringify(searchRequest));
  const responseText = await response.text();
  logger.debug(`Response ${responseText}`);
  //
  // // TODO 2 : in case the response comes as 401
  // // we need respond gracefully as failed, currently we are sending context in call cases.

  return context;
};

const storeSearchResult = (response) => {
  MessageRespository.storeResult(response, 'search');
};

const getSearchResult = (messageId) => MessageRespository.getResult(messageId, 'search');

export default {
  search,
  getSearchResult,
  storeSearchResult,
};
