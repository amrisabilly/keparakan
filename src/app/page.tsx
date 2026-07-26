import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { umkmProducts } from "@/data/umkm";



type VillageRole = {
  title: string;
  name: string;
  description: string;
};

type QuickStat = {
  label: string;
  value: string;
};

const villageRoles: VillageRole[] = [
  {
    title: "Lurah",
    name: "Mugianto",
    description: "Memimpin perencanaan dan koordinasi kegiatan warga kampung.",
  },
  {
    title: "Ketua RW",
    name: "Wahyudi",
    description: "Menguatkan komunikasi antar RT dan forum masyarakat.",
  },
  {
    title: "Tokoh Masyarakat",
    name: "Sutrisno",
    description: "Mendorong gotong royong dan pendampingan UMKM lokal.",
  },
];

const featuredProducts = umkmProducts.slice(0, 3);

const quickStats: QuickStat[] = [
  { label: "Kepala Keluarga", value: "480" },
  { label: "RT Aktif", value: "9" },
  { label: "Pelaku UMKM", value: "6" },
  { label: "Luas Wilayah", value: "22 Ha" },
];

type HistoryPoint = {
  title: string;
  description: string;
};

const historyPoints: HistoryPoint[] = [
  {
    title: "Nama dan Asal Usul",
    description:
      "Nama Keparakan berkembang dari cerita rakyat setempat dan letaknya yang berdekatan dengan lingkungan Keraton Yogyakarta.",
  },
  {
    title: "Nilai Gotong Royong",
    description:
      "Warga Keparakan menjaga tradisi kerja bersama dalam pembangunan sarana, seni budaya, dan kegiatan sosial kampung.",
  },
];

function ProductImage({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-white/35 shadow-inner">
      <Image
        src={src}
        alt={label}
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function SectionHeading({
  eyebrow = "Profil Kampung",
  title,
  caption,
}: {
  eyebrow?: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="space-y-2 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4d7398]">
        {eyebrow}
      </p>
      <h2 className="text-xl font-bold text-[#14315a] sm:text-2xl">{title}</h2>
      {caption ? (
        <p className="mx-auto max-w-2xl text-sm text-[#45566b]">{caption}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const idrCurrency = new Intl.NumberFormat("id-ID");

  return (
    <div className="min-h-screen bg-[#eef2f7] text-[#16233c]">
      <Navbar />

      <header className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#10233f] px-4 pb-16 pt-4 text-white sm:px-8 sm:pb-20 sm:pt-6 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#0a1a30_0%,#14315a_55%,#0d1f38_100%)]" />
        <Image
          src="/hero5.jpg"
          alt="Suasana Kampung Keparakan, Yogyakarta"
          fill
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-0 h-full w-full object-center opacity-60"
        />
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(212,175,55,.22),transparent_45%),radial-gradient(circle_at_15%_40%,rgba(212,175,55,.12),transparent_40%),linear-gradient(to_bottom,rgba(24,7,11,.4),rgba(24,7,11,.75))]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,.09)_1px,transparent_1px)] bg-size-[28px_28px] opacity-25" /> */}

        {/* Hero: teks dan statistik berdampingan, bukan bertumpuk */}
        <section
          id="profil"
          className="relative z-10 mx-auto my-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 pb-8 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:pt-20"
        >
          <div className="text-center lg:text-left">
            <p className="inline-flex rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-xs font-medium text-[#f1dfa0] shadow-sm">
              Website Profil & Potensi Kampung
            </p>
            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Portal Digital Kampung Keparakan Kidul
            </h1>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Yogyakarta
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base lg:mx-0">
              Platform informasi warga untuk memperkenalkan perangkat kampung,
              pemetaan wilayah, dan produk UMKM unggulan secara terbuka.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                className="rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-[#0a1a30] transition hover:-translate-y-0.5 hover:bg-[#e6c65c]"
                href="#peta"
              >
                Lihat Peta
              </a>
              <a
                className="rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                href="#umkm"
              >
                Lihat Potensi UMKM
              </a>
            </div>
          </div>

          {/* Statistik kini berupa kartu tegak di sisi hero, bukan pita bawah */}
          <div className="grid grid-cols-2 gap-3 rounded-2xl border border-[#d4af37]/25 bg-[#0d1f38]/70 p-4 backdrop-blur-sm sm:gap-4 sm:p-5">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/5 bg-white/5 px-3 py-4 text-center"
              >
                <p className="text-xl font-extrabold text-[#f1dfa0] sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/75 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider organik menuju konten utama */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-16 w-full text-[#eef2f7] sm:h-20"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 C240,10 480,90 720,55 C960,20 1200,80 1440,40 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 pb-20 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        {/* Sejarah dipindah ke urutan pertama setelah hero */}
        <section id="sejarah" aria-labelledby="history-title" className="scroll-mt-24">
          <div id="history-title" className="mb-[3em]">
            <SectionHeading
              eyebrow="Sejarah Kampung"
              title="Jejak Sejarah Keparakan"
              caption="Menilik akar budaya, nama, dan tradisi gotong royong yang menjadi fondasi kampung kami di jantung Yogyakarta."
            />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d7e0ea] bg-[#f5f8fb] p-6 shadow-[0_25px_80px_-40px_rgba(74,20,32,0.35)] lg:p-8">
            {/* Gambar kini di sisi kanan, konten teks di kiri */}
            <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
              <div className="flex flex-col justify-between rounded-[1.75rem] bg-white p-6 shadow-[0_25px_50px_-20px_rgba(74,20,32,0.15)] lg:order-1 lg:p-8">
                <div className="space-y-5">
                  <p className="text-sm leading-relaxed text-[#45566b]">
                    Kampung Keparakan lahir dari kearifan lokal dan kedekatannya dengan lingkungan budaya Yogyakarta. Sejarah kampung tercatat bukan hanya melalui angka, namun juga melalui seni dan cerita generasi yang terus dirawat.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 mb-4">
                    <div className="rounded-[1.5rem] bg-[#e4ebf3] p-4 shadow-[0_10px_20px_-12px_rgba(74,20,32,0.15)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4d7398]">Tahun Berdiri</p>
                      <p className="mt-3 text-3xl font-bold text-[#14315a]">1930</p>
                      <p className="mt-2 text-sm text-[#5c6b7d]">Awal komunitas kampung dan tradisi budaya Yogyakarta.</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-[#e4ebf3] p-4 shadow-[0_10px_20px_-12px_rgba(74,20,32,0.15)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4d7398]">Nilai Utama</p>
                      <p className="mt-3 text-3xl font-bold text-[#14315a]">Gotong Royong</p>
                      <p className="mt-2 text-sm text-[#5c6b7d]">Landasan semua aktivitas pembangunan dan budaya kampung.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-[1.75rem] bg-[#e4ebf3] p-5">
                  {historyPoints.map((point, idx) => (
                    <div key={point.title} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/40 text-sm font-bold text-[#14315a]">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#14315a]">{point.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#45566b]">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative order-first overflow-hidden rounded-[1.75rem] bg-[#0d1f38] shadow-[0_35px_70px_-30px_rgba(42,11,17,0.6)] lg:order-2">
                <Image
                  src="/bg2.jpg"
                  alt="Sejarah Kampung Keparakan"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur-md">
                  <div className="inline-flex items-center gap-3 rounded-full bg-[#e4ebf3]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#14315a]">
                    Warisan Budaya
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#e4ebf3]">
                    Jejak perjalanan kampung dari tradisi dan gotong royong menuju komunitas yang tumbuh bersama di Yogyakarta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perangkat kini tampil sebagai daftar horizontal, bukan grid kartu tiga kolom */}
        {/* <section
          id="perangkat"
          aria-labelledby="perangkat-title"
          className="scroll-mt-24 space-y-7"
        >
          <div id="perangkat-title">
            <SectionHeading
              title="Perangkat Kampung"
              caption="Struktur kepemimpinan dan penggerak kegiatan masyarakat Kampung Keparakan."
            />
          </div>
          <div className="divide-y divide-[#d7e0ea] overflow-hidden rounded-3xl border border-[#d7e0ea] bg-white shadow-sm">
            {villageRoles.map((role) => (
              <article
                key={role.title}
                className="group flex flex-col gap-4 p-6 transition duration-300 hover:bg-[#f5f8fb] sm:flex-row sm:items-center"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#14315a] text-sm font-bold text-white transition group-hover:bg-[#10233f]">
                  {role.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#16233c]">{role.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#4d7398]">{role.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#45566b]">
                    {role.description}
                  </p>
                </div>
                <a
                  className="inline-flex w-fit shrink-0 rounded-full border border-[#14315a] px-3 py-1 text-xs font-semibold text-[#14315a] transition hover:bg-[#14315a] hover:text-white"
                  href="#kontak"
                >
                  Hubungi
                </a>
              </article>
            ))}
          </div>
        </section> */}

        <section id="peta" aria-labelledby="map-title" className="scroll-mt-24 space-y-6">
          <div id="map-title">
            <SectionHeading
              title="Peta Digital Keparakan"
              caption="Visualisasi wilayah, titik layanan publik, dan pusat aktivitas warga."
            />
          </div>
          {/* Panel info kini di kiri, peta di kanan */}
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            <div className="flex flex-col justify-between gap-5 rounded-3xl border border-[#d7e0ea] bg-white p-6 shadow-sm lg:order-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4d7398]">
                  Sekilas Wilayah
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#45566b]">
                  Wilayah kampung terbagi ke dalam beberapa RT dengan pusat layanan
                  warga dan kegiatan gotong royong tersebar merata di tengah Kota Yogyakarta.
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-3">
                {quickStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-[#e4ebf3] px-3 py-2.5 text-center">
                    <dd className="text-lg font-extrabold text-[#14315a]">{stat.value}</dd>
                    <dt className="mt-0.5 text-[11px] uppercase tracking-wide text-[#5c6b7d]">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#d7e0ea] bg-white shadow-sm lg:col-span-2 lg:order-2">
              <div className="relative aspect-4/3 w-full overflow-hidden sm:aspect-video">
                <Image
                  src="/gambar_peta.jpg"
                  alt="Peta Kampung Keparakan"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/5 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      Peta Wilayah
                    </p>
                    <p className="text-lg font-bold text-white sm:text-xl">Keparakan, Yogyakarta</p>
                  </div>
                  <a
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#d4af37] px-3.5 py-2 text-xs font-semibold text-[#0a1a30] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#e6c65c]"
                    href="https://maps.app.goo.gl/jE93quVFFYSRMQCN6"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="umkm" aria-labelledby="umkm-title" className="scroll-mt-24 space-y-7">
          <div id="umkm-title">
            <SectionHeading
              title="Produk UMKM Unggulan"
              caption="Karya terbaik pelaku usaha lokal yang menjadi kekuatan ekonomi kampung."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="flex h-full flex-col rounded-3xl border border-[#d7e0ea] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative">
                  <ProductImage src={product.image} label={product.name} />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#14315a] shadow-sm">
                    {product.category}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#16233c]">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#4d7398]">{product.owner}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#45566b]">
                  {product.description}
                </p>
                <p className="mt-3 text-sm font-bold text-[#14315a]">
                  Rp {idrCurrency.format(product.price)}
                </p>
                <Link
                  className="mt-4 w-fit rounded-full border border-[#14315a] px-3 py-1 text-xs font-semibold text-[#14315a] transition hover:bg-[#14315a] hover:text-white"
                  href={`/umkm/${product.slug}`}
                >
                  Lihat Detail
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center">
            <a
              className="inline-flex rounded-full bg-[#14315a] px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#10233f]"
              href="#kontak"
            >
              Jelajahi Produk Lain
            </a>
          </div>
        </section>

        <section id="kontak" aria-labelledby="contact-title" className="scroll-mt-24 pt-2">
          <div className="rounded-3xl border border-[#d7e0ea] bg-[linear-gradient(120deg,#10233f_0%,#14315a_60%,#2f6690_100%)] p-6 text-white shadow-[0_16px_30px_-18px_rgba(42,11,17,.95)] sm:p-8 md:p-10">
            <h2 id="contact-title" className="text-center text-2xl font-bold">
              Tetap Terhubung dengan Kami
            </h2>
            <p className="mt-2 text-center text-sm text-white/90">
              Bagikan aspirasi, kebutuhan layanan, atau kolaborasi kegiatan kampung.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#d4af37] px-4 py-2 text-sm font-semibold text-[#0a1a30] transition hover:bg-[#e6c65c]"
                href="mailto:kampungkeparakan@example.id"
              >
                Email Aparat Kampung
              </a>
              <a
                className="rounded-full border border-white/55 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                href="https://wa.me/620000000000"
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp Layanan
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}