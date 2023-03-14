import React from 'react';
import  './layout.css';

function ChatWindow() {



    return (

      <div>
        
      <div class="container clearfix">
    
      <div class="chat">
        <div class="chat-header clearfix">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" alt="avatar" />
          
          <div class="chat-about">
            <div class="chat-with">Tracy</div>
          </div>
          <i class="fa fa-star"></i>
        </div> 
        

        <div class="chat-history">
          <ul>
            <li class="clearfix">
              <div class="message-data align-right">
                <span class="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                <span class="message-data-name" >Tracy</span> <i class="fa fa-circle me"></i>
                
              </div>
              <div class="message other-message float-right">
                Good Morning Erica, How may I help you?
              </div>
            </li>
            
            <li>
              <div class="message-data">
                <span class="message-data-name"><i class="fa fa-circle online"></i>Erica</span>
                <span class="message-data-time">10:12 AM, Today</span>
              </div>
              <div class="message my-message">
                Good Morning! I am looking for a new hair cut that suits me. Do you have any suggestions?
              </div>
            </li>
            
            <li class="clearfix">
              <div class="message-data align-right">
                <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;
                <span class="message-data-name" >Tracy</span> <i class="fa fa-circle me"></i>
                
              </div>
              <div class="message other-message float-right">
                Do you have a certain look in your mind?
              </div>
            </li>
            
            <li>
              <div class="message-data">
                <span class="message-data-name"><i class="fa fa-circle online"></i> Erica</span>
                <span class="message-data-time">10:20 AM, Today</span>
              </div>
              <div class="message my-message">
                Yes. I prefer laser cut. The present muchroom cut does not allow me to make a french plait or french roll. And I want a hightlighting dye also.
              </div>
            </li>
            
            {/* <li>
              <div class="message-data">
                <span class="message-data-name"><i class="fa fa-circle online"></i> Tracy</span>
                <span class="message-data-time">10:31 AM, Today</span>
              </div>
             
              <i class="fa fa-circle online"></i>
            <span className=" online" style={{"color" : "#AED2A6"}}></span>
            <span className=" online" style={{"color" : "#DAE9DA"}}></span>
            </li> */}
            
          </ul>
          
        </div> 
        
        <div class="chat-message clearfix">
          <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                  
          
          <button>Send</button>
  
        </div>
        
      </div> 
      
    </div>
  


  </div>

    );

}

export default ChatWindow;