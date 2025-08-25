'use client';

import React from 'react';
import { useParams } from 'next/navigation';

interface FlowerStory { title:string; story:string; language:string; roroNote:string }

const flowerStories:Record<string,FlowerStory> = {
  rose: {
    title:'Rose | 玫瑰',
    story:'In Greek myths, roses were born from the tears of Aphrodite. They symbolize eternal love and passion.',
    language:'Love, devotion, and timeless beauty.',
    roroNote:'Roses remind us: beauty is not fragile — passion itself is a form of strength.',
  },
  sakura: {
    title:'Sakura | 樱花',
    story:'Cherry blossoms bloom and fall in fleeting weeks. They symbolize the impermanence of life and beauty.',
    language:'Ephemeral beauty, renewal, and hope.',
    roroNote:'Sakura whispers: every ending is also the beginning of another spring.',
  },
  sunflower: {
    title:'Sunflower | 向日葵',
    story:'Sunflowers turn toward the sun, symbolizing loyalty and optimism.',
    language:'Hope, vitality, and unwavering loyalty.',
    roroNote:'Like a sunflower, may your gaze always find the light.',
  },
  // 其他花可以依此添加
};

export default function FlowerDetail(){
  const params = useParams<{name:string}>();
  const flower = flowerStories[params?.name ?? ''] || {
    title:'Unknown Flower',
    story:'This flower is still waiting for its stage in ROROSPHERE.',
    language:'',
    roroNote:'',
  };

  return (
    <>
      <style>{`
        main{ min-height:100vh; padding:80px 20px; background:#fffaf8; display:flex; flex-direction:column; align-items:center; text-align:center;}
        h1{ font-family:'Great Vibes', cursive; font-size:3rem; color:#A17494; margin-bottom:1.5rem;}
        .block{ max-width:720px; margin-bottom:1.5rem; font-size:1rem; line-height:1.6; color:#3B2E2E; text-align:left;}
        .highlight{ font-style:italic; color:#A17494; font-weight:500;}
        @media(max-width:768px){ h1{ font-size:2.5rem;} .block{ font-size:0.9rem;} }
      `}</style>

      <main>
        <h1>{flower.title}</h1>
        <p className="block"><span className="highlight">Story:</span> {flower.story}</p>
        <p className="block"><span className="highlight">Language:</span> {flower.language}</p>
        <p className="block"><span className="highlight">Roro’s Note:</span> {flower.roroNote}</p>
      </main>
    </>
  );
}
