import React, {useContext} from "react";
import {View, Button} from 'react-native'
import AuthContext from "../../context/auth";

export const Dashboard: React.FC = () => {
  const {logOut} = useContext(AuthContext)

  function handleLogOut() {
    logOut()
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Log out" onPress={() => handleLogOut()}/>
    </View>
  )
}