import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import coffee from "@/assets/images/coffee.svg"

export default function LoginScreen(){
    return(
        <View style={styles.abaDeLogin}>
           <View style={styles.header}>
            <Image source={require("@/assets/images/coffee.svg")} style={styles.imageHome}></Image>
           </View>
           <View>
           <View style={styles.containerBox}>
                <Text>E-mail</Text>
                <TextInput placeholder="Seu e-mail"></TextInput>
            </View>
            <View style={styles.containerBox}>
                <Text>Senha</Text>
                <TextInput placeholder="Sua senha" secureTextEntry></TextInput>
            </View>
            <View style={styles.containerBox}>
            <Link href={"/home/page"} asChild>
            <TouchableOpacity>
                <Text style={styles.containerBox}>Enviar</Text>
            </TouchableOpacity>
            </Link>
            <Link href={"/cadastro/page"} style={styles.containerBox}><Text>Crie sua conta</Text></Link>
            </View>
           </View>
        </View>
    )
}