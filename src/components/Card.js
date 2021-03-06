import React from 'react';
import { View } from 'react-native';

// Created reusable card component
const Card = (props) => {
return (
        <View style={styles.containerStyle}>
            {props.children} // Accessed children data using props from parent components 
        </View>
    );
};

// Card styling
const styles = {
    containerStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor:'#000',
        borderTopColor:'#000',
        borderTopWidth: 1,
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginBottom:5
     }    
};

export default Card;
