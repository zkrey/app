import React from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const handleButtonPress = (buttonName) => {
    console.log(`${buttonName} pressed`);
  };

  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#ffffff', dark: '#353636' }}
    headerContent={
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">KREY Avatar</ThemedText>
      </ThemedView>
    } scrollEnabled={false}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/mannequin.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Measurements')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Measurements</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Train AI')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Train AI</Text>
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
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%', 
    height: '100%',
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
