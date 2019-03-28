import React, { Component } from "react"
import { Text, View, ScrollView } from "react-native"

export default class Lists extends Component {
  state = {
    people: ["Susan", "Subramanya", "Anudeep", " Jane", "John"]
  }

  renderPerson = people => {
    return people.map((person, index) => <Text key={index}>{person}</Text>)
  }

  render() {
    const people = ["Susan", "Subramanya", "Anudeep", " Jane", "John"]
    return <ScrollView>{this.renderPerson(this.state.people)}</ScrollView>
  }
}
