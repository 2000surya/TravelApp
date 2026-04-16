import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { GlobalStyle } from "../constants/GlobalStyle";
import { Images } from "../constants/Images";
const { width } = Dimensions.get("window");

const data = [
  {
    id: 1,
    image: Images.num1,
    title: "Life is short and the world about ",
    subTitle: "wide",
    discription:
      "At Friends tours and travel, We customize  reliable and trustworthy edcuatinal tours to destinations all over the world",
  },
  {
    id: 2,
    image: Images.num2,
    title: "Life is short and the world was ",
    subTitle: "wide",
    discription:
      "At Friends tours and travel, We customize  reliable and trustworthy edcuatinal tours to destinations all over the world",
  },
  {
    id: 3,
    image: Images.num3,
    title: "Life is short and the world is ",
    subTitle: "wide",
    discription:
      "At Friends tours and travel, We customize  reliable and trustworthy edcuatinal tours to destinations all over the world",
  },
];

const RenderItem = ({ item }) => (
  <View style={{ width }}>
    {/* Wrapper for spacing */}
    <View>
      <Image source={item.image} style={styles.imageStyle} />
    </View>

    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>
          {item.title}
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </Text>

        <View style={styles.curveUnderlineWrapper}>
          <View style={styles.curveUnderline} />
        </View>
      </View>

      <Text style={styles.description}>{item.discription}</Text>
    </View>
  </View>
);
const OnboardingScreen = ({ navigation }) => {
  const flatRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setCurrentIndex(index);
    }
  });
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      flatRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation?.navigate("SignInScreen"); // replace "Home" with your screen name
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"black"} />
      <View>
        <FlatList
          ref={flatRef}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <RenderItem item={item} />}
          pagingEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewabilityConfig.current}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      </View>

      <View style={styles.dotContainer}>
        {data.map((item, index) => (
          <View
            style={[
              styles.dotStyle,
              currentIndex === index && {
                backgroundColor: Colors.primary,
                width: 30,
              },
            ]}
            key={item.id}
          />
        ))}
      </View>

      <View style={[GlobalStyle.padding, { marginTop: 20, marginBottom: 10 }]}>
        <CustomButton
          text={currentIndex === 0 ? "Get started" : "Next"}
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-between",
  },

  imageStyle: {
    height: 450,
    resizeMode: "cover",
    width,
    paddingHorizontal: 15,
  },
  content: {
    ...GlobalStyle.margin,
    ...GlobalStyle.padding,
    alignItems: "center",
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  dotStyle: {
    width: 8,
    height: 5,
    backgroundColor: Colors.accent,
    borderRadius: 20,
  },
  titleContainer: {
    alignItems: "center",
  },
  description: {
    fontSize: Fonts.xxl,
    color: Colors.textDark,
  },
  extraStyle: {
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 5,
  },
  titleStyle: {
    fontSize: Fonts.extraLarge,
    color: Colors.textPrimary,
    fontWeight: "bold",
  },
  subTitle: {
    color: Colors.secondary,
    fontSize: Fonts.extraLarge,
  },
});
