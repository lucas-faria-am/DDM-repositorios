import { StyleSheet } from 'react-native';

type ButtonProps = {
    title: string,
    action: () => void,
}

export function Botao(props: ButtonProps) {
  return <button type='button' style={styles.button} onClick={props.action} {...props}>{props.title}</button>;
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: "blue",
      color: "white",
      fontSize: 20,
      borderColor: "blue"
    },
  });
