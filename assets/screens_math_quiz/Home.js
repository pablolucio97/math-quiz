import React from 'react'
import {StatusBar} from 'react-native'
import {MainContainer, SubContainer, ButtonsContainer} from '../styles/styles_math_quiz'
import {Button, Title, Subheading} from 'react-native-paper'
import LottieView from 'lottie-react-native';
import mathQuiz from '../lotties/math_quiz.json'

const Home = ({navigation}) => {
    return (
        <MainContainer>
            <StatusBar
            backgroundColor='#55ff'
            />
            <Title>Math Quiz</Title>
            <Subheading style={{textAlign: 'justify', padding: 10}}>
            Try to respond the question inside the time range to get score.</Subheading>
            <LottieView
            resizeMode='contain'
            speed={1}
            source={mathQuiz}
            autoPlay
            loop    
            style={{margin: 25}}
            speed={.8}
            />
            <ButtonsContainer>
            <Button mode='outlined' style={{margin: 20}} onPress={()=> navigation.navigate('Questions')}>Start</Button>
            <Button mode='outlined' style={{margin: 20}} onPress={()=> navigation.navigate('Instructions')}>Instructions</Button>
            </ButtonsContainer>
        </MainContainer>
    )
}

export default Home
