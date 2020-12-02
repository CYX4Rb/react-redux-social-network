import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'


const Dialogs = (props) => {

    const onSubmit = (formData) => { 
        props.addMessageCreator(formData.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {props.dialogPage.dialog.map(d => <DialogItem name={d.name} id={d.id} />)}
            </div>
            <div className={s.back}>
                <div className={s.messages}>
                    {props.dialogPage.message.map(m => <Message message={m.message} key = {m.id}/>)}
                </div>
                <NewMessageReduxForm onSubmit = {onSubmit}/>
            </div>
        </div>
    )
}


const NewMessageForm = (props) => {
    return (
        <form className={s.newMessage} onSubmit = {props.handleSubmit} >
            <div><Field
                name ='newMessage'
                component = 'textarea' 
                placeholder= 'enter your message'
               /*  validate ={[required]} */></Field></div>
            <button >Send</button>
        </form>
    )
}


const NewMessageReduxForm = reduxForm({form: "newMessage"})(NewMessageForm)

export default Dialogs