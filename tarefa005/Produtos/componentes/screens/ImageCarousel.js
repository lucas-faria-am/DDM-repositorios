import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30}}>
      <TouchableOpacity onPress={goPrev}>
        <Image
          source={require("../database/imagens/uteis/left-arrow.png")} // Substitua pelo ícone de seta para a esquerda
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
      <Image
        source={images[currentIndex]}
        style={{ width: 200, height: 200, resizeMode: 'contain' }} // Ajuste o tamanho conforme necessário
      />
      <TouchableOpacity onPress={goNext}>
        <Image
          source={require("../database/imagens/uteis/right-arrow.png")} // Substitua pelo ícone de seta para a direita
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageCarousel;
