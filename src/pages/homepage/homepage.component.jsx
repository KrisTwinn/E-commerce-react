import React from 'react'
import './homepage.styles.css';
import Categoria from '../../components/categoria/categoria.component';
import { useSelector } from 'react-redux';
import { selectProdotti } from '../../redux/articoli/articoli.selector';

const Homepage = () => {
	
	const categoria = useSelector(selectProdotti);

	return(
		<div className = "homepage">
		{
			categoria.map((cat) => (
				<Categoria key={cat.id} {...cat}/>
			))
		}
	</div>
	);
};
export default Homepage;