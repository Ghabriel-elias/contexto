import React from 'react'
import { SingIn } from "../pages/singIn";

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name='SingIn' component={SingIn}/>
  </AuthStack.Navigator>
)

export default AuthRoutes