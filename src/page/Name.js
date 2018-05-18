import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TextInput,
  Picker,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
const {width,height} = Dimensions.get('window');

export default class List extends Component {
   
	render () {
        const params = this.props.navigation.state.params;
		return (
			<View style={styles.Minbox}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) =>params.getName(text)}
                    placeholder={'请输入姓名'}
                />
			</View>
		)
	}
}
const styles=StyleSheet.create({
    Minbox:{
        backgroundColor:'#fff',
        flex:1,
        padding: 10,
    },
    activeBtn:{
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 12,
        paddingBottom:12, 
        overflow: 'hidden', 
        borderRadius: 4, 
        backgroundColor: '#3385ff' ,
        alignItems: 'center',
        marginRight: 10,
    }
})