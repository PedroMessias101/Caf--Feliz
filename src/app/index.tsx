import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Styles } from './style'

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

      {
        id: 3,
        name: "Capuccino(250ml)",
        description: "Capuccino feito na maquina com uma combinação...",
        price: 5.99,
        image: require("@/assets/images/chocolate-quente.png")
      }
    ]
  

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image
          style={Styles.headerImage}
          source={require("../assets/images/Foto-de-fundo.jpg")}
        />
        <Text style={Styles.restauranteName}>Café feliz :)</Text>
        <Text style={Styles.subtitle}> A melhor cafeteria do Brasil </Text>
       <View style={Styles.navBar}>
       <Text style={Styles.descriptionHome}>Cardapio</Text>
       </View>
      </View>

      <View style={Styles.tabs}>
        {["Café", "Chocolate", "Chás", "Sobremesas",].map((item) => (
          <TouchableOpacity>
            <Text style={Styles.tabsName}>{item}</Text>
          </TouchableOpacity>
        ))}
</View>

        <ScrollView style={Styles.menuList}>
          {
            MENU.map((item) => (
              <TouchableOpacity style={Styles.menuItem}>
                <View style={Styles.menuContent}>
                  <Text style={Styles.itemName}>{item.name}</Text>
                  <Text style={Styles.itemDescription}>{item.description}</Text>
                  <Text style={Styles.itemPrice}>{item.price.toFixed(2)}</Text>
                </View>
                <Image style={Styles.itemImage} source={item.image}></Image>
              </TouchableOpacity>
            ))
          }
        </ScrollView>

     
    </View>
  )
}
