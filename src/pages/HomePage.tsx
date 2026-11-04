import { SaladSpotlight } from "../components/Experience";
import { Icon } from "../components/Icon";
import {
  Rooms,
  Menu,
  Gallery,
  Announcements,
  Contact,
  FAQ,
} from "../components/Sections";
import { confirmedLocation } from "../data/location";
import { menuItems } from "../data/content";
import type { SiteContent } from "../types";
import { usePreferences } from "../i18n";
export function HomePage({
  content,
  status,
}: {
  content: SiteContent;
  status: "idle" | "loading" | "error";
}) {
  const { t, lang } = usePreferences();
  return (
    <>
      <aside className="quick-location" aria-label={{uz:"Choyxona manzili",ru:"Адрес чайханы",en:"Teahouse location"}[lang]}>
        <div className="quick-location-inner">
          <div className="quick-location-copy">
            <Icon name="pin" />
            <div><strong>{{uz:"Bizni oson toping",ru:"Как нас найти",en:"Find us easily"}[lang]}</strong>
              <span>{{uz:"Jizzax, Sarvar Azimov ko‘chasi, 47",ru:"Джизак, улица Сарвара Азимова, 47",en:"47 Sarvar Azimov Street, Jizzakh"}[lang]}</span>
            </div>
          </div>
          <a className="button primary" href={confirmedLocation.mapUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="pin" />{{uz:"Manzil — xaritada ochish",ru:"Открыть на карте",en:"Open location in Maps"}[lang]}<Icon name="arrow" />
          </a>
        </div>
      </aside>
      <section id="bosh" className="hero">
        <img
          className="hero-image"
          src="/images/shashlik-hero.png"
          alt=""
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">{content.settings.name}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-actions">
              <a
                className="button primary"
                href={`tel:${content.settings.phones[0].replace(/[^+\d]/g, "")}`}
              >
                <Icon name="phone" />
                {t.call}
              </a>
              <a className="button outline" href="#xonalar">
                {t.seeRooms}
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="stats">
        {t.stats.map((s, i) => (
          <div className="stat" key={i}>
            <Icon name={(["door", "users", "snow"] as const)[i]} />
            <h3>{s}</h3>
            <p>{t.statText[i]}</p>
          </div>
        ))}
      </div>
      <section id="haqimizda" className="section about about-compact">
        <div className="about-copy">
          <span className="eyebrow">{t.aboutTitle}</span>
          <h2>{{uz:"Bir dasturxon atrofida",ru:"За одним столом",en:"Around one table"}[lang]}</h2>
          <p>{{uz:"O‘ktam bobo — Jizzaxda oilaviy tushlik, do‘stlar uchrashuvi va yaqinlar davrasi uchun choyxona. Taomlarni menyudan tanlang, manzilni xaritada oching va biznikiga keling.",ru:"O‘ktam bobo — чайхана в Джизаке для семейного обеда и встреч с друзьями. Выберите блюда в меню, откройте адрес на карте и приходите к нам.",en:"O‘ktam Bobo is a teahouse in Jizzakh for family lunches and gatherings with friends. Browse the menu, find us on the map and join us."}[lang]}</p>
          <a className="button outline" href="/menu">{t.menuTitle}<Icon name="arrow" /></a>
        </div>
      </section>
      {status !== "idle" && (
        <p className="data-status" role="status">
          {status === "loading" ? t.loading : t.error}
        </p>
      )}
      <Rooms rooms={content.rooms} />
      <Menu items={content.menu ?? menuItems} />
      {(content.menu ?? menuItems).some(
        (item) => item.id === "achchiq-chuchuk",
      ) && (
        <SaladSpotlight
          item={
            (content.menu ?? menuItems).find((i) => i.id === "achchiq-chuchuk")!
          }
        />
      )}
      <Gallery images={content.gallery} />
      <Announcements items={content.announcements} />
      <FAQ />
      <Contact />
    </>
  );
}
