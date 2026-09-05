import { useEffect, useState } from 'react';
import { Youtube, ArrowUpRight, Play } from 'lucide-react';

interface LatestVideo {
  title: string;
  videoId: string;
  thumbnail: string;
  url: string;
}

export default function YoutubeSection() {
  const [latestVideo, setLatestVideo] = useState<LatestVideo | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}latest-video.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load latest video');
        }

        return response.json();
      })
      .then((data: LatestVideo) => {
        if (data.videoId && data.url) {
          setLatestVideo(data);
        }
      })
      .catch(() => {
        // Keep the default visual if the video data cannot be loaded.
      });
  }, []);

  const videoUrl =
    latestVideo?.url ||
    (latestVideo?.videoId
      ? `https://www.youtube.com/watch?v=${latestVideo.videoId}`
      : 'https://www.youtube.com/@paurutitost');

  return (
    <section id="youtube" className="relative section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e0e13] to-[#131319] p-8 md:p-14">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose-500/15 blur-[100px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" aria-hidden />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="reveal mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-rose-300/90">
                <Youtube className="h-4 w-4" /> YouTube
              </p>
              <h2 className="reveal text-4xl font-bold leading-tight md:text-5xl" data-reveal-delay="60">
                Watch My Creative Journey
              </h2>
              <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/70" data-reveal-delay="120">
                I also create and share videos, stories, experiments and
                creative content on YouTube.
              </p>
              <a
                href="https://youtube.com/@paurutitost"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-black transition-all duration-300 hover:scale-105"
                data-reveal-delay="180"
              >
                Visit My YouTube Channel
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* YouTube-inspired visual */}
            <div className="reveal" data-reveal-delay="140">
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video overflow-hidden rounded-2xl border border-white/10"
              >
                {latestVideo?.thumbnail ? (
                  <img
                    src={latestVideo.thumbnail}
                    alt={latestVideo.title || 'Latest YouTube video'}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-600/30 via-black/40 to-violet-700/30" />

                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                  </>
                )}

                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                    <span
                      className="absolute inset-0 rounded-full bg-rose-500/30"
                      style={{ animation: 'pulse-ring 2.5s ease-out infinite' }}
                    />
                    <Play className="h-5 w-5 fill-white text-white sm:h-8 sm:w-8" />
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="max-w-[85%] truncate rounded-full border border-white/20 bg-black/50 px-2 py-0.5 text-[10px] text-white/90 backdrop-blur sm:max-w-none sm:px-3 sm:py-1 sm:text-xs">
                    {latestVideo?.title || 'Latest Video'}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/80">
                    <Youtube className="h-4 w-4 text-rose-400" /> Subscribe
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
