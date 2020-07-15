import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, SaveAreaView, ScrollView } from "react-native";
import styleR from "./Componentes/style.jsx";

export default function App() {
  return (
    <SaveAreaView style={}>
      <ScrollView style={styleR.container}>
        <Text>Add Os componentes</Text>
        <StatusBar style="auto" />
      </ScrollView>
    </SaveAreaView>
  );
}
