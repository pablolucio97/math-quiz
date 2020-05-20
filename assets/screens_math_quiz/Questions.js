import React, {useEffect, useState} from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import {RadioButton, Button, Title } from 'react-native-paper'
import {MainContainer, SubContainer} from '../styles/styles_math_quiz'
import ViewPager from '@react-native-community/viewpager'



const Questions = ({navigation}) => {

    const [score, setScore] = useState(0)
    const [time, setTime] = useState(60)

    const [reply1, setReply1] = useState(0)
    const [reply2, setReply2] = useState(0)
    const [reply3, setReply3] = useState(0)
    const [reply4, setReply4] = useState(0)
    const [reply5, setReply5] = useState(0)

    const [feedbackMessage1, setFeedBackMessage1] = useState ('')
    const [feedbackMessage2, setFeedBackMessage2] = useState ('')
    const [feedbackMessage3, setFeedBackMessage3] = useState ('')
    const [feedbackMessage4, setFeedBackMessage4] = useState ('')
    const [feedbackMessage5, setFeedBackMessage5] = useState ('')

    const [radioState1, setRadioState1] = useState(false)
    const [radioState2, setRadioState2] = useState(false)
    const [radioState3, setRadioState3] = useState(false)
    const [radioState4, setRadioState4] = useState(false)
    const [radioState5, setRadioState5] = useState(false)

    const [buttonState1, setButtonState1] = useState(false)
    const [buttonState2, setButtonState2] = useState(false)
    const [buttonState3, setButtonState3] = useState(false)
    const [buttonState4, setButtonState4] = useState(false)
    const [buttonState5, setButtonState5] = useState(false)


    const replying1 =  () => {

    //VERIFY REPLY 1
        if(reply1 === 1) {
            setScore(score + 1)
            setFeedBackMessage1('👌 Correct answer!')
        }else{
            setFeedBackMessage1('👉 The correct answer is 5.')
        }
        setButtonState1(true)
    }

    const replying2 = () => {
        //VERIFY REPLY 2
        if(reply2 === 3) {
            setScore(score + 1)
            setFeedBackMessage2('👌 Correct answer!')
        }else{
            setFeedBackMessage2('👉 The correct answer is 10.')
        }
        setButtonState2(true)
    }

    const replying3 = () => {
        //VERIFY REPLY 3
        if(reply3 === 1) {
            setScore(score + 1)
            setFeedBackMessage3('👌 Correct answer!')
        }else{
            setFeedBackMessage3('👉 The correct answer is 3.')
        }
        setButtonState3(true)
    }

    const replying4 = () => {
        //VERIFY REPLY 4
        if(reply4 === 4) {
            setScore(score + 1)
            setFeedBackMessage4('👌 Correct answer!')
        }else{
            setFeedBackMessage4('👉 The correct answer is 49.5.')
        }
        setButtonState4(true)
    }


    const replying5 = () => {
        //VERIFY REPLY 5
        if(reply5 === 2) {
            setScore(score + 1)
            setFeedBackMessage5('👌 Correct answer!')
        }else{
            setFeedBackMessage5('👉The correct answer is 12')
        }
        setButtonState5(true)
    }

    
    useEffect(() => {
        const interval = setInterval(()=> {setTime(time-1)}, 1000)
        if(time < 1 ){
            setTime(0)
            clearInterval(interval)
            setRadioState1(true)
            setRadioState2(true)
            setRadioState3(true)
            setRadioState4(true)
            setRadioState5(true)
            setButtonState1(true)
            setButtonState2(true)
            setButtonState3(true)
            setButtonState4(true)
            setButtonState5(true)
        }
        return () => {
            clearInterval(interval)
        }
    },[time])


    return (
        <MainContainer>
            <StatusBar
            backgroundColor='#55ff'
            />
            <ViewPager style={styles.viewPager} initialPage={0}>
                
            {/*Question 01*/}

            <View key='1'>
            <SubContainer>
                <Title style={{margin: '9%', marginTop: 30}}>Score: {score}</Title>
                <Title style={{margin: '33%', marginTop: 30}}>Time: {time}</Title>
            </SubContainer>
            <Title style={styles.title}> Question 01:</Title>
            <Title style={styles.title}> What is the result of (2 - 1) + 2²?</Title>
            <RadioButton.Group
            value={reply1}
            onValueChange={(val)=>setReply1(val)}
            >
                <RadioButton.Item style={styles.radio} value={1} disabled={radioState1} label = '5' key={1}/>
                <RadioButton.Item style={styles.radio} value={2} disabled={radioState1} label = '-2' key={2}/>
                <RadioButton.Item style={styles.radio} value={3} disabled={radioState1} label = '1/2' key={3}/>
                <RadioButton.Item style={styles.radio} value={4} disabled={radioState1} label = '0' key={4}/>
            </RadioButton.Group>
            <Button mode='outlined' 
            style={styles.buttons}  disabled={buttonState1} onPress={replying1}>Reply</Button>
            <View>
            <Title style={{fontSize: 18, paddingBottom: 50, padding: 20, textAlign: 'center'}}>{feedbackMessage1}</Title>
            </View>
            </View>

            {/*Question 02*/}

            <View key='2'>
            <SubContainer>
                <Title style={{margin: '9%', marginTop: 30}}>Score: {score}</Title>
                <Title style={{margin: '33%', marginTop: 30}}>Time: {time}</Title>
            </SubContainer>
            <Title style={styles.title}> Question 02:</Title>
            <Title style={styles.title}> What is the result of 2 * 2³ - 6?</Title>
            <RadioButton.Group
            value={reply2}
            onValueChange={(val)=>setReply2(val)}
            >
                <RadioButton.Item style={styles.radio} value={1} disabled={radioState2} label = '12' key={1}/>
                <RadioButton.Item style={styles.radio} value={2} disabled={radioState2} label = '-12' key={2}/>
                <RadioButton.Item style={styles.radio} value={3} disabled={radioState2} label = '10' key={3}/>
                <RadioButton.Item style={styles.radio} value={4} disabled={radioState2} label = '58' key={4}/>
            </RadioButton.Group>
            <Button mode='outlined' 
            style={styles.buttons}  disabled={buttonState2} onPress={replying2}>Reply</Button>
            <View>
            <Title style={{fontSize: 18, padding: 20,  paddingBottom: 50, textAlign: 'center'}}>{feedbackMessage2}</Title>
            </View>
            </View>

            {/*Question 03*/}

            <View key='3'>
            <SubContainer>
                <Title style={{margin: '9%', marginTop: 30}}>Score: {score}</Title>
                <Title style={{margin: '33%', marginTop: 30}}>Time: {time}</Title>
            </SubContainer>
                        <Title style={styles.title}> Question 03:</Title>

            <Title style={styles.title}> What is the result of 6/3 - 6/3 + 3?</Title>
            <RadioButton.Group
            value={reply3}
            onValueChange={(val)=>setReply3(val)}
            >
                <RadioButton.Item style={styles.radio} value={1} disabled={radioState3} label = '3' key={1}/>
                <RadioButton.Item style={styles.radio} value={2} disabled={radioState3} label = '-3' key={2}/>
                <RadioButton.Item style={styles.radio} value={3} disabled={radioState3} label = '1/3' key={3}/>
                <RadioButton.Item style={styles.radio} value={4} disabled={radioState3} label = '2/3' key={4}/>
            </RadioButton.Group>
            <Button mode='outlined' 
            style={styles.buttons}  disabled={buttonState3} onPress={replying3}>Reply</Button>
            <View>
            <Title style={{fontSize: 18, padding: 20, paddingBottom: 50, textAlign: 'center'}}>{feedbackMessage3}</Title>
            </View>
            </View>

            {/*Question 04*/}

            <View key='4'>
            <SubContainer>
                <Title style={{margin: '9%', marginTop: 30}}>Score: {score}</Title>
                <Title style={{margin: '33%', marginTop: 30}}>Time: {time}</Title>
            </SubContainer>
                        <Title style={styles.title}> Question 04:</Title>

            <Title style={styles.title}> What is the result of 7² + 1/2?</Title>
            <RadioButton.Group
            value={reply4}
            onValueChange={(val)=>setReply4(val)}
            >
                <RadioButton.Item style={styles.radio} value={1} disabled={radioState4} label = '49' key={1}/>
                <RadioButton.Item style={styles.radio} value={2} disabled={radioState4} label = '7.5' key={2}/>
                <RadioButton.Item style={styles.radio} value={3} disabled={radioState4} label = '-7' key={3}/>
                <RadioButton.Item style={styles.radio} value={4} disabled={radioState4} label = '49.5' key={4}/>
            </RadioButton.Group>
            <Button mode='outlined' 
            style={styles.buttons}  disabled={buttonState4} onPress={replying4}>Reply</Button>
            <View>
            <Title style={{fontSize: 18, padding: 20,  paddingBottom: 50, textAlign: 'center'}}>{feedbackMessage4}</Title>
            </View>
            </View>

            {/*Question 05*/}

            <View key='5'>
            <SubContainer>
                <Title style={{margin: '9%', marginTop: 30}}>Score: {score}</Title>
                <Title style={{margin: '33%', marginTop: 30}}>Time: {time}</Title>
            </SubContainer>
                        <Title style={styles.title}> Question 05:</Title>

            <Title style={styles.title}> What is the result of (√64 - √16) * 3?</Title>
            <RadioButton.Group
            value={reply5}
            onValueChange={(val)=>setReply5(val)}
            >
                <RadioButton.Item style={styles.radio} value={1} disabled={radioState5} label = '8' key={1}/>
                <RadioButton.Item style={styles.radio} value={2} disabled={radioState5} label = '12' key={2}/>
                <RadioButton.Item style={styles.radio} value={3} disabled={radioState5} label = '244' key={3}/>
                <RadioButton.Item style={styles.radio} value={4} disabled={radioState5} label = '-8' key={4}/>
            </RadioButton.Group>
            <Button mode='outlined' 
            style={styles.buttons}  disabled={buttonState5} onPress={replying5}>Reply</Button>
            <Button mode='outlined' 
            style={styles.buttons} onPress={() => navigation.navigate('Finish', {postScore: score})}>Finish</Button>
            <View>
            <Title style={{fontSize: 18, padding: 20, paddingBottom: 10, textAlign: 'center'}}>{feedbackMessage5}</Title>
            </View>
            </View>
            </ViewPager>
        </MainContainer>
    )
    }

export default Questions

const styles = StyleSheet.create({
    viewPager:{
        flex: 1,
        padding: 10,
        width: '99%'    
    },
    title:{
        padding: 15,
        textAlign: 'center',
        fontSize: 20
    },
    radio:{
        alignSelf: 'center'
    },
    buttons:{
        width: 200,
        margin: 10,
        alignSelf: 'center',
        marginTop: 30
    }
})
