import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetScreen = ({ navigation}) => {
    return (
        <View>
            <Text>Here we go</Text>
            <Button
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")} 
      />
        </View>
    )
}

export default DetScreen

const styles = StyleSheet.create({})
