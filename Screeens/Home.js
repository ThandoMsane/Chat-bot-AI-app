import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLORS, SIZES } from "../constants/theme";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[
        styles.areaStyle,
        {
          backgroundColor: COLORS.background,
        },
      ]}
    >
      <View style={styles.center}>
        <TouchableOpacity>
          <Ionicons name={"sunny-outline"} size={32} color={COLORS.black} />
        </TouchableOpacity>

        <Text
          style={[
            styles.subTitle,
            {
              color: COLORS.text,
            },
          ]}
        >
          {" "}
          Examples
        </Text>

        <View
          style={[
            styles.box,
            {
              backgroundColor: COLORS.background,
              borderColor: COLORS.text,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.boxText, { color: COLORS.text }]}>
            "Explain quantum computings in simple terms"
          </Text>
        </View>

        <View
          style={[
            styles.box,
            {
              backgroundColor: COLORS.background,
              borderColor: COLORS.text,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.boxText, { color: COLORS.text }]}>
            "How To make an HTTP request in JavaScript ?"
          </Text>
        </View>

        <View
          style={[
            styles.box,
            {
              backgroundColor: COLORS.background,
              borderColor: COLORS.text,
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.boxText, { color: COLORS.text }]}>
            "Got any creative ideas for a 10 year old's birthday"
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Chat")}
        >
          <AntDesign name="plus" size={24} color={COLORS.white} />
          <Text style={styles.btnText}>New Chat</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaStyle: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    ...FONTS.h4,
    marginVertical: 22,
  },
  box: {
    width: 300,
    paddingVertical: 18,
    marginVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    ...FONTS.body4,
    textAlign: "center",
    color: COLORS.white,
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    width: 300,
    paddingVertical: SIZES.padding * 2,
  },
  btnText: {
    ...FONTS.body3,
    color: COLORS.white,
    marginLeft: 8,
  },
});

export default Home;
