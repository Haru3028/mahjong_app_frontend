"use client";
import Link from 'next/link';
import { useState } from 'react';

const yakuList = [
  { name: "ダブルリーチ", description: "第一巡目でリーチ宣言。門前のみ成立。鳴くと成立しません。" },
  { name: "三色同順", description: "萬・筒・索の3種類で同じ順子を揃える。鳴くと1翻に減少。" },
  { name: "一気通貫", description: "同種の1～9の順子3組。鳴くと1翻に減少。" },
  { name: "混全帯么九（チャンタ）", description: "すべての面子と雀頭に一九字牌を含む。鳴くと1翻に減少。" },
  { name: "三色同刻", description: "萬・筒・索の3種類で同じ刻子（または槓子）を揃える。鳴いても2翻。" },
  { name: "三暗刻", description: "暗刻3組。鳴いても2翻。" },
  { name: "対々和（トイトイ）", description: "刻子のみで構成。鳴いても2翻。" },
  { name: "三槓子", description: "槓子3組。鳴いても2翻。" },
  { name: "混老頭", description: "一九字牌のみで構成。鳴いても2翻。" },
  { name: "小三元", description: "三元牌2組＋雀頭。鳴いても2翻。" },
  { name: "七対子（チートイツ）", description: "7組の対子。鳴くと成立しません。" },
  // 小車輪・連風牌は除外
];

export default function Yaku2Page() {
  const [openIdx, setOpenIdx] = useState<number|null>(null);
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <Link href="/yaku-list" className="base-button bg-yellow-700 hover:bg-yellow-500 text-white font-bold rounded shadow text-center px-6 py-3 mb-6 inline-block">← 役一覧へ戻る</Link>
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">2翻の役</h1>
      <div className="max-w-xl mx-auto">
        {yakuList.map((yaku, idx) => (
          <div key={idx} className="mb-4">
            <button
              className={`base-button w-full text-left bg-gray-800 hover:bg-yellow-700 text-white font-bold rounded shadow px-4 py-3 text-xl flex justify-between items-center`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span>{yaku.name}</span>
              <span className="text-yellow-400">{openIdx === idx ? '▲' : '▼'}</span>
            </button>
            {openIdx === idx && (
              <div className="bg-gray-900 border-l-4 border-yellow-400 p-4 text-gray-200 text-base rounded-b shadow">
                {yaku.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
