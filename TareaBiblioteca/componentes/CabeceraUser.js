class CabeceraUser extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
            <h1>BIBLIOTECA JS User</h1>
            <nav>
                <a href='misLibros.html'>Mis prestamos</a>
                <a href='catalogo.html'>Catalogos</a>
                <a href='login.html'>Cerrar sesión</a>
            </nav>
        </header>
        `;
    }
}
customElements.define("header-usr", CabeceraUser);