import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Font from '../../constants/fonts/fonts';
import moment from 'moment';
// import log from '../../config/loggerConfig';

const NewsDetails = route => {
  const {urlToImage, title, description, date, source} =
    route?.route?.params?.props;

  const {
    container,
    titleStyles,
    dateSourceContainer,
    imgStyle,
    descriptionStyle,
    infoStyle,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <Text style={titleStyles}>{title}</Text>
      <View style={dateSourceContainer}>
        <Text style={infoStyle}>{source}</Text>
        <Text style={infoStyle}>{moment(date).format('MMM Do YY')}</Text>
      </View>
      <Image source={{uri: urlToImage}} style={imgStyle} />
      <Text style={descriptionStyle}>{description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '98%',
    padding: 10,
    // paddingLeft: 20,
    elevation: 5,
    alignSelf: 'center',
    // backgroundColor: '#fff',
    // margin: 10,
  },
  titleStyles: {
    fontFamily: Font.type.robotoBold,
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  dateSourceContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    // paddingLeft: -10,
    // backgroundColor: 'red',
  },
  imgStyle: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  descriptionStyle: {
    fontFamily: Font.type.robotoMedium,
    fontSize: 15,
  },
  infoStyle: {color: '#e63946', fontFamily: Font.type.robotoBold, fontSize: 14},
});

export default NewsDetails;
