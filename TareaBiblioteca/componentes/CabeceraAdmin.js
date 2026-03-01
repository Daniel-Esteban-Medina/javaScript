class CabeceraAdmin extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
            <h1>BIBLIOTECA JS ADMIN</h1>
            <nav>
                <a href='estadisticas.html'>Estadisticas</a>
                <a href='editorUsuarios.html'>Editor Usuarios</a>
                <a href='editorLibros.html'>Editor Libros</a>
                <a href='../login.html'>Cerrar sesión</a>
            </nav>
        </header>
        `;
    }
}
customElements.define("header-adm", CabeceraAdmin);