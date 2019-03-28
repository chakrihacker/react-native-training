import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import Welcome from "./src/Components/Welcome"
import Style from "./src/Components/Style"
import Lists from "./src/Components/Lists"
import FlatLists from "./src/Components/FlatLists"
import SectionLists from "./src/Components/SectionLists"
import Network from "./src/Components/Network"

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Welcome /> */}
        {/* <Style /> */}
        {/* <Lists /> */}
        {/* <FlatLists /> */}
        {/* <SectionLists /> */}
        <Network />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#00f",
    alignItems: "center",
    justifyContent: "center"
  }
})
