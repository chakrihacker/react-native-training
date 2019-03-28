import React, { Component } from "react"
import { Text, View, ActivityIndicator } from "react-native"

export default class Network extends Component {
  // 1. Make a async function for network call
  // 2. Call that function in componentDidMount

  state = {
    isLoading: true,
    isError: false,
    data: null
  }

  componentDidMount() {
    this.makeNetworkCall()
  }

  makeNetworkCall = async () => {
    try {
      let todoResp = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
        // {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "X-ACCESS-TOKEN": "Bearer kabsdlasdasd"
        //   },
        //   body: JSON.stringify({
        //     name: "Susam"
        //   })
        // }
      )
      let parsedResp = await todoResp.json()
      this.setState({ isLoading: false, data: parsedResp })
      console.log(parsedResp)
    } catch (error) {
      console.log(error)
      this.setState({ isError: true, isLoading: false })
    }
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" />
    }
    if (this.state.isError) {
      return <Text>Something Went Wrong</Text>
    }
    return (
      <View>
        <Text> {this.state.data.title} </Text>
      </View>
    )
  }
}
