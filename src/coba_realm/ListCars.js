 import React, { Component } from 'react';  
 import {   
   StyleSheet, View, Text, FlatList  
 } from 'react-native';  
 export default class ListCars extends Component {  
   constructor(props) {  
     super(props);  
     this.state = { listCars: [] };  
   }  
   componentWillMount() {  
     Realm.open({schema: [ CarSchema ]})  
     .then(realm => {  
       // Get all data in CarSchema  
       let allCar = realm.objects('Car');  
       this.setState({ listCars : allCar });  
     });  
   }  
   render() {  
     const info = this.state.listCars  
     ? 'Number of cars in this Realm: ' + this.state.listCars.length : 'Loading...';  
     return (  
     <View style={styles.container}>  
       <Text style={styles.item}>  
         {info}  
       </Text>  
       <FlatList  
         data={this.state.listCars}  
         renderItem={({item}) => (  
           <Text style={styles.item}>{item.make} – {item.model}</Text>  
         )}  
         keyExtractor={ item => item.make }  
       />  
     </View>  
   );  
  }  
 }  
 const styles = StyleSheet.create({  
   container: {  
     flex: 1,  
     paddingTop: 22  
   },  
   item: {  
     padding: 10,  
     fontSize: 18,  
     height: 44,  
   },  
 })  