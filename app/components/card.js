import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

export default class Card extends Component {
    render(){
        return(
            <View 
             key={this.props.keyval}
             style={styles.container}>

                <Text style={styles.textNote}>{this.props.note.date}</Text>
                <Text style={styles.textNote}>{this.props.note.note}</Text>
                <Text style={styles.textNote}>{this.props.keyval}</Text>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={this.props.onPress}
                >
                    <Text style={styles.deleteText}>D</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding:20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    textNote:{
        paddingLeft:20,
        borderLeftWidth: 10,
        borderLeftColor: "#e91e63"
    },
    deleteButton:{
        position: 'absolute',
        top:10,
        bottom:10,
        right:10,
        backgroundColor: '#298069',
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
    },
    deleteText:{
        color: 'white'
    }
})