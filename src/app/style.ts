import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    abaDeLogin: {
        backgroundColor: "#11b47c",
        flex: 1,
    },
    textContainer: {
        flex: 1, // Faz o contêiner ocupar todo o espaço disponível
        justifyContent: "center", // Centraliza verticalmente
        alignItems: "center", // Centraliza horizontalmente
    },
    textCadastro: {
        textAlign: "center", // Centraliza horizontalmente
        color: "#fff", // Cor do texto
        fontSize: 24, // Tamanho do texto
        fontWeight: "bold", // Negrito
        marginTop: 20, // Espaçamento superior
    },
    containerDad: {
        marginTop: "30%",
        height: "70%",
        width: "100%",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: "#ffffff", // Fundo branco
        padding: 20,
    },
    containerBox: {
        marginBottom: 20,
        width: "90%",
        alignSelf: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#fff",
        color: "#333",
        marginTop: 5,
    },
    button: {
        backgroundColor: "#0f694d",
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    linkText: {
        color: "#0f694d",
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
    },
});