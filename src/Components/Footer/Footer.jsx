import React from 'react'
import Steamicon from '../../Assets/img/steamicon'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-items'>
                    <div className='footer-imgs'>
                        <img
                            src='./img/valve-footer.png'
                            alt=''
                            className='footer-img'
                        />
                        <img
                            src='./img/steam-footer.png'
                            alt=''
                            className='footer-img'
                        />
                    </div>
                    <div className='footer-title'>
                        <p className='footer-title'>
                            © 2022 Valve Corporation. Все права защищены. Все
                            торговые марки являются собственностью
                            соответствующих владельцев в США и других странах.{' '}
                            <br />
                            НДС включён во все цены, где он применим. Политика
                            конфиденциальности | Правовая информация |
                            Соглашение подписчика Steam | Возвраты | Файлы
                            cookie
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
