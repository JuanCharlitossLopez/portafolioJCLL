import React from 'react'
import Imagen from '../assets/ia.jpg'


export const ProyectoDos = () => {
  return (
    <>
      <div className='contenedor_img' >
        <div className='cont_img'>
          <img className='img' src={Imagen} alt='Proyecto 1' height={500} />
        </div>
        <div className="descripcion">
          <h1>IA Proyects</h1>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          <p>Link <a href='https://github.com/JuanCharlitossLopez/IA-Proyects' target='_blank'>Git Hud</a></p>
        </div>
      </div>
    </>
  )
}