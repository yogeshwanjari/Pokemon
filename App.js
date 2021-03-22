// import React from 'react';
// import { FlatList } from 'react-native';
// import {View, Text} from 'react-native';
// import Pokemons from './Pokemons';
// import Details from './Details';
// class App extends React.Component {

// //   constructor()
// //   {
// //     super();
// //     this.state={
// //       data:[]
// //     }
// //   }
// //   componentDidMount()
// //   {
// //     this.apicall();
// //   }
// //    async apicall()
// // {
// //     let resp =await fetch( "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ef097576a7deb00066b416f%2F0x0.jpg")
// //     let respjson= await resp.json()
// //     // console.warn(respjson)
// //     this.setState({data:respjson.image})
    
// //   }
//   render() {
//     return (
      
//         <View>
//           {/* <Text style={{fontSize:100}}>api call</Text>
//           <FlatList
//  data={this.state.data}
//  renderItem={({item})=><Text>{item.title}</Text>
// }
//  /> */}
//  <Pokemons/>
//  <Details/>
// </View>
//   )
//   }
// }

// export default App;
// import React,{Component} from 'react';
// import {createAppContainer} from 'react-navigation';
// // import {createStackNavigator} from 'react-navigation-stack';
import Pokemons from './Pokemons';
// import Details from './Details';
import yog from './yog';

// const appNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Pokemons,
//     },
//     Details: {
//       screen: Details,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// const AppContainer = createAppContainer(stackNavigator);

import React from "react";
import { View, Text,} from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
    <View
      
    >
      
      <Pokemons/>
      
      
     

    </View>
  );
};

export default ViewBoxesWithColorAndText;