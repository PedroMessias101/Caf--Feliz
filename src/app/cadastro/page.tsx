import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styler"; // Importa os estilos
import { Link } from "expo-router";

export default function CadastroPage() {
    return (
        <View style={styles.abaDeLogin}>
            /* Texto de boas-vindas */
            <View style={styles.textContainer}>
                <Text style={styles.textCadastro}>Crie sua conta</Text>
            </View>

            /* Contêiner principal */
            <View style={styles.containerDad}>
                /* Campo de CPF */
                <View style={styles.containerBox}>
                    <Text>CPF</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu CPF"
                        placeholderTextColor="#aaa"
                        keyboardType="numeric"
                    />
                </View>

                /* Campo de Nome */
                <View style={styles.containerBox}>
                    <Text>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu nome"
                        placeholderTextColor="#aaa"
                    />
                </View>

                /* Campo de E-mail */
                <View style={styles.containerBox}>
                    <Text>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#aaa"
                        keyboardType="email-address"
                    />
                </View>

                /* Campo de Senha */
                <View style={styles.containerBox}>
                    <Text>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                    />
                </View>

                /* Campo de Data de Nascimento */
                <View style={styles.containerBox}>
                    <Text>Data de Nascimento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        placeholderTextColor="#aaa"
                        keyboardType="numeric"
                    />
                </View>

                /* Botão de envio */
                <View style={styles.containerBox}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                /* Link para voltar ao login */
                /* Link para voltar ao login */
              <Link href="/">
                 <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
              </Link>
            </View>
        </View>
    );
}