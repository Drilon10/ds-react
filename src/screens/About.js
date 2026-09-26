import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const About = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to About Screen</Text>
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

export default About;
