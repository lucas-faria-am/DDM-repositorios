import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  title: string,
  action: () => void,
}

export function Botao(props: ButtonProps) {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.action}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#434548",
    alignItems: 'center',
    width: "50%",
    height: "8%",
    marginVertical: 30,
    fontSize: 20,
    borderColor: "#000000",
    padding: 4,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});
