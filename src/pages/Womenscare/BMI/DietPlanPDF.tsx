import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

interface DietPlanPDFProps {
  selectedWeekData: any;
  language?: string;
}

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

const DietPlanPDF: React.FC<DietPlanPDFProps> = ({
  selectedWeekData,
  language = "en",
}) => {
  // Get meal categories (Breakfast, Lunch, Dinner) from the first day
  const mealCategories = Object.keys(Object.values(selectedWeekData)[0] as any);
  const fontFamily = getFontFamily(language);
  const styles = StyleSheet.create({
    page: {
      padding: 20,
      fontSize: 12,
      flexDirection: "column",
      fontFamily,
    },
    grid: { display: "flex", flexDirection: "column", marginBottom: 20 },
    row: { display: "flex", flexDirection: "row", marginBottom: 5 },
    headerRow: { display: "flex", flexDirection: "row", marginBottom: 10 },
    headerCell: {
      flex: 1,
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      paddingBottom: 5,
      borderBottom: "2px solid black",
    },
    card: {
      flex: 1,
      border: "1px solid #ccc",
      borderRadius: 5,
      padding: 10,
      margin: 2,
      textAlign: "center",
    },
    dayTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
    mealItems: { fontSize: 10, textAlign: "center" },
    footer: {
      textAlign: "center",
      marginTop: 20,
      padding: 20,
      backgroundColor: "#e0f7e0",
      borderRadius: 5,
    },
    downloadButton: {
      marginTop: 10,
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      padding: 8,
      backgroundColor: "#008000",
      color: "#fff",
      borderRadius: 5,
      width: "100%",
    },
  });

  return (
    <PDFViewer width="100%" height="600px">
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header Row for Meal Categories */}
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Day</Text>
            {mealCategories.map((meal) => (
              <Text key={meal} style={styles.headerCell}>
                {meal}
              </Text>
            ))}
          </View>

          {/* Grid Section */}
          <View style={styles.grid}>
            {Object.entries(selectedWeekData).map(([day, meals]: any) => (
              <View key={day} style={styles.row}>
                {/* Day Column */}
                <Text style={[styles.card, { fontWeight: "bold" }]}>
                  {day.replace("_", " ")}
                </Text>

                {/* Meal Columns */}
                {mealCategories.map((meal) => (
                  <View key={meal} style={styles.card}>
                    {meals[meal].map((item: string, i: number) => (
                      <Text key={i} style={styles.mealItems}>
                        • {item}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>

          {/* Bottom Static Section */}
          <View style={styles.footer}>
            <Text style={{ fontSize: 25, fontWeight: 600, marginBottom: 20 }}>
              Take a Look at My Personalized Diet Plan!
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Hi, I’ve been working on my health and just created a personalized
              diet plan using RaphaCure. It’s simple, healthy, and tailored to
              my goals, so I thought you might find it useful too! I’d love to
              hear your thoughts or if you have any suggestions!
            </Text>
            <Text style={styles.downloadButton}>DOWNLOAD CHART</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default DietPlanPDF;
