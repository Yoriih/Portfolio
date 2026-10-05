import useState from 'react';

function App() {
  const [tela, setTela] = useState("menu")
  return (
    <main>
      
      {tela === "menu" &&(
        <>
        <h1>Portfólio</h1>
        <button onClick={() => setTela("sobre")}>Sobre</button>
        <button onClick={() => setTela("projetos")}>Projetos</button>
        <button onClick={() => setTela("redes")}>Redes Sociais</button>
        <button onClick={() => setTela("skills")}>Skills</button>
        </>
      )}

    </main>
  );
}