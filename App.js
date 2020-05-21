import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignUpContainer from './container/SignUpContainer';
import UserListContainer from "./UserList";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <SignUpContainer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    }
});



