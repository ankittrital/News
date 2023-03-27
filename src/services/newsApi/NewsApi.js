import axios from 'axios';

const NewsApi = async () => {
  const response = await axios.get(
    'https://newsapi.org/v2/everything?q=technology&apiKey=3bb88520a55f43daa9b4d91531e1342e',
  );
  return response.data;
};

export default NewsApi;
