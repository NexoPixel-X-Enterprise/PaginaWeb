'use client'

import Inicio from "./components/views/inicio";
import Acerca from './components/views/Acerca';
import Servicios from "./components/views/servicios";
import Contactanos from "./components/views/contactanos";
import Trabajos from "./components/views/trabajos";

export default function Home() {
  

  return (
    <main>
      <Inicio></Inicio>
      <Acerca></Acerca>
      <Trabajos></Trabajos>
      <Servicios></Servicios>
      <Contactanos></Contactanos>
    </main>
  );
}