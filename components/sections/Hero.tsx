import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[90vh] overflow-hidden">
            <Image className="object-cover brightness-50"
                src="/images/home/hero.jpg"
                fill
                alt="Karateka holding his belt" />
            <div className="absolute inset-0 flex items-center justify-center text-amber-50 text-center">
                <h1 className="text-6xl font-bold">
                    Bienvenue dans votre club.
                </h1>
            </div>
        </section>
    )
}