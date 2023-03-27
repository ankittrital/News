/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import ArticleView from '../../components/ArticleView';
import images from '../../constants/images/images';
import Fonts from '../../constants/fonts/fonts';
import NewsPaperIcon from 'react-native-vector-icons/FontAwesome5';
import NewsApi from '../../services/newsApi/NewsApi';
import log from '../../config/loggerConfig';

const Home = () => {
  const {container, imgBack, firstView, textStyle, titleView, techIconStyle} =
    styles;
  const [articles, setArticles] = useState();

  useEffect(() => {
    NewsApi()
      .then(res => {
        setArticles(res.articles);
        // log.success('article=>', res?.articles);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={container}>
      <View style={firstView}>
        <View style={titleView}>
          <NewsPaperIcon
            name="newspaper"
            size={20}
            color="black"
            style={techIconStyle}
          />
          <Text style={textStyle}> TechNews</Text>
        </View>
        <ImageBackground
          source={images.user}
          style={imgBack}
          imageStyle={{borderRadius: 25}}
        />
      </View>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ArticleView
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            date={item.publishedAt}
            source={item.source.name}
          />
        )}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    // backgroundColor: 'black',
  },
  imgBack: {
    width: 40,
    height: 40,
    // imageStyle: {borderRadius: 25},
  },
  firstView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 16,
    fontFamily: Fonts.type.robotoBold,
  },
  titleView: {
    flexDirection: 'row',
    paddingLeft: 2,
    alignSelf: 'center',
  },
  techIconStyle: {
    marginTop: 3,
  },
});
export default Home;
