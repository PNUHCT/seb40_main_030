import styled from 'styled-components';

const PayLayout = styled.div`
display: flex;
justify-content: space-between;
margin-left: 30px;
margin-right: 30px;
height: 150px;
`
const LeftPayLayout = styled.div`
width: 150px;
`
const PaymentItem = styled.div`
font-size: 20px;
margin-top: 30px;
`

const RightPayLayout = styled.div`
width: 150px;
text-align: right;
`
const PayMoney = styled.div`
font-size: 20px;
margin-top: 30px;
font-weight: bold;
`

const ItemDeposit = styled.div`
margin-top: 30px;
`
const TotalPayLayout = styled.div`
display: flex;
justify-content: space-between;
padding: 50px 30px 50px 30px;
border-top: 1px solid gray;
`
const TotalPayLeftLayout = styled.div`
font-size: 20px;
padding-top: 10px;
font-size: 25px;
font-weight: bold;
color: ${({ theme }) => theme.COLOR_FONT};

`
const TotalPayRightLayout = styled.div`
font-size: 20px;
padding-left: 10px;
padding-top: 10px;
font-size: 25px;
font-weight: bold;
color: red;
`
const PayButton = styled.button`
font-size: 30px;
font-weight: bold;
background-color: ${({ theme }) => theme.COLOR_MAIN};
color: white;
width: 300px;
height: 70px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
margin: auto;
cursor: pointer;
`
export { PayLayout, LeftPayLayout, RightPayLayout, PaymentItem, ItemDeposit, TotalPayLeftLayout, TotalPayRightLayout, PayButton, PayMoney, TotalPayLayout };