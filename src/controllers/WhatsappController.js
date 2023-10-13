import LoggingService from '../services/LoggingService.js';

const onMessage = async (req, res) => {
  const logger = LoggingService.getLogger('WhatsappController');
  logger.debug(`onMessage called with body ${JSON.stringify(req.body)}`);
  // logger.debug(`onMessage called with full request${JSON.stringify(req)}`);
  const context = {
    success: true,
    message: 'Message received',
  };
  res.send(context);
};

export default {
  onMessage,
};
