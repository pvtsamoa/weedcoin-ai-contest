"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Calendar,
  Video,
  Star,
  CheckCircle,
  ArrowRight,
  Leaf,
  Zap,
  Users,
  Clock,
  Award,
  MessageCircle,
  AlertCircle,
  Hash,
  FileText,
  Shield,
  Download,
} from "lucide-react";

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 hr-green" />
      <span className="text-green-500 text-xs tracking-[0.3em] font-mono opacity-60">✦</span>
      <div className="flex-1 hr-green" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.25em] text-green-500 uppercase mb-3 opacity-80">
      {children}
    </p>
  );
}

const logos = [
  {
    id: "coin",
    label: "3D Coin",
    sublabel: "Cinematic — best for end cards",
    file: "/weedcoin-logo-1.png",
    downloadName: "weedcoin-og-coin.png",
    bg: "bg-[#0a0a0a]",
    blend: "mix-blend-screen",
  },
  {
    id: "sticker",
    label: "Flat Sticker",
    sublabel: "Clean — best for overlays",
    file: "/weedcoin-logo-2.png",
    downloadName: "weedcoin-og-sticker.png",
    bg: "bg-[#111]",
    blend: "",
  },
];

function BrandAssets() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (id: string, file: string) => {
    const url = typeof window !== "undefined" ? `${window.location.origin}${file}` : file;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel>Brand Assets</SectionLabel>
          <h2 className="font-georgia font-bold text-2xl text-white">Official Logos for Your Entry</h2>
          <p className="text-white/60 text-sm mt-2 max-w-md mx-auto">
            Your clip must include one of these. Download it or copy the URL to use in your editor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {logos.map((logo) => (
            <div key={logo.id} className="rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all duration-300">
              {/* Preview */}
              <div className={`${logo.bg} flex items-center justify-center py-12 px-8 relative`}>
                <div className="relative w-48 h-48">
                  <Image
                    src={logo.file}
                    alt={logo.label}
                    fill
                    className={`object-contain ${logo.blend}`}
                  />
                </div>
              </div>
              {/* Info + actions */}
              <div className="bg-black/40 backdrop-blur-sm border-t border-white/8 px-4 py-4">
                <p className="text-white font-semibold text-sm">{logo.label}</p>
                <p className="text-white/30 text-xs font-mono mb-4">{logo.sublabel}</p>
                <div className="flex gap-2">
                  <a
                    href={logo.file}
                    download={logo.downloadName}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold hover:bg-green-500/20 transition-all duration-200"
                  >
                    <Download size={13} />
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(logo.id, logo.file)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-white/50 text-xs font-semibold hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    {copied === logo.id ? (
                      <>
                        <CheckCircle size={13} className="text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      {/* ── FIXED GALAXY BACKGROUND ── */}
      <div className="galaxy-bg" />

      {/* ── HERO ── 3D coin as centerpiece ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 pb-24">
        {/* Grid overlay — clip wrapper keeps the animated grid contained */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.025]">
          <div className="hero-grid" />
        </div>
        {/* Corner brackets */}
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-green-500 opacity-30" />
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-green-500 opacity-30" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-green-500 opacity-30" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-green-500 opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

          {/* 3D Coin — hero image */}
          <div className="animate-fade-in relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-8">
            <div className="absolute inset-0 rounded-full bg-amber-600/15 blur-3xl scale-110" />
            <Image
              src="/weedcoin-logo-1.png"
              alt="Weedcoin OG Coin"
              fill
              priority
              className="object-contain drop-shadow-2xl mix-blend-screen"
            />
          </div>

          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 border border-green-500/30 rounded-full px-4 py-1.5 mb-6 bg-green-950/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-green-400 uppercase">2-Week Sprint · Deadline Apr 19</span>
          </div>

          <h1 className="animate-fade-up delay-200 font-georgia font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-4 glow-green">
            <span className="text-green-400">Weedcoin OG</span>
            <br />
            <span className="text-white">AI Video Competition</span>
          </h1>

          <div className="animate-fade-up delay-300 flex items-center justify-center gap-3 mb-6">
            <span className="font-georgia text-2xl text-yellow-400 glow-gold font-bold">420</span>
            <span className="text-white/30">—</span>
            <span className="font-georgia text-xl text-white/70 italic">Year of the Horse Edition</span>
          </div>

          <div className="animate-fade-up delay-400 inline-block border border-yellow-400/40 rounded-lg px-6 py-3 mb-10 bg-yellow-950/10">
            <span className="font-mono text-sm text-yellow-400 tracking-widest uppercase">$100 WEEDCOIN · 3 Clip Tiers</span>
          </div>

          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 text-sm">
            <div className="flex items-center gap-2 text-white/60">
              <Clock size={14} className="text-green-400" />
              <span>Deadline:</span>
              <span className="text-white font-semibold">April 19, 11:59 PM PST</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-white/60">
              <Trophy size={14} className="text-yellow-400" />
              <span>Winners:</span>
              <span className="text-white font-semibold">April 20 @ 4:20 PM PST</span>
            </div>
          </div>

          <div className="animate-fade-up delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.gle/p2mSH1UYPUDn4Sxs6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-base font-bold tracking-wide btn-gold"
            >
              <FileText size={18} />
              Submit Your Entry
              <ArrowRight size={18} />
            </a>
            <a
              href="https://x.com/weedcoinOG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <MessageCircle size={16} />
              DM @weedcoinOG as backup
            </a>
          </div>

          <p className="animate-fade-up delay-700 mt-5 text-white/25 text-xs font-mono">
            Must be 21+. Public X post required with Weedcoin OG logo visible.
          </p>
        </div>
      </section>

      {/* ── BRAND IDENTITY ── WeedcoinOnChain images ── */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>The Brand</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl sm:text-4xl text-white mb-3">
              Global Cannabis Culture. On-Chain.
            </h2>
            <p className="text-white/65 text-sm max-w-lg mx-auto">
              Built on Solana. Community driven. Like Bitcoin — but way higher.
              This is the world your video needs to live in.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/8 hover:border-orange-500/30 transition-all duration-300 group">
              <Image
                src="/weedcoin-onchain.png"
                alt="Weedcoin OG — Global Cannabis Culture On-Chain"
                width={600}
                height={600}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/8 hover:border-orange-500/30 transition-all duration-300 group">
              <Image
                src="/weedcoin-onchain2.png"
                alt="Weedcoin OG — Like Bitcoin Way Higher"
                width={600}
                height={600}
                className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION — split layout with brand image ── */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/8 hover:border-orange-500/20 transition-all duration-300">
            <Image
              src="/build-with-weedcoin2.png"
              alt="Plant the Future — Weedcoin OG"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div>
            <SectionLabel>Vision &amp; Purpose</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl sm:text-4xl text-white mb-5">
              This Is More Than a Contest
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-5">
              Weedcoin OG exists at the intersection of{" "}
              <span className="text-green-400">whole-plant nutrition</span>,{" "}
              <span className="text-green-400">clean energy</span>, and{" "}
              <span className="text-yellow-400">community-powered crypto</span>. We
              are building something real — and we want creators who feel that in their bones.
            </p>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              The Year of the Horse brings bold movement and fearless momentum.
              Channel that energy. Show the world what cannabis culture looks like
              when it&apos;s elevated, authentic, and unapologetic.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Solana Network", "Community Driven", "2026"].map((tag) => (
                <span key={tag} className="font-mono text-xs text-white/40 border border-white/10 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE'RE LOOKING FOR ── */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>What We&apos;re Looking For</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl sm:text-4xl text-white">
              Three Pillars of a Winning Entry
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl p-6 border border-white/8 hover:border-green-500/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-green-950/60 border border-green-500/30 flex items-center justify-center mb-4">
                <Leaf size={20} className="text-green-400" />
              </div>
              <h3 className="font-georgia font-bold text-xl text-white mb-3">Cannabis Authenticity</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Celebrate the plant honestly. Whole-plant medicine, culture, community.
                No gimmicks — real love for the leaf.
              </p>
            </div>
            <div className="rounded-xl p-6 border border-white/8 hover:border-yellow-400/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-yellow-950/40 border border-yellow-400/30 flex items-center justify-center mb-4">
                <Zap size={20} className="text-yellow-400" />
              </div>
              <h3 className="font-georgia font-bold text-xl text-white mb-3">Horse Motif Energy</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                2025 is the Year of the Horse — power, freedom, wild momentum.
                Weave that spirit into your visuals. Bold. Fearless.
              </p>
            </div>
            <div className="rounded-xl p-6 border border-white/8 hover:border-orange-500/25 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-orange-950/40 border border-orange-500/30 flex items-center justify-center mb-4">
                <Star size={20} className="text-orange-400" />
              </div>
              <h3 className="font-georgia font-bold text-xl text-white mb-3">Weedcoin OG Spirit</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Represent the brand. The Weedcoin OG logo must be visible in your clip.
                Community first. Always higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIP TIERS ── */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Prize Tiers by Clip Length</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl sm:text-4xl text-white">$100 WEEDCOIN — Three Categories</h2>
            <p className="text-white/60 text-sm mt-3 max-w-xl mx-auto">
              Pick the tier that fits your vision. Each category has its own winner. One entry per person.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="rounded-xl border border-green-500/25 bg-green-950/10 p-6 text-center hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border-2 border-green-500 bg-[#030303] flex items-center justify-center mx-auto mb-4">
                <Video size={20} className="text-green-400" />
              </div>
              <div className="font-mono text-xs text-green-400 tracking-widest uppercase mb-2">6-Second Tier</div>
              <div className="font-georgia font-bold text-4xl text-green-400 mb-1">$20</div>
              <p className="text-white/40 text-xs mb-4">WEEDCOIN</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Maximum impact in minimum time. Perfect for snappy AI loops or meme energy.
              </p>
            </div>
            <div className="relative rounded-xl border border-yellow-400/40 bg-gradient-to-b from-yellow-950/20 to-transparent p-6 text-center hover:border-yellow-400/60 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-0.5 rounded-full font-mono tracking-wider">POPULAR</span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-yellow-400 bg-[#030303] flex items-center justify-center mx-auto mb-4 mt-2">
                <Award size={20} className="text-yellow-400" />
              </div>
              <div className="font-mono text-xs text-yellow-400 tracking-widest uppercase mb-2">10-Second Tier</div>
              <div className="font-georgia font-bold text-4xl text-yellow-400 mb-1">$30</div>
              <p className="text-white/40 text-xs mb-4">WEEDCOIN</p>
              <p className="text-white/70 text-sm leading-relaxed">
                The sweet spot. Tell a complete story with atmosphere, character, and brand flavor.
              </p>
            </div>
            <div className="rounded-xl border border-orange-500/25 bg-orange-950/10 p-6 text-center hover:border-orange-500/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-full border-2 border-orange-400/60 bg-[#030303] flex items-center justify-center mx-auto mb-4">
                <Trophy size={20} className="text-orange-400" />
              </div>
              <div className="font-mono text-xs text-orange-400 tracking-widest uppercase mb-2">30+ Second Tier</div>
              <div className="font-georgia font-bold text-4xl text-orange-400 mb-1">$50</div>
              <p className="text-white/40 text-xs mb-4">WEEDCOIN</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Full creative expression. Narrative, visuals, music, and branding — bring everything.
              </p>
            </div>
          </div>
          <p className="text-center text-white/25 text-xs font-mono mt-6">
            Core team votes on April 19 · Winners announced April 20 @ 4:20 PM PST
          </p>
        </div>
      </section>

      {/* ── ECOSYSTEM BANNER ── Build with Weedcoin3/4 full bleed pair ── */}
      <section className="px-4 py-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://www.weedcoinog.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            title="Weedcoin OG Blog"
            className="rounded-2xl overflow-hidden border border-white/8 hover:border-orange-500/40 transition-all duration-300 group block"
          >
            <Image
              src="/build-with-weedcoin3.png"
              alt="Weedcoin OG Blog"
              width={600}
              height={600}
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
            />
          </a>
          <a
            href="https://www.weedcoinog.com/mediweed-hub/mediweed-hub"
            target="_blank"
            rel="noopener noreferrer"
            title="Weedcoin OG MediWeed Hub"
            className="rounded-2xl overflow-hidden border border-white/8 hover:border-orange-500/40 transition-all duration-300 group block"
          >
            <Image
              src="/build-with-weedcoin4.png"
              alt="Weedcoin OG MediWeed Hub"
              width={600}
              height={600}
              className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
            />
          </a>
        </div>
      </section>

      {/* ── HOW TO SUBMIT ── */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <SectionLabel>How to Submit</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl text-white mb-2">Three Steps. Under 60 Seconds.</h2>
          </div>

          {/* ── CRITICAL NOTICE ── */}
          <div className="flex items-start gap-4 p-5 rounded-xl border border-red-500/40 bg-red-950/20 mb-8">
            <AlertCircle size={22} className="text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-sm mb-1">You do NOT upload your video here</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Post your video on <span className="text-white font-semibold">X first</span>, then copy that post URL and paste it into the Google Form.{" "}
                <span className="text-yellow-400 font-semibold">Filling out the Google Form is required to be eligible for a prize</span> — we cannot track or pay entries submitted any other way.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Post Your Clip on Your X Feed",
                desc: "Upload your AI-generated video as a public post on your own X profile. Include your tier (6s / 10s / 30+) in the caption, tag @weedcoinOG, and make sure the Weedcoin OG logo is visible in the clip.",
                link: null,
              },
              {
                num: "02",
                title: "Cross-Post to the Weedcoin OG X Community",
                desc: "Share the same post into the Weedcoin OG X Community so all entries are in one place. Caption must include all three: #WeedcoinOG  #420  #YearOfTheHorse — missing any one disqualifies your entry.",
                link: { href: "https://x.com/i/communities/1907131002478285013", label: "Join the Community →" },
              },
              {
                num: "03",
                title: "Submit Your Link via Google Form",
                desc: "Click Submit Your Entry below. Paste your X post URL, select your tier, and confirm your Solana wallet address. Takes 60 seconds. DM @weedcoinOG on X if you hit any issues.",
                link: { href: "https://forms.gle/p2mSH1UYPUDn4Sxs6", label: "Submit Your Entry →" },
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex gap-5 p-5 rounded-xl border border-white/6 hover:border-green-500/20 transition-all duration-300"
              >
                <span className="font-mono text-3xl font-bold text-green-500/20 leading-none shrink-0 mt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-georgia font-bold text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{step.desc}</p>
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-mono text-green-400 hover:text-green-300 transition-colors"
                    >
                      {step.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl border border-yellow-400/20 bg-yellow-950/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <FileText size={20} className="text-yellow-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-white text-sm mb-1">Submission Form</p>
              <p className="text-white/50 text-sm">
                The official submission form is live now.{" "}
                <span className="text-yellow-400">DM @weedcoinOG on X</span> if you have any issues submitting.
              </p>
            </div>
            <a
              href="https://x.com/weedcoinOG"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/50 text-sm font-semibold hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <MessageCircle size={14} />
              DM Backup
            </a>
          </div>
        </div>
      </section>

      {/* ── BRAND ASSETS — dual logo picker ── */}
      <BrandAssets />

      {/* ── REQUIRED TAGS & LOGO RULE ── */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>Required Tags &amp; Logo Rule</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl text-white">Zero Ambiguity</h2>
            <p className="text-white/60 text-sm mt-2">Every entry must include all of the following — missing any one disqualifies your clip.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl border border-green-500/20 bg-green-950/10">
              <Hash size={18} className="text-green-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-white text-sm mb-1">Required Hashtags</p>
                <p className="font-mono text-xs text-green-400">#WeedcoinOG</p>
                <p className="font-mono text-xs text-green-400">#420</p>
                <p className="font-mono text-xs text-green-400">#YearOfTheHorse</p>
                <p className="text-white/35 text-xs mt-1">All three must appear in your X post caption.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-orange-500/20 bg-orange-950/10">
              <Star size={18} className="text-orange-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-white text-sm mb-1">Weedcoin OG Logo Visible</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  The logo must appear visibly in your clip — as an overlay, end card, or embedded in the scene.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/8">
              <Users size={18} className="text-white/40 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-white text-sm mb-1">Tag @weedcoinOG</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Your X post must tag <span className="text-green-400">@weedcoinOG</span> so we can find and track your entry.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/8">
              <Shield size={18} className="text-white/40 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-white text-sm mb-1">Public Post Required</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Your X account must be public. Private or locked accounts are not eligible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Eligibility Requirements</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl text-white">Who Can Enter</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Must be 21 years of age or older",
              "Must follow @weedcoinOG on X",
              "Video must be AI-generated or AI-assisted",
              "Entry must be posted publicly on X",
              "Must tag @weedcoinOG in your X post",
              "All three hashtags required in caption",
              "Weedcoin OG logo must be visible in the clip",
              "One entry per person, one tier only",
              "Content must be original — you own all rights",
              "Weedcoin OG may or may not repost your video — if we do, we credit your handle",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-white/5">
                <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                <span className="text-white/65 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Timeline</SectionLabel>
            <h2 className="font-georgia font-bold text-3xl text-white">Key Dates</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px timeline-line opacity-30 -translate-x-px" />
            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="sm:flex-1 sm:text-right order-2 sm:order-1">
                  <span className="font-mono text-xs text-yellow-400 tracking-wider">APRIL 19 · 11:59 PM PST</span>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full border-2 border-yellow-400 bg-[#030303] flex items-center justify-center shrink-0 order-1 sm:order-2">
                  <Calendar size={18} className="text-yellow-400" />
                </div>
                <div className="sm:flex-1 order-3">
                  <p className="font-georgia font-bold text-lg text-white">Submission Deadline</p>
                  <p className="text-white/65 text-sm mt-1">Form closes. All entries locked. Core team votes.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="sm:flex-1 sm:text-right order-2 sm:order-1">
                  <p className="font-georgia font-bold text-lg text-white">Winners Announced</p>
                  <p className="text-white/65 text-sm mt-1">Live announcement on X. Prizes distributed on-chain.</p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full border-2 border-orange-400 bg-[#030303] flex items-center justify-center shrink-0 order-1 sm:order-2">
                  <Trophy size={18} className="text-orange-400" />
                </div>
                <div className="sm:flex-1 order-3">
                  <span className="font-mono text-xs text-orange-400 tracking-wider">APRIL 20 · 4:20 PM PST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAIRNESS & LEGAL ── */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <SectionLabel>Fairness &amp; Legal</SectionLabel>
            <h2 className="font-georgia font-bold text-2xl text-white">Rules That Protect Everyone</h2>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl border border-yellow-400/20 bg-yellow-950/10">
            <AlertCircle size={20} className="text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-sm mb-1">21+ Age Requirement</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Open to participants 21 years of age or older only. By submitting, you confirm you meet this requirement.
                Void where prohibited by law.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl border border-white/8">
            <Shield size={20} className="text-white/35 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-sm mb-1">Original Work &amp; Rights</p>
              <p className="text-white/70 text-sm leading-relaxed">
                All submitted content must be your original creation. Stolen assets or unauthorized IP will result in immediate disqualification.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl border border-white/8">
            <Users size={20} className="text-white/35 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-sm mb-1">Usage Rights</p>
              <p className="text-white/70 text-sm leading-relaxed">
                By entering, you grant Weedcoin OG the right to repost or feature your submission across any channel. We may or may not share every video — but if we do, we credit your X handle. Always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── WeedcoinOnChain.png as background ── */}
      <section className="relative px-4 py-28 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/weedcoin-onchain.png"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.18, filter: "saturate(0.9) brightness(0.5)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/50 to-[#030303]" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <SectionDivider />
          <div className="mt-14">
            {/* Coin accent */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 bg-amber-600/20 rounded-full blur-2xl" />
              <Image
                src="/weedcoin-logo-1.png"
                alt=""
                fill
                className="object-contain mix-blend-screen"
              />
            </div>
            <h2 className="font-georgia font-bold text-3xl sm:text-5xl text-white mb-4">
              Ready to Compete?
            </h2>
            <p className="text-white/45 mb-3 text-lg">
              Create. Post. Submit.{" "}
              <span className="text-green-400">April 19</span> is the cutoff.
            </p>
            <p className="text-white/30 mb-10 text-sm font-mono">
              Three tiers · One winner per tier · April 20 @ 4:20 PM reveal
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://forms.gle/p2mSH1UYPUDn4Sxs6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-base font-bold tracking-wide btn-gold"
              >
                <FileText size={18} />
                Submit Your Entry
                <ArrowRight size={18} />
              </a>
              <a
                href="https://x.com/weedcoinOG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <MessageCircle size={16} />
                DM @weedcoinOG
                <ArrowRight size={14} />
              </a>
            </div>
            <p className="mt-6 text-white/20 text-xs font-mono">
              Must be 21+ · Not financial advice · Void where prohibited
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 px-4 py-10">
        <div className="max-w-5xl mx-auto">
          {/* Top row — logo + links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/weedcoin-logo-2.png"
                  alt="Weedcoin OG"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-georgia font-bold text-white/80 text-sm block">Weedcoin OG</span>
                <span className="font-mono text-white/25 text-xs">Like bitcoin but way higher</span>
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <a href="https://x.com/weedcoinOG" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">X @weedcoinOG ↗</a>
              <span className="text-white/10">|</span>
              <a href="https://x.com/i/communities/1907131002478285013" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">X Community ↗</a>
              <span className="text-white/10">|</span>
              <a href="https://t.me/WeedcoinOG" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">Telegram ↗</a>
              <span className="text-white/10">|</span>
              <a href="https://WeedcoinOG.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">WeedcoinOG.com ↗</a>
            </div>
          </div>
          {/* Contract address */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-white/20 text-xs font-mono">Contract:</span>
            <a
              href="https://solscan.io/token/21nnfR4TkbZNLwvRrqEseAbz7P3kxKjaV7KuboLJpump"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 text-xs font-mono tracking-wide hover:text-green-400 transition-colors"
            >
              21nnfR4TkbZNLwvRrqEseAbz7P3kxKjaV7KuboLJpump ↗
            </a>
          </div>
          {/* Bottom disclaimer */}
          <p className="text-white/15 text-xs font-mono text-center mb-3">
            For entertainment purposes only. Must be 21+. Not financial advice. Weedcoin OG is a cryptocurrency token on Solana — not a cannabis retailer. Void where prohibited.
          </p>
          <p className="text-white/10 text-xs font-mono text-center">
            Background photo by{" "}
            <a href="https://unsplash.com/@gasparzaldo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors underline">
              gaspar zaldo
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-horse-stands-under-the-full-moon-5PZvoYjLUsE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" className="hover:text-white/30 transition-colors underline">
              Unsplash
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}
