import { useParams, useNavigate } from 'react-router-dom';
export const  Details = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    return (
      <div>
        <h1>detalhes Nº {id}</h1>

        <button onClick={() => navigate('/details/2')}>detalhe 2</button>
        <button onClick={() => navigate('/details/3')}>detalhe 3</button>
        <button onClick={() => navigate('/details/4')}>detalhe 4</button>
        <button onClick={() => navigate('/details/5')}>detalhe 5</button>
        <button onClick={() => navigate('/')}>home</button>
      </div>
    )
}