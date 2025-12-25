# 🧠 React Quiz App

Bu proje, React ve Vite kullanılarak geliştirilmiş bir **quiz (soru-cevap) uygulamasıdır**.  
Kullanıcıya belirli kurallar çerçevesinde sorular sorulur ve test sonunda doğru, yanlış ve boş cevap sayıları gösterilir.

<a href="https://vermillion-elf-94ddfa.netlify.app/">Canlı link</a>

## 🚀 Kullanılan Teknolojiler
<ul>
<li> ⚛️ React</li>
<li> ⚡ Vite</li>
<li> 🎨 CSS</li>
<li> 🧩 JavaScript (ES6)</li>
</ul>
---

## 📋 Proje Özellikleri

Uygulama aşağıdaki gereksinimleri karşılayacak şekilde geliştirilmiştir:
<ul>
<li> ✅ Uygulama **10 sorudan** oluşmaktadır.</li>
<li> ⏱️ Her soru ekranda **30 saniye** kalır.</li>
<li> 👀 İlk **4 saniye** boyunca cevap şıkları gizlidir.</li>
<li> 👉 Bir şık tıklandığında veya süre dolduğunda otomatik olarak **bir sonraki soruya geçilir**.</li>
<li> 🔙 **Geçmiş sorulara dönülemez.**</li>
<li> 📊 Test bitiminde:</li>
<ul>
  <li> Doğru cevap sayısı </li> 
  <li> Yanlış cevap sayısı </li> 
  <li> Boş bırakılan soru sayısı  </li>
  <li> Verilen cevaplar (soru numarasıyla birlikte)  </li>
  kullanıcıya gösterilir.</li>
  </ul>
</ul>
---

## 🖥️ Kurulum ve Çalıştırma

Projeyi bilgisayarında çalıştırmak için:

```bash
git clone <repo-link>
cd question-app
npm install
npm run dev
http://localhost:5173

📁 Proje Yapısı

src/
 ├─ assets/
 │   ├─ pictures/      # Soru görselleri
 │   └─ questions.js  # Soru verileri
 ├─ components/
 │   ├─ Info/
 │   └─ Questions/
 ├─ App.jsx
 └─ main.jsx

🧠 Uygulama Mantığı
<ul>
<li> Sorular questions.js dosyasından alınır.</li>

<li> Her soru için sayaç başlatılır.</li>

<li> Kullanıcı cevap verdiğinde cevap kilitlenir ve sonuç kaydedilir.</li>

<li> Test sonunda sonuçlar aynı sayfada gösterilir.</li>
</ul>

✨ Geliştirici

Şeyma Kayserili
Patika.dev Front-End Bootcamp kapsamında geliştirilmiştir.