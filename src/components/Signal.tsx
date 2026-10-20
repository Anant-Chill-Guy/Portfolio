import { useState } from 'react';
import { profile } from '../data';
import { Arrow } from './icons';
import { SpiderEmblem, SpiderSwing, WebPattern } from './art';

export default function Signal() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const confirm = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    };

    try {
      await navigator.clipboard.writeText(profile.email);
      confirm();
      return;
    } catch {}

    const field = document.createElement('textarea');
    field.value = profile.email;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.top = '-1000px';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    document.body.removeChild(field);

    if (ok) confirm();
    else window.location.href = `mailto:${profile.email}`;
  };

  return (
    <section className="section signal" id="signal">
      <div className="signal__wash" aria-hidden="true" />
      <div className="signal__halftone" aria-hidden="true" />
      <WebPattern className="signal__web" rings={6} />
      <SpiderSwing className="signal__swing" />

      <div className="shell signal__inner">
        <div className="signal__main">
          <p className="signal__eyebrow">CONTACT · 06</p>

          <h2 className="signal__title" data-split>
            <span className="line">Let’s</span>
            <span className="line line--accent">team up.</span>
          </h2>

          <div className="signal__actions">
            <a className="signal__mail" href={`mailto:${profile.email}`} data-cursor="MAIL">
              {profile.email}
              <Arrow />
            </a>
            <button className="signal__copy" type="button" onClick={copy} data-cursor="COPY">
              {copied ? 'COPIED ✓' : 'COPY'}
            </button>
          </div>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>

          <div className="signal__links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" data-cursor="GITHUB">
              <span>GITHUB</span>
              <b>Anant-Chill-Guy</b>
              <Arrow />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="LINKEDIN">
              <span>LINKEDIN</span>
              <b>Anant Awasthi</b>
              <Arrow />
            </a>
            <a href={profile.tryhackme} target="_blank" rel="noopener noreferrer" data-cursor="THM">
              <span>TRYHACKME</span>
              <b>kr4k3nby735</b>
              <Arrow />
            </a>
            <a href={profile.hackthebox} target="_blank" rel="noopener noreferrer" data-cursor="HTB">
              <span>HACK THE BOX</span>
              <b>kR444k3n</b>
              <Arrow />
            </a>
          </div>
        </div>

        <aside className="dossier reveal" aria-label="Contact card">
          <div className="dossier__frame">
            <div className="dossier__top">
              <span>SUBJECT · 001</span>
              <span className="dossier__live">
                <i aria-hidden="true" />ONLINE
              </span>
            </div>

            <div className="dossier__portrait" aria-hidden="true">
              <span className="dossier__webline" />
              <SpiderEmblem className="dossier__mark" />
              <span className="dossier__scan" />
              <span className="dossier__tag">PHOTO PENDING</span>
            </div>

            <div className="dossier__id">
              <b>ANANT AWASTHI</b>
              <span>KR4K3N · RED TEAMER</span>
            </div>

            <dl className="dossier__facts">
              <div>
                <dt>OS</dt>
                <dd>I Use Arch BTW</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Web &amp; Network pentesting</dd>
              </div>
              <div>
                <dt>Labs</dt>
                <dd>THM · HTB · CyLab</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>India</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>CTFs &amp; labs</dd>
              </div>
              <div>
                <dt>Handle</dt>
                <dd>@kr4k3n</dd>
              </div>
            </dl>

            <div className="dossier__contact">
              <a href={`mailto:${profile.email}`} data-cursor="MAIL">
                <span>MAIL</span>
                <b>{profile.email}</b>
                <Arrow />
              </a>
              <a href="tel:+918810837566" data-cursor="CALL">
                <span>PHONE</span>
                <b>+91 88108 37566</b>
                <Arrow />
              </a>
            </div>

            <div className="dossier__barcode" aria-hidden="true" />
          </div>
        </aside>
      </div>

      <div className="signal__ticker">
        <span>I USE ARCH BTW</span>
        <span>WEB</span>
        <span>NETWORK</span>
        <span>RED TEAM</span>
        <span>CTF</span>
        <span>LAB RATS WELCOME</span>
      </div>
    </section>
  );
}
