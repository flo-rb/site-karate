export default function Navbar() {
    return (
        <nav className="h-[10vh] bg-amber-600 flex justify-between items-center pl-32 pr-32 text-center">
            <div>
                Le Mee Sport Karate
            </div>
            <div className="flex justify-between gap-3 text-center">
                <a href="#">Accueil</a>
                <a href="#">Actualités</a>
                <a href="#">Cours et Tarifs</a>
                <a href="#">Galerie</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    )
}