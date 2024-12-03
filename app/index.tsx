import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: 1,
    title: "Sodaqo itu apa sih?",
    text: "SODAQO.id merupakan inisiatif gerakan masyarakat yang muncul karena keresahan dengan keadaan orang-orang yang membutuhkan, terutama dhuafa tunawisma yang hidup menggelandang di tengah kota besar. ",
    image: require("@/assets/images/sodaqo/ilustrations/ilustration4.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Tujuan Sodaqo",
    text: "SODAQO.id merupakan inisiatif gerakan masyarakat yang muncul karena keresahan dengan keadaan orang-orang yang membutuhkan, terutama dhuafa tunawisma yang hidup menggelandang di tengah kota besar. ",
    image: require("@/assets/images/sodaqo/ilustrations/ilustration5.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Kegiatan Sodaqo",
    text: "SODAQO.id merupakan inisiatif gerakan masyarakat yang muncul karena keresahan dengan keadaan orang-orang yang membutuhkan, terutama dhuafa tunawisma yang hidup menggelandang di tengah kota besar. ",
    image: require("@/assets/images/sodaqo/ilustrations/ilustration6.png"),
    backgroundColor: "#22bcb5",
  },
];

export default function Index() {
  const [showRealApp, setShowRealApp] = useState(false);
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
  };

  {
    if (showRealApp) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Edit app/index.tsx to edit this screen.</Text>
        </View>
      );
    } else {
      return (
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
