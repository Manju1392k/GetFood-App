import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <MaterialCommunityIcons
          name="microsoft-xbox-controller-menu"
          size={50}
          color="red"
        />
      </View>

      <ScrollView>
        <View style={styles.inputtags}>
          <TextInput style={styles.inputsearch} placeholder="Search" />
          <FontAwesome5 name="search" size={35} color="red" />
        </View>

        <Text style={styles.FoodText}>Select Food</Text>

        <View style={styles.IconsBos}>
          <View style={styles.IconBoxborder}>
            <Ionicons name="fast-food-outline" size={40} color="black" />
            <Text style={styles.miniheading}>Fastfood</Text>
          </View>

          <View style={styles.IconBoxborder}>
            <FontAwesome5 name="ice-cream" size={40} color="black" />
            <Text style={styles.miniheading}>Ice-Creams</Text>
          </View>

          <View style={styles.IconBoxborder}>
            <FontAwesome5 name="pizza-slice" size={40} color="black" />
            <Text style={styles.miniheading}>Pizza</Text>
          </View>

          <View style={styles.IconBoxborder}>
            <MaterialCommunityIcons
              name="food-drumstick"
              size={40}
              color="black"
            />
            <Text style={styles.miniheading}>Non-Veg</Text>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFCFCF",
  },

  navbar: {
    backgroundColor: "#fff",
    marginTop: 45,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  logo: {
    height: 70,
    width: "18%",
    borderRadius: 50,
  },

  inputtags: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
  },

  inputsearch: {
    width: "80%",
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
  },

  FoodText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15,
  },

  IconsBos: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    flexWrap: "wrap",
  },

  IconBoxborder: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
  },

  miniheading: {
    fontWeight: "bold",
    marginTop: 5,
  },
});
