import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import Home from './assets/screens_math_quiz/Home'
import Questions from './assets/screens_math_quiz/Questions'
import Finish from './assets/screens_math_quiz/Finish'
import Instructions from './assets/screens_math_quiz/Instructions'

const App = () => {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = 'Home'>
        <Stack.Screen name='Home' component={Home}
        options={{
          headerStyle:{
            backgroundColor: '#55ff'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleSize: 18
        }}/>
        <Stack.Screen name='Questions' component={Questions}
        options={{
          headerStyle:{
            backgroundColor: '#55ff'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleSize: 18
        }}
        />
        <Stack.Screen name='Instructions' component={Instructions}
        options={{
          headerStyle:{
            backgroundColor: '#55ff'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleSize: 18
        }}
        />
        <Stack.Screen name='Finish' component={Finish}
        options={{
          headerStyle:{
            backgroundColor: '#55ff'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleSize: 18
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
