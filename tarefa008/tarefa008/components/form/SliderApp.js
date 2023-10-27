import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';

export default function SliderApp() {
  const [value, setValue] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const mostrarSlider = () => {
    setModalVisible(true);
  };

  const esconderSlider = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={mostrarSlider}
        >
          <Text style={styles.buttonText}>Avaliação - Slider</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={esconderSlider}
      >
      <View style={styles.picker}>
      <Text style={styles.buttonText}>Avaliar produto</Text>
        <TextInput 
          placeholder="Nome"
          placeholderTextColor={'purple'}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          placeholderTextColor={'purple'}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ fontStyle: 'italic', fontSize: 16, alignSelf: 'center' }}>
          Faça uma avaliação do produto.
        </Text>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="#AF7AC5"
          maximumTrackTintColor="#4A235A"
          thumbTintColor="#7D3C98"
        />
        <Text style={{ color: 'green', alignSelf: 'center' }}>
          {value}% de Qualidade
        </Text>
        <TouchableOpacity
            style={styles.pickerButton}
            onPress={esconderSlider}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
      </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'purple',
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  picker: {
    flex: 1,
    margin: 30,
    backgroundColor: 'white',
    justifyContent: 'center'
    
  },
  pickerText: {
    margin: 10,
    color: 'purple',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  pickerButton: {
    margin: 20,
    alignSelf: 'center',
    backgroundColor: 'purple',
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});
