import Image from "next/image";

export default function Actuhome() {
    return (
        <section className="h-screen">
            <div>
                <h2 className="text-brand-red font-bold text-center p-10 text-3xl">Actualités</h2>
                {/* <div className="relative w-full h-125">
                    <Image 
                        className="object-contain"
                        src="/home/photo-groupe.jpg"
                        fill
                        alt="Group of karatekas of the club" 
                    />
                </div> */}
            </div>
        </section>
    )
}
