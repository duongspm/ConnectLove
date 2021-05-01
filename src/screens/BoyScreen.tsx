import * as React from 'react'
import {View, Text} from 'react-native'
import { Header , Button} from 'react-native-elements'

import styled from 'styled-components'
import * as Notifications from 'expo-notifications'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { submitToken, Token } from '../services/api'
import { LinearProgress } from 'react-native-elements';

const Page = styled(View)`
    padding: 40px 30px 0 30px;
`

const Heading = styled(Text)`
    text-align:center;
    font-size:20px;
    margin-bottom:16px;
    font-weight:bold;
`
async function getNotificationToken(){
    const {status} = await Notifications.getPermissionsAsync()
    if(status != 'granted'){
        const {status} = await Notifications.requestPermissionsAsync()
        if (status != 'granted'){
            alert('failed to get notification token')
            return
        }
    }
    const tokenData=await Notifications.getExpoPushTokenAsync()
    const token=tokenData.data
    console.log({token})
    return token
}

const BoyScreen : React.FC = () =>{

    const [token,setToken] = React.useState<Token | undefined>()

    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }} 
                centerComponent= {{text:'Cho bạn nam 🤵‍♀️ ',style:{color:'#fff'}}}/>
            <Page>
                <Heading>
                    {token ? `Mã số của bạn là ${token.id}.`:`Bạn chưa có mã số !!!`}
                </Heading>
                

                <Button 
                    title="Bấm để lấy mã số" 
                    
                    /*onPress={getNotificationToken}*/
                    onPress={async()=>{
                        const token = await getNotificationToken()
                        if (token){
                            const storedToken=await submitToken(token)
                            setToken(storedToken)
                        }
                    }}
                    
                    />
                    <LinearProgress color="primary" />
            </Page>
        </View>)
}
export default BoyScreen