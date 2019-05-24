import React from 'react';
import { Text, View } from 'react-native';

//Created reusable header component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
 return (
    <View style={viewStyle}>
    //Accessed children data using props from parent components
   <Text style={textStyle}>{props.headerText}</Text>  
 </View>
  );
};

// Header styling
const styles = {
  textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
 viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0357b2',
        borderWidth: 0.5,
        borderColor: '#0357b2',
        marginBottom:5,
        marginTop:5
    },
};

export default Header;
