import React from 'react';
import inicios from  '../images/inicio.PNG'
import menus from '../images/menu.PNG'

function Huellitas() {
  return (
    <div className='huellitas-div'>
        <div className='texto'>
            <h1>Huellitas</h1>
            <br></br>
            <p>Huelltias se basa en una pagina para administrar una peluqueria canina.</p>
            <p>Es una aplicación en la web, cual usa tecnologías como C#</p>
            <p>Razor Pages y ASP.NET</p>
            


        </div>
        

        <div className='imagenes'>
            <img src={inicios}></img>
            <img src={menus}></img>



        </div>
    </div>
    
  );
}

export default Huellitas;
