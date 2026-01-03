import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./index.css"

export default function ErrorPage() {
    return (
        <>
        
            <main className="wrapper d-flex flex-column justify-content-center">

                <Container className="w-100 d-flex flex-column justify-content-center">
                    <p className="text-center fs-1" style={{marginBottom: `-5px`, color: `red`}}>Erro 404</p>
                    <Link className="text-decoration-none" to="/"><p className="text-center return-to-home-text">Retornar à página inicial</p></Link>
                </Container>

            </main>

        </>
    )
}