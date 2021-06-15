import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;
function App() {
  // USUAL FETCH
  // const requestAPI = () => {
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const quote = api.then((response) => response.json());
  //   quote.then((result) => console.log(result));
  // };

  // ASYNC/AWAIT FETCH
  // with async/await we stop code execution until we receive data,
  // we fulfill the promise and .then() are not necessary now,
  // so our code is cleaner and smarter
  const requestAPI = async () => {
    const api = await fetch(
      'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    );
    // promise
    const quote = await api.json();
    console.log(quote[0]);
  };

  return (
    <Wrapper>
      <Button onClick={requestAPI}>Get phrase</Button>
    </Wrapper>
  );
}

export default App;
