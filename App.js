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

        <View style={styles.Imagebox}>
          <View>
            <Image
              source={require("./assets/food.jpg")}
              style={styles.ImageOne}
            />
            <Text style={styles.Samllheading}>Briyani</Text>
          </View>
          <View>
            <Image
              source={require("./assets/foodTwo.jpg")}
              style={styles.ImageTwo}
            />
            <Text style={styles.Samllheading}>Idly</Text>
          </View>
          <View>
            <Image
              source={require("./assets/foodFour.jpg")}
              style={styles.ImageFour}
            />
            <Text style={styles.SamllheadingFour}>French Fries</Text>
          </View>
          <View>
            <Image
              source={require("./assets/FoodThree.jpg")}
              style={styles.ImageThree}
            />
            <Text style={styles.Samllheading}>ColdCoffe</Text>
          </View>
        </View>

        <Text style={styles.FoodTextTwo}>SignUp Here</Text>

        <View style={styles.SignUpbox}>
          <Text style={styles.SignHeading}>Name</Text>
          <TextInput placeholder="Enter Your Name" style={styles.inputSignup} />
          <Text style={styles.SignHeading}>Eamil</Text>
          <TextInput
            placeholder="Enter Your Email"
            style={styles.inputSignup}
          />
          <Text style={styles.SignHeading}>Password</Text>
          <TextInput
            placeholder="Enter Your Password"
            style={styles.inputSignup}
          />
          <Text style={styles.SignHeading}>Address</Text>
          <TextInput
            placeholder="Enter Your Address"
            multiline={true}
            numberOfLines={4}
            style={styles.inputSignup}
          />

          <Text style={styles.Buttons}>Submit</Text>
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

  Imagebox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    flexWrap: "wrap",
  },

  ImageOne: {
    height: 250,
    width: 180,
    borderRadius: 15,
  },

  ImageTwo: {
    height: 350,
    width: 180,
    borderRadius: 15,
  },

  ImageThree: {
    height: 280,
    width: 180,
    borderRadius: 15,
  },

  ImageFour: {
    height: 375,
    width: 180,
    borderRadius: 15,
    bottom: 95,
  },

  Samllheading: {
    fontWeight: "bold",
  },

  SamllheadingFour: {
    fontWeight: "bold",
    bottom: 95,
  },

  FoodTextTwo: {
    bottom: 80,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 15,
  },

  SignUpbox: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    bottom: 90,
  },

  inputSignup: {
    width: "90%",
    padding: 10,
    paddingLeft: 20,
    fontSize: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginBottom: 10,
  },

  SignHeading: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 2,
  },

  Buttons: {
    backgroundColor: "red",
    padding: 10,
    width: 80,
    marginLeft: 20,
    borderRadius: 8,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
