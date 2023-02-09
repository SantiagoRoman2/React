export default function Button ({accion}) {
    return (
        <button onClick={() => { 
            accion();
        }} 
        >
          Enviar
        </button>
    );
}