import React from 'react'
import "./css/style.css"
import "./assets/banniere.png"
export default function Content() {
    return (
        <div>
            <section class="contenair-fluid banner">
            <div class="contenair ban">
                <img src="./assets/banniere.png" alt="bannière du site"/>
                
            </div>
        </section>

        <header class="container-fluid header">
            <div class="container">
                <nav class="nav">
                    <a href="#" class="home">Recherche </a>
                    <a href="https://sauveteurdudunkerquois.fr">Le site</a>
                    <a href="#footer">Contacts</a>
                </nav>
            </div>
        </header>
       

        <section class="contenair-fluid">
            <div class="contenair recherche">
                <label for="site-search">Recherche un sauveteur:</label>
                <input type="search" id="site-search" name="q" aria-label="Search through site content"/>
                <button>Rechercher</button>
            </div>
        </section>               

        
        <footer class="container-fluid footer">
            <div class="container">
                <a href="https://sauveteurdudunkerquois.fr">Site des sauveteurs du dunkerquois</a>
                
            </div>
        </footer>
        
        </div>
    )
}
