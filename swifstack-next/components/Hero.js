'use client';
import { useState, useEffect } from 'react';

const EmailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>
);
const ChartIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>
);
const CalIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>
);
const FileIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/></svg>
);
const UserIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="10" cy="8" r="4"/><path d="M3 20a7 7 0 0114 0M19 8v6M16 11h6"/></svg>
);
const PhoneIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>
);

const toasts = ['Customer email answered', 'Invoice sent', 'Lead qualified', 'Call booked'];
const tileIcons = [<EmailIcon key="e"/>, <FileIcon key="f"/>, <UserIcon key="u"/>, <PhoneIcon key="p"/>];

export default function Hero() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1500);
    return () => clearInterval(id);
  }, []);

  const on = Math.floor(tick / 4) % 2 === 1;
  const k = tick % 4;
  const mood = on ? 'mood-joy' : 'mood-sad';

  const barsH = on ? [14 + k * 6, 22 + k * 9, 30 + k * 10, 40 + k * 8] : [8, 10, 8, 6];
  const barsC = on ? ['#93c5fd', '#60a5fa', '#3b66f0', '#0f172a'] : ['#d1d5db', '#d1d5db', '#d1d5db', '#d1d5db'];
  const stageBg = on ? '#ffffff' : '#e3e6eb';
  const stageRing = on ? '0 0 0 2px #a7d7a0, 0 0 40px rgba(167,215,160,0.3)' : '0 0 0 2px rgba(255,255,255,0)';
  const offBg = on ? 'transparent' : '#a7d7a0';
  const offFg = on ? 'rgba(255,255,255,0.75)' : '#111827';
  const onBg = on ? '#a7d7a0' : 'transparent';
  const onFg = on ? '#111827' : 'rgba(255,255,255,0.75)';

  return (
    <div className="hs" role="group" aria-label="Without AI versus with Swifstack">
      <div className="hs-tabs">
        <button type="button" className="hs-tab" aria-pressed={!on} onClick={() => setTick(0)}
          style={{ background: offBg, color: offFg }}>Without AI</button>
        <button type="button" className="hs-tab" aria-pressed={on} onClick={() => setTick(4)}
          style={{ background: onBg, color: onFg }}>With Swifstack</button>
      </div>

      <div className={`hs-stage ${mood}`} style={{ background: stageBg, boxShadow: stageRing }}>
        {!on && (
          <>
            <span className="clock" aria-hidden="true"><i /></span>
            <div className="pile">
              <div className="row"><span className="tl"><EmailIcon /></span></div>
              <div className="row"><span className="tl"><ChartIcon /></span><span className="tl"><CalIcon /></span></div>
              <div className="row"><span className="tl"><EmailIcon /></span><span className="tl"><UserIcon /></span><span className="tl"><FileIcon /></span></div>
            </div>
            <div className="belt" aria-hidden="true" />
            <span className="cap" style={{ background: '#e5e7eb', color: '#374151' }}>
              <i style={{ background: '#6b7280' }} />Your team, buried in busywork
            </span>
          </>
        )}
        {on && (
          <>
            <div className="halo" />
            <div className="botw">
              <svg className="bot" viewBox="0 0 180 220" width="100%" role="img" aria-label="An AI agent working through tasks">
                <ellipse className="glow" cx="90" cy="208" rx="52" ry="8" fill="#3b66f0" fillOpacity="0.22"/>
                <path d="M46 150L22 158M134 150l24 8" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" fill="none"/>
                <circle className="hand h1" cx="20" cy="160" r="13" fill="#0f172a"/>
                <circle className="hand h2" cx="160" cy="160" r="13" fill="#0f172a"/>
                <circle cx="20" cy="160" r="5" fill="#60a5fa"/>
                <circle cx="160" cy="160" r="5" fill="#60a5fa"/>
                <rect x="45" y="118" width="90" height="76" rx="28" fill="#0f172a"/>
                <rect x="64" y="136" width="52" height="34" rx="12" fill="#3b66f0"/>
                <text x="90" y="159" textAnchor="middle" fontFamily="Plus Jakarta Sans,system-ui,sans-serif" fontSize="17" fontWeight="800" fill="#ffffff">AI</text>
                <rect x="80" y="106" width="20" height="16" rx="6" fill="#1e293b"/>
                <rect x="19" y="52" width="11" height="30" rx="5.5" fill="#3b66f0"/>
                <rect x="150" y="52" width="11" height="30" rx="5.5" fill="#3b66f0"/>
                <rect x="28" y="20" width="124" height="90" rx="30" fill="#0f172a"/>
                <rect x="43" y="38" width="94" height="52" rx="22" fill="#dbeafe"/>
                <g className="eyes">
                  <rect x="64" y="52" width="11" height="22" rx="5.5" fill="#3b66f0"/>
                  <rect x="105" y="52" width="11" height="22" rx="5.5" fill="#3b66f0"/>
                </g>
                <path d="M78 82q12 7 24 0" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <span className="toast"><i />{toasts[k]}</span>
            <span className="tile-in">{tileIcons[k]}</span>
            <div className="biz">
              <p>Your business <span aria-hidden="true">↗</span></p>
              <div className="bars">
                {barsH.map((h, i) => (
                  <span key={i} style={{ height: h, background: barsC[i] }} />
                ))}
              </div>
            </div>
            <span className="cap" style={{ background: '#a7d7a0', color: '#111827' }}>
              <i style={{ background: '#111827' }} />Your AI teammate, working around the clock
            </span>
          </>
        )}
      </div>

      <div className="hs-prog">
        <span className="pg" key={tick} />
      </div>
    </div>
  );
}
