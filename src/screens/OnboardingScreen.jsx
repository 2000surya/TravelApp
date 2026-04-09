import React, { useRef, useState } from "react";
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
  <View>
    <View style={styles.imageWrapper}>
      <Image source={item.image} style={[styles.imageStyle, { width }]} />
    </View>
    <View style={styles.content}>
      <View>
        <Text>
          {item.title}
          <Text>{item.subTitle}</Text>
        </Text>
      </View>
      {/* <View style={{ flex: 1 }}>
        <Text numberOfLines={3}>{item.discription}</Text>
      </View> */}
    </View>
  </View>
);
const OnboardingScreen = () => {
  const flatRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setCurrentIndex(index);
    }
  });

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
        {data.map((item) => (
          <View style={styles.dotStyle} key={item.id} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageStyle: {
    height: 450,
    resizeMode: "cover",
  },
  content: {
    borderWidth: 1,
    ...GlobalStyle.margin,
    ...GlobalStyle.padding,
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dotStyle: {
    width: 30,
    height: 30,
    borderWidth: 1,
  },
  titleContainer: {
    alignItems: "center",
  },
  titleStyle: {
    fontSize: Fonts.xxxl,
    color: Colors.textPrimary,
  },
  subTitle: {},
});
