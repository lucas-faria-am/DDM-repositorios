import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../../components/Container';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function App() {
    const [error, setError] = useState<string | undefined>(undefined);
    const [contatos, setContatos] = useState<Contacts.Contact[]>();
    const { push, setParams } = useRouter();

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Birthday, Contacts.Fields.Emails, Contacts.Fields.FirstName,
                    Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
                });
                if (data.length > 0) {
                    setContatos(data);

                } else {
                    setError("Não há contatos salvos");
                }
            } else {
                setError("Permissão para acessar os contatos foi negada");
            }
        })();
    }, []);


    return (
        <Container>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView>
                    {contatos?.map((contato, index) => (
                        <TouchableOpacity style={styles.touchableOpacity} key={index} >
                            <View style={styles.viewList}>
                                <Text style={styles.textList}>Id: {contato.id}</Text>
                                <Text style={styles.textList}>Nome: {`${contato.firstName} ${contato.lastName ? contato.lastName : ""}`}</Text>
                                <Text style={styles.textList}>Endereço: {`${contato.addresses ? contato.addresses : ""}`}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </Container>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    touchableOpacity: {
        // width: 100,
        // height: 100,
        backgroundColor: '#cbcbcb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    viewList: {
        width: "100%",
        padding: 2,
        borderWidth: 1,
        borderRadius: 10
    },
    textList: {
        fontSize: 14,
        fontWeight: '400',
        width: "100%"
    }
});
// style={{ marginBottom: 20, padding: 16, borderWidth: 1, borderRadius: 10 }}