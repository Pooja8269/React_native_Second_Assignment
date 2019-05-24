import React, {Component} from 'react';
import { View,ScrollView } from 'react-native';
import EmployeeDetail from './src/components/EmployeeDetail';
import EmployeeData from './src/components/EmployeeData.json';
import Header from './src/components/Header';

export default class App extends Component {
  state={ 
   EmployeeData   // Using JSON Data 
};

//Parcing JSON data to component <EmployeeDetail> using props
renderDetails(){
  return this.state.EmployeeData.map(EmployeeData => <EmployeeDetail props={EmployeeData} />);
}

  render() {
    return (
      <View style={{ flex:1}}>
        <Header headerText={"Employee List"} />
         <ScrollView>
             {this.renderDetails()} // Render details function calling
         </ScrollView>
      </View>
    );
  }
}
