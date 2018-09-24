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

        <View style={styles.header}>      
          <Text style={styles.headerText}>Todo List</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>

        </ScrollView>
        <View style={styles.footer}>
          <TextInput style={styles.textInput}> </TextInput>
        </View>


     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
  },
  header: {

  },
  headerText: {

  },
});
