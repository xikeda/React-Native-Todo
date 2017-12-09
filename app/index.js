import React from 'react';
import { StyleSheet, View} from 'react-native';
import Routes from './Screens/Routes'
import * as firebase from "firebase"

const config = {
  apiKey: "AIzaSyAJTK0LE85s5jxS_3Qy5gkBgJZUiaQ_dms",
  authDomain: "todo-a3173.firebaseapp.com",
  databaseURL: "https://todo-a3173.firebaseio.com",
  projectId: "todo-a3173",
  storageBucket: "todo-a3173.appspot.com",
  messagingSenderId: "363348688712"
  };
  firebase.initializeApp(config);

export default class App extends React.Component {

  render() {

    return (
        <View style={{flex: 1}}>
            <Routes />
        </View>
     )
  }
}
