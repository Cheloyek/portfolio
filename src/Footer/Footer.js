import React from "react";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
                <h2 className={style.name}>FirstName Name</h2>
            <div className={style.info}>
                <div className={style.infoBlock}>info</div>
                <div className={style.infoBlock}>info</div>
                <div className={style.infoBlock}>info</div>
                <div className={style.infoBlock}>info</div>
            </div>
            <div className={style.info}>Все права защищены</div>
        </div>
    );
}


export default Footer;
