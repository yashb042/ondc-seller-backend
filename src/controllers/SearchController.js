import SearchService from '../services/SearchService';

const searchResult = async (req, res) => {
  const searchResponse = await SearchService.getSearchResult(req.query.message_id);
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
