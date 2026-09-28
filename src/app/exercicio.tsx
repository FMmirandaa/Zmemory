import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Exercicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício</Text>
      <Text style={styles.texto}>
        Aqui vão as abas Obrigatórios / Opcionais, com checklist.
      </Text>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => router.back()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6E9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  texto: { fontSize: 14, color: "#555", textAlign: "center", marginBottom: 30 },
  botaoVoltar: {
    backgroundColor: "#999",
    width: 150,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
