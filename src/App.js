import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

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
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;
function App() {
  //
  const [quote, setQuote] = useState({});
  // USUAL FETCH
  // const requestAPI = () => {
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const phrase = api.then((response) => response.json());
  //   phrase.then((result) => console.log(result));
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
    const phrase = await api.json();
    setQuote(phrase[0]);
  };

  // load a quote for the first time
  useEffect(() => {
    requestAPI();
  }, []);

  return (
    <Wrapper>
      <Quote quote={quote} />
      <Button onClick={requestAPI}>Get quote</Button>
    </Wrapper>
  );
}

export default App;
