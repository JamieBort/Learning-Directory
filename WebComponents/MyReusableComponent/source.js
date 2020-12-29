// for the header
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <button>
                <a href="./index.html">Home Page button</a>
            </button>
            <button>
                <a href="./blog.html">Blog button</a>
            </button>
        </nav>
        `;
    }
}

// for the footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <span>Date</span>
        </footer>
        `;
    }
}

customElements.define('header-web-component', Header);
customElements.define('footer-web-component', Footer);