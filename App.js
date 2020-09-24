import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import firebase from "firebase";
import SignUpForm from './components/SignUpForm';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
    componentDidMount() {
        const fireBaseConfig = {
            apiKey: "Indsæt egen config",
            authDomain: "IIndsæt egen config",
            databaseURL: "Indsæt egen config",
            projectId: "Indsæt egen config",
            storageBucket: "Indsæt egen config",
            messagingSenderId: "Indsæt egen config",
            appId: "Indsæt egen config",
            measurementId: "Indsæt egen config"
        };
        // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
        // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
        if (!firebase.apps.length) {
            firebase.initializeApp(fireBaseConfig);
        }
    }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Change code in the editor and watch it change on your phone! Save to get a shareable url.
          </Text>
          <Card>
            <SignUpForm />
          </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
