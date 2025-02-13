import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Noto Sans",
  src: "/fonts/NotoSans-Regular.ttf",
});
Font.register({
  family: "Noto Sans Bengali",
  src: "/fonts/NotoSansBengali-Regular.ttf",
});
Font.register({
  family: "Noto Sans Devanagari",
  src: "/fonts/NotoSansDevanagari-Regular.ttf",
});
Font.register({
  family: "Noto Sans Gujarati",
  src: "/fonts/NotoSansGujarati-Regular.ttf",
});
Font.register({
  family: "Noto Sans Gurmukhi",
  src: "/fonts/NotoSansGurmukhi-Regular.ttf",
});
Font.register({
  family: "Noto Sans Kannada",
  src: "/fonts/NotoSansKannada-Regular.ttf",
});
Font.register({
  family: "Noto Sans Malayalam",
  src: "/fonts/NotoSansMalayalam-Regular.ttf",
});
Font.register({
  family: "Noto Sans Oriya",
  src: "/fonts/NotoSansOriya-Regular.ttf",
});
Font.register({
  family: "Noto Sans Tamil",
  src: "/fonts/NotoSansTamil-Regular.ttf",
});
Font.register({
  family: "Noto Sans Telugu",
  src: "/fonts/NotoSansTelugu-Regular.ttf",
});

const languageToFontMap: Record<string, string> = {
  en: "Noto Sans",
  gu: "Noto Sans Gujarati",
  hi: "Noto Sans Devanagari",
  kn: "Noto Sans Kannada",
  mr: "Noto Sans Devanagari",
  or: "Noto Sans Oriya",
  pa: "Noto Sans Gurmukhi",
  ta: "Noto Sans Tamil",
  te: "Noto Sans Telugu",
  ml: "Noto Sans Malayalam",
  bn: "Noto Sans Bengali",
};

const getFontFamily = (languageCode: string): string => {
  return languageToFontMap[languageCode] || "Noto Sans"; // Default to NotoSans
};

const PrescriptionPdfDocument = ({ data, language = "en" }: any) => {
  console.log("data : ", data);

  const fontFamily = getFontFamily(language); // Get font family dynamically

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily,
    },
    headerSection: {
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    header: {
      fontSize: 16,
      fontWeight: "bold",
    },
    logo: {
      width: "100px",
      height: "50px",
    },
    doctorUserDetails: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
      gap: "1rem",
    },
    doctorDetails: {
      textAlign: "left",
      padding: 10,
      fontSize: 12,
      flex: 1,
    },
    userDetails: {
      padding: 10,
      fontSize: 12,
      flex: 1,
      textAlign: "right",
    },
    summarySection: {
      flexDirection: "column",
      marginBottom: 20,
    },
    summaryItem: {
      border: "1px solid #ddd",
      backgroundColor: "#f2f2f2",
      padding: 10,
      marginBottom: 10,
      width: "100%",
    },
    tableContainer: {
      marginBottom: 20,
    },
    tableHeaderRow: {
      flexDirection: "row",
      backgroundColor: "#f2f2f2",
      fontWeight: "bold",
    },
    tableHeaderCell: {
      padding: 5,
      flex: 1,
      textAlign: "center",
    },
    tableRow: {
      flexDirection: "row",
      borderBottom: "1px solid #ddd",
      fontSize: 10,
    },
    tableCell: {
      padding: 5,
      flex: 1,
      textAlign: "center",
    },
    signature: {
      marginTop: 20,
      fontSize: 12,
    },
    footer: {
      marginTop: 20,
      paddingTop: 10,
      fontSize: 10,
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: "1rem",
      borderTop: "1px dotted #000",
    },
    footerLeft: {
      textAlign: "left",
    },
    footerRight: {
      textAlign: "right",
      maxWidth: "40%",
    },
  });

  const { doctor, user, id, collection_1_date, attachments } = data;
  const attachment = attachments?.length > 0 ? attachments[0] : {};
  const medicines = attachment?.prescriptions_medicines || [];
  const tests = attachment?.prescriptions_tests || [];

  // Filter medicines by category
  const brandedMedicines = medicines.filter(
    (medicine: any) => medicine?.medicine?.category_key === "branded",
  );
  const genericMedicines = medicines.filter(
    (medicine: any) => medicine?.medicine?.category_key === "generic",
  );

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.header}>Prescription</Text>
          <Image
            style={styles.logo}
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733836287302.png"
          />
        </View>

        {/* Doctor and User Details */}
        <View style={styles.doctorUserDetails}>
          <View style={styles.doctorDetails}>
            <Text>Doctor: {doctor?.name || "N/A"}</Text>
            <Text>Specialization: {doctor?.specialization || "N/A"}</Text>
            <Text>
              Registration Number: {doctor?.registration_number || "N/A"}
            </Text>
          </View>
          <View style={styles.userDetails}>
            <Text>
              Patient: {user?.first_name} {user?.last_name}
            </Text>
            <Text>Gender: {user?.gender || "N/A"}</Text>
            <Text>Age: {user?.age || "N/A"}</Text>
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.summarySection}>
          <View style={styles.summaryItem}>
            <Text>Booking No: {id || "N/A"}</Text>
            <Text>Prescription Date: {collection_1_date || "N/A"}</Text>
            <Text>
              Next Visit Date:{" "}
              {attachment?.next_visit
                ? new Date(attachment?.next_visit).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "N/A"}
            </Text>
          </View>
          <View style={styles.summaryItem}>
            <Text>Symptoms: {attachment?.symptoms || "N/A"}</Text>
            <Text>Advice: {attachment?.note || "N/A"}</Text>
          </View>
        </View>

        {/* Branded Medicines Table */}
        {brandedMedicines.length > 0 && (
          <View style={styles.tableContainer}>
            <Text>Branded Medicines</Text>
            <View style={styles.tableHeaderRow}>
              <Text style={styles.tableHeaderCell}>Sl No</Text>
              <Text style={styles.tableHeaderCell}>Name</Text>
              <Text style={styles.tableHeaderCell}>Frequency</Text>
              <Text style={styles.tableHeaderCell}>Days</Text>
              <Text style={styles.tableHeaderCell}>Intake</Text>
            </View>
            {brandedMedicines.map((medicine: any, index: number) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{index + 1}</Text>
                <Text style={styles.tableCell}>
                  {medicine?.medicine?.service_name || "N/A"}
                </Text>
                <Text style={styles.tableCell}>
                  {medicine?.frequency || "N/A"}
                </Text>
                <Text style={styles.tableCell}>
                  {medicine?.no_of_days || "N/A"}
                </Text>
                <Text style={styles.tableCell}>
                  {medicine?.intake || "N/A"}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Generic Medicines Table */}
        {genericMedicines.length > 0 && (
          <View style={styles.tableContainer}>
            <Text>Generic Medicines</Text>
            <View style={styles.tableHeaderRow}>
              <Text style={styles.tableHeaderCell}>Sl No</Text>
              <Text style={styles.tableHeaderCell}>Name</Text>
              <Text style={styles.tableHeaderCell}>Frequency</Text>
              <Text style={styles.tableHeaderCell}>Days</Text>
              <Text style={styles.tableHeaderCell}>Intake</Text>
            </View>
            {genericMedicines.map((medicine: any, index: number) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{index + 1}</Text>
                <Text style={styles.tableCell}>
                  {medicine?.medicine?.service_name || "N/A"}
                </Text>
                <Text style={styles.tableCell}>
                  {medicine?.frequency || "N/A"}
                </Text>
                <Text style={styles.tableCell}>
                  {medicine?.no_of_days || "N/A"}
                </Text>
                <Text style={styles.tableCell}>
                  {medicine?.intake || "N/A"}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Tests Table */}
        {tests.length > 0 && (
          <View style={styles.tableContainer}>
            <Text>Tests Recommended</Text>
            <View style={styles.tableHeaderRow}>
              <Text style={styles.tableHeaderCell}>Sl No</Text>
              <Text style={styles.tableHeaderCell}>Name</Text>
            </View>
            {tests.map((test: any, index: number) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{index + 1}</Text>
                <Text style={styles.tableCell}>
                  {test?.test?.service_name || "N/A"}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Doctor's Signature */}
        <Text style={styles.signature}>
          Doctor's Signature:{" "}
          <Text style={[styles.signature, { textDecoration: "underline" }]}>
            {"___"}
            {doctor?.name || ""}
            {"___"}
          </Text>
        </Text>

        {/* Footer Section */}
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text>Email: wellness@raphacure.com</Text>
            <Text>Phone: +91 95551 66000</Text>
          </View>
          <View style={styles.footerRight}>
            <Text>
              Cure & Care Primary Care Pvt. Ltd. 208, MJ Aldilla, Begur Road,
              Bengaluru- 560068
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PrescriptionPdfDocument;
