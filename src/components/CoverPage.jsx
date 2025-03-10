import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 100,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  divider: {
    width: 100,
    height: 3,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  itineraryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    color: 'white',
    padding: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  travelerName: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
  }
});

const CoverPage = ({ companyInfo, companyImages, travellerDetails }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.backgroundImage} 
        src={companyImages.companyBackgroundImage} 
      />
      <View style={styles.overlay} />
      
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo} 
            src={companyImages.companyLogo} 
          />
        </View>
        
        <Text style={styles.title}>{companyInfo.companyName}</Text>
        <Text style={styles.subtitle}>{companyInfo.email}</Text>
        <Text style={styles.subtitle}>{companyInfo.website}</Text>
        <Text style={styles.subtitle}>Contact: {companyInfo.contact}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.itineraryTitle}>TRAVEL ITINERARY</Text>
        {travellerDetails && (
          <Text style={styles.travelerName}>Prepared for: {travellerDetails.guestName}</Text>
        )}
      </View>
    </View>
  );
};

export default CoverPage;