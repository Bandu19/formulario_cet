import { Navbar, SectionHeader, Footer } from "../../ui";

//--- RAMA HIJO
export const CestMain = () => {
   return (
      <>
         <header className="header">
            <div className="content_ani nav_mod">
               <Navbar />
            </div>

            <section className="hero_container container">
               <SectionHeader />
            </section>
         </header>
         <main className="container">
            <div className="row imagen_estilo3 centrar-texto pb-3">
               <div className="form-register">
                  <h4>Formulario Registro</h4>

                  <input
                     className="controls"
                     type="text"
                     name="nombres"
                     placeholder="Folio de Constancia"
                  />

                  <p>
                     Estoy de acuerdo con <a href="#">Terminos y Condiciones</a>
                  </p>
                  <input className="botons" type="submit" value="Descargar" />
               </div>
            </div>
         </main>

         <footer className="bg-dark text-white">
            <Footer />
         </footer>
      </>
   );
};
