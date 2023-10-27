import React, { useState } from 'react';
import { Switch, View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default function SwitchApp() {
  const [switchValue, setSwitchValue] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const mostrarInterruptor = () => {
    setModalVisible(true);
  };

  const esconderInterruptor = () => {
    setModalVisible(false);
  };

  const interruptor = (value) => {
    setSwitchValue(value);
  };

  return (
    <View>
       <TouchableOpacity
        style={styles.button}
        onPress={mostrarInterruptor}
      >
        <Text style={styles.buttonText}>Interruptor - Switch</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={esconderInterruptor}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.text}>Interruptor </Text>
          <Text style={{ fontSize: 20, color: switchValue ? 'green' : 'red' }}>
            {switchValue ? 'Interruptor está LIGADO' : 'Interruptor está DESLIGADO'}
          </Text>
          <Switch
            thumbColor={'#884EA0'}
            style={{ marginTop: 10, transform: [{ scale: 1.7 }] }}
            onValueChange={interruptor}
            value={switchValue}
          />
          <TouchableOpacity
          style={styles.button}
          onPress={esconderInterruptor}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        </View>
        
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 15,
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
  
  },
  Switchtext: {
    margin: 30,
    color: 'purple',
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  text: {
    margin: 10,
    color: 'purple',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
});