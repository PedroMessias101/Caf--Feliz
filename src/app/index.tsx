import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style";


  
  export default function Index() {
    const MENU = [
      {
        id: 1,
        name: "Café Expresso(150ml)",
        description: "Café quente feito na maquina de expresso...",
        price: 3.99,
        image: require("@/assets/images/Cafe-Expresso.jpg") 
      },
      {
        id: 2,
        name: "Chocolate quente(350ml)",
        description: "Um chocolate quente feito na hora...",
        price: 5.99,
        image: require("@/assets/images/Chocolate.jpg")
      },
    ]
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("../assets/images/Foto-de-fundo.jpg")}
        />
        <Text style={styles.restauranteName}>Café feliz :)</Text>
        <Text style={styles.subtitle}> A melhor cafeteria do Brasil </Text>
      </View>

      <View style={styles.tabs}>
        {["Combos", "Lanches", "Bebidas"].map((item) =>(
          <TouchableOpacity>
            <Text style={styles.tabsName}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

          <ScrollView style={styles.menuList}>

      {
         MENU.map((item) => (
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuContent}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <Image style={styles.itemImage} source={item.image}/>
          </TouchableOpacity>
         ))
      }
      </ScrollView>
    </View>
  );
}
