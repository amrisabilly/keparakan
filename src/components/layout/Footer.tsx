export default function Footer() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className="bg-[#0a1a30] px-4 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold text-[#f1dfa0]">Kampung Keparakan</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
            Kelurahan Keparakan, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55152
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            Tautan Cepat
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a className="transition hover:text-[#f1dfa0]" href="#profil">
                Profil Kampung
              </a>
            </li>
            <li>
              <a className="transition hover:text-[#f1dfa0]" href="#peta">
                Peta Digital
              </a>
            </li>
            <li>
              <a className="transition hover:text-[#f1dfa0]" href="#umkm">
                UMKM Unggulan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            Layanan
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>Layanan Administrasi Warga</li>
            <li>Informasi Agenda Kampung</li>
            <li>Pendampingan UMKM Lokal</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-9 w-full max-w-6xl border-t border-[#d4af37]/20 pt-6 text-xs text-white/70">
        © {currentYear} Kampung Keparakan. Semua hak dilindungi.
      </p>
    </footer>
  );
}