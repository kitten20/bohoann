import module from './style.module.scss'

import arrowDown from './assets/arrow-down.svg'

function NavBar() {
    return ( 
        <nav>
            <a href="">кольца</a>
            <a href="">серьги</a>
            <a href="" className={module.active}>золото</a>
            <a href="">сертификаты</a>
            <a href="">подвески</a>
            <a href="">обручальные кольца</a>
            <a href="">каффы</a>
            <a href="">браслеты</a>
            <a href="">еще категории</a>
            <a href="">
                <img src={arrowDown} alt="" />
            </a>
        </nav>
     );
}

export default NavBar;