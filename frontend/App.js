import React from 'react';
import { useState } from 'react';
import {Text, TextInput, View, SafeAreaView, ScrollView, Button, StyleSheet, FlatList} from 'react-native';

function HelloWorldApp() {
  const [text, setText] = useState("");
  const [wordList, addWord] = useState([]);

  return (
    <ScrollView style={style.container}>
      <View style={style.mainArea}>
        <Text>Make Words</Text>
        <TextInput onChangeText={setText} placeholder={"gib me word"}  style={style.wordEntry}></TextInput>
        <Button title={"Hi"} onPress={e => addWord(old => [...old, text])}></Button>
      </View>

      <View style={"EnteredWords"}>
        <Text>Words Entered</Text>
        {wordList.map(item => {
          return <Text key={(Math.random() + 1).toString(36).substring(7)}>{item}</Text>
        })}
      </View>


    </ScrollView>
  );
};


const style = StyleSheet.create({
  container : {
    flex: 1,
  },

  mainArea: {
    width: "100%",
    flex: 1,
    gap: 20,
  },

  wordEntry:  {
    width: '100%',
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: '#FFFFFF'
  },

  EnteredWords: {
    flex: 1,
    paddingBottom: 50,
  },

  WordList: {
    height: 200
  }
})


export default HelloWorldApp;