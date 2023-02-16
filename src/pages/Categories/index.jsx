import MainCard from '../../components/MainCard'

import module from './style.module.scss'

import banner from '../MainPage/assets/background.svg'

function Categories() {
    return ( 
        <>
            <img src={banner} alt="" className={module.banner}/>

            <MainCard headText='категории'>
                
            </MainCard>
        </>
     );
}

export default Categories;