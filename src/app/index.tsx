import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function LoginScreen() {
    return (
        <View style={styles.abaDeLogin}>
            /* Imagem */
            <View>
                <Image source={require("@/assets/images/coffee.svg")} />
            </View>

            /* Texto de boas-vindas */
            <View style={styles.textContainer}>
                <Text style={styles.textCadastro}>Olá de volta</Text>
            </View>

            /* Contêiner principal */
            <View style={styles.containerDad}>
                {/* Campo de e-mail */}
                <View style={styles.containerBox}>
                    <Text>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#aaa"
                    />
                </View>

                /* Campo de senha */
                <View style={styles.containerBox}>
                    <Text>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                    />
                </View>

                /* Botão de envio */
                <View style={styles.containerBox}>
                    <Link href={"/home/page"} asChild>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>
                    </Link>
                </View>

                /* Link para criar conta */
                <Link href={"/cadastro/page"}>
                    <Text style={styles.linkText}>Crie sua conta</Text>
                </Link>
            </View>
        </View>
    );
}