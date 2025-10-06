import { useNavigate } from "react-router-dom"

import Header_Comp from "../../Components/HEADER"
import Footer_Comp from "../../Components/FOOTER"

import './index.css'

const BOOKS_STORE = [

    {
        ID: 0,
        TITLE: "A QUARTA PAREDE",
        COVER: "/images/pages/livros/icons/a_quarta_parede.png",
        PATH: "/loja/a-quarta-parede"
    },
    {
        ID: 1,
        TITLE: "A DIMENSÃO DO VIDRO",
        COVER: "/images/pages/livros/icons/a_dimensao_do_vidro.png",
        PATH: "/loja/a-dimensao-do-vidro"
    },
    {
        ID: 2,
        TITLE: "CONTRA-PAREDE",
        COVER: "/images/pages/livros/icons/contra_parede.png",
        PATH: "/loja/contra-parede"
    },
    {
        ID: 3,
        TITLE: "A MINHA NOITE ESTRELADA",
        COVER: "/images/pages/livros/icons/a_minha_noite_estrelada.png",
        PATH: "/loja/a-minha-noite-estrelada"
    },
    {
        ID: 4,
        TITLE: "RAINHA VALKYRJA",
        COVER: "/images/pages/livros/icons/rainha_valkyrja.png",
        PATH: "/loja/rainha-valkyrja"
    },

]

export default function Livros({ISMOBILE}) {

    const nav = useNavigate()

    const goBuyIt = (path) => {
        return nav(path)
    }

    return (
        <>
        
            <main className="wrapper d-flex flex-column align-items-center justify-content-start">

                <Header_Comp ISMOBILE={ISMOBILE} />

                { ISMOBILE === false ? (
                    <div className="d-flex flex-column justify-content-center align-items-center board" style={{width: `100%`, height: `1000px`, marginTop: `2vh`, transform: `translateY(-120px)`, position: 'relative'}}>

                        <h1 style={{fontSize: `5rem`, marginTop: `150px`, marginBottom: `-60px`}}> LIVROS </h1>

                        <div className="d-flex justify-content-center align-items-center" style={{transform: `translateY(100px)`}}>
                            {
                                BOOKS_STORE.map((book, index) => (
                                    <div key={index} className="d-flex flex-column justify-content-end align-items-center" style={{width: `325px`, height: `440px`}}>
                                        <img style={{width: `100%`, height: `100%`}} src={book.COVER}/>

                                        <img onClick={() => {goBuyIt(book.PATH)}} id="BTN_COMPRAR" style={{margin: `0 auto`, display: `block`}} src={'/images/pages/livros/comprar.png'}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className="d-flex flex-column justify-content-center align-items-center board-mb" style={{width: `100vw`, height: `auto`, marginTop: `2vh`, transform: `translateY(-230px)`, position: 'relative'}}>

                        <h1 style={{fontSize: `2em`, marginTop: `170px`, marginBottom: `110px`}}> LIVROS </h1>

                        <div
                            className="d-flex justify-content-center align-items-center flex-wrap"
                            style={{
                                transform: `translateY(-20px)`,
                                width: '670px',
                                maxWidth: '100%',
                            }}
                        >
                            {
                                BOOKS_STORE.map((book, index) => (
                                    <div key={index} className="d-flex flex-column justify-content-end align-items-center" style={{width: `170px`, height: `180px`}}>
                                        <img style={{width: `100%`, height: `160px`, objectFit: `contain`}} src={book.COVER}/>

                                        <img onClick={() => {goBuyIt(book.PATH)}} id="BTN_COMPRAR-MB" style={{display: `block`}} src={'/images/pages/livros/comprar.png'}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) }

                <div id="__DIVIDER" style={{backgroundImage: `url(/images/divider.png)`, backgroundSize: `contain`, width: `100vw`, height: ISMOBILE ? (`80px`) : (`120px`), marginBottom: ISMOBILE ? (`-190px`) : (`12vh`), transform: ISMOBILE ? (`translateY(280px)`) : (`translateY(-80px)`)}}></div>

                <Footer_Comp ISMOBILE={ISMOBILE} />
                

            </main>

        </>
    )
}