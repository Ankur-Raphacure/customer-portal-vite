import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register Fonts
Font.register({ family: "Noto Sans", src: "/fonts/NotoSans-Regular.ttf" });
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

const languageToFontMap = {
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
} as any;

const getFontFamily = (languageCode: string): string => {
  return languageToFontMap[languageCode] || "Noto Sans";
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  section: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  col: {
    width: "48%",
  },
  label: {
    fontWeight: 600,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginVertical: 10,
  },
});

const safeDisplay = (value: any) =>
  value !== null && value !== undefined ? value : "N/A";

const InvoicePdfDocument = ({ data, language = "en" }: any) => {
  if (!data) {
    return (
      <Document>
        <Page style={styles.page}>
          <Text>No invoice data available.</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>Invoice</Text>

        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text>
                <Text style={styles.label}>Invoice ID: </Text>
                {safeDisplay(data.id)}
              </Text>
            </View>
            <View style={styles.col}>
              <Text>
                <Text style={styles.label}>Order ID: </Text>
                {safeDisplay(data.order_id)}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.col}>
              <Text>
                <Text style={styles.label}>Created At: </Text>
                {data.created_at
                  ? new Date(data.created_at).toLocaleString()
                  : "N/A"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>Address:</Text>
          <Text>
            {data.address
              ? `${safeDisplay(data.address.city)}, ${safeDisplay(
                  data.address.state
                )} - ${safeDisplay(data.address.zip)}`
              : "N/A"}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>Service Details:</Text>
          {data.test ? (
            <>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text>
                    <Text style={styles.label}>Service Code: </Text>
                    {safeDisplay(data.test.service_code)}
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text>
                    <Text style={styles.label}>Service Name: </Text>
                    {safeDisplay(data.test.service_name)}
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text>
                    <Text style={styles.label}>Actual Cost: </Text>
                    {safeDisplay(data.test.price?.actual_cost)}
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text>
                    <Text style={styles.label}>Discounted Price: </Text>
                    {safeDisplay(data.test.price?.discounted_price)}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            <Text>N/A</Text>
          )}
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>
            Final Amount: {safeDisplay(data.final_amount)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePdfDocument;
