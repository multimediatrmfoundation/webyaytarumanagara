type HeroProps = {
    backgroundImage: string;
    kicker: string;
    title: string;
};

export function Hero({ backgroundImage, kicker, title }: HeroProps) {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#061a2f]/90" />

            <div className="relative z-10 h-full w-full">
                <div className="site-pad flex h-full w-full items-end pb-16">
                    <div className="text-white">
                        <div className="font-slab font-extralight text-[28px] md:text-[40px] leading-tight opacity-90">
                            {kicker}
                        </div>

                        <h1 className="mt-2 font-slab font-semibold text-[44px] md:text-[64px] leading-[1.05] tracking-tight">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}