import { useNavigate } from 'react-router-dom'
import './index.css'

export default function Header_Comp({ISMOBILE}) {

    const nav = useNavigate()

    const openURL = (url) => {
        return nav(url);
    }

    return (
        <>
        
            { (ISMOBILE === false) ? (
                <div
                    className="d-flex flex-column w-100"
                    style={{transform: 'translateY(-150px)', width: '100vw'}}>

                    <div className="d-flex flex-row align-items-end justify-content-center gap-5" style={{width: '100%'}}>
                        <img
                            onClick={() => {openURL('/bio')}}
                            id="NAVIGATE_BTN"

                            style={{
                                objectFit: 'contain',
                                width: `8vw`,
                                maxWidth: '100%',
                                minWidth: '150px',
                                height: `auto`,
                                display: 'block',
                            }}
                            src={'/images/buttons/bio.png'}
                            alt="Biografia"
                        />
                        <img
                            onClick={() => {openURL('/')}}
                            id="NAVIGATE_BTN-HEADER"

                            style={{
                                objectFit: 'contain',
                                width: '16vw',
                                maxWidth: '100%',
                                minWidth: '250px',
                                height: `auto`,
                                display: 'block',
                            }}
                            src={'/images/other/header.png'}
                            alt="Header"
                        />
                        <img
                            onClick={() => {openURL('/estante')}}
                            id="NAVIGATE_BTN"

                            style={{
                                objectFit: 'contain',
                                width: `8vw`,
                                maxWidth: '100%',
                                minWidth: '150px',
                                height: `auto`,
                                display: 'block',
                            }}
                            src={'/images/buttons/livros.png'}
                            alt="Livros"
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="d-flex flex-column w-100"
                    style={{transform: 'translateY(-150px)', width: '100vw'}}>

                    <img
                        onClick={() => {openURL('/')}}  
                        id="NAVIGATE_BTN-HEADER"

                        style={{
                            objectFit: 'contain',
                            width: '16vw',
                            maxWidth: '100%',
                            minWidth: '250px',
                            height: `auto`,
                            display: 'block',
                            margin: `0 auto`,
                        }}
                        src={'/images/other/header.png'}
                        alt="Header"
                    />

                    <div className="d-flex flex-row align-items-end justify-content-center gap-2" style={{width: '100%'}}>
                        <img
                            onClick={() => {openURL('/bio')}}
                            id="NAVIGATE_BTN"

                            style={{
                                objectFit: 'contain',
                                width: `8vw`,
                                maxWidth: '100%',
                                minWidth: '150px',
                                height: `auto`,
                                display: 'block',
                            }}
                            src={'/images/buttons/bio.png'}
                            alt="Biografia"
                        />
                        
                        <img
                            onClick={() => {openURL('/estante')}}
                            id="NAVIGATE_BTN"

                            style={{
                                objectFit: 'contain',
                                width: `8vw`,
                                maxWidth: '100%',
                                minWidth: '150px',
                                height: `auto`,
                                display: 'block',
                            }}
                            src={'/images/buttons/livros.png'}
                            alt="Livros"
                        />
                    </div>
                </div>
            )}
        
        </>
    )
}