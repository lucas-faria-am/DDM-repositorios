// import { Text, View, Image } from "react-native";
// import { styles } from "./styles";

// export default function ItemLista( { route }: { route: any } ) {
//     const { nome, imagem, descricao } = route.params;

//     return(
//         <>
//             <View style={styles.container}>
//                 <Text style={styles.title}>{nome}</Text>
//                 <Image style={{ width: 50, height: 50 }} source={imagem} />
//                 <Text style={styles.title}>{descricao}</Text>
//             </View>
//         </>
//     )
// }
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export default function App( { route }: { route: any } ) {
    const { nome, imagems, descricao } = route.params;

    const [index, setIndex] = useState(0);
    const handlePrevious = () => {
        setIndex((index - 1 + imagems.length) % imagems.length);
    };

    const handleNext = () => {
        setIndex((index + 1) % imagems.length);
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imagems[index].source} />
            <TouchableOpacity onPress={handlePrevious} style={styles.button}>
                <Text style={styles.buttonText}>Anterior</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
        </View>
    );
}
