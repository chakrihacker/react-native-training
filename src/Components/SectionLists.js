import React, { Component } from "react"
import { Text, View, SectionList } from "react-native"

export default class SectionLists extends Component {
  state = {
    games: [
      { data: [{ name: "Chris" }], key: "Basketball" },
      { data: [{ name: "Amanda" }], key: "Baseball" },
      { data: [{ name: "Jennifer" }, { name: "Mike" }], key: "Football" }
    ]
  }
  render() {
    return (
      <View>
        <SectionList
          sections={this.state.games}
          renderSectionHeader={susan => (
            <Text style={{ color: "red" }}>{susan.section.key}</Text>
          )}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}
