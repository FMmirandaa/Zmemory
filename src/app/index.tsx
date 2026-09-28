import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Z-Memory</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/medicamentos")}
      >
        <Text style={styles.textoBotao}>Medicamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/diario")}
      >
        <Text style={styles.textoBotao}>Diário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/exercicio")}
      >
        <Text style={styles.textoBotao}>Exercício</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/perfil")}
      >
        <Text style={styles.textoBotao}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoMemorias}
        onPress={() => router.push("/memorias")}
      >
        <Text style={styles.textoBotao}>Memórias</Text>
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
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#F2A65A",
    width: 200,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  botaoMemorias: {
    backgroundColor: "#E07A5F",
    width: 260,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
