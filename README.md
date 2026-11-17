# Sistema Académico — Clase 11, Unidad 3.1

**Asignatura:** Buenas Prácticas de Desarrollo de Software — CUC
**Tema:** Componentes, props y estado (React + Vite)

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abrir **http://localhost:5173** en el navegador (nunca `index.html` con doble clic).

## Qué demuestra el ejercicio

| Concepto | Dónde está en `src/App.jsx` |
|---|---|
| Componente reutilizable con `children` y props | `Boton` (`alHacerClic`, `variante`, `cargando`) |
| Regla de negocio fuera de los componentes | `estaAprobado(nota)` → `nota >= 3.0` (el 3.0 aprueba) |
| Componente que recibe datos por props | `FilaEstudiante({ estudiante })` |
| Estado con `useState` | `estudiantes`, `nombre`, `nota` en `App` |
| Renderizado de lista con `key` estable | `estudiantes.map(... key={e.id})` |
| Campo controlado + alta sin tocar el DOM | `value`/`onChange` y `setEstudiantes([...estudiantes, nuevo])` |

## Prueba rápida

Escribir un nombre y una nota (0 a 5), oprimir **Agregar estudiante**:
la fila nueva aparece en la tabla y la consola (F12) no muestra advertencias de `key`.

## Ramas

- `main` — estado base del proyecto
- `dev` — rama de integración (los PRs llegan aquí)
- `feature/app-estudiantes` — rama de trabajo de esta entrega
