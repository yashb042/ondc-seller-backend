import Cache from '../utilities/Cache';

const storeResult = async (response) => {
  const messageId = response.context.message_id;
  const result = await Cache.getCache(messageId);
  if (result) {
    result.push(response.message.catalog);
    Cache.setCache(messageId, result);
  } else {
    Cache.setCache(messageId, [response.message.catalog]);
  }
};

const getResult = (messageId) => Cache.getCache(messageId);

export default {
  storeResult,
  getResult,
};
