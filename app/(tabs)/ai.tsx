import React from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function TabTwoScreen() {
  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} pressed`);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffffff", dark: "#353636" }}
      headerContent={
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">KREY AI</ThemedText>
        </ThemedView>
      }
      scrollEnabled={false}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/mannequin.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.selectionContainer}>
          <TouchableOpacity
            style={styles.selection}
            onPress={() => handleButtonPress("AI Models")}
            activeOpacity={0.8}
          >
            <Ionicons name="shirt" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selection}
            onPress={() => handleButtonPress("AI Results")}
            activeOpacity={0.8}
          >
               <Ionicons name="shirt" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selection}
            onPress={() => handleButtonPress("AI Results")}
            activeOpacity={0.8}
          >
               <Ionicons name="shirt" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selection}
            onPress={() => handleButtonPress("AI Results")}
            activeOpacity={0.8}
          >
               <Ionicons name="shirt" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selection}
            onPress={() => handleButtonPress("AI Results")}
            activeOpacity={0.8}
          >
               <Ionicons name="shirt" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("Measurements")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("Train AI")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 20, 
  },
  titleContainer: {
    marginTop: 40,
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
    height: height * 0.55, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
  },
  selectionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 40,
    paddingBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 40,
  },
  button: {
    backgroundColor: '#000', 
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 5, 
    width: width * 0.4, 
    alignItems: 'center', 
  },
  selection: {
    backgroundColor: '#000', 
    paddingVertical: 15, 
    paddingHorizontal: 15, 
    borderRadius: 9999, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold', 
  },
});
