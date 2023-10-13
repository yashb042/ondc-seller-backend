import LoggingService from '../services/LoggingService.js';
import search from '../response/search.json';
import confirm from '../response/confirm.json';
import NodeCache from 'node-cache';
import axios from 'axios';
const userDataCache = new NodeCache({ stdTTL: 15 });

const sendMsg = async (mobileNo, msgTxt) => {
  const apiUrl = 'https://capi.redbus.com/api/WhatsappNotification';

  const headers = {
    'Content-Type': 'application/json',
    'Channel_Name': 'MOBILE_WEB',
    'auth_key': '2d00da61-5b39-4b2a-899f-016c2ae51319',
    'BusinessUnit': 'BUS',
    'Country_Name': 'IND',
    'Currency': 'INR',
    'Language': 'en',
    'Cookie': 'JSESSIONID=5gvld54kw3kz1jjb9k9w7azsh; ak_bmsc=5DA2B6A305E43134F11B0E1595F9F41F~000000000000000000000000000000~YAAQba1NaLCiQfeKAQAAmKfuKRW503hWXiUQv93NYudVqnUaC3E5AT+TOKfUPVZUda1zxcDCwoynnQB9yUiVa5PsykVeFIb3beOsztRiVwuzCmalsl89yMnyDpVNH1/WjTH9l0t6av9GZ47VUmq93NKwOjD9V3r1ecNg3xqYIG6qGnN46vw1FaH56si7nFLhs3A3yaNTzKZFnb2ISK8m428AFLcNTPn0nSrAESCmHjMc6YtH2zJtL8qINOCFZx5/JXeW9vneTHGIssDG2KoJc5GKCaSY9unTlnYxCBTpu7XDQNFEnSRBwORP2/H9sohYC+DOKioPjxuie0fNyz29J7xpmVVJ8cqiO8YJxkvcDXvE8wbvGOIog7K83/49',
  };

  const data = {
    data_params: {
      whatsapp_text: msgTxt,
    },
    channels: ['whatsapp'],
    name: 'flow_name',
    address: {
      whatsapp_number: mobileNo,
    },
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const onMessage = async (req, res) => {
  try {
    const logger = LoggingService.getLogger('WhatsappController');
    logger.debug(`onMessage called with body ${JSON.stringify(req.body)}`);
    const msgReq = req.body;

    if (!msgReq.eventContent || !msgReq.eventContent.message) {
      return;
    }

    const msg = msgReq.eventContent.message;
    const text = msg.text;
    const locationBody = msg.location;

    if (!text && !locationBody) {
      return;
    }

    if (text) {
      const body = text.body.toLowerCase();
      if (body.includes('hey') || body.includes('hi') || body.includes('hello')) {
        await sendMsg(msg.to, 'Hello, Welcome to red auto booking through WhatsApp!!');
        return;
      }
    }

    if (!userDataCache.has(msg.id)) {
      userDataCache.set(msg.id, {});
    }

    const userData = userDataCache.get(msg.id);
    const time = Math.random() * (10 - 3) + 3


    if (msg.contentType === 'location') {
      if (!userData.src) {
        userData.src = { longitude: locationBody.longitude, latitude: locationBody.latitude };
      } else if (!userData.dst) {
        userData.dst = { longitude: locationBody.longitude, latitude: locationBody.latitude };
        const providers = search[0].message.catalog['bpp/descriptor'];
        const price = providers.item[0].price;

        await sendMsg(msg.to, `Hurray, We found an auto for you!!\nIt is ${time} mins away and cost is ${price}, please confirm by typing yes!!`);
      }
    } else {
      if (!userData.src) {
        await sendMsg(msg.to, 'Please share your source WhatsApp location');
      } else if (!userData.dst) {
        await sendMsg(msg.to, 'Please share your destination WhatsApp location');
      } else if (text.body.toLowerCase() === 'yes') {
        const price = confirm[0].message.order.quote.value;
        const otp = confirm[0].message.order.fulfillment.start.authorization.token;

        await sendMsg(msg.to, `Your auto is on the way!!\nIt is ${time} away and price is ${price} and OTP is ${otp}!!`);
      }
    }

    userDataCache.set(msg.id, userData);
    return;
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  
export default {
  onMessage,
};

