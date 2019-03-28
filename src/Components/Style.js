import React, { Component } from "react"
import { Text, View, SafeAreaView, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export default class Style extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
          <View>
            <Text>Header</Text>
          </View>
          <View>
            <Text>Content</Text>
          </View>
          <View>
            <Text>Footer</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

// flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
