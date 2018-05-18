import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const styles=StyleSheet.create({
	List:{
		marginLeft:15,
		paddingRight:15,
		paddingVertical:15,
		borderBottomWidth:1,
		borderBottomColor:'#E5E5E5',
		flexDirection:'row',
		fontSize:12
	},
	img:{
		width:100,
		height:75
	},
	ListImg:{
		width:100,
	},
	ViewRight:{
		marginLeft:6,
		width:230
	},
	ViewButton:{
		borderWidth:1,
		borderColor:'#4996FF',
		height:20,
		paddingHorizontal:6,
		alignItems: 'center',
		marginLeft:5,
		color:'#4996FF'
	}
})
const Item =(prop)=>{
	return (
		<TouchableOpacity style={styles.List}>
				<View style={styles.ListImg}>
					<Image style={styles.img} source={require('../source/images/tu1.jpg')}/>
				</View>
				<View style={styles.ViewRight}>
					<Text>车架号:09DFALJSDFJ98D987D</Text>
					<Text>城市:黑龙江-哈尔滨</Text>
					<Text>机构:昆明亚(中国北京)龙危经济信息咨询有限公司</Text>
					<View style={{flexDirection:'row',justifyContent:'space-between'}}>
						<Text>成交价：9.50万</Text>
						<Text style={styles.ViewButton}>库融贷</Text>
						<Text style={styles.ViewButton}>交易类型</Text>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:4}}>
						<Text style={{color:'#FF7D31'}}>暂无估值</Text>
						<Text style={{color:'#AAAAAA'}}>2017-08-09  22:09</Text>
					</View>
				</View>		
		</TouchableOpacity>
	);
};

export default Item