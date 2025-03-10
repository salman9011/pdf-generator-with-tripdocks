import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#6B7280', // gray-500
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
  sectionContainer: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#F3F4F6', // gray-100
    color: '#1F2937', // gray-800
    padding: 6,
    marginBottom: 8,
    borderRadius: 4,
  },
  termItem: {
    marginBottom: 6,
    paddingLeft: 10,
  },
  termText: {
    fontSize: 10,
    color: '#4B5563', // gray-600
    lineHeight: 1.5,
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E5E7EB', // gray-200
  },
  footerText: {
    fontSize: 9,
    color: '#6B7280', // gray-500
    textAlign: 'center',
  },
});

const TermsConditions = ({ terms }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Terms & Conditions</Text>
      </View>

      {terms.termsAndConditions.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.heading}</Text>
          
          {section.tncList.map((term, i) => (
            <View key={i} style={styles.termItem}>
              <Text style={styles.termText}>{term.terms}</Text>
            </View>
          ))}
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By proceeding with this booking, you acknowledge that you have read and agree to all the terms and conditions mentioned above.
        </Text>
      </View>
    </View>
  );
};

export default TermsConditions;