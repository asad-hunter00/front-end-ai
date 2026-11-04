import {apiRequest} from './admin';
export interface VideoRow {id:string;title:{uz:string;ru:string;en:string};description:{uz:string;ru:string;en:string};signed_url?:string;is_published:boolean;sort_order:number;created_at:string;updated_at:string;}
export const videoDate=(date:string,_lang='uz')=>{
 const d=new Date(date);if(Number.isNaN(d.getTime()))return '—';
 const parts=new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',hourCycle:'h23',timeZone:'Asia/Tashkent'}).formatToParts(d);
 const get=(type:string)=>parts.find(p=>p.type===type)?.value||'';
 return `${get('day')}.${get('month')}.${get('year')}, ${get('hour')}:${get('minute')}`;
};
export async function uploadVideo(file:File,token:string,onProgress:(percent:number)=>void){
 if(file.type!=='video/mp4'||file.size<=0||file.size>52428800)throw new Error('MP4 video tanlang, maksimal 50 MB');
 const ticket=await apiRequest<{id:string;signed_url:string}>('videos/upload-url',{method:'POST',token,body:{mime_type:'video/mp4',file_size:file.size}});
 try{await new Promise<void>((resolve,reject)=>{const xhr=new XMLHttpRequest();xhr.open('PUT',ticket.signed_url);xhr.setRequestHeader('Content-Type','video/mp4');xhr.timeout=600000;xhr.upload.onprogress=e=>{if(e.lengthComputable)onProgress(Math.round(e.loaded/e.total*100));};xhr.onerror=()=>reject(new Error('Video yuklashda tarmoq xatosi'));xhr.ontimeout=()=>reject(new Error('Video yuklash vaqti tugadi'));xhr.onload=()=>xhr.status>=200&&xhr.status<300?resolve():reject(new Error('Video yuklanmadi: '+xhr.status));xhr.send(file);});
 await apiRequest(`videos/${ticket.id}/complete`,{method:'POST',token});return ticket.id;
 }catch(e){await apiRequest(`videos/${ticket.id}`,{method:'DELETE',token}).catch(()=>{});throw e;}
}
