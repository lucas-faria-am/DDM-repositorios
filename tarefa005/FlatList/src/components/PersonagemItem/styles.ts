import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
  
    content: {
      flex: 1,
      marginLeft: 16,
    },
  
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#6F4E37",
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      color: "#000",
    },
  });