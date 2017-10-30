# React Native ==> We are going to make a simple todo application today
<h2>Add a note. show a list of note.  delete notes</h2>

<img src="https://media.giphy.com/media/xT9Igh05Pmb98nWPQY/giphy.gif" />
<br>

code 
★ It's preferable to write following code yourself. It will help you to understand code more.

run tis commend in terminal for installing these packages 



``` App.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Moment from 'moment'
import Card from './components/card.js'

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            note: ''
        }
    }  
  render() {
      let notes = this.state.notes.map((note, key) => {
            return (
                
                    <Card 
                        key={key}
                        keyval={key}
                        note={note}
                        onPress={ () => this.deletMethod(key)}
                    />
        )
      })

    return (
      <View style={styles.container}>
        <View style={styles.header} >
        <TextInput 
                value={this.state.note}
                placeholderTextColor={"white"}
                style={styles.textInput}
                placeholderStyle={{color: "white"}}
                placeholder={" < Notes Here  "}
                onChangeText={(note) => this.setState({note})}
                
            />
            <TouchableOpacity
                onPress={() => this.handlePress()}
                style={styles.addButton}>
                    <Text style={styles.addButtonText} > + </Text>    
             </TouchableOpacity>
        </View>
        <View style={styles.midContainer}>
            <ScrollView >
            {notes}
            </ScrollView>
        </View>
        
        <View style={styles.footer}>
            <Text style={styles.headerText}> Memos Always Help </Text>          
        </View>
      </View>
    );
  }
  deletMethod(key) {
     this.state.notes.splice(key, 1)
     this.setState({notes: this.state.notes})
     console.log("this is delete" + this.state.notes)
  }
  handlePress () {
    if (this.state.note){
         this.state.notes.push({
            date: Moment().format('MMMM Do YYYY'),
            note: this.state.note
        });
        this.setState({notes: this.state.notes})
        this.setState({note: ''})
        console.log(this.state.notes)
    }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  header:{
      paddingBottom:30,
    //   paddingLeft:40,
      flex:0.8,
      width:'100%',
      backgroundColor: "#FF4200",
      justifyContent: 'center',
      alignItems: 'center'
  },
  textInput:{
      marginLeft: 40,
      marginTop:30,
    width: '100%',
    color: 'white',
    height:30,
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: "white",
   
   },
  headerText:{
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    
  },    
   midContainer:{    
       flex: 4,
       width:'100%',

   },
   footer:{
       backgroundColor: "#242426",
       flex:0.5,
       flexDirection: 'row',
       width:'100%',
       justifyContent:'center',
       alignItems: 'center'
   },
   addButton:{
    position: 'absolute',
    backgroundColor: '#242426',
    zIndex: 12,
    width: 80,
    height:80,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 50,
    top: 105,
    right:50,
    elevation: 8
   },
   addButtonText:{
    color: '#FA0034',
    fontSize: 50
   },
 

});



card or note.js


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
