import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Headphones,
  Layers3,
  Mail,
  Menu,
  MoveRight,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { getServices } from "./data/services.js";

function Brand({ footer = false }) {
  return (
    <Link
      to="/"
      className={`brand${footer ? " brand-footer" : ""}`}
      aria-label="Storetech home"
    >
      <span className="brand-mark">
        <Cpu size={19} strokeWidth={2.2} />
      </span>
      <span>
        storetech<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}

function Header() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem("storetech-language", language);
    document.documentElement.lang = language;
  };
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          className={`nav-links${open ? " is-open" : ""}`}
          aria-label={t("nav.aria")}
        >
          <NavLink to="/" end>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/services">{t("nav.services")}</NavLink>
          <NavLink to="/contact">{t("nav.contact")}</NavLink>
          <div className="language-select">
            <span>{i18n.language.toUpperCase()}</span>
            <ChevronDown size={13} />
            <select
              aria-label={t("nav.language")}
              value={i18n.language}
              onChange={changeLanguage}
            >
              <option value="ky">KG</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
          <Link className="button button-dark nav-cta" to="/contact">
            {t("nav.cta")}
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Brand footer />
          <p>{t("footer.description")}</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">{t("footer.explore")}</span>
          <Link to="/">{t("nav.home")}</Link>
          <Link to="/services">{t("nav.services")}</Link>
          <Link to="/contact">{t("nav.contact")}</Link>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">{t("footer.contact")}</span>
          <a href="mailto:hello@storetech.kg">hello@storetech.kg</a>
          <a href="tel:+996555123456">+996 555 123 456</a>
        </div>
        <div className="footer-badge">
          <span className="badge-icon">
            <BadgeCheck size={19} />
          </span>
          <span>{t("footer.badge")}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Storetech. {t("footer.rights")}
        </span>
        <span>{t("footer.made")}</span>
      </div>
    </footer>
  );
}

function PageHeading({ eyebrow, title, description, t }) {
  return (
    <div className="page-heading">
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {t(eyebrow)}
      </span>
      <h1>{t(title)}</h1>
      <p>{t(description)}</p>
    </div>
  );
}

function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              {t("home.hero.eyebrow")}
            </span>
            <h1>
              {t("home.hero.title")}
              <br />
              <span>
                {t("home.hero.titleAccent")}
                <span className="title-period">.</span>
              </span>
            </h1>
            <p className="hero-description">{t("home.hero.description")}</p>
            <div className="hero-actions">
              <Link className="button button-dark" to="/services">
                {t("home.hero.primary")}
                <ArrowRight size={17} />
              </Link>
              <Link className="button button-light" to="/contact">
                {t("home.hero.secondary")}
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <span>А</span>
                <span>М</span>
                <span>Д</span>
                <span>+</span>
              </div>
              <div>
                <div className="rating-stars">
                  ★★★★★ <span>4.9 / 5</span>
                </div>
                <p>{t("home.hero.rating")}</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="product product-monitor">
              <div className="monitor-screen">
                <span className="screen-chip">
                  ST <span>OS</span>
                </span>
                <span className="screen-line screen-line-one" />
                <span className="screen-line screen-line-two" />
                <span className="screen-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="screen-dots">•••</span>
              </div>
              <div className="monitor-neck" />
              <div className="monitor-base" />
            </div>
            <div className="product product-phone">
              <div className="phone-camera" />
              <div className="phone-screen">
                <div className="phone-island" />
                <div className="phone-wallpaper">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="app-icons">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
            <div className="product product-earbuds">
              <div className="earbud-case">
                <div className="case-indicator" />
              </div>
              <span className="earbud bud-left" />
              <span className="earbud bud-right" />
            </div>
            <div className="floating-card floating-top">
              <span className="floating-icon">
                <Zap size={15} />
              </span>
              <span>
                <strong>{t("home.hero.floatTopTitle")}</strong>
                <small>{t("home.hero.floatTopSub")}</small>
              </span>
              <span className="live-dot" />
            </div>
            <div className="floating-card floating-bottom">
              <span className="check-bubble">
                <Check size={14} />
              </span>
              <span>
                <strong>{t("home.hero.floatBottomTitle")}</strong>
                <small>{t("home.hero.floatBottomSub")}</small>
              </span>
            </div>
            <span className="visual-label">{t("home.hero.visualLabel")}</span>
          </div>
          <a className="scroll-hint" href="#about">
            <span>{t("home.hero.scroll")}</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container trust-inner">
          <span className="eyebrow">{t("home.trust.label")}</span>
          <div className="trust-logos">
            <span className="trust-logo trust-samsung">SAMSUNG</span>
            <span className="trust-logo trust-apple"></span>
            <span className="trust-logo trust-xiaomi">mi</span>
            <span className="trust-logo trust-lg">
              LG<span>.</span>
            </span>
            <span className="trust-logo trust-huawei">◈ HUAWEI</span>
          </div>
        </div>
      </section>
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-intro">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              {t("home.about.eyebrow")}
            </span>
            <h2>
              {t("home.about.title")}
              <br />
              <span>{t("home.about.titleAccent")}</span>
            </h2>
            <Link to="/services" className="text-link">
              {t("home.about.link")}
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="about-details">
            <div className="about-copy">
              <p className="large-copy">{t("home.about.lead")}</p>
              <p className="muted-copy">{t("home.about.description")}</p>
            </div>
            <div className="stat-row">
              <div className="stat">
                <strong>
                  8<span>+</span>
                </strong>
                <span>{t("home.about.statYears")}</span>
              </div>
              <div className="stat">
                <strong>
                  2.4<span>k</span>
                </strong>
                <span>{t("home.about.statCustomers")}</span>
              </div>
              <div className="stat">
                <strong>
                  24<span>/7</span>
                </strong>
                <span>{t("home.about.statCare")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section preview-section">
        <div className="container">
          <div className="section-topline">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                {t("home.preview.eyebrow")}
              </span>
              <h2>
                {t("home.preview.title")}
                <br />
                <span>{t("home.preview.titleAccent")}</span>
              </h2>
            </div>
            <Link className="button button-light" to="/services">
              {t("home.preview.link")}
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="preview-cards">
            {["consultation", "setup", "delivery"].map((id, index) => (
              <div className={`preview-card preview-${index + 1}`} key={id}>
                <span className="preview-number">0{index + 1} / 03</span>
                <span className="preview-icon">
                  {index === 0 ? (
                    <Headphones size={21} />
                  ) : index === 1 ? (
                    <Layers3 size={21} />
                  ) : (
                    <PackageCheck size={21} />
                  )}
                </span>
                <h3>{t(`services.items.${id}.title`)}</h3>
                <p>{t(`services.items.${id}.description`)}</p>
                <Link
                  to="/services"
                  aria-label={t(`services.items.${id}.title`)}
                >
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-panel">
          <div className="cta-orb" />
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {t("home.cta.eyebrow")}
          </span>
          <h2>
            {t("home.cta.title")}
            <br />
            <span>{t("home.cta.titleAccent")}</span>
          </h2>
          <p>{t("home.cta.description")}</p>
          <Link className="button button-dark" to="/contact">
            {t("home.cta.button")}
            <ArrowRight size={17} />
          </Link>
          <span className="cta-sparkle">
            <Sparkles size={25} />
          </span>
        </div>
      </section>
    </main>
  );
}

function Services() {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    let active = true;
    getServices()
      .then((result) => {
        if (active) {
          setServices(result);
          setStatus("success");
        }
      })
      .catch(() => {
        if (active) setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);
  return (
    <main className="inner-page">
      <section className="container services-page">
        <PageHeading
          eyebrow="services.eyebrow"
          title="services.title"
          description="services.description"
          t={t}
        />
        <div className="service-toolbar">
          <span>{t("services.available")}</span>
          <span>
            {String(services.length || 4).padStart(2, "0")}{" "}
            {t("services.count")}
          </span>
        </div>
        {status === "loading" && (
          <div className="state-box">
            <span className="spinner" />
            <p>{t("services.loading")}</p>
          </div>
        )}
        {status === "error" && (
          <div className="state-box error-box">
            <p>{t("services.error")}</p>
            <button
              className="button button-dark"
              onClick={() => {
                setStatus("loading");
                getServices()
                  .then((data) => {
                    setServices(data);
                    setStatus("success");
                  })
                  .catch(() => setStatus("error"));
              }}
            >
              {t("services.retry")}
              <ArrowRight size={16} />
            </button>
          </div>
        )}
        {status === "success" && (
          <div className="services-grid">
            {services.map((service) => (
              <article
                className={`service-card service-${service.color}`}
                key={service.id}
              >
                <div className="service-card-top">
                  <span>
                    {service.number} <i>/ 04</i>
                  </span>
                  <span className="service-symbol">{service.icon}</span>
                </div>
                <span className="service-category">{t(service.category)}</span>
                <h2>{t(service.title)}</h2>
                <p>{t(service.description)}</p>
                <div className="service-card-bottom">
                  <span>
                    <CheckCircle2 size={15} />
                    {t(service.detail)}
                  </span>
                  <Link to="/contact" aria-label={t("services.ask")}>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="services-note">
          <span>
            <ShieldCheck size={17} />
            {t("services.note")}
          </span>
          <Link className="text-link" to="/contact">
            {t("services.noteLink")}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = t("contact.errors.name");
    if (!values.email.trim()) next.email = t("contact.errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = t("contact.errors.emailInvalid");
    if (!values.phone.trim()) next.phone = t("contact.errors.phone");
    else if (!/^[+\d(][\d\s()\-]{6,}$/.test(values.phone))
      next.phone = t("contact.errors.phoneInvalid");
    if (!values.message.trim()) next.message = t("contact.errors.message");
    else if (values.message.trim().length < 10)
      next.message = t("contact.errors.messageShort");
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSent(true);
      setValues({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };
  const update = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    if (errors[event.target.name])
      setErrors({ ...errors, [event.target.name]: "" });
    setSent(false);
  };
  return (
    <main className="inner-page">
      <section className="container contact-page">
        <PageHeading
          eyebrow="contact.eyebrow"
          title="contact.title"
          description="contact.description"
          t={t}
        />
        <div className="contact-grid">
          <aside className="contact-aside">
            <span className="aside-orb" />
            <span className="aside-eyebrow">{t("contact.aside.eyebrow")}</span>
            <h2>
              {t("contact.aside.title")}
              <br />
              <span>{t("contact.aside.titleAccent")}</span>
            </h2>
            <p>{t("contact.aside.description")}</p>
            <div className="contact-list">
              <a href="mailto:hello@storetech.kg">
                <span className="contact-icon">
                  <Mail size={17} />
                </span>
                <span>
                  <small>{t("contact.aside.email")}</small>
                  <strong>hello@storetech.kg</strong>
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href="tel:+996555123456">
                <span className="contact-icon">
                  <Phone size={17} />
                </span>
                <span>
                  <small>{t("contact.aside.phone")}</small>
                  <strong>+996 555 123 456</strong>
                </span>
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="contact-hours">
              <span className="live-dot" />
              {t("contact.aside.hours")}
            </div>
          </aside>
          <div className="form-card">
            <div className="form-top">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                {t("contact.form.eyebrow")}
              </span>
              <span className="form-step">
                01 <i>/ 01</i>
              </span>
            </div>
            <h2>{t("contact.form.title")}</h2>
            <p>{t("contact.form.description")}</p>
            {sent && (
              <div className="success-message" role="status">
                <CheckCircle2 size={18} />
                <span>{t("contact.success")}</span>
              </div>
            )}
            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">
                    {t("contact.form.name")} <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder={t("contact.form.namePlaceholder")}
                    value={values.name}
                    onChange={update}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span className="field-error" id="name-error">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="email">
                    {t("contact.form.email")} <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={values.email}
                    onChange={update}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span className="field-error" id="email-error">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="field">
                <label htmlFor="phone">
                  {t("contact.form.phone")} <span>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={t("contact.form.phonePlaceholder")}
                  value={values.phone}
                  onChange={update}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <span className="field-error" id="phone-error">
                    {errors.phone}
                  </span>
                )}
              </div>
              <div className="field">
                <label htmlFor="message">
                  {t("contact.form.message")} <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder={t("contact.form.messagePlaceholder")}
                  value={values.message}
                  onChange={update}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <span className="field-error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>
              <div className="form-submit">
                <span>{t("contact.form.required")}</span>
                <button type="submit" className="button button-dark">
                  {t("contact.form.submit")}
                  <MoveRight size={17} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  const { t } = useTranslation();
  return (
    <main className="inner-page">
      <section className="container not-found">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          404
        </span>
        <h1>{t("notFound.title")}</h1>
        <p>{t("notFound.description")}</p>
        <Link className="button button-dark" to="/">
          {t("notFound.button")}
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t("siteTitle");
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
