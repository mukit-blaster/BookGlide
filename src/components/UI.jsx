import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "img",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://github.com/mukit-blaster"
        >
          <img className="w-60" src="/images/blaster-logo.png" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
  <div className="relative">
    {/* First loop */}
    <div className="animate-horizontal-scroll flex items-center gap-20 w-max px-16">
      {/* Blaster: modern blue-purple gradient */}
      <h1 className="shrink-0 text-13xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
        Blaster
      </h1>
      <h2 className="shrink-0 text-11xl font-bold italic bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        BookGlide
      </h2>

      <h1 className="shrink-0 text-13xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
        Blaster
      </h1>
      <h2 className="shrink-0 text-11xl font-bold italic bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        BookGlide
      </h2>
    </div>

    {/* Second loop */}
    <div className="absolute top-0 left-0 animate-horizontal-scroll-2 flex items-center gap-20 w-max px-16">
      <h1 className="shrink-0 text-13xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
        Blaster
      </h1>
      <h2 className="shrink-0 text-11xl font-bold italic bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        BookGlide
      </h2>

      <h1 className="shrink-0 text-13xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
        Blaster
      </h1>
      <h2 className="shrink-0 text-11xl font-bold italic bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        BookGlide
      </h2>
    </div>
  </div>
</div>

    </>
  );
};
