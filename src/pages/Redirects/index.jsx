import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function Redirect_to_Page() {
    const { id } = useParams();

    const getList = [
        {id: 'a-quarta-parede', path: 'https://loja.uiclap.com/titulo/ua69355/'},
        {id: 'a-dimensao-do-vidro', path: 'https://loja.uiclap.com/titulo/ua69334/'},
        {id: 'a-dimensao-do-vidro-pb', path: 'https://loja.uiclap.com/titulo/ua69495/'},
        {id: 'contra-parede', path: 'https://loja.uiclap.com/titulo/ua77025/'},
        {id: 'a-minha-noite-estrelada', path: 'https://loja.uiclap.com/titulo/ua80490/'},
        {id: 'rainha-valkyrja', path: 'https://loja.uiclap.com/titulo/ua104623/'},
    ]

    useEffect(() => {
        const found = getList.find(item => item.id === id);
        
        if (found) {
            window.location.href = found.path;
        } else {
            window.location.href = '/error-404';
        }
    }, [])
}