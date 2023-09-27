import React from "react";
import {View, Button} from 'react-native'
import {useAuth} from "../../context/auth";

export const Dashboard: React.FC = () => {
  const {logOut} = useAuth()

  function handleLogOut() {
    logOut()
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Log out" onPress={() => handleLogOut()}/>
    </View>
  )
}