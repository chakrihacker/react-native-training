import React, { Component } from "react"
import { Text, View } from "react-native"

export default class Splash extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   Math.random() > 0.5
    //     ? this.props.navigation.navigate("Auth")
    //     : this.props.navigation.navigate("Home")
    // }, 3000)
    this.props.navigation.navigate("Home", { user: "Susan", bio: "some thing" })
  }

  render() {
    return (
      <View>
        <Text> Splash </Text>
      </View>
    )
  }
}
