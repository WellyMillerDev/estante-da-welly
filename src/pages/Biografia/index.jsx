import { Link } from "react-router-dom"

import Header_Comp from "../../Components/HEADER"
import Footer_Comp from "../../Components/FOOTER"

import './index.css'

export default function Biografia({ISMOBILE}) {
    return (
        <>
        
            <main className="wrapper">

                <Header_Comp ISMOBILE={ISMOBILE} />

                <div className="bio_div d-flex flex-column" style={{marginTop: ISMOBILE && `-30px`}}>

                    <img src="/images/pages/bio/bio.png" style={{width: `100%`, height: `100%`, minWidth: `370px`, objectFit: `contain`}}/>

                    <div className="d-flex justify-content-center" style={{margin: `0 auto`, width: `100%`, height: `10vh`, transform: ISMOBILE && `translateY(-60px)`}}>
                        <img style={{width: `80px`, height: `100px`, transform: ISMOBILE && `translateY(30px)`}} src="/images/cloovermiller/lil_clover.gif"/>
                        <p className="mt-5" style={{color: `rgb(189, 255, 224)`}}>- Psst, eu sou Cloover Miller, eu que programei este site, se quiser conferir minhas coisas vai por aqui: <Link className="text-decoration-none" to="https://clooverlandstudios.com"><span style={{color: `gold`, textDecoration: `underline`}}>clooverlandstudios.com</span></Link></p>
                    </div>

                </div>

                <div id="__DIVIDER" style={{backgroundImage: `url(/images/divider.png)`, backgroundSize: `contain`, width: `100vw`, height: `120px`, marginBottom: `12vh`}}></div>
                
                <Footer_Comp ISMOBILE={ISMOBILE} />

            </main>

        </>
    )
}