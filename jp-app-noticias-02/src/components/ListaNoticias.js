import React from 'react';
import {Noticia} from './Noticia';
import PropTypes from 'prop-types';

export const ListaNoticias = ({noticias}) => (
    <div className="row">
        {noticias.map(noticia => (
            <Noticia
              key={noticia.url}
              noticia={noticia}
            />
        ))}
    </div>
)

ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}