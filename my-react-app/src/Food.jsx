function Food(){
    const food1 = 'Laranja';
    const food2 = 'Banana';

    return(
        <ul>
            <li>Maçã</li>
            <li>{food1.toLowerCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );

}

export default Food