export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative section-pad border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}sk-logo.png`}
              alt="SK Mahi"
              className="h-10 w-10 rounded-xl object-contain"
            />
            <div>
              <p className="text-lg font-semibold">Mahi</p>
              <p className="text-sm text-white/50">Digital Creator & Multimedia Freelancer</p>
            </div>
          </div>

          <p className="text-white/60 md:text-right">
            Creating ideas. Building experiences.
          </p>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/40">
            © {year} Sheikh Mahirul Amin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
