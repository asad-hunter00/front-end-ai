import {useEffect,useRef,useState} from 'react';
import {usePreferences} from '../i18n';
/** Shows a real frame from the video, with native playback controls. */
export function VideoPreview({src,title}:{src?:string;title:string}){
 const {lang}=usePreferences();const ref=useRef<HTMLVideoElement>(null);
 const [poster,setPoster]=useState<string>(),[ready,setReady]=useState(false),[failed,setFailed]=useState(false);
 useEffect(()=>{setPoster(undefined);setReady(false);setFailed(false);},[src]);
 const capture=()=>{const v=ref.current;if(!v)return;setReady(true);try{const c=document.createElement('canvas');c.width=640;c.height=Math.max(1,Math.round(640*v.videoHeight/v.videoWidth));const ctx=c.getContext('2d');if(!ctx)return;ctx.drawImage(v,0,0,c.width,c.height);setPoster(c.toDataURL('image/jpeg',.8));}catch{/* Native video still displays the decoded frame if canvas is unavailable. */}};
 return <div className="video-preview">
  <video ref={ref} controls playsInline preload="metadata" crossOrigin="anonymous" src={src} poster={poster} aria-label={title}
   onLoadedMetadata={e=>{const v=e.currentTarget;if(Number.isFinite(v.duration)&&v.duration>.2)v.currentTime=Math.min(1,v.duration/4);}}
   onLoadedData={capture} onSeeked={capture} onError={()=>{setFailed(true);setReady(false);}}/>
  {!ready&&<div className="video-preview-placeholder"><span aria-hidden="true">▶</span><strong>{title}</strong><small>{failed?{uz:'Video yuklanmadi. Sahifani yangilang.',ru:'Видео не загрузилось. Обновите страницу.',en:'Video could not load. Refresh the page.'}[lang]:{uz:'Video tayyorlanmoqda…',ru:'Подготовка видео…',en:'Preparing video…'}[lang]}</small></div>}
 </div>;
}
