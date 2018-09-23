import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}> {this.props.val.date} </Text>
        <Text style={styles.noteText}> {this.props.val.note} </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    
});
