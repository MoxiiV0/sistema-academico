import { useState } from 'react'

function estaAprobado(nota) {
  return nota >= 3.0
}

function Boton({ children, alHacerClic, variante = 'primario', cargando = false }) {
  return (
    <button
      className={`boton boton--${variante}`}
      onClick={alHacerClic}
      disabled={cargando}
    >
      {cargando ? 'Procesando...' : children}
    </button>
  )
}

function FilaEstudiante({ estudiante }) {
  return (
    <tr>
      <td>{estudiante.nombre}</td>
      <td>{estudiante.nota}</td>
      <td>{estaAprobado(estudiante.nota) ? 'Aprobado' : 'Reprobado'}</td>
    </tr>
  )
}

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 },
    { id: 2, nombre: 'Luis', nota: 2.8 },
    { id: 3, nombre: 'Marta', nota: 3.0 },
  ])
  const [nombre, setNombre] = useState('')
  const [nota, setNota] = useState('')

  function agregar() {
    const valor = parseFloat(nota)
    if (!nombre.trim() || Number.isNaN(valor) || valor < 0 || valor > 5) return
    setEstudiantes([
      ...estudiantes,
      { id: Date.now(), nombre: nombre.trim(), nota: valor },
    ])
    setNombre('')
    setNota('')
  }

  return (
    <div>
      <h1>Sistema académico</h1>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input type="number" step="0.1" min="0" max="5" value={nota}
        onChange={(e) => setNota(e.target.value)} placeholder="Nota (0 a 5)" />
      <Boton alHacerClic={agregar}>Agregar estudiante</Boton>
      <table>
        <thead>
          <tr><th>Nombre</th><th>Nota</th><th>Estado</th></tr>
        </thead>
        <tbody>
          {estudiantes.map((e) => (
            <FilaEstudiante key={e.id} estudiante={e} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
