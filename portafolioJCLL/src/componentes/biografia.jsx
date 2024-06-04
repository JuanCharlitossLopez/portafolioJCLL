import React from 'react'
import imagenYo from '../assets/yo.jpeg'

//style
const estilos = {
    contenedor: {
        fontSize: "1rem",
        textAlign: "center",
        background: "white",

    },
    descript: {
        textAlign: "justify",
        padding: "1rem",
        fontSize: "1.2rem",
        margin: '5rem'
    },
    

};

export const Yo = () => {
    return (
        <>
            <h1 style={{margin:"5rem", color: '#2b3e4e' }}>Juan Carlos Lopez Leon</h1>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <div className="contenedor" style={estilos.contenedor}>
                <center><img src={imagenYo} alt="" width={500} /></center>

                <a href="https://surguanajuato.tecnm.mx/" target='_blank'><p>Ing. Sitemas Computacionales en Instituto Tecnológico Superior del Sur de Guanajuato</p></a>
                <hr />
                <div className='descrip' style={estilos.descript}>
                    <h4>Descripcion:</h4>
                    <li><strong>Desarrollo web:</strong> Me apasiona crear sitios web y aplicaciones web. Disfruto aprendiendo nuevos lenguajes de programación y frameworks para construir experiencias web interactivas y atractivas.
                    </li>
                    <li><strong>Tecnologías emergentes:</strong> Me mantengo actualizado sobre las últimas tendencias en tecnología web, como la inteligencia artificial, el aprendizaje automático y la realidad virtual.
                    </li>
                    <li><strong>Diseño UX/UI:</strong> Me interesa por el diseño de interfaces de usuario y la experiencia del usuario. Me gusta crear interfaces web que sean fáciles de usar y estéticamente agradables.
                    </li>
                    <li><strong>Comunidad web:</strong> Participa activamente en comunidades online de desarrolladores web. Me gusta compartir sus conocimientos y experiencias con otros, y aprender de otros profesionales.</li>
                    <br />
                    <h4>Habilidades:</h4>
                    <li><strong>Frameworks web:</strong> React.</li>
                    <li><strong>Bases de datos:</strong> SQL.</li>
                    <li><strong>Lenguajes de programación:</strong> JavaScript, HTML, Java, C#, PHP.</li>
                    <li><strong>Herramientas de desarrollo:</strong> VS Code, Git, Postman, Boostrap, IntelliJ IDEA.</li>
                    <li><strong>Metodologías de desarrollo:</strong> Cascada, XP, Agiles.</li>
                    <br />
                    <h4>Contacto:</h4>
                    <li>Tel: <a href="tel:+524451136957" target='_blank'>+52 4451136957</a></li>
                    <li>Correo: <a href="mailto:juancalopez825@gmail.com" target='_blank'>juancalopez825@gmail.com</a></li>
                    <li><a href="https://github.com/JuanCharlitossLopez" target='_blank'>GitHud</a></li>
                    <li><a href="https://www.linkedin.com/in/juan-carlos-lopez-leon-548400291/" target='_blank'>Linkedin</a></li>
                    <br />
                    <h4>Objetivos profesionales:</h4>
                    <li><strong>Convertirme en un desarrollador web full-stack</strong> Desea tener las habilidades y conocimientos necesarios para desarrollar sitios web y aplicaciones web completos desde cero.</li>
                    <li><strong>Trabajar en una empresa de tecnología:</strong> me gustaría trabajar en una empresa innovadora que esté a la vanguardia del desarrollo web.</li>
                    <li><strong>Emprender su propio negocio:</strong>A largo plazo, me gustaría crear su propia empresa de desarrollo web.</li>
                    <br />
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </>
    )
}
