# Birinchi administrator
Supabase → Authentication → Users → Add user orqali email/parol bilan akkaunt yarating. Emailini tasdiqlang. UUID’ini oling va SQL Editor’da bajaring:

```sql
insert into public.admin_roles (user_id, role)
values ('HAQIQIY_AUTH_UUID', 'superadmin')
on conflict (user_id) do update set role = excluded.role;
```

Buni faqat Supabase boshqaruv panelida bajaring. Ochiq signup sahifasi yo‘q. Supabase Auth sozlamasida ommaviy signup’ni o‘chiring. Parol va service_role kalitni chatga, frontendga yoki GitHub’ga yubormang. Avval yaratilgan admin bo‘lsa yangi akkaunt yaratish shart emas.

Mavjud loyihaga faqat 00003 migration. Yangi bo‘sh loyihada avval 00001, keyin 00002, so‘ng 00003 bajariladi. Eski seed kerak bo‘lsa faqat bo‘sh bazani dastlab to‘ldirish uchun, admin ma’lumotlarini tahrirlashdan oldin bajariladi.

Render: Node22+, build `npm ci && npm run build`, start `npm start`. Kalitlar .env.example namunasi bo‘yicha Render Environment’da. Sinovlar: `npm test`. Umumiy holat /api/health. Server ildizida dashboard yo‘q, u frontend /admin route’ida.
