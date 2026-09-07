export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative section-pad border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex w-full items-center justify-center gap-3 md:w-auto md:justify-start">
            <img
              src={`${import.meta.env.BASE_URL}sk-logo.png`}
              alt="SK Mahi"
              className="h-9 w-9 shrink-0 rounded-xl object-contain md:h-10 md:w-10"
            />
            <div className="text-left">
              <p className="text-lg font-semibold">Mahi</p>
              <p className="text-sm leading-tight text-white/50">
                Digital Creator & Multimedia Freelancer
              </p>
            </div>
          </div>

          <p className="text-white/60 md:text-right">
            Creating ideas. Building experiences.
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 md:mt-10 md:pt-6">
          <p className="px-2 text-center text-xs leading-relaxed text-white/50 sm:text-sm">
            © {year} Sheikh Mahirul Amin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
