import LoggingService from '../services/LoggingService';
import SearchService from '../services/SearchService';
import genericResponse from '../utilities/GenericResponse';
import authVerifier from '../utilities/SignVerify/AuthHeaderVerifier';
import LookUpService from '../services/LookUpService';

const ukID = process.env.UKID;
const onSearch = async (req, res) => {
  const logger = LoggingService.getLogger('OnSearchController');
  logger.debug(`on_search called with ${JSON.stringify(req.body)}`);

  const publicKey = await LookUpService.getPublicKey(ukID);
  authVerifier
    .authorize(req, publicKey)
    .then(() => {
      logger.debug('Request Authorized Successfully.');
      SearchService.storeSearchResult(req.body);
      genericResponse.sendAcknowledgement(res);
    })
    .catch((err) => {
      logger.error(`Authorization Failed ${err}`);
      genericResponse.sendErrorWithAuthorization(res);
    });
};

export default {
  onSearch,
};
