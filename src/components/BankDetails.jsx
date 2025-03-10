// src/components/BankDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#F59E0B', // amber-500
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
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bankInfoSection: {
    width: '60%',
    paddingRight: 15,
  },
  qrSection: {
    width: '40%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#FEF3C7', // amber-100
    borderRadius: 4,
  },
  detailContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#F9FAFB', // gray-50
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB', // gray-200
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    width: '40%',
    fontSize: 11,
    color: '#4B5563', // gray-600
    fontWeight: 'bold',
  },
  detailValue: {
    width: '60%',
    fontSize: 11,
    color: '#111827', // gray-900
  },
  qrContainer: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB', // gray-200
  },
  qrImage: {
    width: 150,
    height: 150,
  },
  qrText: {
    fontSize: 12,
    color: '#4B5563', // gray-600
    marginTop: 10,
    textAlign: 'center',
  },
  upiContainer: {
    marginTop: 15,
  },
  upiTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 5,
  },
  upiValue: {
    fontSize: 11,
    color: '#111827', // gray-900
  },
});

const BankDetails = ({ bankDetails, qrDetails }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payment Information</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.bankInfoSection}>
          <Text style={styles.sectionTitle}>Bank Account Details</Text>
          
          {bankDetails.map((bank, index) => (
            <View key={index} style={styles.detailContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Account Holder:</Text>
                <Text style={styles.detailValue}>{bank.holderName}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Bank Name:</Text>
                <Text style={styles.detailValue}>{bank.bankName}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Branch:</Text>
                <Text style={styles.detailValue}>{bank.branchName}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Account Number:</Text>
                <Text style={styles.detailValue}>{bank.accountNumber}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>IFSC Code:</Text>
                <Text style={styles.detailValue}>{bank.ifscCode}</Text>
              </View>
              
              {bank.upiNumber && bank.upiNumber.length > 0 && (
                <View style={styles.upiContainer}>
                  <Text style={styles.upiTitle}>UPI Details</Text>
                  
                  {bank.upiNumber.map((upi, i) => (
                    <View key={i} style={styles.detailRow}>
                      <Text style={styles.detailLabel}>UPI Number:</Text>
                      <Text style={styles.detailValue}>{upi}</Text>
                    </View>
                  ))}
                  
                  {bank.upiAddress && bank.upiAddress.map((address, i) => (
                    <View key={i} style={styles.detailRow}>
                      <Text style={styles.detailLabel}>UPI ID:</Text>
                      <Text style={styles.detailValue}>{address}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.qrSection}>
          {qrDetails && qrDetails.qrImage && (
            <View style={styles.qrContainer}>
              <Image 
                style={styles.qrImage}
                src={qrDetails.qrImage}
              />
              <Text style={styles.qrText}>Scan to Pay</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default BankDetails;