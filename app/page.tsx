import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Majeed Builders Construction Background"
          fill
          priority
          className="object-cover"
        />
        {/* Partial white shade (overlay) */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 uppercase">
              Majeed <span className="text-gray-700">Builders</span>
            </h1>
            <div className="h-1.5 w-32 bg-gray-900 mx-auto rounded-full" />
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="hidden sm:block h-[1px] w-16 bg-gray-300" />
            <p className="text-xl md:text-2xl font-medium tracking-[0.4em] text-gray-600 uppercase">
              Coming Soon
            </p>
            <div className="hidden sm:block h-[1px] w-16 bg-gray-300" />
          </div>

          <p className="max-w-md mx-auto text-gray-600 font-normal text-lg">
            We are crafting something exceptional. Our new digital home is under construction and will be unveiled shortly.
          </p>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-10 left-0 w-full text-center z-10">
        <p className="text-[10px] tracking-[0.5em] font-semibold text-gray-800 uppercase">
          Building Excellence Since 2020
        </p>
      </div>
    </main>
  );
}

