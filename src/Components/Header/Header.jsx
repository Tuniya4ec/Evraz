import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.scss'

export const Header = () => {
    return (
            <div className={s.wrapper}>
                <div className={s.header}>
                    <img src="https://cdn.worldvectorlogo.com/logos/evraz-1.svg" alt='картинка не отображается'/>
                    <div className={s.text_wrapper}>
                        <p className={s.about__text}>Прогнозная аналитика эксгаустера</p>
                    </div>
                    <div className={s.menu}>
                        <button className={s.button_1}>Справочник</button>
                        <button className={s.button_2}></button>
                    </div>
                </div>
            </div>

    )
}
