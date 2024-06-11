import propTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Nome: {props.name}</p>
            <p>Idade: {props.age}</p>
            <p>Estudante: {props.isStudent ? 'Estuda': 'Não Estuda'}</p>
        </div>
    );
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    Student: propTypes.bool,
}

Student.defaultProps = {
    name: 'Convidado',
    age: 18,
    isStudent: true,

}

export default Student