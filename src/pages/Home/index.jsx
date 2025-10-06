import Header_Comp from "../../Components/HEADER"
import Footer_Comp from "../../Components/FOOTER"
import { isStyledComponent } from "styled-components"

export default function Home({ISMOBILE}) {

    return (
        <>
        
            <Header_Comp ISMOBILE={ISMOBILE} />

            <div className="d-flex justify-content-center" style={{width: '800px', height: 'auto', margin: '0 auto'}}>

                <img style={{display: ISMOBILE && `none`, transform: 'scale(0.6) translate(150px, -200px) rotate(25deg)', width: `100%`, height: 'auto'}} src={'/images/pages/home/nav1.png'}/>
                <img style={{width: `100%`, height: 'auto', transform: ISMOBILE && `translateY(-70px) scale(1.40)`}} src={'/images/pages/home/bem-vindo.png'}/>
                <img style={{display: ISMOBILE && `none`, transform: 'scale(0.6) translate(-150px, -200px) rotate(-25deg)', width: `100%`, height: 'auto'}} src={'/images/pages/home/nav2.png'}/>

            </div>

            <div id="__DIVIDER" style={{backgroundImage: `url(/images/divider.png)`, backgroundSize: `contain`, width: `100vw`, height: `120px`, marginBottom: `12vh`, transform: `translateY(20px)`}}></div>

            <Footer_Comp ISMOBILE={ISMOBILE} />

        </>
    )
}