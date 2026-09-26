import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
