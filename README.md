# O‘ktam ota choyxonasi

React + TypeScript tanishtiruv sayti. Menyu va narxlar, uch til, light/dark, galereya, xarita va aloqa havolalari saqlangan. Bron, buyurtma, to‘lov va mijoz ro‘yxatdan o‘tishi yo‘q.

## Hozir ishga tushirish
ZIPni oching. package.json, src va public shu asosiy papkaning o‘zida turadi. VS Code’da aynan shu papkani oching:

```
npm ci
npm run dev
```
Build: `npm run build`. Netlify uchun build command `npm run build`, publish directory `dist`.

Agar Netlify Environment ichida eski VITE_API_BASE_URL qo‘yilgan bo‘lsa, hozir statik ishlatish uchun uni olib tashlang yoki bo‘shating.

Hozir `.env.production` ichida `VITE_API_BASE_URL` bo‘sh. Sayt tasdiqlangan, koddagi menyu/narxlar bilan ishlaydi va backendga so‘rov yubormaydi. Bu holat real baza ishlayotgandek ko‘rsatilmaydi. Tanlangan taomlar va til/rejim brauzerda saqlanadi; ular backend yoki umumiy ma’lumotlar bazasi emas.

## Admin panel
`/admin/login` sahifasini oching yoki footer’dagi Admin havolasidan foydalaning. Bo‘limlar: Umumiy, Menyu, Xonalar, Galereya, E’lonlar, Sozlamalar.

Admin kodi tayyor, ammo backend ulanmaguncha email/parol bilan kirish va bazaga saqlash ishlamaydi. Sahifada bu holat aniq yozilgan va Kirish tugmasi o‘chirilgan. Soxta admin akkaunt, demo parol va mahalliy soxta baza yo‘q. Admin ekranlari faqat haqiqiy server tekshiruvidan keyin ochiladi. Sessiya tugaganda qayta kirish kerak.

## Backendni ulash — keyin bajariladi
`optional-backend/` ichida shu admin panelga mos haqiqiy Supabase backend kodi bor. Hozir uni o‘rnatish shart emas.

1. Mavjud Supabase loyihangizda oldin 00001 va 00002 migratsiyalari bajarilgan bo‘lsa, faqat `optional-backend/supabase/migrations/00003_admin_panel_menu.sql` ni SQL Editor’da bajaring. Eski `seed.sql` ni qayta ishlatmang. Baza backupini oldindan oling.
2. `optional-backend` ichidagi fayllarni backend GitHub repository ildiziga joylashtiring. Render build: `npm ci && npm run build`; start: `npm start`; Node 22+. Environment: SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_STORAGE_BUCKET=choyxona-media. ALLOWED_ORIGINS ga haqiqiy frontend origin’ini yozing. Maxfiy service_role faqat serverda qoladi.
3. Render API: `/api/health`, `/api/settings`, `/api/menu` javoblarini tekshiring. Faqat eski backendni ulash barcha yangi endpointlarni avtomatik yaratmaydi; ushbu yangilangan backend ham deploy qilinishi kerak.
4. Frontend `.env.production` va mahalliy `.env` da `VITE_API_BASE_URL=/backend` yozing. Qayta build/deploy qiling. `.env.example` faqat namuna, Vite uni avtomatik yuklamaydi.
5. `public/_redirects` va Vite proxy hozir `https://ai-project-backend-tkol.onrender.com` uchun sozlangan. Render URL o‘zgarsa, shu ikki joyni yangilang.
6. Supabase Auth’dagi mavjud admin akkauntingiz bilan `/admin/login` orqali kiring. Uning UUID’i himoyalangan admin_roles jadvalida bo‘lishi shart. Oddiy Auth foydalanuvchisi admin emas. Birinchi admin tartibi optional-backend/README_ADMIN.md faylida.

Ulangandan keyin menyu, xonalar, galereya, e’lonlar va sozlamalar haqiqiy API’dan olinadi. Nashr qilinmagan ma’lumotlar ommaga chiqmaydi. Muvaffaqiyatli bo‘sh API ro‘yxati eski statik yozuvlar bilan to‘ldirilmaydi. API xatosida asosiy kontent va xato xabari ko‘rinadi. Saqlash xatosida admin muvaffaqiyat ko‘rsatmaydi.

Xonalar/galereya/menyu CRUD, uch tildagi matnlar, narxlar, tartib va nashr holati mavjud. Yuklash faqat JPEG, PNG, WebP; maksimal 5 MB. Backend fayl imzosini tekshiradi; Storage darajasida ham MIME/hajm cheklangan. E’lon vaqtlarini Asia/Tashkent bo‘yicha kiriting. Tugash vaqti bo‘sh bo‘lishi mumkin. Yangi rasm private Storage’da, mavjud sayt rasmlari esa public/images ichida qoladi. Bir soatlik signed URL’lar vaqtincha amal qiladi.

## Havola, rasm va ma’lumotlarni almashtirish
Hozir backend yo‘q holatda:
- Google Maps, Instagram, Telegram: `src/data/location.ts`.
- Menyu, narxlar, taom tasvirlari va galereya: `src/data/content.ts`.
- Tarjimalar: `src/i18n.tsx`, `src/data/experience.ts`.
Instagram va Telegram uchun oldin bergan havolalaringiz qo‘yildi. Ularni location.ts ichidan almashtirishingiz mumkin. Fake profil o‘ylab topilmagan.

Achchiq-chuchuk rasmi yuborgan yangi tasviringiz bilan almashtirildi. PNG shashliklar WebP’ga siqildi. Galereya tartibi saqlangan, AI tasvirlari haqida izoh qo‘shildi. Tasdiqlanmagan go‘sht manbasi, sifat va bo‘sh sharhlar ommaga ko‘rsatilmaydi. Taom uchun ma’lumot kelganda kerakli bo‘lim ochiladi.

Backend ulanganidan keyin bazadagi qiymatlar ustun. Null ijtimoiy havola tugmasi yashiriladi. Null yoki noma’lum koordinatali xarita uchun soxta joy ko‘rsatilmaydi. RU/EN tavsiflar o‘zbekcha matn bilan avtomatik almashtirilmaydi. Admin barcha tarjimalarni alohida kiritishi mumkin.

## Google va havola preview’i
Open Graph, Twitter Card, favicon va preview rasmi qo‘shilgan. Haqiqiy hosting manzilingiz berilmagani uchun canonical domen o‘ylab topilmadi. `.env.production` da `VITE_SITE_URL=https://haqiqiy-saytingiz.netlify.app` yozib, qayta build qilsangiz canonical, to‘liq preview rasm havolasi va sitemap avtomatik yaratiladi. O‘z domeningiz bo‘lsa o‘shani yozing. robots.txt admin yo‘llarini indekslashdan chiqaradi. Sayt SPA bo‘lgani uchun har taomga alohida serverda tayyorlangan social preview yo‘q; asosiy sayt preview’i bor. Google’da birinchi o‘rin kafolatlanmaydi.

## Tekshiruv chegarasi
Frontend build va API parser holatlari tekshirildi. Brauzerda menyu, yangi salat rasmi, tillar va backend ulanmagan admin holati ko‘rildi. Optional backend TypeScript va ruxsat testlari bilan tekshiriladi. Sizning Render, Supabase yoki Netlify hisobingizda deploy/migration bajarilmadi. Haqiqiy admin CRUD va Storage’ni ulashdan so‘ng o‘z loyihangizda sinang.
