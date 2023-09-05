import LoggingService from '../services/LoggingService';
import SearchService from '../services/SearchService';
import genericResponse from '../utilities/GenericResponse';
// import authVerifier from '../utilities/SignVerify/AuthHeaderVerifier';
// import LookUpService from '../services/LookUpService';
//
// const BecknGateway = 'BG';
//TODO - add these back

const onSearchFunc = async (req, res) => {
  const logger = LoggingService.getLogger('OnSearchController');
  logger.debug(`on_search called with ${JSON.stringify(req.body)}`);

  // const publicKey = await LookUpService.getPublicKey(BecknGateway);
  try {
    // await authVerifier.authorize(req, publicKey);
    // logger.debug('Request Authorized Successfully.');
    SearchService.storeSearchResult(req.body);
    return genericResponse.sendAcknowledgement(res);
  } catch (error) {
    logger.error(`Authorization Failed ${error}`);
    return genericResponse.sendErrorWithAuthorization(res);
  }
};

const onSearch = async (req, res) => {
  await onSearchFunc(req, res);
};

export default {
  onSearch,
  onSearchFunc,
};
