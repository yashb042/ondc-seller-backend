import express from 'express';
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

const app = express();
const logger = LoggingService.getLogger('App');
const port = process.env.BUYER_APP_PORT ? process.env.BUYER_APP_PORT : 2010;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(port, () => {
  logger.info(`Sample BAP listening on port ${port}`);
});
