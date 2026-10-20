import { CityBackdrop } from './CityScape';
import { SpiderEmblem, SpiderSwing, WebPattern } from './art';
import Marquee from './Marquee';
import { tools } from '../data';

export default function Hero({ ready }: { ready: boolean }) {
  return (
    <section className={`hero ${ready ? 'is-ready' : ''}`} id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--red" />
        <span className="hero__glow hero__glow--blue" />
        <div className="hero__city" data-parallax data-speed="0.05">
          <CityBackdrop />
        </div>
        <WebPattern className="hero__web" rings={7} />
        <span className="hero__speed" />
        <SpiderSwing className="hero__swing" />
        <span className="hero__grain" data-parallax data-speed="0.08" />
      </div>

      <div className="shell hero__inner">
        <div className="hero__poster">
          <span className="hero__crest" aria-hidden="true">
            <SpiderEmblem />
          </span>

          <h1 className="hero__title" data-text="KR4K3N" data-hero-title>
            KR4K3N
          </h1>

          <p className="hero__sub">Anant Awasthi</p>

          <span className="hero__slash" aria-hidden="true" />

        </div>

        <a className="hero__scroll" href="#work" data-cursor="SCROLL">
          <span className="hero__scroll-ring" aria-hidden="true">↓</span>
          <span>Scroll to the work</span>
        </a>
      </div>

      <div className="hero__marquee">
        <Marquee items={tools} speed={46} />
      </div>
    </section>
  );
}
