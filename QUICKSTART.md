# 🚀 البدء السريع | Quick Start

## عربي 🇸🇦

### التثبيت والتشغيل في 3 خطوات:

```bash
# 1. تثبيت المتطلبات
npm install

# 2. تشغيل المشروع
npm run dev

# 3. افتح المتصفح
# سيتم فتح http://localhost:3000 تلقائياً
```

### إضافة أداة جديدة:

1. افتح ملف `src/data/tools.js`
2. أضف الكود التالي:

```javascript
{
  id: 4,
  title: 'اسم الأداة الجديدة',
  description: 'وصف مختصر للأداة',
  icon: 'fa-solid fa-star', // أي أيقونة من Font Awesome
  link: 'https://your-tool-url.com',
  isActive: true,
  bgColor: 'bg-purple-600',
  shadowColor: 'shadow-purple-500/30',
  hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
  buttonBg: 'bg-purple-600 hover:bg-purple-500',
  buttonShadow: 'shadow-purple-900/20 group-hover:shadow-purple-500/40',
  hoverColor: 'group-hover:text-purple-400',
  decorBg: 'bg-purple-500/10 group-hover:bg-purple-500/20'
}
```

3. احفظ الملف - سترى التغيير فوراً! ✨

---

## English 🇺🇸

### Install and Run in 3 Steps:

```bash
# 1. Install dependencies
npm install

# 2. Run the project
npm run dev

# 3. Open browser
# Will automatically open http://localhost:3000
```

### Add a New Tool:

1. Open `src/data/tools.js`
2. Add this code:

```javascript
{
  id: 4,
  title: 'New Tool Name',
  description: 'Brief description of the tool',
  icon: 'fa-solid fa-star', // Any Font Awesome icon
  link: 'https://your-tool-url.com',
  isActive: true,
  bgColor: 'bg-purple-600',
  shadowColor: 'shadow-purple-500/30',
  hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
  buttonBg: 'bg-purple-600 hover:bg-purple-500',
  buttonShadow: 'shadow-purple-900/20 group-hover:shadow-purple-500/40',
  hoverColor: 'group-hover:text-purple-400',
  decorBg: 'bg-purple-500/10 group-hover:bg-purple-500/20'
}
```

3. Save - See changes instantly! ✨

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist` folder - ready to deploy!

---

## 🎨 Color Schemes

### Available Colors:

```javascript
// Indigo (Default)
bgColor: 'bg-indigo-600',
hoverShadow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',

// Purple
bgColor: 'bg-purple-600',
hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',

// Pink
bgColor: 'bg-pink-600',
hoverShadow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',

// Blue
bgColor: 'bg-blue-600',
hoverShadow: 'hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]',

// Green
bgColor: 'bg-green-600',
hoverShadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]',

// Orange
bgColor: 'bg-orange-600',
hoverShadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
```

---

## 🔧 Useful Commands

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Check for code issues
```

---

## 📚 Need More Help?

- 📖 **Full Guide (English)**: Read `README.md`
- 📖 **دليل كامل (عربي)**: اقرأ `INSTRUCTIONS_AR.md`
- 🔄 **Migration Details**: Check `MIGRATION_GUIDE.md`
- 📝 **All Changes**: See `CHANGELOG.md`

---

## 🆘 Troubleshooting

### Problem: Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in vite.config.js
```

### Problem: npm install fails
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problem: Font Awesome icons not showing
- Check internet connection (icons loaded from CDN)
- Or download Font Awesome locally

---

**Made with ❤️ for Content Engineering Team**

