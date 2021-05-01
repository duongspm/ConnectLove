import * as React from 'react'
import {View, Text, TouchableOpacity,ScrollView} from 'react-native'
import { Header,Input,Button } from 'react-native-elements'
import styled from 'styled-components'
import { getToken, sendPushNotification, Token } from '../services/api'

const Page = styled(View)`
    padding: 40px 30px 0 30px;
`

const Heading = styled(Text)`
    text-align:center;
    font-size:20px;
    margin-bottom:16px;
    font-weight:bold;
`
const ButtonContainer = styled(View)`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`

const SumonButtom = styled(TouchableOpacity)<{color?:string}>`
    background-color:${p=>p.color||'red'};
    flex:48% 0 0;
    border-radius:5px;
    text-align:center;
    margin-bottom:10px;
    display:flex;
    height:150px;
    align-items:center;
    justify-content:center;
    color:white;
`
const SummmonButtonText = styled(Text)`
    color:white;
    font-size:18px;
` 
/*const token = 'ExponentPushToken[WQxQjMNVIPgI1BGl6NqdwA]'*/

const GirlScreen : React.FC = () =>{

    const[tokenInput,setTokenInput] = React.useState('')
    const [token,setToken] = React.useState<Token|undefined>()
    
    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }} 
                centerComponent= {{text:'Cho bạn nữ 👰‍♀️ ',style:{color:'#fff'}}}/>
            <Page>
                {token ?(
                    <View>
                        <Heading>Mã số của bạn nam là {token.id}.</Heading>
                        <Heading>Đã kết nối</Heading>
                    </View>
                    ):(
                    <View>
                        <Input 
                            value={tokenInput}
                            onChangeText={setTokenInput}
                            label ="Mã số của bạn nam" 
                            placeholder="Nhập mã số ..."/>
                        <Button 
                            title ="Xác nhận mã số"
                            onPress={async()=>{
                                const storedToken = await getToken(tokenInput)
                                setToken(storedToken)
                            }}/> 
                    </View>)}
                
                    {token && <View style={{marginTop:30}}>

<Heading></Heading>
<ScrollView>
    <ButtonContainer>
        
        <SumonButtom 
            color="#e74c3c" 
            onPress={()=>
                sendPushNotification(token.token,'Em đói quá 😭😭 ','Qua đi ăn với em đi 😍😍  ')
                }>
            <SummmonButtonText>Em đói quá 🍝  </SummmonButtonText>
        </SumonButtom>

        <SumonButtom 
            color="#2980b9"
            onPress={()=>
                sendPushNotification(token.token,'Em nhớ anh quá','Chở em đi chơi nhaa !👄 ')
                }>
            <SummmonButtonText>Em nhớ anh quá 👄 </SummmonButtonText>
        </SumonButtom>

        <SumonButtom 
            color="#2acc71"
            onPress={()=>
                sendPushNotification(token.token,'Em muốn đi xem phim 📽🎞','Có phim mới ra hay lắm nè')
                }>
            <SummmonButtonText>Em muốn đi xem phim 📽🎞  </SummmonButtonText>
        </SumonButtom>

        <SumonButtom 
            color="#f1c40f"
            onPress={()=>
                sendPushNotification(token.token,'Call me baby❤️❤️ ','Em cho anh cái này nè !❤️')
                }>
            <SummmonButtonText>Gọi em nha❤️❤️ </SummmonButtonText>
        </SumonButtom>

        <SumonButtom 
            color="#e74c3c" 
            onPress={()=>
                sendPushNotification(token.token,'I love you baby','Mãi yêu anh 💖💖 ')
                }>
            <SummmonButtonText>Em yêu anh💖 </SummmonButtonText>
        </SumonButtom>

        <SumonButtom 
            color="#2980b9"
            onPress={()=>
                sendPushNotification(token.token,'Em thèm trà sữa quá ','Mua cho em ly lục trà đi')
                }>
            <SummmonButtonText>Trà sữa</SummmonButtonText>
        </SumonButtom>

        <SumonButtom 
            color="#2acc71"
            onPress={()=>
                sendPushNotification(token.token,'Em muốn đi xem phim 📽🎞','Có phim mới ra hay lắm nè')
                }>
            <SummmonButtonText>📽🎞  </SummmonButtonText>
        </SumonButtom>

        <SumonButtom 
            color="#f1c40f"
            onPress={()=>
                sendPushNotification(token.token,'Call me baybe❤️❤️ ','Em cho anh cái này nè !❤️')
                }>
            <SummmonButtonText>❤️❤️ </SummmonButtonText>
        </SumonButtom>
        
    </ButtonContainer>
</ScrollView>
</View> }
                
            </Page>
        </View>)
}
export default GirlScreen