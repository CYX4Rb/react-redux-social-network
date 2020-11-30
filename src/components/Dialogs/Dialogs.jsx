import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let newPostMessage = React.createRef()

    let addMessageClick = () => {
        props.addMessageCreator()
    }

    let onMessageChange = () => {
        let element = newPostMessage.current.value
        props.updateNewMessageCreator(element)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {props.dialogPage.dialog.map(d => <DialogItem name={d.name} id={d.id} />)}
            </div>
            <div className={s.back}>
                <div className={s.messages}>
                    {props.dialogPage.message.map(m => <Message message={m.message} />)}
                    <div className={s.newMessage} >
                        <textarea
                            onChange={onMessageChange}
                            ref={newPostMessage}
                            value={props.dialogPage.newTextMessage}
                            placeholder = 'enter your message'>
                        </textarea>
                        <button onClick={addMessageClick}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs