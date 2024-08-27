import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Button, Layout } from "@ui-kitten/components";
import { Link } from "expo-router";

const SplashScreen = () => {
  return (
    <Layout style={styles.container}>
      <Image
        source={{
          uri: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
        }}
        style={{ aspectRatio: 1, resizeMode: "contain" }}
      />

      <View style={styles.buttonContainer}>
        <Link href="/(auth)/login" asChild>
          <Button>Login</Button>
        </Link>
        <Link href="/(auth)/signup" asChild>
          <Button appearance="outline">Sign up</Button>
        </Link>
      </View>
    </Layout>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    gap: 12,
  },
});
