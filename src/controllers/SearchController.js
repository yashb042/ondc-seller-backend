import SearchService from '../services/SearchService';
import onSearchFunc from './OnSearchController';
import onSearchRequest from '../requests/OnSearchRequest.js';

const searchResult = (messageId, res) => {
  const searchResponse = SearchService.getSearchResult(messageId);
  if (searchResponse) {
    return res.send(searchResponse);
  }
  return res.send([]);
};

const search = async (req, res) => {
  const context = await SearchService.search(req.body);
  // res.send(context);

  // Call on_search myself
  await onSearchFunc(onSearchRequest, res);

  // sleep for 1 sec
  setTimeout(() => SearchService.searchResult(context.message_id, res), 1000);
};

export default {
  search,
  searchResult,
};
