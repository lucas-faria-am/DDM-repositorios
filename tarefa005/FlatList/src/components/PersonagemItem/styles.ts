import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#808080",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 25,
      paddingVertical: 25,
      margin: 5,
      borderRadius: 10
    },
  
    content: {
      flex: 1,
      marginLeft: 16
    },
  
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFD700",
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      color: "#000",
    },
  });