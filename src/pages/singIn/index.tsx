import React, {useContext} from "react";
import {View, Button} from 'react-native'
import AuthContext from "../../context/auth";

export const SingIn: React.FC = () => {
  const {sing} = useContext(AuthContext)

  async function handleSingIn() {
    sing()
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Sing In" onPress={() => handleSingIn()}/>
    </View>
  )
}