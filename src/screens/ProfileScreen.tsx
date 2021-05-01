import * as React from 'react'

import{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
}from "react-native";
import styled from 'styled-components'
import { Header,Input,Button } from 'react-native-elements'

import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Icon } from 'react-native-elements/dist/icons/Icon';


const SumonButtom = styled(TouchableOpacity)`
    flex:3,
    marginLeft:10,
    justifyContent:'center',
    height:10
`
const ProfileScreen :React.FC = ()=>{
    return(
        <View>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent= {{text:'duongg_v',style:{color:'#fff'}}}
                rightComponent={{ icon: 'menu', color: '#fff' }}>
            </Header>
        </View>
   
    )
}

export default ProfileScreen