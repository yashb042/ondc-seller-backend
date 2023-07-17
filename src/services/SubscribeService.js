import * as dotenv from 'dotenv';
import Api from '../api/Api';
import MessageRespository from '../repo/MessageRespository';
import ContextBuilder from '../utilities/ContextBuilder';
import LoggingService from './LoggingService';

dotenv.config();

const subscribe = async (message) => {
  const logger = LoggingService.getLogger('SubscribeService');
  logger.debug(`Subscribe called with ${JSON.stringify(message)}`);
  const context = ContextBuilder.getSubscriberContext();

  const url = `${process.env.GATEWAY_URL}/subscribe`;
  // const subscribeRequest = {
  //   context: {
  //     operation: {
  //       ops_no: 1,
  //     },
  //   },
  //   message: {
  //     entity: {
  //       gst: {
  //         legal_entity_name: process.env.GST_LEGAL_ENTITY_NAME,
  //         business_address: process.env.GST_BUSINESS_ADDRESS,
  //         city_code: [
  //           process.env.ENTITY_GST_CITY_CODE,
  //         ],
  //         gst_no: process.env.GST_NO,
  //       },
  //       pan: {
  //         name_as_per_pan: process.env.NAME_AS_PER_PAN,
  //         pan_no: process.env.PAN_NO,
  //         date_of_incorporation: process.env.PAN_DATE_OF_INCORPORATION,
  //       },
  //       name_of_authorised_signatory: process.env.NAME_OF_AUTHORISED_SIGNATORY,
  //       address_of_authorised_signatory: process.env.ADDRESS_OF_AUTHORISED_SIGNATORY,
  //       email_id: process.env.EMAIL_ID,
  //       mobile_no: process.env.MOBILE_NO,
  //       country: process.env.COUNTRY,
  //       subscriber_id: process.env.SUBSCRIBER_ID,
  //       unique_key_id: uuid(),
  //       callback_url: '/test',
  //       key_pair: {
  //         signing_public_key: process.env.PUBLIC_KEY,
  //         encryption_public_key: 'MCowBQYDK2VuAyEA5g6jAUxOn9E3MMkHYNLeNLHsVvPyCwLTtvkRYkOyOmE=',
  //         valid_from: process.env.VALID_FROM,
  //         valid_until: process.env.VALID_UNTIL,
  //       },
  //     },
  //     network_participant: [
  //       {
  //         subscriber_url: process.env.BUYER_APP_URL,
  //         domain: process.env.NETWORK_PARTICIPANT_DOMAIN,
  //         type: process.env.NETWORK_PARTICIPANT_TYPE,
  //         msn: false,
  //         city_code: [
  //           process.env.NETWORK_PARTICIPANT_CITY_CODE,
  //         ],
  //       },
  //     ],
  //     timestamp: moment()
  //       .format(),
  //     request_id: process.env.REQUEST_ID,
  //   },
  // };

  const subscribeRequest = {
    context: {
      operation: {
        ops_no: 1,
      },
    },
    message: {
      request_id: '27baa06d-f90a-486c-85e5-cc621b787f05',
      timestamp: '2023-08-14T13:25:54.101Z',
      entity: {
        gst: {
          legal_entity_name: 'redBus-Preprod',
          business_address: 'Trade World, Mansarpur, Coorg, Karnataka 333333',
          city_code: [
            'std:080',
          ],
          gst_no: '07AAACN2082N4Z7',
        },
        pan: {
          name_as_per_pan: 'redBus-Preprod',
          pan_no: 'ASDFP7657Q',
          date_of_incorporation: '23/06/2006',
        },
        name_of_authorised_signatory: 'Yash Bansal',
        address_of_authorised_signatory: '405, Pinnacle House, Kandiwali, Mumbai 400001',
        email_id: 'yash.bansal@redbus.com',
        mobile_no: '8619218273',
        country: 'IND',
        subscriber_id: 'ondc-stage.redbus.in:8080',
        unique_key_id: '27baa06d-f90a-486c-85e5-cc621b787f04',
        callback_url: '/',
        key_pair: {
          signing_public_key: 'V0FpSG/WQWgujxwyjsER8VpDPNTGCkYyk1pC8xMT4oQ=',
          encryption_public_key: 'MCowBQYDK2VuAyEA0omzfFfum7owKu/xAXWu+GD9qr6X6wUOIEyPCm7Qkww=',
          valid_from: '2023-08-14T13:25:54.101Z',
          valid_until: '2030-07-08T13:44:54.101Z',
        },
      },
      network_participant: [
        {
          subscriber_url: '/',
          domain: 'ONDC:TRV10',
          type: 'buyerApp',
          msn: false,
          city_code: [
            'std:080',
          ],
        },
      ],
    },
  };

  logger.debug(JSON.stringify(subscribeRequest));
  const response = await Api.doPost(url, JSON.stringify(subscribeRequest));
  const responseText = await response.text();
  logger.debug(`Response ${responseText}`);

  return context;
};

const storeSubscribeResult = (response) => {
  MessageRespository.storeResultWithRequestId(response);
};

const getSubscribeResult = (requestId) => MessageRespository.getResult(requestId);

export default {
  subscribe,
  getSubscribeResult,
  storeSubscribeResult,
};
