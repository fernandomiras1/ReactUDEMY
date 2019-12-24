import MasterPage from '../components/MasterPage';
// COMPONENTES
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
// llamando al fetch mediante ssr
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
     <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Precio
                    precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-12">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <Noticias
                    noticias={props.noticias}
                />   
            </div>
        </div>
     </MasterPage>
);

// getInitialProps; es como el ComponentDidMunt pero con SSR. Aca de donde se hace el llamado a las API
// a los valores lo guarda como props. Para acceder a los props se tiene q especificar en el Index = (props), para poder acceder a las prosp
Index.getInitialProps = async () => {
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6c1c1dfcb4a943c7bf481bc628b80153&language=es');

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD, 
        noticias : resNoticias.articles
    }
}

export default Index;