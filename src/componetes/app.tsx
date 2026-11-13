import Boton from '../boton';

function App() {
  return (
    <div className="min-h-screen p-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="flex flex-wrap gap-4">
        <Boton variante="primario" onClick={() => alert('Guardado correctamente')}>
          Guardar Cambios
        </Boton>

        <Boton variante="secundario" onClick={() => alert('Operación cancelada')}>
          Cancelar
        </Boton>

        <Boton variante="peligro" onClick={() => alert('Registro eliminado')}>
          Eliminar Usuario
        </Boton>

        {/* Variante 'exito' del reto */}
        <Boton variante="exito" onClick={() => alert('Proceso completado')}>
          Completado
        </Boton>

        {/* Botón deshabilitado del reto */}
        <Boton variante="primario" disabled={true} onClick={() => alert('No debería salir')}>
          Deshabilitado
        </Boton>
      </div>
    </div>
  );
}

export default App;