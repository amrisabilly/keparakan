import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getUmkmBySlug, umkmProducts } from "@/data/umkm";
import Footer from "@/components/layout/Footer";

type UmkmDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function toRupiah(value: number): string {
  return `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;
}

function ProductTile({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded-2xl border border-[#d7e0ea] shadow-inner">
      <Image src={src} alt={label} fill sizes="(min-width: 1024px) 16vw, 33vw" className="object-cover" />
    </div>
  );
}

export function generateStaticParams() {
  return umkmProducts.map((item) => ({ slug: item.slug }));
}

export default async function UmkmDetailPage({ params }: UmkmDetailPageProps) {
  const { slug } = await params;
  const product = getUmkmBySlug(slug);

  if (!product) {
    notFound();
  }

  const recommended = umkmProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#eef2f7] text-[#16233c]">
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pt-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="text-xs text-[#5c6b7d] sm:text-sm">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="transition hover:text-[#14315a]" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link className="transition hover:text-[#14315a]" href="/#umkm">
                UMKM
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li className="font-semibold text-[#14315a]">{product.name}</li>
          </ol>
        </nav>

        <section className="mt-4 rounded-3xl border border-[#d7e0ea] bg-[#f5f8fb] p-4 shadow-sm sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
            <div>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-[#d7e0ea]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                <ProductTile src={product.image} label={`${product.name} tampilan utama`} />
                <ProductTile src={product.image} label={`${product.name} tampilan kedua`} />
                <ProductTile src={product.image} label={`${product.name} tampilan ketiga`} />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-[#14315a]">{product.name}</h1>

              <div className="mt-2 flex flex-wrap items-center gap-2.5">
                <p className="text-2xl font-bold text-[#14315a]">{toRupiah(product.price)}</p>
                {product.oldPrice ? (
                  <p className="text-sm text-[#8a94a3] line-through">{toRupiah(product.oldPrice)}</p>
                ) : null}
                {product.discountLabel ? (
                  <span className="rounded-full bg-[#f3e7bd] px-2 py-0.5 text-xs font-semibold text-[#7a5c14]">
                    {product.discountLabel}
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#45566b]">
                {product.name} diproduksi oleh {product.owner} menggunakan bahan baku pilihan
                dari warga sekitar. Produk ini menjaga cita rasa dan karakter lokal agar tetap
                autentik untuk konsumsi keluarga sehari-hari.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#45566b]">
                <span className="font-semibold text-[#14315a]">Manfaat:</span> Produk dikerjakan
                secara higienis, minim bahan tambahan, dan mendukung ekonomi pelaku usaha kampung.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-[#d7e0ea] bg-[#e4ebf3] px-3 py-2 text-center text-xs font-semibold text-[#2f6690]"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-[#d7e0ea] bg-[#e4ebf3] p-3.5">
                <p className="text-sm font-semibold text-[#14315a]">{product.owner}</p>
                <p className="text-xs text-[#5c6b7d]">di {product.location}</p>
              </div>

              <a
                href="https://wa.me/620000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-4 py-3 text-sm font-semibold text-[#10233f] transition hover:bg-[#e6c65c]"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="mt-9">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-[#14315a]">Produk Unggulan Lainnya</h2>
            <Link className="text-sm font-semibold text-[#2f6690] transition hover:underline" href="/#umkm">
              Lihat Semua
            </Link>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-2xl border border-[#d7e0ea] bg-white shadow-sm"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill sizes="(min-width: 1024px) 20vw, 100vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-[#16233c]">{item.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#45566b]">{item.description}</p>
                  <p className="mt-3 text-sm font-bold text-[#14315a]">{toRupiah(item.price)}</p>
                  <Link
                    href={`/umkm/${item.slug}`}
                    className="mt-3 inline-flex rounded-full border border-[#14315a] px-3 py-1 text-xs font-semibold text-[#14315a] transition hover:bg-[#14315a] hover:text-white"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}