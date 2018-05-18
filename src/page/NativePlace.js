import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const {width,height} = Dimensions.get('window');

import Item from '../component/List'
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            citys:[
                {key:'1','name':'北京'},
                {key:'2','name':'河南'},
                {key:'3','name':'河北'},
                {key:'4','name':'山东'},
                {key:'5','name':'山西'},
                {key:'6','name':'湖北'},
                {key:'7','name':'湖南'},
                {key:'8','name':'广东'},
                {key:'9','name':'广西'},
                {key:'10','name':'广州'},
            ]
        }
    }
    _keyExtractor = (item, index) => item.id;
    _renderItem =({item}) => {
        const Prentpress = this.props.navigation.state.params.presss;
        return(
            <TouchableOpacity 
            onPress={()=>Prentpress(item)}
                style={styles.ActivBtn}
            >
                <Text style={{color:'#000'}}>{item.name}</Text>
            </TouchableOpacity>
        )    
    }
	render () {
        const {navigate} = this.props.navigation;
		return (
			<View style={{backgroundColor:'#fff',flex:1}}>
                <FlatList
                    data={this.state.citys}
                    renderItem={this._renderItem}
                />
			</View>
		)
	}
}
const styles=StyleSheet.create({
    logobox:{
        height: 150,
        backgroundColor: 'rgba(220,229,239,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImg: {
        height: 106,
        width: 106,
        borderRadius: 53,
    },
    ActivBtn: {
        height:40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    }
})