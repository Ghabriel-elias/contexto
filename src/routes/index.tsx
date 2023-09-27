import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import AuthRoutes from './auth.routes'
import { useAuth } from '../context/auth'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const {signed, loading} = useAuth()
  
  if(loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'#000'} size={45}/>
      </View>
    )
  }

  return (
    signed 
    ? <AppRoutes/>
    : <AuthRoutes/>
  );
}

export default Routes