import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
        alignItems: "center",
    },
    productImage: {
        width: "430",
        height: "50%",
       
        marginBottom: 20,
    },
    productName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    productDescription: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
    },
    productPrice: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#11b47c",
        marginBottom: 20,
    },
    buyButton: {
        backgroundColor: "#11b47c", // Cor de fundo verde
        width: 250,
        height: 50,
        paddingVertical: 5, 
        paddingHorizontal: 1, // Reduz a largura do botão
        borderRadius: 8, // Bordas arredondadas (opcional)
        marginBottom: 10, 
    },
    buyButtonText: {
        color: "#fff",
        fontSize: 16, 
        fontWeight: "bold",
        textAlign: "center",
    },
    divPai: {
        alignItems: "center",
    },
    sobreDetalhe: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    ingredientItem: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
        textAlign: "left", 
        alignSelf: "flex-start", 
            paddingLeft: 10 
        }
    });