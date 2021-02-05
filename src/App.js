

import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import { useEffect } from 'react';

function App() {

  useEffect(() =>{
    const pusher = new Pusher('0c1f78eda580dce2fe29', {
      cluster: 'us2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });//once
  }, [])
  return (
    <div className="app">
      <div className="app_body">
           {/* Sidebar Component*/}
           <Sidebar />
        {/*Chat Component*/}
        <Chat />


      </div>
     

    </div>
  );
}

export default App;
