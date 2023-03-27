import axios from 'axios';
import log from '../../config/loggerConfig';

const searchArticles = searchText => {
  try {
    const response = axios.get(
      `https://newsapi.org/v2/everything?q=${searchText}&apiKey=3bb88520a55f43daa9b4d91531e1342e`,
    );
    return response;
  } catch (err) {
    log.error(err);
  }
};
export default searchArticles;
