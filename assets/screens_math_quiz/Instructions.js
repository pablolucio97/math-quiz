import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import {Button, Title, Subheading } from 'react-native-paper'
import {MainContainer, SubContainer} from '../styles/styles_math_quiz'



const Instructions = ({navigation}) => {
    return (
        <MainContainer>
            <Title style={{fontSize: 22, textAlign: 'center'}}>☝ Instructions:</Title>
            <Subheading style={styles.subheadings}>Try to respond the current question, if you reply correctly, gains a point.</Subheading>
            <Subheading style={styles.subheadings}>Once replied a question, you don't reply it again.</Subheading>
            <Subheading style={styles.subheadings}>Swipe to right to go to the next question and to left to previous question.</Subheading>
            <Subheading style={styles.subheadings}>The time is running. If the time ends, is valid the amount points in this moment.</Subheading>
             <Subheading style={styles.subheadings}>Do least 3 points to win.</Subheading>
            <Button style={{margin: 20}} mode='outlined' onPress={()=> navigation.navigate('Home')}>
                Go back
            </Button>
        </MainContainer>
    )
}

export default Instructions

const styles = StyleSheet.create({
    subheadings: {
        padding: 8
    }
})