import React, { useEffect, useState } from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase.js';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  // This is State and
  // input is the name and setinput is the update or what to set
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() =>{
    db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id:doc.id ,message:doc.data()})))
    });
  }, [] )

  useEffect(() => {
    // setUsername(prompt('Please enter your name'));
    let Xusername = "";
    while (Xusername === "") {
      Xusername = prompt('Please enter your name');
    }
    setUsername(Xusername);
      // setUsername = prompt('Please enter your name') ;
  }, [] )

  // 
  const sendMessage = (event) => {
    // prevent refress
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    // all the logic to send a message goes
    //         (wheretostore,takethis)
    // setMessages([...messages, {username: username, message: input}])
    setInput('');
  }

  return (
    <div className="App">
      {/* <h1>Hello Clever Programmers</h1> */}
      <img style={{marginTop: '4vw'}} src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=50&h=50" alt="icon" />
      {/* <h2>Hello {username} </h2> */}
      <h2 style={{ color: 'grey',marginBottom: '5vw'}}>Messanger-Clone</h2>

      






    <FlipMove>
      {messages.map(({id ,message} )=>{
        return (
          <Message key={id} username={username} message = {message} />   
      )})
        }
      </FlipMove>
      

      
      <form className="app__form">
      <FormControl className="app__formControll">
        <InputLabel >Enter a message...</InputLabel>
        <Input className="app__input" placeholder="Enter Message ...." value={input} onChange={event => setInput(event.target.value)} />
        
        {/* <IconButton className="app_iconButton" disabled={!input} variant="contained" color="secondary" type="submit" onClick={sendMessage} >
          <SendIcon />
        </IconButton> */}


        <Button disabled={!input} variant="contained" color="secondary" type="submit" onClick={sendMessage} >Send Message</Button>
      </FormControl>
      </form>

    </div>
  );
}

export default App;
