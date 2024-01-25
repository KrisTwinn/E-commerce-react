import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProdottiCategoria } from '../../redux/articoli/articoli.selector';
import './articoli-categoria.styles.css';
import Articolo from '../../components/articolo/articolo.component';

const ArticoliCategoria = () => {
	const {category} = useParams();

	const {items} = useSelector(selectProdottiCategoria(category))

	return(
		<div className = "articoli-categoria">
			<h2 className='articoli-categoria'>{category}</h2>
			<div className='lista-articoli'>
				{
					items.map(articolo => (
						<Articolo key = {articolo.id} {...articolo}/>
					))
				}
			</div>
			
		</div>
	);
};
export default ArticoliCategoria;