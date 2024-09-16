import React from 'react'
import {
   PrettyChatWindow,
} from 'react-chat-engine-pretty';
  
const ChatsPage = (props) => {


  return (
      <div style={{ height: '100vh' }}>
          <PrettyChatWindow
              projectId='b7c1883a-f98a-48c1-8ec3-2a52a2489f9a'
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: '100%' }}
          
          
          />
          </div>
  )
}

export default ChatsPage