import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

export default class firstComponent extends Component {
    render() {
        return (
            <View>
                <View style={styles.line}>
                </View>
                <Text style={styles.txt}>
                    Contenu Enfant + {this.props.data[0]}
                </Text>
                <Text style={styles.txt}>
                    Age Enfant + {this.props.data[1]}
                </Text>
                <View style={styles.line}>
                </View>
            </View>
        )
    }
}

export default firstComponent;
