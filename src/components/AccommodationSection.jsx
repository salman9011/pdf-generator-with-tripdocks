import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#10B981', // emerald-500
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  accommodationCard: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB', // gray-200
  },
  imageContainer: {
    width: '100%',
    height: 180,
  },
  hotelImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  infoContainer: {
    padding: 12,
    backgroundColor: '#F9FAFB', // gray-50
  },
  hotelName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827', // gray-900
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#4B5563', // gray-600
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    width: '40%',
    fontSize: 10,
    color: '#6B7280', // gray-500
  },
  detailValue: {
    width: '60%',
    fontSize: 10,
    color: '#374151', // gray-700
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  starText: {
    fontSize: 10,
    color: '#F59E0B', // amber-500
  },
});

const AccommodationSection = ({ accommodations }) => {
  const renderStars = (count) => {
    return "★".repeat(count);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Accommodations</Text>
      </View>

      {accommodations.map((accommodation, index) => (
        <View key={index} style={styles.accommodationCard}>
          {accommodation.images && accommodation.images.length > 0 && (
            <View style={styles.imageContainer}>
              <Image
                style={styles.hotelImage}
                src={accommodation.images[0]}
              />
            </View>
          )}

          <View style={styles.infoContainer}>
            <Text style={styles.hotelName}>{accommodation.hotelName}</Text>
            
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>{accommodation.hotelLocation}</Text>
            </View>
            
            <View style={styles.starContainer}>
              <Text style={styles.starText}>
                {renderStars(accommodation.hotelStar)}
              </Text>
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Night:</Text>
                <Text style={styles.detailValue}>{accommodation.night}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Room Type:</Text>
                <Text style={styles.detailValue}>{accommodation.roomType}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Meal Plan:</Text>
                <Text style={styles.detailValue}>{accommodation.mealPlan}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Room Count:</Text>
                <Text style={styles.detailValue}>{accommodation.roomCount}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Guests:</Text>
                <Text style={styles.detailValue}>
                  {accommodation.adults} Adults, {accommodation.children} Children
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default AccommodationSection;