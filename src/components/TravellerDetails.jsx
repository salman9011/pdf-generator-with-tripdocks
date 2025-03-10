import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4F46E5', // indigo-600
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
  section: {
    backgroundColor: '#F9FAFB', // gray-50
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB', // gray-200
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    width: '40%',
    fontSize: 12,
    color: '#4B5563', // gray-600
    fontWeight: 'bold',
  },
  value: {
    width: '60%',
    fontSize: 12,
    color: '#111827', // gray-900
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB', // gray-200
    marginVertical: 10,
  },
});

const TravellerDetails = ({ travellerDetails }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Traveller Details</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Guest Information</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Guest Name:</Text>
          <Text style={styles.value}>{travellerDetails.guestName}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Contact Number:</Text>
          <Text style={styles.value}>{travellerDetails.contactNumber}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Total Adults:</Text>
          <Text style={styles.value}>{travellerDetails.adults}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Total Children:</Text>
          <Text style={styles.value}>{travellerDetails.children}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Travel Information</Text>
        
        <View style={styles.row}>
          <Text style={styles.label}>Arrival Date:</Text>
          <Text style={styles.value}>{formatDate(travellerDetails.arrivalDate)}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Arrival Location:</Text>
          <Text style={styles.value}>{travellerDetails.arrivalLocation}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Departure Location:</Text>
          <Text style={styles.value}>{travellerDetails.departureLocation}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Package Nights:</Text>
          <Text style={styles.value}>{travellerDetails.packageNights}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.label}>Meal Plan:</Text>
          <Text style={styles.value}>{travellerDetails.mealPlan}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transportation</Text>
        
        {travellerDetails.vehicle.map((vehicle, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{index === 0 ? 'Vehicle:' : ''}</Text>
            <Text style={styles.value}>
              {vehicle.count} {vehicle.name} ({vehicle.type})
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TravellerDetails;