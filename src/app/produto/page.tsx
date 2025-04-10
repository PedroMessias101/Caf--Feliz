import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../produto/styless";

export default function ProductScreen() {
    return (
        <View style={styles.productDescription}>
            /* Imagem do Produto */
            <Image
             source={require("../../assets/images/Cafe-Expresso.jpg")}
            style={styles.productImage}
            />

            <View style={styles.divPai}>
            /* Nome do Produto */
            <Text style={styles.productName}>Café expresso (150ml)</Text>
            /* Preço do Produto */
            <Text style={styles.productPrice}>R$ 4,99</Text>

            /* Descrição do Produto */
            <Text style={styles.sobreDetalhe}>Sobre</Text>
            <Text style={styles.ingredientItem}>
               Café quente feito na maquina de expresso com  
            água quente sob alta pressão por grãos de café moídos.
            </Text>



            <Text style={styles.sobreDetalhe}>Ingredientes</Text>
                <Text style={styles.ingredientItem}> • Água quente</Text>
                <Text style={styles.ingredientItem}> • Grãos de café moídos</Text>
                <Text style={styles.ingredientItem}> • Açúcar </Text>
                <Text style={styles.ingredientItem}> • Leite </Text>

            /* Botão de Comprar */
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}