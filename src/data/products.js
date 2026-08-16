//Dummy data - saglyat "image" kele ani ekach format
export const allProducts = [
  { 
    id: 1, 
    name: "Diamond Ring", 
    price: "₹45,999", 
    category: "rings", 
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500", // img -> image
    desc: "18K Gold with certified diamond. Perfect for engagement.",
    sale: false
  },
  { 
    id: 2, 
    name: "Gold Necklace", 
    price: "₹1,20,000", 
    category: "necklace", 
    image: "https://i.pinimg.com/564x/0b/59/71/0b5971f6efb582ecc4f087778ae09226.jpg", // img -> image
    desc: "Traditional Maharashtrian design. 22K BIS Hallmarked.",
    sale: false
  },
  { 
    id: 3, 
    name: "Pearl Earrings", 
    price: "₹12,499", 
    category: "earrings", 
    image: "https://yellowchimes.com/cdn/shop/files/1731666009378_2.jpg?v=1745489560", // img -> image
    desc: "South sea pearl with gold hook.",
    sale: false
  },
  { 
    id: 4, 
    name: "Sale Ring 50% Off", 
    price: "₹22,999", 
    originalPrice: "₹45,999", // add kela
    category: "sale", 
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500", // img -> image
    desc: "Limited time offer on this gold band.",
    sale: true // add kela
  },
  
  // TUZE BAKI 8 PRODUCTS - already barobar aahet
  {
    id: 5, name: "Royal Diamond Ring", category: "rings", price: "₹45,999", originalPrice: "₹52,000",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkMPcSN8X5BVuJlDyib3f_ZnJCyCcUxWeo5ppiFudHerJWH0r2L5K4mPP3HzTfRYJa9ebYUyOiMGOlxk-1xsY1BMuCsjo8YZizusgoRQ7C", sale: false
  },
  {
    id: 6, name: "Gold Band Ring", category: "rings", price: "₹28,500",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600", sale: false
  },
  {
    id: 7, name: "Temple Gold Necklace", category: "necklace", price: "₹1,25,000", originalPrice: "₹1,40,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVuqVsOxUNncYHYbAhOCKT8h7WCxu4We2JuWIrxA1QouFFLxDXc0Z81A&s=10", sale: true
  },
  {
    id: 8, name: "Pearl Choker Necklace", category: "necklace", price: "₹65,000",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600", sale: false
  },
  {
    id: 9, name: "Jhumka Earrings", category: "earrings", price: "₹32,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFutj2Qs4c8wagFxhqDdzbPNBKIAd0G1U1GCDOjtMMOQQzzibe3Yp1Mk&s=10", sale: false
  },
  {
    id: 10, name: "Diamond Studs", category: "earrings", price: "₹18,999", originalPrice: "₹22,000",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600", sale: true
  },
  {
    id: 11, name: "Traditional Gold Bangles", category: "bangles", price: "₹89,000",
    image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd4ae8b80/images/hi-res/516061VAG1A00_1.jpg?sw=480&sh=480", sale: false
  },
  {
    id: 12, name: "Kundan Bangles Set", category: "bangles", price: "₹55,000", originalPrice: "₹60,000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYiRjLM6pY-fpfUWrepVqRH6CngWICaTSmd27648ClKQ_8H99Pcq2jyA&s=10", sale: true
  },
   { id: 13, name: "Diamond Solitaire Ring", category: "rings", price: "₹85,000", originalPrice: "₹95,000", image: "https://manubhai.in/wp-content/uploads/2026/01/DJBE13636.jpg", sale: true },
  { id: 14, name: "Gold Band Ring", category: "rings", price: "₹28,500", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600", sale: false },
  { id: 15, name: "Royal Diamond Ring", category: "rings", price: "₹45,999", originalPrice: "₹52,000", image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=600", sale: true },
  { id: 16, name: "Kundan Stone Ring", category: "rings", price: "₹32,500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfqyl69mVyGc3O1P7ayWSap_bgeGOH94o7DQl10WnGAOTZPC04Mv1vvQ&s=10", sale: false },
  { id: 17, name: "Rose Gold Minimal Ring", category: "rings", price: "₹19,999", originalPrice: "₹24,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxYPBgHPXyMNKNsi7xd0tTIP3aqKFGCLfgSfFMUbf3g&s=10", sale: true },
  { id: 18, name: "Antique Gold Ring", category: "rings", price: "₹41,000", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600", sale: false },
  { id: 19, name: "Couple Wedding Bands", category: "rings", price: "₹55,000", image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600", sale: false },
  { id: 20, name: "3 Stone Engagement Ring", category: "rings", price: "₹1,35,000", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600", sale: false },
  { id: 21, name: "Vintage Diamond Ring", category: "rings", price: "₹92,000", originalPrice: "₹1,05,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqAtzDtSkm7HCZ-nj8ArdzEvDiCmHvzjfZLNVsF7hfoU6CF_HEyjdzel8&s=10", sale: true },
  { id: 22, name: "Simple Gold Band", category: "rings", price: "₹24,999", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600", sale: false },
  { id: 23, name: "Emerald Gold Ring", category: "rings", price: "₹67,000", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600", sale: false },
  { id: 24, name: "Ruby Cocktail Ring", category: "rings", price: "₹38,500", originalPrice: "₹42,000", image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=600", sale: true },
  { id: 25, name: "Platinum Solitaire", category: "rings", price: "₹1,80,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcB8wmVLsWlbPnWcsgL6rN0G5CGyikZ65Jo28VIUaGsA&s=10", sale: false },
  { id: 26, name: "Meenakari Gold Ring", category: "rings", price: "₹29,999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQTYeFaQ2XXB-alvf_5hWNElHnup1-VNzwKKpO5ukhL5yxgMg8eBWmmw&s=10", sale: false },
  { id: 27, name: "Diamond Halo Ring", category: "rings", price: "₹1,10,000", originalPrice: "₹1,25,000", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600", sale: true },
  { id: 28, name: "Temple Design Ring", category: "rings", price: "₹35,000", image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600", sale: false },

  // ========== 18 BANGLES ==========
  { id: 29, name: "Traditional Gold Bangles", category: "bangles", price: "₹89,000", image: "https://saragandevikaronline.com/image/cache/catalog/19-3-25/GBG-7346&GBG-7347_1-1500x1500.JPG", sale: false },
  { id: 30, name: "Kundan Bangles Set", category: "bangles", price: "₹55,000", originalPrice: "₹60,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpCkwVbnHyzO8C6IN9gSgkU4sV1c7-2SkEJxz1aS3BwewyePT72-NYwQ&s=10", sale: true },
  { id: 31, name: "Diamond Bangles Set", category: "bangles", price: "₹2,50,000", image: "https://www.sasitrends.com/cdn/shop/files/1197D-elegant-one-gram-micro-gold-plated-americon-daimonds-bangle-sasitrends.jpg?v=1748867798", sale: false },
  { id: 32, name: "Wedding Chooda Bangles", category: "bangles", price: "₹1,20,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCh5_LAH3q-jjy9C-bDMTAW8S5Y-e_w0HK2DSotRk7w&s=10", sale: false },
  { id: 33, name: "Meenakari Bangles", category: "bangles", price: "₹48,000", originalPrice: "₹52,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSoGf1rMWj69q5QFVkSKhZ5mqyIll1uRwsJvh16iXkw&s=10", sale: true },
  { id: 34, name: "Plain Gold Bangles 4pcs", category: "bangles", price: "₹95,000", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4dd260c0/images/hi-res/55D5PAVJF1A02_1.jpg?sw=480&sh=480", sale: false },
  { id: 35, name: "Antique Bangles Set", category: "bangles", price: "₹78,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodMygyYXFDItvYOdESObBUL2J2ltrdUS8_RLW74RR9Q&s=10", sale: false },
  { id: 36, name: "Stone Work Bangles", category: "bangles", price: "₹65,000", originalPrice: "₹70,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f8usoyb5xu8_jn34SCLjWp07fH_HZ9JlXUlV8EBYjQ&s=10", sale: true },
  { id: 37, name: "Laser Cut Gold Bangles", category: "bangles", price: "₹1,05,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVoYALSVK07zh_jbZFQboIvEK4wBWfGOKsDmgXCrUarSMgW9GFxCQrRuy&s=10", sale: false },
  { id: 38, name: "Temple Bangles Set", category: "bangles", price: "₹1,35,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZXM3_WnDU8N3rYPUdtooTgnpzLp2YOpGf0So3-Z6qhM577RGJvn8ZKu4&s=10", sale: false },
  { id: 39, name: "Pearl Bangles", category: "bangles", price: "₹42,000", originalPrice: "₹48,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_IZT7uAn78NoeS747u1zsptp_UQEF0DjSg4R_jT_tWVGtaaB07mHpXv_&s=10", sale: true },
  { id: 40, name: "Tribute Bangles", category: "bangles", price: "₹58,000", image: "https://image.hm.com/assets/hm/fb/f1/fbf1a2c54a8ffcef21524fbd22a2244d81cbb8c6.jpg?imwidth=2160", sale: false },
  { id: 41, name: "Bridal Bangles Set", category: "bangles", price: "₹1,85,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KZU7Zsw2khw36DqWjYJ-xW2dRr_fILuD6Gw2hq3Q8VBF4Gwf7Un9gXo9&s=10", sale: false },
  { id: 42, name: "Daily Wear Bangles", category: "bangles", price: "₹32,000", originalPrice: "₹35,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKDnGpvqUwN1UOwP0xEpsjOwMyYbGyVI0mLO_Y7ZFCJRP4y7FwXrej6o&s=10", sale: true },
  { id: 43, name: "Kada Bangles Pair", category: "bangles", price: "₹1,50,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3FXHIgpPl-QtQK_3W4Hray7LydMvhNODRKpP7gvSzw&s=10", sale: false },
  { id: 44, name: "Polki Bangles", category: "bangles", price: "₹2,10,000", image: "https://saragandevikaronline.com/image/cache/catalog/19-3-25/GBG-5795&GBG-5796_1-1500x1500.JPG", sale: false },
  { id: 45, name: "Enamel Bangles", category: "bangles", price: "₹39,999", originalPrice: "₹45,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKDOsbjZahP_2BAr4UsfCNIivyxGh7h0vUY_11gcKdjg22evzFPrmEy1D&s=10", sale: true },
  { id: 46, name: "Gold Twist Bangles", category: "bangles", price: "₹88,000", image: "https://rubans.in/cdn/shop/files/rubans-set-of-2-18k-gold-plated-multicolor-enamel-stone-studded-floral-design-bangles-bangles-bracelet-1143858140.jpg?v=1755714152&width=610", sale: false },

  // ========== 20 NECKLACE ==========
  { id: 47, name: "Gold Necklace", category: "necklace", price: "₹1,20,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaxEvPzecyG8SSjj4Krd-_7VNqRjJXsltItVV9TQ4gHyyP80dODEbo7xx&s=10", sale: false },
  { id: 48, name: "Temple Gold Necklace", category: "necklace", price: "₹1,25,000", originalPrice: "₹1,40,000", image: "https://ratnalayajewels.com/wp-content/uploads/2023/07/DN-150-13.jpg", sale: true },
  { id: 49, name: "Pearl Choker Necklace", category: "necklace", price: "₹65,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-M3wxgr6hr1FJbq5pnJOPI_tnNllZwy16XE-X2VW2H-ro5YmZaJQFkE&s=10", sale: false },
  { id: 50, name: "Diamond Necklace Set", category: "necklace", price: "₹4,50,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7DreL4e3wSZY8kkigyHLAwivx2C9UBGpeEQdWhdAg6-G9AWFJBEQ2xs&s=10", sale: false },
  { id: 51, name: "Kundan Necklace", category: "necklace", price: "₹1,85,000", originalPrice: "₹2,00,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8v5qwE_fmLoWXeP4SE-gTMakXIurV12C-SJYCo8L5iw&s", sale: true },
  { id: 52, name: "Antique Necklace", category: "necklace", price: "₹2,20,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRac7ztrUqMpsw24Zokk-4YMDVi9iuO_xRTKRVKZJ1NRcpOhPgGpKK9NyA&s=10", sale: false },
  { id: 53, name: "Long Gold Chain", category: "necklace", price: "₹95,000", image: "https://shop.southindiajewels.com/wp-content/uploads/2025/01/Diamond-Look-Alike-Necklace.jpg", sale: false },
  { id: 54, name: "Polki Necklace Set", category: "necklace", price: "₹3,80,000", originalPrice: "₹4,00,000", image: "https://cbjgold.com/public/uploads/170773092927.jpg", sale: true },
  { id: 55, name: "Maharashtrian Thushi", category: "necklace", price: "₹75,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXbT88ybE0b4v65yOLc231xytEZSIxvEWuoxyL6t3xn4YlzhmKjM9b3A&s=10", sale: false },
  { id: 56, name: "Bridal Necklace Set", category: "necklace", price: "₹5,50,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81tCUsTaVXWNdyubijbma4qm91jHzSwSSN9b4yzn8M1eIZo8z0BJA-b-x&s=10", sale: false },
  { id: 57, name: "Layered Gold Necklace", category: "necklace", price: "₹1,60,000", originalPrice: "₹1,75,000", image: "https://images.meesho.com/images/products/237548733/y77hq_512.webp?width=512", sale: true },
  { id: 58, name: "Ruby Necklace", category: "necklace", price: "₹2,90,000", image: "https://www.giva.co/cdn/shop/files/GDLPD0295_5_494e6fd2-1be6-47a6-98b6-080f78498b66.jpg?v=1756388046&width=1946", sale: false },
  { id: 59, name: "Emerald Choker", category: "necklace", price: "₹3,20,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZjj2q5aaXraWTVrLEFDg9FhB5TxxnqRFREINyPHbsCwFdVmiv5EnXMKc&s=10", sale: false },
  { id: 60, name: "Daily Wear Necklace", category: "necklace", price: "₹48,000", originalPrice: "₹52,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9VqimFcN_9vW_4_8C4I3U_o34ii_OfaY2bR89BSiqXYcIR8sEdfotAgg&s=10", sale: true },
  { id: 61, name: "Meenakari Necklace", category: "necklace", price: "₹1,10,000", image: "https://tiimg.tistatic.com/fp/1/005/307/diamond-gold-necklace-450.jpg", sale: false },
  { id: 62, name: "Stone Necklace Set", category: "necklace", price: "₹1,45,000", image: "https://live.jewelbox.co.in/wp-content/uploads/2024/12/PNK0060-frontYG.jpg", sale: false },
  { id: 63, name: "Diamond Choker", category: "necklace", price: "₹2,75,000", originalPrice: "₹3,00,000", image: "https://images.jdmagicbox.com/quickquotes/images_main/-2igaga1a.jpg", sale: true },
  { id: 64, name: "Gold Bead Necklace", category: "necklace", price: "₹88,000", image: "https://m.media-amazon.com/images/I/41S-Iz0RFVL._AC_UY1100_.jpg", sale: false },
  { id: 65, name: "Royal Necklace Set", category: "necklace", price: "₹6,20,000", image: "https://cpimg.tistatic.com/6556693/b/4/american-diamond-necklace-set.jpg", sale: false },
  { id: 66, name: "Festive Necklace", category: "necklace", price: "₹1,35,000", originalPrice: "₹1,50,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33GrrZgOwyV6W6wyCIckHvkc_RXm0ixAigbJp5SroY4F-izyKTm-OZQU&s=10", sale: true },

  // ========== 15 EARRINGS ==========
  { id: 67, name: "Pearl Earrings", category: "earrings", price: "₹12,499", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBGji1r2nhHjXKJftcj7AsFg3KMhju90o1c6QieNuOC96nV5BBX1j0tGj&s=10", sale: false },
  { id: 68, name: "Jhumka Earrings", category: "earrings", price: "₹32,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ434q5IcmZNWPIK7yRIj7-Rt4zo6GB4rAwFv8UtRRE7CQkpEr2VUXYvvpa&s=10", sale: false },
  { id: 69, name: "Diamond Studs", category: "earrings", price: "₹18,999", originalPrice: "₹22,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6EW_5qGbP1bjBp_OXMQYZlgTso92yxsicidnA7NOCQeI8uAYjvooHhb-&s=10", sale: true },
  { id: 70, name: "Gold Chandbali", category: "earrings", price: "₹45,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGIVCgQ9zKytxKZXGiZwI77quk-y0-gqYaHTP6IOfS4fdKsHXVFES0Bc&s=10", sale: false },
  { id: 71, name: "Kundan Earrings", category: "earrings", price: "₹28,500", originalPrice: "₹32,000", image: "https://sulbha.com/cdn/shop/products/HE-FV-71_1024x1024.jpg?v=1585636923", sale: true },
  { id: 72, name: "Temple Earrings", category: "earrings", price: "₹38,000", image: "https://mrjewels.in/cdn/shop/files/IMG_3597.jpg?v=1767693523", sale: false },
  { id: 73, name: "Diamond Jhumka", category: "earrings", price: "₹1,25,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0GsYl7JnwtR1jG3agDxD1YBdmPoiAbNFNvovlsniKwvL7aBNVQmxq9TX&s=10", sale: false },
  { id: 74, name: "Gold Hoop Earrings", category: "earrings", price: "₹22,000", originalPrice: "₹25,000", image: "https://www.pihtarajewels.com/cdn/shop/files/PD009EE22-2.jpg?v=1769142683&width=1445", sale: true },
  { id: 75, name: "Pearl Drop Earrings", category: "earrings", price: "₹16,500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxhsBniW8Bc12YghJFSpoUc1exQU3xveCbXkOZCUfcg&s=10", sale: false },
  { id: 76, name: "Antique Earrings", category: "earrings", price: "₹52,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8tCG1MeFKtV3Ccw6K8N0xr0DqVgyT7b9G-FGK57zDuJczOdq9eZ_NK4&s=10", sale: false },
  { id: 77, name: "Stone Stud Earrings", category: "earrings", price: "₹14,999", originalPrice: "₹17,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYs5XTt21VbQ6Mz2dim6TxOC7CIP6TXDF0Znm7i_EbODGZylf-ZfIbfU&s=10", sale: true },
  { id: 78, name: "Bridal Earrings", category: "earrings", price: "₹85,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfjIFpYywsu2k-Gp_64k5e2Bf0olufsW1T8NEjNKypw&s=10", sale: false },
  { id: 79, name: "Meenakari Earrings", category: "earrings", price: "₹29,999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxEhEl7SDmsapopx3Fz4fj_2No7kOoWAxF4KQLlB7umKQynyqDUblq9gr&s=10", sale: false },
  { id: 80, name: "Daily Wear Studs", category: "earrings", price: "₹9,999", originalPrice: "₹12,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jM3n0qvnXfWTm7F4W_UMKFdAgyKsDNeGac9JVu2ozfhR2Ghh9_3Wcy4&s=10", sale: true },
  { id: 81, name: "Long Tassel Earrings", category: "earrings", price: "₹35,000", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8223e352/images/hi-res/50D1D2SJZAGA02_1.jpg?sw=480&sh=480", sale: false },
];