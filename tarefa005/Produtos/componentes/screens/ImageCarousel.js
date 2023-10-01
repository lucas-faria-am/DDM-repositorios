import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';

const ImageCarousel = ({ images }) => {
  return (
    <Swiper >
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image
            source={image}
            style={styles.image}
          />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
});

export default ImageCarousel;
