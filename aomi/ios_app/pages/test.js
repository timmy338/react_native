/**
 * 
 * @param {*} param0 
 * @returns 
 */
const RenderItem = ({ item, index, width, data }) => {
  if (index >= 0) {
    return (
      <View style={[{ width: screenSize.width - 20, height: 50, justifyContent: 'center', alignItems: 'center' }, width !== undefined ? { width: width } : {}]}>
        <Text>{item}</Text>
      </View>
    )
  }
}


import Intro from '../components/TakeOut/ShopClick/Intro'
import TabLeft from '../components/TakeOut/ShopClick/Foods/TabLeft';
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  Platform,
  TouchableOpacity,
  Alert,
  ScrollView,
  StatusBar,
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import TabRight from '../components/TakeOut/ShopClick/Foods/TabRight';
import Comments from '../components/TakeOut/ShopClick/Comments';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const TabBarHeight = 48;
const HeaderHeight = 170;
const SafeStatusBar = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight,
});
const tab1ItemSize = (windowWidth - 30) / 2;
const tab2ItemSize = (windowWidth - 40) / 3;


const App = ({ data, clickHeight, changeClickHeight, activeIndex, navigation, addWare, commentId }) => {

  /**
   * stats
   */

  const [tabIndex, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'tab1', title: '點菜' },
    { key: 'tab2', title: '評論' },
  ]);
  const [canScroll, setCanScroll] = useState(true);


  const tab1AllData = []
  const tabLeft = []
  {
    data.menuTypeList &&
      data.menuTypeList.map((item, index) => {
        const information = { name: "", length: 0 }
        information.name = item.name
        information.length = item.menuList.length
        tabLeft.push(information)
      })
  }
  {
    var setLength = 0
    tabLeft.map((item, index) => {
      if (index === 0) {
        setLength = setLength + item.length
        item.length = 0
      }
      else {
        var addLength = item.length
        item.length = setLength
        setLength += addLength
      }
    })
  }
  tab1AllData.push(tabLeft)
  /*   console.log('---------------------')
    console.log(tab1AllData) */
  {
    data.menuTypeList &&
      data.menuTypeList.map((item, index) => {
        tab1AllData.push(item)
      })
  }
  /*   console.log('--------')
    console.log(tab1AllData) */
  const [tab1Data] = useState(Array(40).fill(0));
  const tab2Data = [0, 1, 2]
  /*   const [tab2Data] = useState(Array(1).fill(0)); */

  /**
   * ref
   */
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerScrollY = useRef(new Animated.Value(0)).current;
  const listRefArr = useRef([]);
  const listOffset = useRef({});
  const isListGliding = useRef(false);
  const headerScrollStart = useRef(0);
  const _tabIndex = useRef(0);

  /**
   * PanResponder for header
   */
  const headerPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        syncScrollOffset();
        return false;
      },

      onMoveShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        return Math.abs(gestureState.dy) > 5;
      },

      onPanResponderRelease: (evt, gestureState) => {
        syncScrollOffset();
        if (Math.abs(gestureState.vy) < 0.2) {
          return;
        }
        headerScrollY.setValue(scrollY._value);
        Animated.decay(headerScrollY, {
          velocity: -gestureState.vy,
          useNativeDriver: true,
        }).start(() => {
          syncScrollOffset();
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        listRefArr.current.forEach((item) => {
          if (item.key !== routes[_tabIndex.current].key) {
            return;
          }
          if (item.value) {
            item.value.scrollToOffset({
              offset: -gestureState.dy + headerScrollStart.current,
              animated: false,
            });
          }
        });
      },
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        headerScrollStart.current = scrollY._value;
      },
    }),
  ).current;

  /**
   * PanResponder for list in tab scene
   */
  const listPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        headerScrollY.stopAnimation();
        return false;
      },
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        headerScrollY.stopAnimation();
      },
    }),
  ).current;

  /**
   * effect
   */
  useEffect(() => {
    scrollY.addListener(({ value }) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });

    headerScrollY.addListener(({ value }) => {
      listRefArr.current.forEach((item) => {
        if (item.key !== routes[tabIndex].key) {
          return;
        }
        if (value > HeaderHeight || value < 0) {
          headerScrollY.stopAnimation();
          syncScrollOffset();
        }
        if (item.value && value <= HeaderHeight) {
          item.value.scrollToOffset({
            offset: value,
            animated: false,
          });
        }
      });
    });
    return () => {
      scrollY.removeAllListeners();
      headerScrollY.removeAllListeners();
    };
  }, [routes, tabIndex]);

  /**
   *  helper functions
   */
  const syncScrollOffset = () => {
    const curRouteKey = routes[_tabIndex.current].key;

    listRefArr.current.forEach((item) => {
      if (item.key !== curRouteKey) {
        if (scrollY._value < HeaderHeight && scrollY._value >= 0) {
          if (item.value) {
            item.value.scrollToOffset({
              offset: scrollY._value,
              animated: false,
            });
            listOffset.current[item.key] = scrollY._value;
          }
        } else if (scrollY._value >= HeaderHeight + 50) {
          if (
            listOffset.current[item.key] < HeaderHeight ||
            listOffset.current[item.key] == null
          ) {
            if (item.value) {
              item.value.scrollToOffset({
                offset: HeaderHeight,
                animated: false,
              });
              listOffset.current[item.key] = HeaderHeight;
            }
          }
        }
      }
    });
  };

  const onMomentumScrollBegin = () => {
    isListGliding.current = true;
  };

  const onMomentumScrollEnd = () => {
    isListGliding.current = false;
    syncScrollOffset();
  };

  const onScrollEndDrag = () => {
    syncScrollOffset();
  };

  /**
   * render Helper
   */
  const renderHeader = () => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [0, -HeaderHeight],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        {...headerPanResponder.panHandlers}
        style={[styles.header, { transform: [{ translateY: y }] }]}>
        {/* <TouchableOpacity
                style={{flex: 1, justifyContent: 'center'}}
                activeOpacity={1}
                onPress={() => Alert.alert('header Clicked!')}>
                <Text>Scrollable Header</Text>
              </TouchableOpacity> */}
        <Intro data={data} />
      </Animated.View>


    );
  };

  const rednerTab1Item = ({ item, index }) => {
    return (
      index === 0 ?
        <View style={{ marginTop: 49 }}>
          <ScrollView style={{ position: 'absolute', backgroundColor: '#F4F4F4', height: windowHeight }}>
            <TabLeft data={item} changeClickHeight={changeClickHeight} activeIndex={activeIndex} />
          </ScrollView>
        </View>
        :
        <View style={[{ paddingLeft: 70 },index==tab1AllData.length-1 && {paddingBottom:500}]}>
          <TabRight data={item} navigation={navigation} addWare={addWare} />
        </View>

    );
  };

  const rednerTab2Item = ({ item, index }) => {
    return (
      index == 0 ?
        <View></View>
        :
        index == 1 ?
          <View></View>
          :
          <ScrollView style={{ flex: 1 }}>
            <Comments shopId={commentId}></Comments>
          </ScrollView>
    );
  };

  const renderLabel = ({ route, focused }) => {
    return (
      <Text style={[styles.label, { opacity: focused ? 1 : 0.5 }]}>
        {route.title}
      </Text>
    );
  };

  const renderHeader1 = () => {
    return (
      <View style={{ width: windowWidth, height: 200 }}>
        <Text>header</Text>
      </View>
    )
  }


  const renderScene = ({ route }) => {
    const focused = route.key === routes[tabIndex].key;
    let numCols;
    let data;
    let renderItem;
    switch (route.key) {
      case 'tab1':
        numCols = 1;
        data = tab1AllData;
        renderItem = rednerTab1Item;
        break;
      case 'tab2':
        numCols = 2;
        data = tab2Data;
        renderItem = rednerTab2Item;
        break;
      default:
        return null;
    }
    return (
      <Animated.FlatList
        // scrollEnabled={canScroll}
        stickyHeaderIndices={[1]}
        {...listPanResponder.panHandlers}
        numColumns={numCols}
        ref={(ref) => {
          if (ref) {
            const found = listRefArr.current.find((e) => e.key === route.key);
            if (!found) {
              listRefArr.current.push({
                key: route.key,
                value: ref,
              });
            }
          }
        }}
        scrollEventThrottle={0}
        onScroll={
          focused
            ? Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: scrollY } },
                },
              ],
              { useNativeDriver: true },

              /*    {
                   listener: (event) => console.log(event.nativeEvent.contentOffset.y)
                 } */
            )
            : null
        }
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd, () => changeClickHeight(scrollY._value, tabLeft, 1)}
        ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
        ListHeaderComponent={() => <View style={{ height: 0 }} />}
        contentContainerStyle={{
          paddingTop: HeaderHeight + TabBarHeight - 50,/* 底部吸頂 */
          paddingHorizontal: 0,
          minHeight: windowHeight - SafeStatusBar + HeaderHeight,
        }}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentOffset={{ y: clickHeight }}
      /* contentOffset = {  { y:0}} */
      />
    );
  };

  const renderTabBar = (props) => {
    const y = scrollY.interpolate({
      inputRange: [0, HeaderHeight],
      outputRange: [HeaderHeight, 0],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          top: 0,
          zIndex: 1,
          position: 'absolute',
          transform: [{ translateY: y }],
          width: '100%',
          backgroundColor: 'white',
          borderBottomColor: '#F3F3F3',
          borderBottomWidth: 1,
        }}>
        <TabBar
          {...props}
          onTabPress={({ route, preventDefault }) => {
            if (isListGliding.current) {
              preventDefault();
            }
          }}
          style={styles.tab}
          renderLabel={renderLabel}
          indicatorStyle={styles.indicator}
        />
      </Animated.View>
    );
  };

  const renderTabView = () => {

    return (
      <View style={{ flex: 1 }}>
        <TabView
          onSwipeStart={() => setCanScroll(false)}
          onSwipeEnd={() => setCanScroll(true)}
          onIndexChange={(id) => {
            _tabIndex.current = id;
            setIndex(id);
          }}
          navigationState={{ index: tabIndex, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          initialLayout={{
            height: 50,
            width: windowWidth,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderTabView()}
      {renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HeaderHeight,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  label: { fontSize: 16, color: '#222' },
  tab: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#fff',
    height: TabBarHeight,
    width: 200,
  },
  indicator: { backgroundColor: '#FF3159', height: 3 },
});

export default App;
