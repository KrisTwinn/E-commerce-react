import React from 'react'

import './anteprima-articoli.styles.css';
import Articolo from '../articolo/articolo.component';
import { useSelector } from 'react-redux';
import { selectProdotti } from '../../redux/articoli/articoli.selector';

const AnteprimaArticoli = () => {

	const prodotti = useSelector(selectProdotti);
	return(
		<div className = "anteprima-articoli">
			{
			prodotti.map((val) => {
				return(
				<div className="articoli-preview">
					<h2 className='articoli-categoria'>{val.title}</h2>
						<div className="lista-articoli">
							{
								val.items.filter((valore, indice) => indice < 5).map(articolo => {
									return(
										<Articolo key={articolo.id} {...articolo} />
								)
								})
							}
						</div>
				</div>
				)
			})
		}
			
	</div>

	);
};
export default AnteprimaArticoli;