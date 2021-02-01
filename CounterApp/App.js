
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  NativeModules ,
  NativeEventEmitter,
  Button,
  TouchableOpacityComponent,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  
} from 'react-native/Libraries/NewAppScreen';
export default class App extends React.Component {
  state = {
    textValue: '未接收資料',
    x:0,
    y:0,
    z:0,
  }
  
  onPress = () => {
      NativeModules.RNCounter.increment()
      NativeModules.RNCounter.start()
    console.log(NativeModules.RNCounter)
      const CounterEvents = new NativeEventEmitter(NativeModules.RNCounter)
      CounterEvents.addListener(
        "onChange",
       (event) => {
            console.log(event.count) ;// "someValue"
            this.setState({
              x: event.count,
//              y: event.y,
//              z: event.z,
            })
        
            });
      
//      console.log(event.x,event.y,event.z) ;// "someValue"
//          this.setState({
//            x: res,
//            y: event.y,
//            z: event.z,
//          })
//
    this.setState({
      textValue: '開始接收Native code資料'
    })
//    NativeModules.ToastTest.show('hi',NativeModules.ToastTest.SHORT,
//      (err) => {
//        console.log(err);
//      },
//      (msg) => {
//        console.log(msg);
//
//      },
//    );
  }

  render() {
    return (
      <View style={{paddingTop: 25}}>
        <Text>{this.state.textValue}</Text>
        <Button title="開始" onPress={this.onPress} />
        <Text>{this.state.x}</Text>
        <Text>{this.state.y}</Text>
        <Text>{this.state.z}</Text>
      </View>
    )
  }
}
// const App: () => React$Node = () => {
  
//   // const [count, setCount] = useState(0);
//   const eventEmitter = new NativeEventEmitter(NativeModules.ToastTest);
//   eventEmitter.addListener('EventReminder', (event) => {
//     console.log(event.x,event.y,event.z) ;// "someValue"
//     // console.log(event.y,"11");
//     // this.setState({myText: event.eventProperty[0]})
 
//  });
//   const onPress = () => {
//     NativeModules.ToastTest.show('hi',NativeModules.ToastTest.SHORT,
//       (err) => {
//         console.log(err);
//       },
//       (msg) => {
//         console.log(msg);
//         count=msg
//       },
//     );
//   };
//   return (
//     <View style={styles.container}>
     
//     <TouchableOpacity
//         style={styles.button}
//         onPress={onPress}
//       >
//         <Text>Press Here</Text>
//       </TouchableOpacity>
      
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

// export default App;
