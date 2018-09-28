import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    
    TouchableOpacity,
} from 'react-native';

import Main from './Main';

export default class Note extends Component {
    render() {
        return (
            <View  style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>

                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                         <Button onPress={this.props.deleteMethod} title="Delete"/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={this.props.EditMethod} title="Edit"/>    
                    </View>
                </View>

                {/* <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>D</Text>
                </TouchableOpacity>
            
                <TouchableOpacity  style={styles.noteEdit}>
                    <Text style={styles.noteEditText}>E</Text>
                 </TouchableOpacity> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    note: {
        //position: 'relative',
        padding: 20,
        //paddingRight: 100,
        borderBottomWidth: 2,
        justifyContent: 'space-between',
       // flexDirection: 'row',
        borderBottomColor: '#d6ff0c'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        flex: 1,
      },
      textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
      }
    // noteDelete: {
    //     position: 'absolute',
    //     justifyContent: 'center',
    //    // alignItems: 'center',
    //     backgroundColor: '#2980b9',
    //     padding: 10,
    //     top: 10,
    //     bottom: 10,
    //     right: 10
    // },

    // noteEdit: {
    //     position: 'absolute',
    //     justifyContent: 'center',
    //    // alignItems: 'center',
    //     backgroundColor: '#2980b9',
    //     justifyContent: 'space-between',
    //     padding: 10,
    //     top: 10,
    //     bottom: 10,
    //     flexDirection: 'row',
    //     right: 20
    // },

    // noteEditText:{
    //     color: 'white'
    // },

    // noteDeleteText: {
    //     color: 'white'
    // },
    // container: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
});