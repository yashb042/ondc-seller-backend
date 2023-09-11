import SearchService from '../services/SearchService';

const searchResult = async (req, res) => {
  // const messageId = req.query.message_id;
  // const searchResponse = await SearchService.getSearchResult(req.query.message_id);
  const searchResponse = await SearchService.getSearchResult('21e54d3c-9c3b-47c1-aa3b-b0e7b20818ee');
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
