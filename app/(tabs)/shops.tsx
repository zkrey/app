import React from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const shops = [
  {
    id: '1',
    name: 'Zara',
    image: require('@/assets/images/zara.jpg'),
  },
  {
    id: '2',
    name: 'H&M',
    image: require('@/assets/images/hm.png'),
  },
  {
    id: '3',
    name: 'Mango',
    image: require('@/assets/images/mango.png'),
  },
];

const ShopCard = ({ name, image }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={image} style={styles.cardImage} resizeMode="contain" />
    <ThemedText style={styles.cardText}>{name}</ThemedText>
  </TouchableOpacity>
);

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#353636' }}
      headerContent={
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">KREY Shop</ThemedText>
        </ThemedView>
      }>
      <FlatList
        data={shops}
        renderItem={({ item }) => <ShopCard name={item.name} image={item.image} />}
        numColumns={1}
        contentContainerStyle={styles.grid}
      />
    </ParallaxScrollView>
  );
}

const { width } = Dimensions.get('window');
const CARD_MARGIN = 10;
const CARD_WIDTH = width - CARD_MARGIN * 2;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 40,
    justifyContent: 'center',
  },
  grid: {
    paddingHorizontal: CARD_MARGIN,
    gap: CARD_MARGIN,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: CARD_WIDTH * 0.85,
    height: CARD_WIDTH * 0.75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '80%',
    height: '60%',
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
