import React from 'react'

import './articolo.styles.css';
import { useDispatch } from 'react-redux';
import { addProdotto } from '../../redux/carrello/carrello.actions';

const Articolo = (articolo) => {

	const {imageUrl, id} = articolo;
	const dispatch = useDispatch();

	return(
		<div className = "articolo" data-testid={`prodotto-${id}`} style = {{backgroundImage: `url(${imageUrl})`}}>
			<div className="add-to-cart">
				<button type = "button" data-testid={`pulsante-${id}`} onClick={() => dispatch(addProdotto(articolo))}>AGGIUNGI AL CARRELLO</button>
			</div>
		</div>
	);
};
export default Articolo;