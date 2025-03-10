import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6', // blue-500
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  hotelInfo: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
  destinationContainer: {
    marginBottom: 20,
  },
  destinationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  destinationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
  },
  imageContainer: {
    marginBottom: 15,
  },
  destinationImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 8,
  },
  descriptionContainer: {
    backgroundColor: '#F3F4F6', // gray-100
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  description: {
    fontSize: 11,
    color: '#4B5563', // gray-600
    lineHeight: 1.5,
  },
  attractionsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 8,
  },
  attractionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3B82F6', // blue-500
    marginRight: 8,
  },
  attractionText: {
    fontSize: 11,
    color: '#4B5563', // gray-600
  },
});

const ItineraryDay = ({ day, dayNumber }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dayTitle}>Day {dayNumber} - {day.nightStayLocation}</Text>
        {day.hotelName && (
          <Text style={styles.hotelInfo}>Overnight at {day.hotelName}</Text>
        )}
      </View>

      {day.destinations.map((destination, index) => (
        <View key={index} style={styles.destinationContainer}>
          <View style={styles.destinationHeader}>
            <Text style={styles.destinationTitle}>{destination.destinationName}</Text>
          </View>

          {destination.destinationImages && (
            <View style={styles.imageContainer}>
              <Image
                style={styles.destinationImage}
                src={destination.destinationImages}
              />
            </View>
          )}

          {destination.destinationDescription && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{destination.destinationDescription}</Text>
            </View>
          )}

          {destination.attractions && destination.attractions.length > 0 && (
            <View>
              <Text style={styles.attractionsTitle}>Attractions & Activities</Text>
              {destination.attractions.map((attraction, i) => (
                <View key={i} style={styles.attractionItem}>
                  <View style={styles.bullet} />
                  <Text style={styles.attractionText}>{attraction}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ItineraryDay;