import React, {useState,useEffect} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text
} from 'react-native';


import {HeaderBar,CurrencyLabel,TextButton, TransactionHistory} from "../components"
import {FONTS, SIZES, dummyData, COLORS} from "../constants"

const Transaction = ({route}) => {
    console.log(route)

    const[selectedCurrency, setSelectedCurrency]=useState(null)
    useEffect(() => {
      const {currency} = route.params;
      setSelectedCurrency(currency)
    }, [])
    

const renderTrade = ()=>{
    return (
        <View style={{
            marginTop:SIZES.padding,
            marginHorizontal:SIZES.padding,
            padding:SIZES.padding,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.white,
            ...styles.shadow
            }}>
                <CurrencyLabel icon={selectedCurrency?.image} currency={selectedCurrency?.currency} code={selectedCurrency?.code}/>
                <View style={{
                      marginTop:SIZES.padding,
                      marginBottom:SIZES.padding *1.5,
                      alignItems:'center',
                      justifyContent:'center'
                }}>
                    <Text style={{...FONTS.h2}}>{selectedCurrency?.wallet.crypto} {selectedCurrency?.code}</Text>
                    <Text style={{color:COLORS.gray, ...FONTS.body4}}>${selectedCurrency?.wallet.value}</Text>

                </View>
                <TextButton label={"Trade"}/>

        </View>
    )
}

const renderTransactionHistory =()=>{
    return (
        <TransactionHistory customContainerStyle={{...styles.shadow}} history={selectedCurrency?.transactionHistory}/>
    )
}

    return (
        <SafeAreaView style={{flex:1}}>
            <HeaderBar right={false}/>
            <ScrollView>
                <View style={{flex:1, paddingBottom:SIZES.padding}}>
                    {renderTrade()}
                    {renderTransactionHistory()}

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Transaction;