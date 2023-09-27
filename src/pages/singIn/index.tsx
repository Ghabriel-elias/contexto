import React from "react";
import {View, Button} from 'react-native'
import {useAuth} from "../../context/auth";

export const SingIn: React.FC = () => {
  const {sing} = useAuth()

  async function handleSingIn() {
    sing()
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Sing In" onPress={() => handleSingIn()}/>
    </View>
  )
}