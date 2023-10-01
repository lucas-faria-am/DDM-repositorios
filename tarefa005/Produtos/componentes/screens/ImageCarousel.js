import React from "react";
import { View, Image } from "react-native";
import Swiper from 'react-native-swiper';

const ImageCarousel = ({ images }) => {
  return (
      <Swiper>
        {images.map((image, index) => (
          <View key={index}> 
            <Image
              source={image}
              style={{ width: '100%', height: 300, resizeMode: 'contain'}}
            />
          </View>
        ))}
      </Swiper>
  );
};

export default ImageCarousel;
