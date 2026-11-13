export const Form = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4 text-center">
                Resgistro productos
            </h2>
            <div className="mt-6 bg-gray-200 p-5 rounded mx-auto mb-4 w-1/2 border">
                <input 
                className="p-2 border rounded bg-white w-full"
                type="text"
                name="nombre_producto"
                id="nombre"
                placeholder="Digite el nombre del producto"/>
                  <input 
                className="p-2 border rounded bg-white w-full"
                type="text"
                name="nombre_producto"
                id="nombre"
                placeholder="Digite el precio del producto"/>
                <button
                className="bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-900 cursos-pointer"
                >Enviar</button>
            </div>
        </div>
    )
}