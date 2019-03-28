import React from "react"
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation"
import Splash from "./Splash"
import Home from "./Home"
import Auth from "./Auth"

const AppNavigator = createSwitchNavigator({
  Splash: {
    screen: Splash
  },
  Auth,
  Home: Home
})

const Navigation = createAppContainer(AppNavigator)

export default Navigation
