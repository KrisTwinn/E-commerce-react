import React, { useEffect } from 'react'

import './cassa.styles.css';
import CassaItem from '../../components/cassa-item/cassa-item.component';
import { useDispatch, useSelector } from 'react-redux';
import { chiudiCarrello, svuotaCarrello } from '../../redux/carrello/carrello.actions';
import { selectProdottiInCarrello, selectTotaleCarrello } from '../../redux/carrello/carrello.selector';
import { Button } from '../../styled-components/button';

const Cassa = () => {

	const dispatch = useDispatch();

	const elementi = useSelector(selectProdottiInCarrello);
	const totale = useSelector(selectTotaleCarrello);

	useEffect(() => {
		dispatch(chiudiCarrello())
	}, [dispatch])
	return(
		<div className = "cassa">CASSA
		<h1>Carrello Utente</h1>
		<div className="cassa-header">
			<div className="header-block">
				<span></span>
			</div>
			<div className="header-block">
				<span>Prodotto</span>
			</div>
			<div className="header-block">
				<span>Descrizione</span>
			</div>
			<div className="header-block">
				<span>Prezzo</span>
			</div>
			<div className="header-block">
				<span>Quantità</span>
			</div>
		</div>
		{
			elementi.lenght > 0 ? elementi.map(prodotto => (
				<CassaItem key = {prodotto.id} {...prodotto}/>
			)): null
		}
		<div className="riepilogo-carrello">
			<div className="svuota">
				<Button data-testid="svuota" onClick={() => dispatch(svuotaCarrello)}>SVUOTA CARRELLO</Button>
			</div>
		</div>
		<div className="total">
				<span>TOTALE: {totale}</span>
			</div>
		</div>
	);
};
export default Cassa;