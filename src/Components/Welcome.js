import React, { Component } from "react"
import {
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TextInput
} from "react-native"

export default class Welcome extends Component {
  render() {
    return (
      <View
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 100,
          borderWidth: 1
        }}
        showsVerticalScrollIndicator={true}
      >
        <Text> This is Text Component </Text>
        <TextInput placeholder={"Input"} multiline={true} />
        <Button title={"Button"} onPress={() => null} />
        <TouchableOpacity>
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => null}
          underlayColor={"#f00"}
          style={{ backgroundColor: "#0f0" }}
        >
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
