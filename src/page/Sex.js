import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Picker,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
const {width,height} = Dimensions.get('window');

export default class List extends Component {
	render () {
        const Prentpress = this.props.navigation.state.params.sexPres;
		return (
			<View style={styles.Minbox}>
                <View style={{flexDirection: 'row',justifyContent:'center',marginTop:10}}>
                    <Button
                        style={{color:'#fff'}}
                        containerStyle={styles.activeBtn}
                        onPress={()=>Prentpress('男')}
                    >男</Button>
                    <Button
                        style={{color:'#fff'}}
                        containerStyle={styles.activeBtn}
                        onPress={()=>Prentpress('女')}
                    >
                    女
                    </Button>
                </View>
			</View>
		)
	}
}
const styles=StyleSheet.create({
    Minbox:{
        backgroundColor:'#fff',
        flex:1
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