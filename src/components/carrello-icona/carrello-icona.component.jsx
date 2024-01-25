import React from 'react'
import ShoppingImgIcon from '../../assets/img/shopping-bag.png';
import './carrello-icona. styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCarrello } from '../../redux/carrello/carrello.actions';
import { selectContoProdotti } from '../../redux/carrello/carrello.selector';
const CarrelloIcona = () => {

	const dispatch = useDispatch();
	const numProdotti = useSelector(selectContoProdotti)
	return(
		<div className='il-carrello' onClick={() => dispatch(toggleCarrello())}>
					<img src = {ShoppingImgIcon} className='icona-carrello' alt = 'carrello'/>
					<span className='Item-count' data-testid="item-count">{numProdotti}</span>
				</div>
	);
};
export default CarrelloIcona;