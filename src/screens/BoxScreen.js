import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.viewOne} />
            <View style={styles.viewTwo} />
            <View style={styles.viewThree} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: 140,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        height: 70,
        width: 70,
        backgroundColor: 'pink',
    },
    viewTwo: {
        height: 70,
        width: 70,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThree: {
        height: 70,
        width: 70,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;