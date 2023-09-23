import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "./routes";
import {AuthProvider} from "./context/auth";

const App: React.FC = () => { 
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App 