/**
 * ⚠️ DATA FIKTIF / DUMMY — HANYA UNTUK KEPERLUAN DEVELOPMENT SEMENTARA ⚠️
 *
 * Nama pemilik, harga, alamat RT, dan data lain di bawah ini BUKAN data nyata.
 * Ini dibuat agar struktur & tampilan UI bisa diuji sebelum data asli tersedia.
 *
 * Sebelum website ini go-live, ganti seluruh isi array `umkmProducts` dengan
 * data UMKM asli dari Keparakan Kidul (nama pemilik, produk, harga, foto asli)
 * yang didapat langsung dari:
 * - Pengurus RW/RT setempat, atau
 * - Koperasi Kerajinan Keparakan Mandiri Sejahtera (KOKKMAS)
 *
 * Konteks nyata sebagai referensi arah produk (BUKAN untuk disalin sebagai fakta):
 * Keparakan Kidul dikenal sebagai sentra kerajinan kulit (sandal, tas, jaket)
 * sejak 1980-an, dengan koperasi KOKKMAS sebagai wadah UMKM setempat.
 * Sumber: warta.jogjakota.go.id/detail/index/22904,
 *         pariwisata.jogjakota.go.id/detail/index/966
 */

export type UmkmProduct = {
  slug: string;
  name: string;
  owner: string;
  category: string;
  description: string;
  accent: string;
  image: string;
  price: number;
  oldPrice?: number;
  discountLabel?: string;
  location: string;
  features: string[];
  isDummyData?: boolean; // flag pengingat: true = belum diverifikasi/data placeholder
};

export const umkmProducts: UmkmProduct[] = [
  {
    slug: "sandal-kulit",
    name: "Sandal Kulit Keparakan",
    owner: "[Nama Pemilik - TBD]",
    category: "Kerajinan Kulit",
    description:
      "Placeholder deskripsi. Ganti dengan deskripsi produk asli dari pengrajin.",
    accent:
      "radial-gradient(circle at 20% 20%, #e8d4b0 0%, #8a5a2c 35%, #4a2f18 100%)",
    image: "/sendal.jpg",
    price: 0,
    location: "RT [TBD], Kampung Keparakan Kidul",
    features: ["Kerajinan Tangan", "Kulit Sintetis/Asli", "Produksi Lokal"],
    isDummyData: true,
  },
  {
    slug: "tas-kulit-contoh",
    name: "Tas Kulit Keparakan",
    owner: "[Nama Pemilik - TBD]",
    category: "Kerajinan Kulit",
    description:
      "Placeholder deskripsi. Ganti dengan deskripsi produk asli dari pengrajin.",
    accent:
      "radial-gradient(circle at 25% 25%, #d9c3a0 0%, #6b4423 45%, #33210f 100%)",
    image: "/tas.jpg",
    price: 0,
    location: "RT [TBD], Kampung Keparakan Kidul",
    features: ["Kerajinan Tangan", "Desain Custom", "Produksi Lokal"],
    isDummyData: true,
  },
  {
    slug: "jaket-kulit-contoh",
    name: "Jaket Kulit Keparakan",
    owner: "[Nama Pemilik - TBD]",
    category: "Kerajinan Kulit",
    description:
      "Placeholder deskripsi. Ganti dengan deskripsi produk asli dari pengrajin.",
    accent:
      "radial-gradient(circle at 30% 20%, #c9b291 0%, #5a3d21 45%, #2a1c10 100%)",
    image: "/jaket.jpg",
    price: 0,
    location: "RT [TBD], Kampung Keparakan Kidul",
    features: ["Kerajinan Tangan", "Kulit Berkualitas", "Produksi Lokal"],
    isDummyData: true,
  },
  {
    slug: "souvenir-kulit-contoh",
    name: "[CONTOH] Souvenir Kulit Keparakan",
    owner: "[Nama Pemilik - TBD]",
    category: "Kerajinan Kulit",
    description:
      "Placeholder deskripsi. Ganti dengan deskripsi produk asli dari pengrajin.",
    accent:
      "radial-gradient(circle at 30% 20%, #cbb896 0%, #79552f 45%, #392715 100%)",
    image: "/umkm/placeholder-souvenir-kulit.svg",
    price: 0,
    location: "RT [TBD], Kampung Keparakan Kidul",
    features: ["Oleh-oleh Khas", "Handmade", "Produksi Lokal"],
    isDummyData: true,
  },
];

export function getUmkmBySlug(slug: string): UmkmProduct | undefined {
  return umkmProducts.find((item) => item.slug === slug);
}