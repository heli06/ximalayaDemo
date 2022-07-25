import {viewportWidth, wp, hp} from '@/utils/index';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';

const data = [
  'http://39.105.213.120/images/1.jpg',
  'http://39.105.213.120/images/2.jpg',
  'http://39.105.213.120/images/3.jpg',
];

const sliderWidth = viewportWidth;
// const sideWidth = wp(90);
const sideHeight = hp(26);
const itemWidth = wp(90) + wp(2) * 2;
const styles = StyleSheet.create({
  image: {
    width: itemWidth,
    height: sideHeight,
  },
});

class Carousel extends React.Component {
  renderItem = ({item}: {item: string}) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };
  render() {
    return (
      <SnapCarousel
        data={data}
        renderItem={this.renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    );
  }
}

export default Carousel;
