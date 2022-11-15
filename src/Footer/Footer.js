import React from "react";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
                <h2 className={style.name}>FirstName Name</h2>
            <div className={style.info}>info</div>
            <div className={style.info}>year</div>
        </div>
    );
}


export default Footer;
