import SectionHead from './SectionHead';
import Marquee from './Marquee';
import { ctf, tools } from '../data';

export default function Record() {
  return (
    <section className="section record" id="record">
      <div className="shell">
        <SectionHead
          number="05"
          eyebrow="Field record"
          lines={['Achievements']}
          tag="05 / 06"
          light
        />

        <div className="news reveal">
          <div className="news__masthead">
            <span>THE DAILY KR4K3N</span>
            <span>ISSUE 05 · 2026</span>
            <span>PRICE: ONE FLAG</span>
          </div>
          <div className="news__rule" />

          <div className="news__top">
            <div className="news__headline">
              <h3 data-split>
                <span className="line">kr4k3n records</span>
              </h3>
            </div>

          </div>

          <div className="news__grid">
            {ctf.map((item, index) => (
              <article className="clip reveal" key={item.event} style={{ ['--rot' as string]: `${index % 2 === 0 ? -0.8 : 0.6}deg` }}>
                <span className="clip__place">{item.place}</span>
                <b>{item.event}</b>
                <span className="clip__division">{item.division}</span>
                <span className="clip__year">{item.year}</span>
              </article>
            ))}
          </div>

          <p className="news__foot">
            Plus multiple other top-20 finishes across international CTF competitions.
          </p>
        </div>

        <div className="arsenal">
          <div className="arsenal__label">
            <span>ARSENAL</span>
            <small>Tools I actually reach for</small>
          </div>
          <Marquee items={tools} speed={52} className="marquee--arsenal" />
        </div>
      </div>

    </section>
  );
}
