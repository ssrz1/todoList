import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  },
  header: {

  },
});
