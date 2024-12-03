import { Colors } from "@/constant/colors";
import { fonts } from "@/constant/fonts";
import { slides } from "@/constant/intro_slide";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

export default function Index() {
  const [showRealApp, setShowRealApp] = useState(false);
  const _renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderSkip = () => {
    return (
      <View>
        <Text style={{ color: Colors.primary, fontSize: 18 }}>Lewati</Text>
      </View>
    );
  };

  const _renderNext = () => {
    return (
      <View>
        <Text style={{ color: "orange", fontSize: 18 }}>Selanjutnya</Text>
      </View>
    );
  };

  const _renderDone = () => {
    return (
      <View>
        <Text style={{ color: "orange", fontSize: 18 }}>Selanjutnya</Text>
      </View>
    );
  };

  const _onDone = () => {
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
          showSkipButton
          onSkip={_onDone}
          renderSkipButton={_renderSkip}
          renderNextButton={_renderNext}
          renderDoneButton={_renderDone}
          onDone={_onDone}
          doneLabel="Selanjutnya"
          dotStyle={{
            display: "none",
          }}
          activeDotStyle={{
            display: "none",
          }}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 30,
  },
  title: {
    fontSize: fonts.size.l1,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary,
  },
  text: {
    marginTop: 10,
    fontSize: fonts.size.m2,
    fontWeight: fonts.weight.semiThin,
  },
});
