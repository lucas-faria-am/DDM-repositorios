import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PickerApp() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [moeda, setMoeda] = useState('Real ou barça');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const mostrarMoeda = () => {
    setModalVisible(true);
  };

  const esconderMoeda = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={mostrarMoeda}
      >
        <Text style={styles.buttonText}>Moeda - Picker</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={esconderMoeda}
      >
        <View style={styles.picker}>
          <Text style={styles.pickerText}> Escolher moeda </Text>
          <View style={styles.pickerText}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'purple'}
              
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Senha"
              placeholderTextColor={'purple'}
              onChangeText={(text) => setSenha(text)}
            />
            <Picker
              selectedValue={moeda}
              onValueChange={moedaAtual => setMoeda(moedaAtual)}>
              <Picker.Item label="USD" value="US Bidens" color='red' />
              <Picker.Item label="EUR" value="Euro Truck" color='orange' />
              <Picker.Item label="BRL" value="Real ou barça" color='green' />
            </Picker>
            <Text style={{fontStyle: 'italic', fontSize: 16, color: 'green'}}>
               Moeda : {moeda}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={esconderMoeda}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  pickerText: {
    margin: 10,
    color: 'purple',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  pickerButton: {
    margin: 20,
    alignSelf:  'center',
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
