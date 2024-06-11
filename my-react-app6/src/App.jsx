import List from "./List";

function App() {
  const frutas = [
    { id: 1, name: 'Banana', calorias: 105 },
    { id: 2, name: 'Maçã', calorias: 65 },
    { id: 3, name: 'Laranja', calorias: 45 },
    { id: 4, name: 'Coco', calorias: 159 },
    { id: 5, name: 'Abacaxi', calorias: 37 }
  ];

  const vegetais = [
    { id: 6, name: 'Batata', calorias: '110' },
    { id: 7, name: 'Aipo', calorias: 15 },
    { id: 8, name: 'Cenouras', calorias: 15 },
    { id: 9, name: 'Milho', calorias: 63 },
    { id: 10, name: 'Brócolis', calorias: 50 }
  ];

  return (
    <>
      {frutas.length > 0 && <List items={frutas} category="frutas" />}
      {vegetais.length > 0 && <List items={vegetais} category="vegetais" />}
    </>
  );
}

export default App;