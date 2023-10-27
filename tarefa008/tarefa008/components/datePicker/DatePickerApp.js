import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, Text } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

export default function DatePickerApp() {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleModalPress = (event) => {
    if (event.target === event.currentTarget) {
      hideDatePicker();
    }
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={showDatePicker}
        >
          <Text style={styles.buttonText}>Calendário - DatePicker</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isDatePickerVisible}
        onRequestClose={hideDatePicker}
      >
        <View style={styles.modalContainer} onTouchStart={handleModalPress}>
          <DatePicker
            options={{
              backgroundColor: 'black',
              textHeaderColor: 'purple',
              textDefaultColor: 'purple',
              selectedTextColor: 'white',
              mainColor: 'blue',
              textSecondaryColor: 'white',
              borderColor: 'blue',
              textFontSize: 20,
            }}
            current="2023-01-01"
            selected="2023-11-01"
            mode="calendar"
            minuteInterval={30}
            style={{ borderRadius: 20, width: 330 }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  button: {
    backgroundColor: 'purple',
    paddingRight: 20,
    paddingStart: 20,
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
});