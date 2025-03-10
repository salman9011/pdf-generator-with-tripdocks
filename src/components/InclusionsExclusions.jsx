import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#8B5CF6', // violet-500
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
  },
  inclusionsTitle: {
    backgroundColor: '#D1FAE5', // emerald-100
    color: '#047857', // emerald-700
  },
  exclusionsTitle: {
    backgroundColor: '#FEE2E2', // red-100
    color: '#B91C1C', // red-700
  },
  listContainer: {
    marginLeft: 10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bulletIncluded: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981', // emerald-500
    marginTop: 4,
    marginRight: 8,
  },
  bulletExcluded: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444', // red-500
    marginTop: 4,
    marginRight: 8,
  },
  itemText: {
    fontSize: 11,
    color: '#4B5563', // gray-600
  },
});

const InclusionsExclusions = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Inclusions & Exclusions</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.inclusionsTitle]}>
          What's Included
        </Text>
        <View style={styles.listContainer}>
          {data.inclusions.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bulletIncluded} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.exclusionsTitle]}>
          What's Not Included
        </Text>
        <View style={styles.listContainer}>
          {data.exclusions.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bulletExcluded} />
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default InclusionsExclusions;