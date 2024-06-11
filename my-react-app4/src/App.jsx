import Student from "./Student"
function App() {
  return(
    <>
      <Student name = "Darth Vader" age = {46} isStudent = {false}></Student> {/* Se for usar valores numéricos tem que colocar chaves, se for usar valores booleanos, bom usar operador ternário para exibir na tela o resultado.*/}
    <Student name = 'Obi Wan' age = {50} isStudent = {false}></Student>
    <Student name = 'Ahsoka Tano' age = {32} isStudent = {true}></Student>
    <Student></Student>
    </>
    
  );

}



export default App
