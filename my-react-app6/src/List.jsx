import PropTypes from 'prop-types';

function List(props){
    // const frutas = [{id:1, name:'Banana', calorias:105}, {id:2, name:'Maçã', calorias:65}, {id:3, name:'Laranja', calorias:45}, {id:4, name:'Coco', calorias: 159}, {id:5, name:'Abacaxi',calorias:37}];

    // frutas.sort((a, b) => a.name.localeCompare(b.name)); Ordem Alfabética

    // frutas.sort((a, b) => b.name.localeCompare(a.name)); //Ordem Alfabética Reversa

    // frutas.sort((a, b) => a.calorias - b.calorias)//Ordem Numérica.

    //   frutas.sort((a, b) => b.calorias - a.calorias)//Ordem Numérica Reversa.

    // const lowCalFruits = frutas.filter(fruta => fruta.calorias < 100);//Filtrando os itens menos calóricos
    // const highCalFruits = frutas.filter(fruta => fruta.calorias >= 100);//Filtrando os itens mais calóricos
    const category = props.category;
    const ListaItems = props.items;

    const listarItens = ListaItems.map(item => <li key={item.name}>{item.name}: &nbsp; <b>{item.calorias}</b></li>)

    return (<>
    <h3 className="list-category">{category}</h3> 
    <ul className="list-items">{listarItens}</ul>
    </>);

}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
            name: PropTypes.string,
            calorias: PropTypes.number
     }))
}
List.defaultProps = {
    category : "Category",
    items : []
};
export default List;