import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = (props) => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contacts} action="">
                    <input className={style.contact} type="text" placeholder={'Name'}/>
                    <input className={style.contact} type="number" placeholder={'Phone number'}/>
                    <input className={style.contact} type="text" placeholder={'E-mail'}/>
                    <textarea className={style.contact} name="" id="" cols="30" rows="10" placeholder={'Text'}></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}


export default Contacts;
