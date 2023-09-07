import SearchService from '../services/SearchService';

const searchResult = (messageId, res) => {
  const searchResponse = SearchService.getSearchResult(messageId);
  if (searchResponse) {
    return res.send(searchResponse);
  }
  return res.send([]);
};

const search = async (req, res) => {
  const context = await SearchService.search(req.body);
  res.send(context);
};

export default {
  search,
  searchResult,
};
