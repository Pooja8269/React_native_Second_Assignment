import React from 'react';
import { View } from 'react-native';

// Created reusable card section component
const CardSection = (props) => {
return (
        <View style={styles.containerStyle}>
           {props.children}  // Accessed children data using props from parent components 
       </View>
    );
};

//Card section styling
const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginBottom:5
    }
};

export default CardSection;
