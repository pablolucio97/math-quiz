import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import {RadioButton, Button, Title } from 'react-native-paper'
import {MainContainer, SubContainer} from '../styles/styles_math_quiz'
import sad from '../lotties/sad_emoji.json'
import happy from '../lotties/happy_emoji.json'
import LottieView from 'lottie-react-native'
import RNRestart from 'react-native-restart'


const Finish = ({route}) => {
    return (
        <MainContainer>
            <Title style={{padding: 20, textAlign: 'center'}}>{route.params.postScore >=3? 'Congratulations!' : 'Try to plain again to get better score.'}</Title>
            <Title style={{textAlign: 'center'}}>Your total score : {route.params.postScore}/5</Title>
            <LottieView
            resizeMode='contain'
            source={route.params.postScore >= 3? happy : sad}
            autoPlay
            loop
            />
            <Button mode='outlined'  style={{margin: 30}} onPress={()=>RNRestart.Restart()}>Play again</Button>
        </MainContainer>
    )
}

export default Finish


