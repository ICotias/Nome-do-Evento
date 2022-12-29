
import { StatusBar } from 'react-native'
import Home from './src/screens/Home' // Por padrão, já será aberto o arquivo index, justamente pelo fato dele se chamar

export default function App(){
    return ( // Tudo aquilo que eu quero em tela estará dentro do return
    <>
    <Home/>
    <StatusBar 
    barStyle={"light-content"}
    backgroundColor = {"transparent"}
    translucent 
    />
    
    </>
    )
}

