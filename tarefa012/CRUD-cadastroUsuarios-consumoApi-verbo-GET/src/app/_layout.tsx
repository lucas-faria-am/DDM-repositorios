import { Stack } from "expo-router";


export default function LayoutIndex() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "Registro de Usuários",
                headerStyle: {
                    backgroundColor: '#00AD98',
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Stack.Screen name="register/RegisterUser" options={{
                title: "Cadastrar Usuário",
                headerStyle: {
                    backgroundColor: '#2992C4',
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Stack.Screen name="update/UpdateUser" options={{
                title: "Atualizar Usuário",
                headerStyle: {
                    backgroundColor: '#A45BB9',
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
            <Stack.Screen name="view/ViewUser" options={{
                title: "Visualizar Usuário",
                headerStyle: {
                    backgroundColor: '#ac7415',
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />

            <Stack.Screen name="view/ViewAllUser" options={{
                title: "Visualizar Todos os Usuários",
                headerStyle: {
                    backgroundColor: '#348122',
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />

            <Stack.Screen name="delete/DeleteUser" options={{
                title: "Excluir Usuário",
                headerStyle: {
                    backgroundColor: '#384F62',
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} />
        </Stack>
    )
}