import React from 'react';
import styled from 'styled-components/native';
import Length from './components/Length';
import CoinInfo from './CoinInfo';
import { useFetch } from './hooks/useFetch';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    `;

const LoadingText=styled.Text`
font-size: 30px;
color:#ff6600;
`;

const App=()=> {
    const URL="https://api.coinlore.net/api/tickers/?limit=3"
    const {data,error,inProgress}=useFetch(URL);
    console.log(data);
    return (
        <Container>
            {inProgress&&<LoadingText>Loading...</LoadingText>} //inprogress가 true일 경우에만 실행
            {data?.data.map(({symbol,name,price_usd})=>(
                <CoinInfo key={symbol} symbol={symbol} name={name} price={price_usd} />
            ))}
            
        </Container>
    
    );
};

export default App;