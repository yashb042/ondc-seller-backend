import * as dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';
import { getFormattedTimestamp } from './CurrentTimestamp.js';

dotenv.config();

const getContext = (action) => ({
  domain: 'ONDC:TRV10',
  country: 'IND',
  city: 'std:080',
  action,
  core_version: '1.0.0',
  bap_id: process.env.BUYER_APP_ID,
  bap_uri: process.env.BUYER_APP_URL,
  transaction_id: uuid(),
  message_id: uuid(),
  timestamp: getFormattedTimestamp(),
});

const getSubscriberContext = () => ({
  operation: {
    ops_no: 1,
  },
});

const getContextWithContext = (action, context) => ({
  ...context,
  domain: 'ONDC:TRV10',
  country: 'IND',
  city: 'std:080',
  action,
  core_version: '1.0.0',
  bap_id: process.env.BUYER_APP_ID,
  bap_uri: process.env.BUYER_APP_URL,
  transaction_id: uuid(),
  message_id: uuid(),
  timestamp: getFormattedTimestamp(),
});

export default {
  getContext,
  getSubscriberContext,
  getContextWithContext,
};
