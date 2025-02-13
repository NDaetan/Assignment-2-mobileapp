import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Linking, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

interface CityTabProps {
  city: string;
  link: string;
  info: string;
  image: any;
  setCurrentCity: (city: string) => void;
}

export default function CityTab({ city, link, info, image, setCurrentCity }: CityTabProps) {
  useFocusEffect(
    React.useCallback(() => {
      setCurrentCity(city);
    }, [city])
  );
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cityImage} />
      <Text style={styles.cityTitle}>{city}</Text>
      <Button title={`Go to ${city} Page`} onPress={() => Linking.openURL(link)} />
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, },
  cityTitle: { fontSize: 20, marginBottom: 10 },
  infoText: { marginTop: 10, fontSize: 16, color: '#333', },
  cityImage: { width: 400, height: 300, marginBottom: 20, textAlign: 'center' } // Add styles for the image
});
