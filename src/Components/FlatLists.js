import React, { Component } from "react"
import { Text, View, FlatList, Image, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export default class FlatLists extends Component {
  state = {
    refresh: true,
    people: [
      {
        id: "1",
        title: "Taylor Swift",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        id: "2",
        title: "Fearless",
        artist: "Taylor Swift",
        url:
          "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        id: "3",
        title: "Speak Now",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        id: "4",
        title: "Red",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        id: "5",
        title: "1989",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      }
    ]
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.people}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text>Title: {item.title}</Text>
                  <Text> Artist: {item.artist}</Text>
                </View>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 250, height: 250 }}
                />
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ borderWidth: 1, height: 1, width: width }} />
          )}
          onRefresh={() => this.setState({ refresh: false })}
          refreshing={this.state.refresh}
        />
      </View>
    )
  }
}
