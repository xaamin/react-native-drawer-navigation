import React, { Component } from 'react';
import { FlatList, TouchableHighlight, Image, View, Text, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation';

import DrawerEvents from './DrawerEvents';

const routes = ['Home', 'Chat', 'Profile'];

export default class Drawer extends Component {

  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
    this.subscribeToDrawerEvents = this.subscribeToDrawerEvents.bind(this);

    // Subsribe to drawer events
    DrawerEvents.subscribe(this.subscribeToDrawerEvents);
}

subscribeToDrawerEvents(event) {
    if (event === 'DRAWER_CLOSED' && this.route) {
        this.navigateAfterDrawerGetsClosed();

        this.route = null;
    }
}

navigateAfterDrawerGetsClosed() {
    const route = this.route;

    setTimeout(() => this.props.navigation.navigate(route), 0);
}

navigate(route) {
    this.route = route;
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
}

  keyExtractor = (item, index) => item;

  render() {
    return (
      <View>
        <Image
          source={{
            uri: "https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/10426115_816449658412011_8651870285445381481_n.jpg?_nc_cat=0&oh=24dd3767d82c5b474ca9fe0367b87d4c&oe=5BC43503"
          }}
          style={{
            height: 220,
            justifyContent: "center",
            alignItems: "center"
          }} />
        <FlatList
          data={routes}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => {
            return (<View style={styles.item}
              key={item}
            >
              <TouchableHighlight
                onPress={() => this.navigate(item)}
              >
                <Text>{item}</Text>
              </TouchableHighlight>
            </View>);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  item: {
    height: 35,

  }
});