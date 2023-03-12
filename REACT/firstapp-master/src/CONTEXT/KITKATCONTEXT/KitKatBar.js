import React from 'react'
import {KitKatBarConsumer} from './KitKatBarContext'
import MessageBox2 from './MessageBox2'

 const KitKatBarGrandFather =()=><KitKatBarParent/>
 const KitKatBarParent = ()=><KitKatBar/>

 const KitKatBar = () => {
    return (
      <KitKatBarConsumer>
        {({
          isOpen,
          message,
          btnClickHandler,
          btnHideClickHandler,
          btnAutoCloseHandler,
        }) => {
          return (
            <>
              <div style={{paddingBottom:'15px'}}>
                <button onClick={btnClickHandler} id="A">
                  BUTTON A
                </button>
                <button onClick={btnClickHandler} id="B">
                  BUTTON B
                </button>
              </div>
              <MessageBox2
                open={isOpen}
                message={message}
                btnHideClickHandler={btnHideClickHandler}
              />
            </>
          );
        }}
      </KitKatBarConsumer>
    );
  }

  export { KitKatBar,KitKatBarGrandFather,KitKatBarParent}