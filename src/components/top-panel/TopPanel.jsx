import React from 'react';
import style from './TopPanel.module.scss';

const TopPanel = () => {
    return (
        <div className={style.topPanel}>
            <div className={style.topPanel__container}>
                <div className={style.topPanel__content}>
                    <div className={style.topPanel__contacts}>
                        <a href="tel:+919560133711" className={style.topPanel__link}>
                            <span className={style.icon}>📞</span>
                            +91-9560133711
                        </a>
                        <span className={style.topPanel__divider}>|</span>
                        <a href="tel:+18557630320" className={style.topPanel__link}>
                            <span className={style.icon}>📞</span>
                            +1-855-763-0320
                        </a>
                        <span className={style.topPanel__divider}>|</span>
                        <a href="mailto:contactus@ezrankings.com" className={style.topPanel__link}>
                            <span className={style.icon}>✉️</span>
                            contactus@ezrankings.com
                        </a>
                        <span className={style.topPanel__divider}>|</span>
                        <a
                            href="https://wa.me/919560133711"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.topPanel__link + ' ' + style.topPanel__link__whatsapp}
                        >
                            <img src="./whatsapp.svg" className={style.whatsappIcon} alt="" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPanel;