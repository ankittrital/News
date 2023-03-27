import React, {useState} from 'react';
import SearchText from '../../components/searchText';
import ArticleView from '../../components/ArticleView';
import {View, StyleSheet, FlatList} from 'react-native';
import searchArticle from '../../services/searchService/searchService';
// import log from '../../config/loggerConfig';

const Search = () => {
  const [searchText, setSearchText] = useState();
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    searchArticle(searchText).then(article => {
      // log.success('article=>', article.data.articles[0]);

      setArticles(article?.data?.articles);
    });
  };

  const {container} = styles;
  return (
    <View style={container}>
      <SearchText
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={fetchData}
      />
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ArticleView
            urlToImage={item.urlToImage}
            title={item.title}
            description={item?.description}
            author={item.author}
            date={item.publishedAt}
            source={item.source.name}
          />
        )}
        keyExtractor={item => item.title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Search;
