import React from 'react'
import ReactDOM from 'react-dom/client'
//componentes
import { Nav } from './componentes/navbar'
import { ProyectoUno } from './componentes/proyecto1'
import { ProyectoDos } from './componentes/proyecto2'
import {Yo} from './componentes/biografia'
import {Footer} from './componentes/footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Yo />
    <ProyectoUno />
    <ProyectoDos />
    <Footer />
  </React.StrictMode>,
)
