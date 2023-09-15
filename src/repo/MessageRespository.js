import Cache from '../utilities/Cache';

const storeResult = async (response, action) => {
  const messageId = `dummyMessageId-${action}`;
  // const result = await Cache.getCache(messageId);
  // if (result) {
  //   result.push(response);
  //   Cache.setCache(messageId, result);
  // } else {
  //   Cache.setCache(messageId, [response]);
  // }
  Cache.setCache(messageId, [response]);
};

const getResult = (messageId, action) => Cache.getCache(`dummyMessageId-${action}`);

export default {
  storeResult,
  getResult,
};
