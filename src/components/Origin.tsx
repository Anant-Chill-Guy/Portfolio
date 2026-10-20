import SectionHead from './SectionHead';
import { SpiderMark } from './icons';

export default function Origin() {
  return (
    <section className="section origin" id="origin">
      <div className="shell">
        <SectionHead
          number="02"
          eyebrow="About"
          lines={['whoami']}
          tag="02 / 06"
        />

        <div className="origin__sheet reveal">
          <span className="origin__watermark" aria-hidden="true" data-parallax data-speed="0.16">K</span>

          <div className="origin__grid">
            <div className="origin__text">
              <p className="origin__lead">I break things on purpose, then write down exactly how.</p>

              <p>
                I’m Anant — a second-year CSE (AI) student, and a red teamer in training. My work sits between web exploitation and network pentesting: find the
                trust boundary, follow it, and prove what happens when it fails.
              </p>
              <p>
                Most of what I know came from labs and CTFs rather than slides. I placed top ten at
                Aerospace StarPwn at DEF CON, took third at 07CTF, and spent the rest of the time
                building the tools I wanted to use.
              </p>
              <p>
                I care about understanding the system before touching it: how trust moves, where
                input crosses into an interpreter, and what actually breaks under pressure. The
                exploit is the proof, not the whole job.
              </p>

              <dl className="facts">
                <div>
                  <dt>Based</dt>
                  <dd>Ghaziabad, India</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>Web &amp; network pentesting</dd>
                </div>
                <div>
                  <dt>Study</dt>
                  <dd>CSE (AI), second year</dd>
                </div>
                <div>
                  <dt>Fuel</dt>
                  <dd>Coffee, CTFs, Arch updates</dd>
                </div>
              </dl>

              <div className="idcard">
                <div className="idcard__top">
                  <SpiderMark className="idcard__mark" />
                  <span>SUBJECT FILE</span>
                  <span>NO. 001</span>
                </div>
                <div className="idcard__body">
                  <div>
                    <span>NAME</span>
                    <b>ANANT AWASTHI</b>
                  </div>
                  <div>
                    <span>ALIAS</span>
                    <b>KR4K3N</b>
                  </div>
                  <div>
                    <span>STATUS</span>
                    <b>IN THE LAB</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="origin__panels">
              <article className="panel panel--red reveal">
                <span className="panel__num">01</span>
                <h3>THE KID</h3>
                <p>
                  Grew up on “what happens if I press this?” Now it’s flags, shells, and commits at
                  four in the morning.
                </p>
              </article>

              <article className="panel panel--blue reveal">
                <span className="panel__num">02</span>
                <h3>THE LAB</h3>
                <p>
                  Web apps, Active Directory, Windows, Linux, packet captures. The lab is where the
                  theory has to survive.
                </p>
              </article>

              <article className="panel panel--ink reveal">
                <span className="panel__num">03</span>
                <h3>THE METHOD</h3>
                <p>
                  Understand the system, prove the impact, write the fix. Then make the next test
                  cheaper than the last one.
                </p>
              </article>

              <blockquote className="origin__quote reveal">
                <p>
                  “Officially, I’m a CSE (AI) student. Unofficially, I’m the guy who asked what
                  happens if I pursue something else.”
                </p>
                <cite>— Anant, probably at 4 AM</cite>
              </blockquote>
            </div>
          </div>

          <span className="origin__hand" aria-hidden="true">that’s me, under the mask →</span>
        </div>
      </div>
    </section>
  );
}
