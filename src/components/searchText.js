import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../constants/fonts/fonts';

const SearchText = props => {
  const {searchIcon, searchStyle, textInput, textStyle} = styles;
  return (
    <View>
      <Text style={textStyle}>Search</Text>
      <View style={searchStyle}>
        <SearchIcon
          name="search"
          size={20}
          color="#C6C6C6"
          style={searchIcon}
        />
        <TextInput
          placeholder="search"
          style={textInput}
          value={props.searchText}
          onChangeText={props.setSearchText}
          onSubmitEditing={props.onSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: Fonts.type.robotoMedium,
    color: 'black',
  },
  searchStyle: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 5,
    margin: 7,
    paddingTop: 6,
  },
  textInput: {
    width: '100%',
  },
});

export default SearchText;
