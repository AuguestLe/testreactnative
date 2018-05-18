import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
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
import List from './page/appraise';
import Name from './page/Name';
import Sex from './page/Sex';
import NativePlace from './page/NativePlace';
const App = StackNavigator(
    {
        Home : {
            screen: List,
            navigationOptions:{
                headerTitle:'首页',
                headerTitleStyle:{
                    flex:1,
                    textAlign: 'center',
                    fontSize:18,
                    fontWeight:'normal',
                },
                headerStyle:{
                    elevation: 0,
                    height: 40,
                    borderBottomColor:'#f5f5f5',
                    borderBottomWidth:1
                }
            }
        },
        Name: {
            screen:Name,
            navigationOptions:({navigation})=>({
                headerTitle:'修改姓名',
                headerTitleStyle:{
                    flex:1,
                    textAlign: 'center',
                    fontSize:18,
                    fontWeight:'normal',
                },
                headerStyle:{
                    elevation: 0,
                    height: 40,
                    borderBottomColor:'#f5f5f5',
                    borderBottomWidth:1
                },
                headerRight:(
                    <TouchableOpacity onPress={()=>{
                        console.log(navigation)
                        //navigation.goBack();
                    }}>
                        <Text style={{color:'#3385ff',fontSize:16,paddingRight:10}}>保存</Text>
                    </TouchableOpacity>
                ),
                headerLeft:(  
                    <View>
                        <TouchableOpacity 
                            onPress={()=>{
                                navigation.goBack();
                            }}
                            style={{paddingLeft:10,flexDirection: 'row'}} 
                        >
                            <Image source={require('./source/images/back-icon.png')}/>
                            <Text style={{color:'#3385ff',fontSize:16,paddingLeft:6}}>首页</Text>
                        </TouchableOpacity> 
                    </View>   
                )
            }) 
        },
        Sex: {
            screen: Sex,
            navigationOptions:({navigation})=>({
                headerTitle:'性别选择',
                headerTitleStyle:{
                    flex:1,
                    textAlign: 'center',
                    fontSize:18,
                    fontWeight:'normal',
                },
                headerStyle:{
                    elevation: 0,
                    height: 40,
                    borderBottomColor:'#f5f5f5',
                    borderBottomWidth:1
                },
                headerRight:(
                    <TouchableOpacity onPress={()=>{
                        navigation.goBack();
                    }}>
                        <Text style={{color:'#3385ff',fontSize:16,paddingRight:10}}>保存</Text>
                    </TouchableOpacity>
                ),
                headerLeft:(  
                    <View>
                        <TouchableOpacity 
                            onPress={()=>{
                                navigation.goBack();
                            }}
                            style={{paddingLeft:10,flexDirection: 'row'}} 
                        >
                            <Image source={require('./source/images/back-icon.png')}/>
                            <Text style={{color:'#3385ff',fontSize:16,paddingLeft:6}}>首页</Text>
                        </TouchableOpacity> 
                    </View>   
                ),
            })
        },
        NativePlace: {
            screen: NativePlace,
            navigationOptions:({navigation})=>({
                headerTitle:'城市列表',
                headerTitleStyle:{
                    flex:1,
                    textAlign: 'center',
                    fontSize:18,
                    fontWeight:'normal',
                },
                headerStyle:{
                    elevation: 0,
                    height: 40,
                    borderBottomColor:'#f5f5f5',
                    borderBottomWidth:1
                },
                headerRight:(
                    <TouchableOpacity onPress={()=>{
                        navigation.goBack();
                    }}>
                        <Text style={{color:'#3385ff',fontSize:16,paddingRight:10}}>保存</Text>
                    </TouchableOpacity>
                ),
                headerLeft:(  
                    <View>
                        <TouchableOpacity 
                            onPress={()=>{
                                navigation.goBack();
                            }}
                            style={{paddingLeft:10,flexDirection: 'row'}} 
                        >
                            <Image source={require('./source/images/back-icon.png')}/>
                            <Text style={{color:'#3385ff',fontSize:16,paddingLeft:6}}>首页</Text>
                        </TouchableOpacity> 
                    </View>   
                ),
            })
        }
    },
    {
        headerMode: 'float',
        initialRouteName: 'Home',
    }
);

export default App;