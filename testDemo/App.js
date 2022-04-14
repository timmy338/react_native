/* import React, { useEffect, useRef, useState,ComponentProps } from 'react';
import { StyleSheet, Text, View,ScrollView, FlatList ,Animated ,useWindowDimensions,Dimensions, StatusBar} from 'react-native';
//import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

import { screenSize } from './util/screenSize';

import PagerView from 'react-native-pager-view';

import { TabView, SceneMap } from 'react-native-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context'; */
/**
 * 
 * @param {*} param0 
 * @returns 
 */
const RenderItem=({ item,index,width,data })=>{
    /* if(index===0 && index!==undefined ){
     
      return(
        <View style={{position:'absolute',left:0,width:screenSize.width*0.23}}>
            {
              data.map((item,index)=>{
                return (
                    <Text key={index}>
                       {`name=${item}`}
                    </Text>
                )
              })
            }
        </View>
      )
    }else */ 
    if(index>=0){
      return(
        <View style={[{width:screenSize.width-20,height:50,justifyContent:'center',alignItems:'center'},width!==undefined?{width:width}:{} ] }>
            <Text>{item}</Text>
        </View>
      )
    }
}

/* export default function App() {
  
  const items = [
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
      'danny',
      'tom',
      'wan',
      'victor',
      'jimmy',
  ]
  const [main, setMain] = useState(true)

  const [lastMain, setLastMain] = useState(true)

  const [isFirstTime, setIsFirstTime] = useState(true)

  const [changing, setChanging] = useState(false)

  const left =  useRef(new Animated.Value(0)).current

  const [isShowLeftContainer, setIsShowLeftContainer] = useState(true)
  
 

  const mainScroll= ({nativeEvent})=>{
    const { contentOffset , contentSize,layoutMeasurement} = nativeEvent
    const loadingOffSet = contentSize.height-layoutMeasurement.height-contentOffset.y

   
  }

  const bottomScroll=({nativeEvent})=>{
    const { contentOffset , contentSize,layoutMeasurement} = nativeEvent
    const loadingOffSet = contentSize.height-layoutMeasurement.height-contentOffset.y
    //console.log('bottom',contentOffset.y);
    if( contentOffset.y<0 ){
        setMain(true)
    }
  }

  const leftScroll =(event)=>{
    console.log(event*screenSize.width);
    
    Animated.timing(left, {
      toValue: -Number(event)*screenSize.width,
      duration: 0,
      useNativeDriver:true,
    }).start();
  }


  const onTabChange=(value)=>{
    console.log(value.i);
    if(Number(value.i)===1){
      setIsShowLeftContainer(false)
    }else{
      setIsShowLeftContainer(true)
    }
  }

  const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  );
  
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );
  
  const initialLayout = { width: Dimensions.get('window').width };
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <View style={{width:screenSize.width,flex:1}}>
     
      
    
        <TabView
          
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={styles.container}
          sceneContainerStyle={{height:screenSize.height+500}}
        />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    width:screenSize.width,
    height:screenSize.height
  },
  scene:{
    flex:1
  }
}); */

import React, {useState, useEffect, useRef} from 'react';
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
  StatusBar,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const TabBarHeight = 48;
const HeaderHeight = 300;
const SafeStatusBar = Platform.select({
  ios: 44,
  android: StatusBar.currentHeight,
});
const tab1ItemSize = (windowWidth - 30) / 2;
const tab2ItemSize = (windowWidth - 40) / 3;

const App = () => {
  /**
   * stats
   */
  const [tabIndex, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tab1', title: 'sm'},
    {key: 'tab2', title: 'Tab2'},
  ]);
  const [canScroll, setCanScroll] = useState(true);
  const [tab1Data] = useState(Array(40).fill(0));
  const [tab2Data] = useState(Array(30).fill(0));

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
    scrollY.addListener(({value}) => {
      const curRoute = routes[tabIndex].key;
      listOffset.current[curRoute] = value;
    });

    headerScrollY.addListener(({value}) => {
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
        } else if (scrollY._value >= HeaderHeight) {
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
        style={[styles.header, {transform: [{translateY: y}]}]}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center'}}
          activeOpacity={1}
          onPress={() => Alert.alert('header Clicked!')}>
          <Text>Scrollable Header</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const rednerTab1Item = ({item, index}) => {
    return (
      index===0?
      <View>
        <View style={{position:'absolute',width:180,height:400,backgroundColor:"blue"}}>
          <Text>one !!! </Text>
        </View>
      </View>
      :
      <View style={{paddingLeft:200}}>
          <View
          style={{
            borderRadius: 16,
            width: tab1ItemSize,
            height: tab1ItemSize,
            backgroundColor: '#aaa',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{index}</Text>
        </View>
      </View>
    );
  };

  const rednerTab2Item = ({item, index}) => {
    return (
      <View
        style={{
          marginLeft: index % 3 === 0 ? 0 : 10,
          borderRadius: 16,
          width: tab2ItemSize,
          height: tab2ItemSize,
          backgroundColor: '#aaa',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{index}</Text>
      </View>
    );
  };

  const renderLabel = ({route, focused}) => {
    return (
      <Text style={[styles.label, {opacity: focused ? 1 : 0.5}]}>
        {route.title}
      </Text>
    );
  };

  const renderHeader1 =()=>{
     return(
      <View style={{width:windowWidth,height:200}}>
        <Text>header</Text>
      </View>
     )
  }


  const renderScene = ({route}) => {
    const focused = route.key === routes[tabIndex].key;
    let numCols;
    let data;
    let renderItem;
    switch (route.key) {
      case 'tab1':
        numCols = 1;
        data = tab1Data;
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
        scrollEventThrottle={16}
        onScroll={
          focused
            ? Animated.event(
                [
                  {
                    nativeEvent: {contentOffset: {y: scrollY}},
                  },
                ],
                {useNativeDriver: true},
              )
            : null
        }
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollEndDrag={onScrollEndDrag}
        onMomentumScrollEnd={onMomentumScrollEnd}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListHeaderComponent={() => <View style={{height: 10}} />}
        contentContainerStyle={{
          paddingTop: HeaderHeight + TabBarHeight,
          paddingHorizontal: 10,
          minHeight: windowHeight - SafeStatusBar + HeaderHeight,
        }}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
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
          transform: [{translateY: y}],
          width: '100%',
        }}>
        <TabBar
          {...props}
          onTabPress={({route, preventDefault}) => {
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
      <View style={{flex:1}}>
          <TabView
            onSwipeStart={() => setCanScroll(false)}
            onSwipeEnd={() => setCanScroll(true)}
            onIndexChange={(id) => {
              _tabIndex.current = id;
              setIndex(id);
            }}
            navigationState={{index: tabIndex, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            initialLayout={{
              height: 0,
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
    backgroundColor: '#40FFC4',
  },
  label: {fontSize: 16, color: '#222'},
  tab: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#FFCC80',
    height: TabBarHeight,
  },
  indicator: {backgroundColor: '#222'},
});

export default App;
