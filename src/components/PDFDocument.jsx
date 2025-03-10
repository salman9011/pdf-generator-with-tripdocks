import React from 'react';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import CoverPage from './CoverPage';
import TravellerDetails from './TravellerDetails';
import ItineraryDay from './ItineraryDay';
import AccommodationSection from './AccommodationSection';
import InclusionsExclusions from './InclusionsExclusions';
import BankDetails from './BankDetails';
import TermsConditions from './TermsConditions';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  }
});

const PDFDocument = ({ itineraryData }) => {
  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.page}>
        <CoverPage companyInfo={itineraryData.companyInfo} companyImages={itineraryData.companyImages} />
      </Page>
      
      {/* Traveller Details Page */}
      <Page size="A4" style={styles.page}>
        <TravellerDetails travellerDetails={itineraryData.travellerDetails} />
      </Page>
      
      {/* Itinerary Pages - one for each day */}
      {itineraryData.itineraryDetails.map((day, index) => (
        day.destinations && day.destinations.length > 0 && (
          <Page key={`day-${index}`} size="A4" style={styles.page}>
            <ItineraryDay day={day} dayNumber={index + 1} />
          </Page>
        )
      ))}
      
      {/* Accommodation Details */}
      <Page size="A4" style={styles.page}>
        <AccommodationSection accommodations={itineraryData.accomodations} />
      </Page>
      
      {/* Inclusions/Exclusions */}
      <Page size="A4" style={styles.page}>
        <InclusionsExclusions data={itineraryData.inclusionExclusions} />
      </Page>
      
      {/* Bank Details */}
      <Page size="A4" style={styles.page}>
        <BankDetails bankDetails={itineraryData.bankDetails} qrDetails={itineraryData.qrDetails} />
      </Page>
      
      {/* Terms and Conditions */}
      <Page size="A4" style={styles.page}>
        <TermsConditions terms={itineraryData.termsAndConditions} />
      </Page>
    </Document>
  );
};

export default PDFDocument;