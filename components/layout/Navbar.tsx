export default function Navbar() {
    return (
        <nav className="h-[10vh] flex justify-between items-center pl-32 pr-32 text-center">
            <div>
                <h2 className="text-4xl text-brand-red font-bold">Le Mée Sport Karaté</h2>
            </div>
            <div className="flex justify-between gap-16 text-center">
                <a href="#">Accueil</a>
                <a href="#">Actualités</a>
                <a href="#">Cours et Tarifs</a>
                <a href="#">Galerie</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}