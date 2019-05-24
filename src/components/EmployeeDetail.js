import React,{Component} from 'react';
import {View, Text, Image,Dimensions} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const EmployeeDetail = ({props}) => {

const {headerContentStyl,headerTextStyle, imageContainerStyle,namestyle,imageStyle} = styles

return(
    <Card>
       <View style={imageContainerStyle}>
    
     // Accessed JSON data from root component app using props (image
          <Image style={imageStyle} source={{uri:props.image }} /> 
      </View>
      
      <CardSection>
      <View style={headerContentStyl}>
    
    // Accessed JSON data from root component app using props (Employe_ID , Name , Designation)
          <Text style={headerTextStyle}>Employe ID: {props.Employe_ID}</Text> 
          <Text style={namestyle}>Name: {props.Name}</Text>
          <Text style={namestyle}>Designation: {props.Designation}</Text>
        </View>
      </CardSection>

    </Card>
);
}

// EmployeeDetail styling
const styles = {
     headerContentStyl: {
         flexDirection: 'column',
         margin:10
     },
     headerTextStyle:{
         fontSize : 18,
     },
     namestyle:{
         fontSize : 15,
     },
     imageContainerStyle:{
         flex: 1,
         margin: 5,
     },
     imageStyle:{
         width: 100,
         height: 100, 
     },
};

export default EmployeeDetail;
