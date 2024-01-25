import React from 'react'

import './panel-carrello.styles.css';
import { useNavigate } from 'react-router-dom';
import PanelCarrelloItem from '../panel-carrello-item/panel-carrello-item.component';
import { Button } from '../../styled-components/button';
import { useSelector } from 'react-redux';
import { selectProdottiInCarrello } from '../../redux/carrello/carrello.selector';

const PanelCarrello = () => {

	const navigate = useNavigate();
	const elementi = useSelector(selectProdottiInCarrello)
	return(
		<div className = "panel-carrello">
			<div className="cart-items">
					{
						elementi.lenght > 0 ?
							elementi.map(articolo => (
								<PanelCarrelloItem key={articolo.id} {...articolo}/>
							))
							:(<span className="empty-message">Carrello vuoto</span>)
					}
				</div>
				<Button onClick = {() =>navigate('/checkout')}>CASSA</Button>
		</div>
	);
};
export default PanelCarrello;