import {Routes, Route} from 'react-router-dom';
import AnteprimaArticoli from '../../components/anteprima-articoli/anteprima-articoli.component';
import ArticoliCategoria from '../articoli-categoria/articoli-categoria.component';
import WithLoading from '../../components/with-loading/WithLoading.component';
import { useSelector } from 'react-redux';

import './articoli.styles.css';
import { selectIsLoading } from '../../redux/articoli/articoli.selector';

const AnteprimaArticoliWithLoading = WithLoading(AnteprimaArticoli);
const ArticoliCategoriaWithLoading = WithLoading(ArticoliCategoria);

const Articoli = () => {
	
	const loading = useSelector(selectIsLoading);


	/*useEffect(() => {
		const prodotti = getProdotti();

		prodotti.then((dati) => {
			dispatch(getArticoli(dati));
			setLoading(false);
		})
	}, [dispatch]);*/

	return(
		<div className = "articoli">
			<Routes>
				<Route path='' element={<AnteprimaArticoliWithLoading loading = {loading}/>}/>
				<Route path=':category' element={<ArticoliCategoriaWithLoading loading = {loading}/>}/>
			</Routes>
		</div>
	);
};
export default Articoli;