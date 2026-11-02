import fs from 'node:fs';
const env=Object.fromEntries(['.env','.env.production'].flatMap(file=>fs.existsSync(file)?fs.readFileSync(file,'utf8').split(/\r?\n/).filter(l=>/^[A-Z_]+=/.test(l)).map(l=>{const i=l.indexOf('=');return [l.slice(0,i),l.slice(i+1).trim().replace(/^['"]|['"]$/g,'')]}):[]));
const raw=process.env.VITE_SITE_URL||env.VITE_SITE_URL||'';
let base='';if(raw){const u=new URL(raw);if(!['https:','http:'].includes(u.protocol))throw new Error('VITE_SITE_URL http(s) bo‘lishi kerak');base=u.origin;}
let html=fs.readFileSync('index.html','utf8').replace(/<!-- seo-generated -->[\s\S]*?<!-- seo-end -->/,'');
const image=base+'/social-preview.jpg';
const tags=`<!-- seo-generated -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="uz_UZ" />
<meta property="og:site_name" content="O‘ktam ota choyxonasi" />
<meta property="og:title" content="O‘ktam ota choyxonasi — menyu va manzil" />
<meta property="og:description" content="Jizzaxdagi choyxona: menyu, narxlar, xonalar va aloqa ma’lumotlari." />
<meta property="og:image" content="${image}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="${image}" />
${base?`<meta property="og:url" content="${base}/" /><link rel="canonical" href="${base}/" />`:''}
<link rel="icon" type="image/png" href="/favicon.png" />
<!-- seo-end -->`;
fs.writeFileSync('index.html',html.replace('</head>',tags+'\n</head>'));
fs.writeFileSync('public/robots.txt','User-agent: *\nAllow: /\nDisallow: /admin\n'+(base?'Sitemap: '+base+'/sitemap.xml\n':''));
if(base){fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+['/','/menu','/gallery','/videos'].map(path=>'<url><loc>'+base+path+'</loc></url>').join('')+'</urlset>');}else if(fs.existsSync('public/sitemap.xml'))fs.unlinkSync('public/sitemap.xml');
console.log(base?'SEO: '+base:'SEO: domen hali berilmagan; canonical/sitemap qo‘shilmadi.');
