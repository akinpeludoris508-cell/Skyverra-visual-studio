import React, { useState } from 'react';
import { ArrowRight, Film, Clapperboard, Video, Sparkles, X, Play } from 'lucide-react';
import heroVisual from '../assets/images/hero_akin_visuals_1790434901719.jpg';

export const FASHION_COMMERCIAL_VIDEO_URL =
  'https://res.cloudinary.com/so8uohki/video/upload/v1790775346/fashion.mp4';

interface HeroProps {
  onViewWorkClick: () => void;
  onContactClick: () => void;
  onOpenProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWorkClick,
  onContactClick,
  onOpenProject,
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const featurePills = [
    {
      icon: Film,
      title: 'AI Product Ads',
      subtitle: '& Commercials',
      target: '#services',
    },
    {
      icon: Clapperboard,
      title: 'Cinematic',
      subtitle: 'Videos',
      target: '#services',
    },
    {
      icon: Video,
      title: 'Social Media',
      subtitle: 'Content',
      target: '#services',
    },
    {
      icon: Sparkles,
      title: 'Custom AI',
      subtitle: 'Video Solutions',
      target: '#services',
    },
  ];

  const handlePillClick = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-10 overflow-hidden bg-[#05070A] text-white"
    >
      {/* Background Visuals: Full-bleed for Desktop, Ambient Cinematic Canvas for Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Desktop full-bleed hero image with character on right */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src={heroVisual}
            alt="Skyverra Visuals - AI Video Creator & Cinematic Director"
            className="w-full h-full object-cover object-[78%_center] xl:object-[75%_center] select-none"
          />

          {/* Cinematic Vignette & Gradient Overlays for High-Contrast Readability */}
          {/* Left-to-right dark wash so headline is crisp and unobstructed */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-[#05070A]/90 to-transparent lg:w-3/5" />
          
          {/* Bottom dark gradient for feature pills */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/60 to-transparent h-64 top-auto" />
          
          {/* Top subtle fade under navbar */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/70 via-transparent to-transparent h-32" />

          {/* Ambient Sky-Blue Rim Flare */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Mobile & Tablet Ambient Canvas: Deep midnight with subtle atmospheric glows */}
        <div className="lg:hidden absolute inset-0 bg-[#05070A]">
          {/* Soft atmospheric blurred bloom for color harmony without any text interference */}
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#38BDF8]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#0284C7]/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#05070A] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-[1536px] w-full mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 pt-4 xs:pt-6 sm:pt-8 md:pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Headline, Mobile Character Showcase, Description & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-4 xs:space-y-5 sm:space-y-6 lg:space-y-7 -translate-x-0 lg:-translate-x-3 transition-transform">
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[#38BDF8]/30 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase">
                AI Video Director & Creator
              </span>
            </div>

            {/* Main Headline - Crystal clear with zero visual obstruction */}
            <h1 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[74px] leading-[1.08] tracking-tight">
              <span className="block text-white">Turning Ideas into</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#38BDF8] drop-shadow-[0_0_35px_rgba(56,189,248,0.45)]">
                Stunning Videos
              </span>
              <span className="block text-slate-100 font-extrabold">
                with AI.
              </span>
            </h1>

            {/* Mobile & Tablet Dedicated Character Cinema Stage (lg:hidden) */}
            {/* Shows character prominently in an architectural widescreen frame with interactive play and signature, without obstructing any text */}
            <div className="lg:hidden w-full pt-1 pb-1">
              <div
                onClick={() => setShowVideoModal(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setShowVideoModal(true);
                  }
                }}
                aria-label="Play featured commercial video featuring AI Director"
                className="group relative w-full aspect-[16/11] xs:aspect-[16/10] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 hover:border-[#38BDF8]/60 bg-[#090D16] shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 active:scale-[0.99] cursor-pointer"
              >
                {/* Character Image - Framed precisely on the Director */}
                <img
                  src={heroVisual}
                  alt="Skyverra Visuals - AI Video Creator & Director"
                  className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: '74% 28%' }}
                />

                {/* Filmic Depth Overlays & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/95 via-[#05070A]/30 to-[#05070A]/40" />

                {/* Top Corner Metadata Chips */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-100 uppercase">
                      AI DIRECTOR
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-200">
                    <Film className="w-3 h-3 text-[#38BDF8]" />
                    <span>4K MASTER</span>
                  </div>
                </div>

                {/* Center / Action: Radiant Play Button & Cursive Lockup */}
                <div className="absolute inset-0 flex items-center justify-center p-3 xs:p-4">
                  <div className="flex items-center gap-3.5 xs:gap-5 sm:gap-6">
                    {/* Glowing Play Button */}
                    <div className="relative w-13 h-13 xs:w-15 xs:h-15 sm:w-16 sm:h-16 rounded-full bg-[#0284C7]/50 group-hover:bg-[#38BDF8] border-2 border-[#38BDF8] flex items-center justify-center text-white group-hover:text-[#05070A] backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all duration-300 group-hover:scale-110 shrink-0">
                      <span className="absolute inset-0 rounded-full border-2 border-[#38BDF8] animate-ping opacity-50 group-hover:opacity-80" />
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5 transition-transform group-hover:scale-110" />
                    </div>

                    {/* Cursive Handwriting "Ideas into Visuals" */}
                    <div className="relative select-none -rotate-6 transform group-hover:rotate-0 transition-transform duration-300">
                      <div className="font-handwriting text-2xl xs:text-3xl sm:text-4xl text-white/95 leading-tight font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        <span>Ideas</span>
                        <br />
                        <span className="pl-3">into</span>
                        <br />
                        <span>Visuals</span>
                      </div>

                      {/* Cyan sketch stroke */}
                      <svg
                        className="w-22 xs:w-26 sm:w-30 h-4 text-[#38BDF8] mt-0.5 overflow-visible opacity-90"
                        viewBox="0 0 140 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M4 14 C 35 6, 95 18, 136 8" />
                        <path d="M12 18 C 45 12, 85 20, 128 14" opacity="0.6" strokeWidth="1.8" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Action prompt */}
                <div className="absolute bottom-0 inset-x-0 px-3.5 py-2 sm:py-2.5 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-[2px] border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-slate-300 font-medium truncate max-w-[200px] xs:max-w-none">
                    Watch Featured Fashion Commercial
                  </span>
                  <span className="text-[#38BDF8] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                    Play Preview <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Subtitle Description */}
            <div className="space-y-2 xs:space-y-2.5 max-w-xl">
              <p className="text-base sm:text-lg md:text-xl text-slate-100 font-medium leading-snug">
                Cinematic AI visuals crafted for visionary brands, businesses, and creators.
              </p>
              <p className="text-xs xs:text-sm sm:text-base text-slate-300/85 font-normal leading-relaxed">
                From high-impact commercials and product films to immersive storytelling — turning your boldest concepts into unforgettable screen-ready realities.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              {/* Primary: View My Portfolio */}
              <button
                onClick={onViewWorkClick}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold tracking-wide bg-[#38BDF8] text-[#05070A] hover:bg-[#0EA5E9] hover:shadow-[0_0_30px_rgba(56,189,248,0.55)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-[#38BDF8]/20"
              >
                <span>View My Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Secondary: Get In Touch */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold tracking-wide bg-white/[0.08] hover:bg-white/15 text-white border border-white/20 hover:border-[#38BDF8]/60 hover:text-[#38BDF8] backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Desktop Only Interactive Glowing Play Button & Cursive 'Ideas into Visuals' */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative items-center justify-end min-h-[360px]">
            {/* Glowing Translucent Play Button on subject's shoulder */}
            <div className="relative flex items-center gap-6 md:gap-8">
              <button
                onClick={() => setShowVideoModal(true)}
                aria-label="Play fashion commercial video"
                className="group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0284C7]/40 hover:bg-[#38BDF8] border-2 border-[#38BDF8] flex items-center justify-center text-white hover:text-[#05070A] backdrop-blur-md shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                {/* Ping wave animation */}
                <span className="absolute inset-0 rounded-full border-2 border-[#38BDF8] animate-ping opacity-40 group-hover:opacity-75" />
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5 transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4l15 8-15 8V4z" />
                </svg>
              </button>

              {/* Artistic Cursive Handwriting "Ideas into Visuals" with Dynamic Sketched Underline */}
              <div className="relative select-none -rotate-6 transform hover:rotate-0 transition-transform duration-300">
                <div className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-white/95 leading-tight font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                  <span>Ideas</span>
                  <br />
                  <span className="pl-4">into</span>
                  <br />
                  <span>Visuals</span>
                </div>

                {/* Hand-drawn sketch strokes underneath */}
                <svg
                  className="w-28 sm:w-36 h-5 text-[#38BDF8] mt-1 overflow-visible opacity-90"
                  viewBox="0 0 140 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M4 14 C 35 6, 95 18, 136 8" />
                  <path d="M12 18 C 45 12, 85 20, 128 14" opacity="0.6" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Strip with 4 Badges matching mockup */}
      <div className="relative z-10 max-w-[1536px] w-full mx-auto px-4 xs:px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 mt-6 xs:mt-8 md:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4 lg:gap-6 pt-5 sm:pt-6 border-t border-white/10">
          {featurePills.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <button
                key={idx}
                onClick={() => handlePillClick(pill.target)}
                className="group flex items-center gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#38BDF8]/50 backdrop-blur-md transition-all duration-300 text-left cursor-pointer hover:-translate-y-0.5"
              >
                {/* Cyan glowing round/hex icon badge */}
                <div className="w-10 h-10 rounded-xl bg-[#0369A1]/30 border border-[#38BDF8]/40 flex items-center justify-center shrink-0 group-hover:border-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-[#05070A] text-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all duration-300">
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                {/* Text details */}
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors leading-tight truncate">
                    {pill.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-tight truncate">
                    {pill.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Video Cinema Modal */}
      {showVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl animate-fade-in"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/20 bg-[#090D16]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/70 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#38BDF8] font-bold">
                  Skyverra Visuals • Featured AI Fashion Commercial
                </span>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Stage */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src={FASHION_COMMERCIAL_VIDEO_URL}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
