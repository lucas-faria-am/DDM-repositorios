import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Lista from "../screens/lista/Lista"
import ItemLista from "../screens/itemlista/ItemLista"

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Lista" component={Lista}/>
            <Screen name="ItemLista" component={ItemLista}/>
        </Navigator>
    )
} 