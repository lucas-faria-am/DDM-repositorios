import { View, StyleSheet } from "react-native";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Container({ children }: LayoutProps) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0b0130e5"
    }
});