import { View, Image, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { StatusBar } from "expo-status-bar";
import PageComponent from "../components/PageComponent";
import images from "../constants/images";
import { FONTS } from "../constants/theme";
import Button from "../components/Button";
import { SIZES } from "../constants/theme";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar style="light" />

      <PageComponent>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.logo}
            style={{
              height: 180,
              width: 155,
              marginBottom: 22,
            }}
          />

          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.black,
              marginVertical: 8,
            }}
          >
            Welcome to moxie bot
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.black,
              marginBottom: 36,
            }}
          >
            Pick any options to continue
          </Text>

          <Button
            title="Log in"
            filled
            onPress={() => navigation.navigate("Login")}
            style={{
              width: SIZES.width - 44,
              marginBottom: SIZES.padding,
            }}
          />

          <Button
            title="Register"
            onPress={() => navigation.navigate("Register")}
            style={{
              width: SIZES.width - 44,
              marginBottom: SIZES.padding,
              backgroundColor: "transparent",
              borderColor: COLORS.primary,
            }}
          />
        </View>
      </PageComponent>
    </SafeAreaView>
  );
};

export default Welcome;
