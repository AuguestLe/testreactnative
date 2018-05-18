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
    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }
    componentDidMount(){
        const { state } = this.props.navigation;
        this.setState({
            name:state.params.userName
        })
        this.props.navigation.setParams({navigatePress:this.onFinishPress})
    }
    onFinishPress = () => {
        const {name} = this.state
        this.props.navigation.state.params.callBackName(name)
        this.props.navigation.goBack(null);
    }
	render () {
        const { state, goBack } = this.props.navigation;
		return (
			<View style={styles.Minbox}>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) =>
                        this.setState({
                            name:text
                        })
                    }
                    onFocus={(text) => this.setState({name:''})}
                    placeholder={'请输入姓名'}
                    value={this.state.name}
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