import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { List, ListItem } from "react-native-elements";
import Note from './Note'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      noteArray: [],
      noteText: ''
    }
  }

  addNote() {
    if (this.state.noteText) {

      var d = new Date();
      this.state.noteArray.push({
        'date': d.getDate() +
          "/" + d.getMonth() +
          "/" + d.getFullYear(),
        'note': this.state.noteText
      })
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' })
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }

  render() {

    return(
      <View style={styles.container } >

      <View style={styles.header}>
        <Text style={styles.headerText}>Todo List</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <FlatList
          data={this.state.noteArray}
          keyExtractor={(item, key) => key}
          renderItem={({ val, key }) => {
            return (
              < Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)}
              />
            )
          }}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(noteText) => this.setState({ noteText })}
          value={this.state.noteText}
          placeholder='notes'
          placeholderTextColor='white'
         />
      </View>

      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>

      </TouchableOpacity>


     </View>
    );


  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgb(84, 153, 199)',
    alignItems: 'center',
    justifyContent: 'center',
    //borderBottomWidth: 10,
    // borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 20
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#2980B9',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    // elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }

});
