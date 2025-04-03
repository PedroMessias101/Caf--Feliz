import { StyleSheet } from "react-native";
 
export const Styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#0d513c"
    },
    header:{
    padding: 16
    },
    headerImage:{
        width: "100%",
        height: 240,
        borderRadius: 8
    },
    restauranteName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    color: "#ffff"
    },
 
    subtitle: {
    color: "#ffff",
    marginTop: 4
    },
    tabs:{
        flexDirection:"row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        gap: 16
    },
    tabsName:{
        color:"#ffff"
    },
    menuList:{
    padding:16,
    flex:1
    },
    menuItem:{
        flexDirection:"row",
        borderBottomColor:"#eee",
        borderBottomWidth:1,
        padding:16
    },
    menuContent:{
        flex:1,
        marginRight:16
    },
    itemImage:{
        width:150,
        height:130,
        borderRadius:8,
     
    },
    itemName:{
        fontSize:16,
        fontWeight:"bold",
        color: "#ffff"
    },
    itemDescription:{
        color:"#ffff",
        marginTop:4
    },
    itemPrice:{
        fontSize:16,
        fontWeight:"bold",
        marginTop: 8,
        color: "#c12517"
    },
    descriptionHome: {
        color: "#ffff",
        flexDirection: "row",
        fontSize: 17,
        padding: 6,
        fontWeight:"bold",
       
    },
    navBar: {
        flexDirection: "row",
        marginTop: 10,
        gap: 56
    }
})
 