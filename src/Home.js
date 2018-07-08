import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Home extends Component {
  onPress = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button
          onPress={this.onPress}
          title="Open drawer"
          color="#841584"
        />
      </View>
    )
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