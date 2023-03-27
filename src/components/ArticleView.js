import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Font from '../constants/fonts/fonts';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const ArticleView = props => {
  const {
    container,
    imgStyle,
    headingStyle,
    author,
    date,
    dateAuthorContainer,
    descriptionStyle,
    source,
  } = styles;
  const navigation = useNavigation();
  const redToDetailScreen = () => {
    navigation.navigate('NewsDetail', {props});
  };
  return (
    <TouchableOpacity onPress={redToDetailScreen} style={container}>
      <Image source={{uri: props.urlToImage}} style={imgStyle} />
      <Text style={headingStyle}>{props.title}</Text>
      <Text style={descriptionStyle} numberOfLines={3}>
        {props.description}
      </Text>
      <View style={dateAuthorContainer}>
        <Text ellipsizeMode="tail" numberOfLines={1}>
          by: <Text style={author}>{props.author}</Text>
        </Text>
        <Text style={date}>{moment(props.date).format('MMM Do YY')}</Text>
      </View>
      <Text>
        source: <Text style={source}>{props.source}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 20,
    padding: 6,
    shadowOpacity: 0.8,
    shadowColor: '#000',
    // borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 5,
  },
  imgStyle: {
    width: '100%',
    height: 200,
    // borderRadius: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headingStyle: {
    fontSize: 17,
    fontFamily: Font.type.interBold,
    // fontWeight: '700',
    marginTop: 10,
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateAuthorContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    // paddingHorizontal: 10,
  },
  date: {
    color: '#e63946',
    fontFamily: Font.type.robotoBold,
    fontSize: 14,
  },
  descriptionStyle: {
    fontFamily: Font.type.robotoRegular,
  },
  source: {
    color: '#e63946',
    fontFamily: Font.type.robotoBold,
    fontSize: 16,
  },
});

export default ArticleView;
