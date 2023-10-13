import express from 'express';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
// import cors from 'cors';
import { v4 as uuid } from 'uuid';
import ConfirmController from './controllers/ConfirmController';
import OnConfirmController from './controllers/OnConfirmController';
import OnSearchController from './controllers/OnSearchController';
import OnSelectController from './controllers/OnSelectController';
import SearchController from './controllers/SearchController';
import SelectController from './controllers/SelectController';
import LoggingService from './services/LoggingService';
import InitController from './controllers/InitController';
import OnInitController from './controllers/OnInitController';
import StatusController from './controllers/StatusController';
import OnStatusController from './controllers/OnStatusController';
import TrackController from './controllers/TrackController';
import OnTrackController from './controllers/OnTrackController';
import SubscribeController from './controllers/SubscribeController';
import OnSubscribeController from './controllers/OnSubscribeController';

import SignatureHelper from './utilities/SignVerify/SignatureHelper';
import WhatsappController from './controllers/WhatsappController';

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  dotenv.config({
    path: 'stage.env',
  });
} else {
  dotenv.config({
    path: 'stage.env',
  });
}

process.env.REQUEST_ID = uuid();
const app = express();
const logger = LoggingService.getLogger('App');
const port = process.env.BUYER_APP_PORT ? process.env.BUYER_APP_PORT : 2010;

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

app.use(express.json());
// app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(dirname, 'views'));
app.use(express.static(path.join(dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`Sample BAP is running ${new Date()}`);
});

app.post('/search', SearchController.search);
app.get('/search', SearchController.searchResult);
app.post('/on_search', OnSearchController.onSearch);

app.post('/select', SelectController.select);
app.post('/on_select', OnSelectController.onSelect);
app.get('/select', SelectController.selectResult);

app.post('/confirm', ConfirmController.confirm);
app.post('/on_confirm', OnConfirmController.onConfirm);
app.get('/confirm', ConfirmController.confirmResult);

app.post('/init', InitController.init);
app.post('/on_init', OnInitController.onInit);
app.get('/init', InitController.initResult);

app.post('/status', StatusController.status);
app.post('/on_status', OnStatusController.onStatus);
app.get('/status', StatusController.statusResult);

app.post('/track', TrackController.track);
app.post('/on_track', OnTrackController.onTrack);
app.get('/track', TrackController.trackResult);

app.post('/subscribe', SubscribeController.subscribe);
app.post('/on_subscribe', OnSubscribeController.onSubscribe);

app.post('/on_message', WhatsappController.onMessage);

const htmlFile = `
<!--Contents of ondc-site-verification.html. -->
<!--Please replace SIGNED_UNIQUE_REQ_ID with an actual value-->
<html>
  <head>
    <meta
      name="ondc-site-verification"
      content="SIGNED_UNIQUE_REQ_ID"
    />
  </head>
  <body>
    ONDC Site Verification Page
  </body>
</html>
`;

app.get('/ondc-site-verification.html', async (req, res) => {
  const signedContent = await SignatureHelper
    .createSignedData(process.env.REQUEST_ID, process.env.SIGNING_PRIVATE_KEY);
  const modifiedHTML = htmlFile.replace(/SIGNED_UNIQUE_REQ_ID/g, signedContent);
  res.send(modifiedHTML);
});

app.listen(port, async () => {
  logger.info(`Sample BAP listening on port ${port}`);
});
