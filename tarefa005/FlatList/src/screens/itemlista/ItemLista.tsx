import { Text, View } from "react-native";
import { styles } from "./styles";

export default function ItemLista({ route }: { route: any}) {
    const { itemNome} = route.params;

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{itemNome}</Text>
            </View>
        </>
    )
}