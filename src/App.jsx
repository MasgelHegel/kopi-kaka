import './App.css'
import americanoImg from './assets/image/americano.jpeg'
import coldbrewImg from './assets/image/coldbrew.png'
import logoImg from './assets/image/logo.jpeg'
import kosukaImg from './assets/image/americano.jpeg' // ganti dengan foto kosuka jika sudah tersedia

const WA_NUMBER = '6281211730011'

const products = [
  {
    id: 'kosuka',
    name: 'KOSUKA',
    tagline: 'Racikan yang menemani setiap cerita.',
    description:
      'Perpaduan espresso dari 100% biji kopi Arabika premium pilihan, dipadukan dengan susu segar dan gula aren alami khas KAKA. Diracik dengan keseimbangan rasa yang halus, creamy, dan manis lembut, menghadirkan karakter kopi yang elegan dengan aroma yang kaya serta sensasi dingin yang menyegarkan di setiap tegukan.',
    prices: [
      { label: 'Botol 200 ml', price: '18 K' },
      { label: 'Botol 1 Liter', price: '90 K' },
    ],
    image: kosukaImg,
    alt: 'Kosuka - Kopi Susu KAKA',
  },
  {
    id: 'americano',
    name: 'AMERICANO',
    tagline: 'Kesederhanaan yang menghadirkan karakter.',
    description:
      'Iced Americano KAKA Classic Blend menghadirkan karakter kopi yang bold, kuat, dan beraroma tegas khas racikan klasik pilihan KAKA. Disajikan dengan espresso premium yang dipadukan dengan filtered water dan es batu, menghasilkan sensasi segar dengan body kopi yang kokoh serta aftertaste yang bersih dan memuaskan.',
    prices: [
      { label: 'Botol 250 ml', price: '16 K' },
      { label: 'Botol 1 Liter', price: '65 K' },
    ],
    image: americanoImg,
    alt: 'Americano - Kopi KAKA',
  },
  {
    id: 'coldbrew',
    name: 'COLDBREW',
    tagline: 'Ekstrasi perlahan, rasa yang berkesan.',
    description:
      'ColdBrew KAKA disajikan dari proses ekstraksi perlahan selama 12–18 jam menggunakan biji kopi Anaerobic Natural Processed. Teknik ini menghasilkan karakter rasa yang halus, kompleks, dan kaya aroma, dengan notes blueberry jam, floral, fruit, dan cherry. Setiap tegukan menghadirkan keseimbangan rasa yang lembut, fruity, dan elegan dengan aftertaste bersih dan menyegarkan.',
    prices: [
      { label: 'Botol 200 ml', price: '18 K' },
      { label: 'Botol 1 Liter', price: '90 K' },
    ],
    image: coldbrewImg,
    alt: 'ColdBrew - Kopi KAKA',
  },
]

function buildWAMessage(product, sizeLabel, price) {
  return encodeURIComponent(
    `Halo Kopi KAKA! 👋\n\nSaya ingin order:\n• *${product}* — ${sizeLabel} (Rp ${price})\n\nMohon konfirmasi ketersediaannya ya, terima kasih! 🙏`
  )
}

function PriceTag({ productName, price, label }) {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWAMessage(productName, label, price)}`
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="price-tag"
      aria-label={`Order ${productName} ${label} seharga Rp ${price}`}
    >
      <span className="price-amount">{price}</span>
      <span className="price-label">{label}</span>
    </a>
  )
}

function ProductCard({ product, reverse }) {
  return (
    <article className={`product-card ${reverse ? 'reverse' : ''}`}>
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.alt}
          className="product-image"
          loading="lazy"
        />
        <div className="product-image-badge">
          <span>KOPI</span>
          <strong>KAKA</strong>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-pricing">
          <span className="pricing-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 12 14.09l.93-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <div className="prices-row">
            {product.prices.map((p) => (
              <PriceTag
                key={p.label}
                productName={product.name}
                price={p.price}
                label={p.label}
              />
            ))}
          </div>
          <p className="product-tagline">{product.tagline}</p>
        </div>
      </div>
    </article>
  )
}

function App() {
  const waGeneral = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Kopi KAKA! 👋\n\nSaya ingin melihat menu dan melakukan pemesanan. Bisa bantu saya? 🙏')}`

  return (
    <div className="site-wrapper">
      {/* ── NAVBAR ── */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="brand">
            <img src={logoImg} alt="Kopi KAKA" className="brand-logo" />
          </div>
          <nav className="nav-links" aria-label="Navigasi utama">
            <a href="#menu">Menu</a>
            <a href="#about">Tentang</a>
            <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="nav-order">
              Order Sekarang
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero" id="home" aria-label="Hero section">
        <div className="hero-content">
          <p className="hero-eyebrow">selamat datang di</p>
          <div className="hero-brand">
            <span className="hero-brand-sub">KOPI</span>
            <h1 className="hero-brand-main">KAKA</h1>
          </div>
          <p className="hero-tagline">seni menikmati waktu</p>
          <div className="hero-actions">
            <a href="#menu" className="btn-primary">Lihat Menu</a>
            <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Order via WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-ornament" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
      </section>

      {/* ── RESERVE BANNER ── */}
      <div className="reserve-banner" aria-label="Reserve your cup">
        <div className="reserve-inner">
          <span className="reserve-icon" aria-hidden="true">&#9749;</span>
          <span className="reserve-text">RESERVE YOUR CUP</span>
          <span className="reserve-icon" aria-hidden="true">&#9749;</span>
        </div>
      </div>

      {/* ── MENU ── */}
      <main className="menu-section" id="menu">
        <header className="section-header">
          <div className="section-divider" aria-hidden="true"></div>
          <h2 className="section-title">OUR COFFEE COLLECTION</h2>
          <div className="section-divider" aria-hidden="true"></div>
        </header>

        <div className="products-list">
          {products.map((product, i) => (
            <div key={product.id}>
              <ProductCard product={product} reverse={i % 2 !== 0} />
              {i < products.length - 1 && (
                <div className="product-divider" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about" aria-label="Tentang Kopi KAKA">
        <div className="about-inner">
          <h2 className="about-title">Tentang Kopi KAKA</h2>
          <p className="about-text">
            Kopi KAKA hadir untuk menemani setiap momen berharga dalam hidupmu.
            Dengan bahan pilihan terbaik dan racikan yang penuh cinta, kami
            menghadirkan pengalaman kopi yang tak terlupakan — dari tegukan
            pertama hingga terakhir.
          </p>
          <div className="about-values">
            {[
              { icon: '🌿', title: 'Bahan Premium', desc: '100% biji Arabika pilihan terbaik' },
              { icon: '✨', title: 'Racikan Elegan', desc: 'Dibuat dengan presisi dan penuh rasa' },
              { icon: '📦', title: 'Siap Antar', desc: 'Order mudah, langsung via WhatsApp' },
            ].map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-icon" aria-hidden="true">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" aria-label="Call to action pemesanan">
        <div className="cta-inner">
          <p className="cta-eyebrow">Siap pesan?</p>
          <h2 className="cta-title">Nikmati Kopi KAKA Hari Ini</h2>
          <p className="cta-sub">Open Order — <strong>0812 1173 0011</strong></p>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            aria-label="Order via WhatsApp 0812 1173 0011"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={logoImg} alt="Kopi KAKA" className="footer-brand-logo" />
          </div>
          <p className="footer-tagline">seni menikmati waktu</p>
          <p className="footer-contact">
            Open Order:{' '}
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi via WhatsApp"
            >
              0812 1173 0011
            </a>
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} Kopi KAKA. All rights reserved.</p>
        </div>
        <div className="footer-explore">EXPLORE THE EXPERIENCE</div>
      </footer>
    </div>
  )
}

export default App
