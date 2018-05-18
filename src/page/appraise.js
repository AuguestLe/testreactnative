import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const {width,height} = Dimensions.get('window');

import Item from '../component/List'
export default class List extends Component {
    constructor(prop){
        super(prop);
        this.state= {
            userName: '张三',
            userSex: '男',
            userNp: '湖北'
        }
    }
    _handUserSex = (item,goBack)=>{
        console.log(item);
        this.setState({
            userSex: item,
        })
        goBack(null);
    }
    _handNativep = (item,goBack) => {
        this.setState({
            userNp:item.name
        })
        goBack(null);
    }
    callBackName=(name)=>{
        this.setState({
            userName:name
        })
    }
	render () {
        const {navigate,goBack} = this.props.navigation;
		return (
			<View>
                <View style = {styles.logobox}>
                    <Image 
                        style= {styles.headerImg}
                        source= {require('../source/images/tu1.jpg')}
                    />
                </View>
                <TouchableOpacity 
                    style={styles.ActivBtn}
                    onPress={()=>{
                        navigate('Name',
                            {
                                userName:this.state.userName,
                                callBackName:(name)=>this.callBackName(name)
                            }
                        )
                    }}
                >
                    <Text>姓名：{this.state.userName}</Text>
                    <Image source={require('../source/images/fastOnlineJianTou.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.ActivBtn}
                    onPress={()=>{
                        navigate('Sex',{sexPres:(item)=>this._handUserSex(item,goBack)})
                    }}
                >
                    <Text>性别：{this.state.userSex}</Text>
                    <Image source={require('../source/images/fastOnlineJianTou.png')}/>
                </TouchableOpacity> 
                <TouchableOpacity 
                    style={styles.ActivBtn} 
                    onPress={()=>{
                        navigate('NativePlace',{presss:(item)=>this._handNativep(item,goBack)})
                    }}
                >
                    <Text style={styles.actleft}>籍贯：{this.state.userNp}</Text>
                    <Image source={require('../source/images/fastOnlineJianTou.png')}/>
                </TouchableOpacity> 
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