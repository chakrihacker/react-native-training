import React, { Component } from "react"
import { Text, View } from "react-native"

export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text> Home </Text>
        <Text>Welcome {this.props.navigation.getParam("bio")} </Text>
      </View>
    )
  }
}
