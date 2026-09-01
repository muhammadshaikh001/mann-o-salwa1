import { useEffect, useRef, useState } from 'react';

const categories = [
  'All',
  'King Off Raan',
  'Tawa-Ka-Jalwa',
  'Chicken Moghlai',
  'Mutton Moghlai',
  'Egg Ka Fanda',
  'Indian Main Course',
  'Mutton Starter',
  'Paneer Dry',
  'Thal Ka Maza',
  'Sea Food Sp.',
  'Chinese Rice',
  'Rice',
  'Roti',
  'Soup',
  'Chinese Starter',
  'Noodles',
  'Food On The Fire',
  'Salad / Papad / Raita',
  'Cold Drinks',
  'Sweet',
];

const menuItems = [
  // ─── KING OFF RAAN ───
  { category: 'King Off Raan', name: 'Mann O Salwa Sp. Raan', price: '₹1699' },
  { category: 'King Off Raan', name: 'Golden Tawa Fry Raan', price: '₹1599' },
  { category: 'King Off Raan', name: 'B.B.Q. Raan', price: '₹1499' },
  { category: 'King Off Raan', name: 'Lebness Raan', price: '₹1699' },
  { category: 'King Off Raan', name: 'Cream Raan', price: '₹1699' },
  { category: 'King Off Raan', name: 'Raan Sizzler', price: '₹1999' },
  { category: 'King Off Raan', name: 'Peshawari Raan', price: '₹1699' },
  { category: 'King Off Raan', name: 'Raan Biriyani', price: '₹2000' },
  { category: 'King Off Raan', name: 'Mann O Salwa Sp. Raan Biriyani', price: '₹2499' },

  // ─── TAWA-KA-JALWA ───
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Sheek Tawa Fry', price: '₹249' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Bhuna', price: '₹299' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Angoori (8 Person)', price: '₹1599' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Lakhnavi Tawa Fry', price: '₹549' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Sitara', price: '₹849' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Golden Stik (5 Person)', price: '₹599' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Tikka Masala', price: '₹249' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Tawa Fry', price: '₹549' },
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Apple Tikka Tawa Fry', price: '₹499' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Bhuna', price: '₹399' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Chap Tawa Fry', price: '₹349' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Bombay Chap Tawa Fry', price: '₹399' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Bheja Tawa Fry', price: '₹269' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Mari Bheja', price: '₹299' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Gurda Kaleji', price: '₹349' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Hyderabadi', price: '₹499' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Angoori', price: '₹899 / ₹1649' },
  { category: 'Tawa-Ka-Jalwa', name: 'Mutton Darbari', price: '₹449' },

  // ─── CHICKEN MOGHLAI ───
  { category: 'Chicken Moghlai', name: 'Chicken Masala', price: '₹149' },
  { category: 'Chicken Moghlai', name: 'Chicken Handi', price: '₹199' },
  { category: 'Chicken Moghlai', name: 'Chicken Kadai', price: '₹199' },
  { category: 'Chicken Moghlai', name: 'Chicken Angara', price: '₹429' },
  { category: 'Chicken Moghlai', name: 'Chicken Rara', price: '₹349' },
  { category: 'Chicken Moghlai', name: 'Chicken Kolhapuri', price: '₹299' },
  { category: 'Chicken Moghlai', name: 'Chicken Nawabi', price: '₹349' },
  { category: 'Chicken Moghlai', name: 'Chicken Irani', price: '₹369' },
  { category: 'Chicken Moghlai', name: 'Butter Chicken', price: '₹299' },
  { category: 'Chicken Moghlai', name: 'Chicken Kashmiri Masala', price: '₹349' },
  { category: 'Chicken Moghlai', name: 'Chicken Peshawari', price: '₹399' },
  { category: 'Chicken Moghlai', name: 'Chicken Maharaja', price: '₹599' },
  { category: 'Chicken Moghlai', name: 'Chicken Murg Musallam', price: '₹550 / ₹750' },
  { category: 'Chicken Moghlai', name: 'Chicken Lavabdar', price: '₹349' },
  { category: 'Chicken Moghlai', name: 'Chicken Yamani', price: '₹1250' },
  { category: 'Chicken Moghlai', name: 'Chicken Gajebo', price: '₹550 / ₹999' },

  // ─── MUTTON MOGHLAI ───
  { category: 'Mutton Moghlai', name: 'Mutton Matka', price: '₹599' },
  { category: 'Mutton Moghlai', name: 'Mutton Angara', price: '₹599' },
  { category: 'Mutton Moghlai', name: 'Mutton Do Pyaza', price: '₹499' },
  { category: 'Mutton Moghlai', name: 'Mutton Rogan Josh', price: '₹369' },
  { category: 'Mutton Moghlai', name: 'Mutton Dara Handi', price: '₹399' },
  { category: 'Mutton Moghlai', name: 'Mutton Masala', price: '₹329' },
  { category: 'Mutton Moghlai', name: 'Mutton Handi', price: '₹349' },
  { category: 'Mutton Moghlai', name: 'Mutton Dabba Gost', price: '₹400' },
  { category: 'Mutton Moghlai', name: 'Mutton Gajebo', price: '₹799 / ₹1549' },
  { category: 'Mutton Moghlai', name: 'Mutton Dal Gost', price: '₹330' },

  // ─── EGG KA FANDA ───
  { category: 'Egg Ka Fanda', name: 'Omlate', price: '₹60' },
  { category: 'Egg Ka Fanda', name: 'Egg Chilli Dry', price: '₹200' },
  { category: 'Egg Ka Fanda', name: 'Egg Boil Fry', price: '₹60' },
  { category: 'Egg Ka Fanda', name: 'Egg Kheema', price: '₹100' },
  { category: 'Egg Ka Fanda', name: 'Egg Boil Kheema', price: '₹130' },
  { category: 'Egg Ka Fanda', name: 'Egg Curry', price: '₹150' },
  { category: 'Egg Ka Fanda', name: 'Egg Todfod', price: '₹140' },
  { category: 'Egg Ka Fanda', name: 'Egg Masala', price: '₹170' },
  { category: 'Egg Ka Fanda', name: 'Egg Green Kheema', price: '₹180' },
  { category: 'Egg Ka Fanda', name: 'Egg Gotala', price: '₹200' },
  { category: 'Egg Ka Fanda', name: 'Egg Bhurji', price: '₹100' },

  // ─── INDIAN MAIN COURSE ───
  { category: 'Indian Main Course', name: 'Paneer Angara', price: '₹299' },
  { category: 'Indian Main Course', name: 'Paneer Tikka Masala', price: '₹200' },
  { category: 'Indian Main Course', name: 'Paneer Butter Masala', price: '₹269' },
  { category: 'Indian Main Course', name: 'Paneer Handi', price: '₹199' },
  { category: 'Indian Main Course', name: 'Paneer Toofani', price: '₹249' },
  { category: 'Indian Main Course', name: 'Paneer Kadai', price: '₹160' },
  { category: 'Indian Main Course', name: 'Paneer Cheese Butter Masala', price: '₹299' },
  { category: 'Indian Main Course', name: 'Paneer Bhurji', price: '₹249' },
  { category: 'Indian Main Course', name: 'Cheese Butter Masala', price: '₹300' },
  { category: 'Indian Main Course', name: 'Mix Veg.', price: '₹140' },
  { category: 'Indian Main Course', name: 'Veg. Handi', price: '₹160' },
  { category: 'Indian Main Course', name: 'Veg. Kolhapuri', price: '₹180' },
  { category: 'Indian Main Course', name: 'Veg. Angara', price: '₹270' },
  { category: 'Indian Main Course', name: 'Veg. Kadai', price: '₹200' },
  { category: 'Indian Main Course', name: 'Dal Fry', price: '₹99' },
  { category: 'Indian Main Course', name: 'Dal Tadka', price: '₹119' },

  // ─── CHINESE RICE ───
  { category: 'Chinese Rice', name: 'Mann O Salwa Sp. Rice', price: '₹399' },
  { category: 'Chinese Rice', name: 'Chicken Fry Rice', price: '₹199' },
  { category: 'Chinese Rice', name: 'Chicken Garlic Rice', price: '₹229' },
  { category: 'Chinese Rice', name: 'Chicken Green Garlic Rice', price: '₹249' },
  { category: 'Chinese Rice', name: 'Chicken Lovely Rice', price: '₹300' },
  { category: 'Chinese Rice', name: 'Chicken Maratha Rice', price: '₹399' },
  { category: 'Chinese Rice', name: 'Chicken Hong Kong Rice', price: '₹399' },
  { category: 'Chinese Rice', name: 'Chicken Manchurian Rice', price: '₹399' },
  { category: 'Chinese Rice', name: 'Chicken Schezwan Rice', price: '₹250' },
  { category: 'Chinese Rice', name: 'Egg Fry Rice', price: '₹150' },
  { category: 'Chinese Rice', name: 'Chicken Cap Rice', price: '₹430' },
  { category: 'Chinese Rice', name: 'Tripple Rice', price: '₹430' },

  // ─── RICE ───
  { category: 'Rice', name: 'Chicken Tikka Pulao', price: '₹250' },
  { category: 'Rice', name: 'Mutton Bhuna Pulao', price: '₹350' },
  { category: 'Rice', name: 'Prawons Pulao', price: '₹400' },
  { category: 'Rice', name: 'Fish Pulao', price: '₹400' },
  { category: 'Rice', name: 'Chicken Biriyani', price: '₹210' },
  { category: 'Rice', name: 'Mutton Biriyani', price: '₹280' },
  { category: 'Rice', name: 'Mutka Biriyani', price: '₹299' },
  { category: 'Rice', name: 'Prawons Biriyani', price: '₹430' },
  { category: 'Rice', name: 'Fish Biriyani', price: '₹430' },
  { category: 'Rice', name: 'Egg. Biriyani', price: '₹170' },
  { category: 'Rice', name: 'Veg. Biriyani', price: '₹150' },
  { category: 'Rice', name: 'Masala Rice', price: '₹140' },
  { category: 'Rice', name: 'Jeera Rice', price: '₹80 / ₹120' },
  { category: 'Rice', name: 'Steam Rice', price: '₹70' },

  // ─── ROTI ───
  { category: 'Roti', name: 'Plain Chapati', price: '₹12' },
  { category: 'Roti', name: 'Butter Chapati', price: '₹17' },
  { category: 'Roti', name: 'Plain Tandoori', price: '₹20' },
  { category: 'Roti', name: 'Butter Tandoori', price: '₹25' },
  { category: 'Roti', name: 'Butter Naan', price: '₹55' },
  { category: 'Roti', name: 'Butter Garlic Naan', price: '₹85' },
  { category: 'Roti', name: 'Butter Cheese Naan', price: '₹80' },
  { category: 'Roti', name: 'Green Chilli Cheese Naan', price: '₹80' },
  { category: 'Roti', name: 'Plain Kulcha', price: '₹55' },
  { category: 'Roti', name: 'Butter Kulcha', price: '₹60' },
  { category: 'Roti', name: 'Lachcha Paratha', price: '₹60' },
  { category: 'Roti', name: 'Butter Lachcha Paratha', price: '₹65' },
  { category: 'Roti', name: 'Basket Roti', price: '₹399' },

  // ─── SOUP ───
  { category: 'Soup', name: 'Sp. Mann O Salwa Soup', price: '₹199' },
  { category: 'Soup', name: 'Chicken Manchow Soup', price: '₹99' },
  { category: 'Soup', name: 'Chicken Hot & Sour Soup', price: '₹110' },
  { category: 'Soup', name: 'Chicken Lemon Coriander Soup', price: '₹169' },
  { category: 'Soup', name: 'Hong Kong Soup', price: '₹189' },
  { category: 'Soup', name: 'Sea Food Soup', price: '₹199' },
  { category: 'Soup', name: 'Mutton Sorba Soup', price: '₹199' },

  // ─── CHINESE STARTER ───
  { category: 'Chinese Starter', name: 'Chicken Crispy', price: '₹299' },
  { category: 'Chinese Starter', name: 'Chicken Chilli Dry', price: '₹220' },
  { category: 'Chinese Starter', name: 'Chicken Manchurian Dry', price: '₹220' },
  { category: 'Chinese Starter', name: 'Chicken Hoster', price: '₹230' },
  { category: 'Chinese Starter', name: 'Chicken Kurkure', price: '₹299' },
  { category: 'Chinese Starter', name: 'Chicken Khaosi Chilli', price: '₹299' },
  { category: 'Chinese Starter', name: 'Chicken Cheese Mangolian', price: '₹369' },
  { category: 'Chinese Starter', name: 'Chicken Chaina Tawon', price: '₹369' },
  { category: 'Chinese Starter', name: 'Chicken Honey Chilli', price: '₹299' },
  { category: 'Chinese Starter', name: 'Chicken Kaju Chilli', price: '₹349' },
  { category: 'Chinese Starter', name: 'Chicken Lolipop Dry/Gravy', price: '₹299' },
  { category: 'Chinese Starter', name: 'Chicken 65', price: '₹319' },
  { category: 'Chinese Starter', name: 'Chicken Cheese Morracco', price: '₹399' },
  { category: 'Chinese Starter', name: 'Chicken Black Paper Salt', price: '₹369' },
  { category: 'Chinese Starter', name: 'Chicken Schezwan Leg', price: '₹229' },
  { category: 'Chinese Starter', name: 'Prawns Chilli', price: '₹430' },
  { category: 'Chinese Starter', name: 'Fish Chilli', price: '₹399' },

  // ─── NOODLES ───
  { category: 'Noodles', name: 'Chicken Hakka Noodles', price: '₹189' },
  { category: 'Noodles', name: 'Chicken Khaosi Noodles', price: '₹250' },
  { category: 'Noodles', name: 'Chicken Schezwan Noodles', price: '₹199' },
  { category: 'Noodles', name: 'Chicken Singapuri Noodles', price: '₹219' },
  { category: 'Noodles', name: 'Chicken Hong Kong Noodles', price: '₹229' },

  // ─── FOOD ON THE FIRE ───
  { category: 'Food On The Fire', name: 'Chicken Chinese Sizzler', price: '₹550' },
  { category: 'Food On The Fire', name: 'Chicken Malai Tikka Sizzler', price: '₹640' },
  { category: 'Food On The Fire', name: 'Chicken B.B.Q. Sizzler', price: '₹800' },
  { category: 'Food On The Fire', name: 'Sea Food Sizzler', price: '₹850' },
  { category: 'Food On The Fire', name: 'Panner Stick Sizzler', price: '₹610' },

  // ─── SALAD / PAPAD / RAITA ───
  { category: 'Salad / Papad / Raita', name: 'Green Salad', price: '₹100' },
  { category: 'Salad / Papad / Raita', name: 'Cheese Salad', price: '₹150' },
  { category: 'Salad / Papad / Raita', name: 'Fry Papad', price: '₹20' },
  { category: 'Salad / Papad / Raita', name: 'Masala Papad', price: '₹30' },
  { category: 'Salad / Papad / Raita', name: 'Cheese Masala Papad', price: '₹40' },
  { category: 'Salad / Papad / Raita', name: 'Roasted Papad', price: '₹15' },
  { category: 'Salad / Papad / Raita', name: 'Roasted Masala Papad', price: '₹25' },
  { category: 'Salad / Papad / Raita', name: 'Veg. Raita', price: '₹50' },
  { category: 'Salad / Papad / Raita', name: 'Paineapple Raita', price: '₹70' },
  { category: 'Salad / Papad / Raita', name: 'Sp. Lassi', price: '₹70' },
  { category: 'Salad / Papad / Raita', name: 'Plain Lassi', price: '₹60' },
  { category: 'Salad / Papad / Raita', name: 'Butter Milk', price: '₹20' },
  { category: 'Salad / Papad / Raita', name: 'Masala Milk', price: '₹25' },
  { category: 'Salad / Papad / Raita', name: 'Bundi Raita', price: '₹60' },
  { category: 'Salad / Papad / Raita', name: 'French Fries', price: '₹65' },

  // ─── COLD DRINKS ───
  { category: 'Cold Drinks', name: 'Sprite', price: 'MRP' },
  { category: 'Cold Drinks', name: 'Thumsup', price: 'MRP' },
  { category: 'Cold Drinks', name: 'Maaza', price: 'MRP' },
  { category: 'Cold Drinks', name: 'Fanta', price: 'MRP' },
  { category: 'Cold Drinks', name: 'Sada Soda', price: 'MRP' },
  { category: 'Cold Drinks', name: 'Zeera Soda', price: 'MRP' },
  { category: 'Cold Drinks', name: 'Sosyo', price: 'MRP' },
  { category: 'Cold Drinks', name: 'Mineral Water', price: 'MRP' },

  // ─── MUTTON STARTER ───
  { category: 'Mutton Starter', name: 'Mutton Sheek Kabab', price: '₹350' },
  { category: 'Mutton Starter', name: 'Mutton Nalli Barra (6 Pies)', price: '₹700' },
  { category: 'Mutton Starter', name: 'Mutton Chaap Chilli (5 Pics)', price: '₹499' },
  { category: 'Mutton Starter', name: 'Mutton Kali Mirch Chaap (7 Pics)', price: '₹699' },
  { category: 'Mutton Starter', name: 'Schezwan Chaap Chilli (5 Pics)', price: '₹599' },
  { category: 'Mutton Starter', name: 'Mutton Chap Barra', price: '₹749' },
  { category: 'Mutton Starter', name: 'Mutton Yamani Ghost', price: '₹1799' },
  { category: 'Mutton Starter', name: 'Mutton Gilafi Seek', price: '—' },

  // ─── PANEER DRY ───
  { category: 'Paneer Dry', name: 'Paneer Tikka Dry', price: '₹270' },
  { category: 'Paneer Dry', name: 'Paneer Malai Tikka', price: '₹290' },
  { category: 'Paneer Dry', name: 'Paneer Pahadi Tikka', price: '₹280' },
  { category: 'Paneer Dry', name: 'Paneer Chilli Dry', price: '₹230' },
  { category: 'Paneer Dry', name: 'Paneer Mangolian', price: '₹330' },
  { category: 'Paneer Dry', name: 'Paneer Cheese Mangolian', price: '₹370' },
  { category: 'Paneer Dry', name: 'Paneer 65', price: '₹200' },
  { category: 'Paneer Dry', name: 'Paneer Manchurian', price: '₹220' },
  { category: 'Paneer Dry', name: 'Veg. Manchurian', price: '₹160' },
  { category: 'Paneer Dry', name: 'Veg. 65', price: '₹180' },

  // ─── THAL KA MAZA ───
  { category: 'Thal Ka Maza', name: 'Mann O Salwa Sp. Thal', price: '₹4999' },
  { category: 'Thal Ka Maza', name: 'Maharaja Thal', price: '₹1999' },
  { category: 'Thal Ka Maza', name: 'Shahi Thal', price: '₹1599' },
  { category: 'Thal Ka Maza', name: 'Hangama Thal', price: '₹1499' },

  // ─── SEA FOOD SP. ───
  { category: 'Sea Food Sp.', name: 'Fish Tikka Dry', price: '₹370' },
  { category: 'Sea Food Sp.', name: 'Lemon Fish Tikka', price: '₹350' },
  { category: 'Sea Food Sp.', name: 'Crackle Fish', price: '₹469' },
  { category: 'Sea Food Sp.', name: 'Kashmiri Fish', price: '₹499' },
  { category: 'Sea Food Sp.', name: 'Crunchy Fish', price: '₹399' },
  { category: 'Sea Food Sp.', name: 'Koliwada Fish', price: '₹369' },
  { category: 'Sea Food Sp.', name: 'Fish Masala', price: '₹280' },
  { category: 'Sea Food Sp.', name: 'Prawns Dry/Fry', price: '₹330' },
  { category: 'Sea Food Sp.', name: 'Butter Garlic Prawns', price: '₹430' },
  { category: 'Sea Food Sp.', name: 'Lasunia Fish', price: '₹400' },
  { category: 'Sea Food Sp.', name: 'B.B.Q. Prawns', price: '₹319' },
  { category: 'Sea Food Sp.', name: 'Tandoor Prawns', price: '₹290' },
  { category: 'Sea Food Sp.', name: 'Prawns Masala', price: '₹300' },

  // ─── SWEET ───
  { category: 'Sweet', name: 'Gulab Jamun', price: '₹100' },
  { category: 'Sweet', name: 'Akhrot Halwa', price: '₹180' },
  { category: 'Sweet', name: 'Anjeer Halwa', price: '₹200' },
  { category: 'Sweet', name: 'Sitafal Cream', price: '₹190' },
];

// Category icon mapping
const categoryIcons: Record<string, string> = {
  'King Off Raan': '👑',
  'Tawa-Ka-Jalwa': '🔥',
  'Chicken Moghlai': '🍗',
  'Mutton Moghlai': '🥩',
  'Egg Ka Fanda': '🥚',
  'Indian Main Course': '🍛',
  'Mutton Starter': '🍖',
  'Paneer Dry': '🧀',
  'Thal Ka Maza': '🫕',
  'Sea Food Sp.': '🦐',
  'Chinese Rice': '🍚',
  'Rice': '🍚',
  'Roti': '🫓',
  'Soup': '🍲',
  'Chinese Starter': '🥢',
  'Noodles': '🍜',
  'Food On The Fire': '🔥',
  'Salad / Papad / Raita': '🥗',
  'Cold Drinks': '🥤',
  'Sweet': '🍮',
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  // Accordion open state — all open by default
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() =>
    categories.slice(1).reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
  );

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(m => m.category === activeCategory);

  // Group items by category for "All" view
  const groupedItems = categories.slice(1).reduce((acc, cat) => {
    const items = filtered.filter(m => m.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {} as Record<string, typeof menuItems>);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060A13 0%, #0B1020 100%)' }}>
      {/* Gold separator */}
      <div className="absolute top-0 left-0 right-0 gold-line-h" />
      {/* Glow blobs */}
      <div className="blob-gold w-[450px] h-[450px] top-0 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="absolute inset-0 bg-diagonal opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <span className="ornament" />
            <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">Our Kitchen</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 mb-4">
            Our Complete <span className="text-gradient italic">Menu</span>
          </h2>
          <p className="reveal font-body text-[#7A8AA0] max-w-xl mx-auto text-base leading-relaxed">
            From royal Raan preparations to sizzling Chinese starters — explore the full Mann O Salwa experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[9px] font-body font-bold tracking-[2px] uppercase rounded-sm border transition-all duration-300
                ${activeCategory === cat
                  ? 'bg-[rgba(201,168,76,0.12)] border-[rgba(201,168,76,0.55)] text-[#F0D080] shadow-[0_0_20px_rgba(201,168,76,0.1)]'
                  : 'bg-transparent border-[rgba(255,255,255,0.08)] text-[#7A8AA0] hover:border-[rgba(201,168,76,0.3)] hover:text-[#C9A84C]'
                }`}
            >
              {categoryIcons[cat] && <span className="mr-1">{categoryIcons[cat]}</span>}
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        {activeCategory === 'All' ? (
          // Grouped accordion view — All categories
          <div className="space-y-4">
            {Object.entries(groupedItems).map(([cat, items]) => {
              const isOpen = openCategories[cat] ?? true;
              return (
                <div key={cat} className="reveal border border-[rgba(201,168,76,0.2)] rounded-sm overflow-hidden">
                  {/* Clickable Category Heading */}
                  <button
                    onClick={() => toggleCategory(cat)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-[rgba(201,168,76,0.06)] hover:bg-[rgba(201,168,76,0.1)] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{categoryIcons[cat]}</span>
                      <h3 className="font-heading text-sm font-bold tracking-[3px] uppercase text-[#C9A84C] group-hover:text-[#F0D080] transition-colors duration-300">
                        {cat}
                      </h3>
                      <span className="text-[10px] font-body text-[#7A8AA0] ml-1 tracking-wider">
                        ({items.length} items)
                      </span>
                    </div>
                    {/* Chevron */}
                    <svg
                      className={`w-4 h-4 text-[#C9A84C] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Collapsible Items Grid */}
                  <div
                    style={{
                      maxHeight: isOpen ? `${items.length * 56 + 32}px` : '0px',
                      transition: 'max-height 0.4s ease',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4">
                      {items.map((item) => (
                        <div
                          key={`${cat}-${item.name}`}
                          className="group flex items-center justify-between px-4 py-3 border border-[rgba(255,255,255,0.06)] rounded-sm hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(201,168,76,0.04)] transition-all duration-300"
                        >
                          <span className="font-body text-sm text-stone-300 group-hover:text-stone-100 transition-colors duration-300 pr-2 leading-snug">{item.name}</span>
                          <span className="font-heading text-sm font-bold text-[#C9A84C] whitespace-nowrap shrink-0">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Single category view
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
              <div className="flex items-center gap-2 px-6 py-2.5 border border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.08)] rounded-sm">
                <span className="text-xl">{categoryIcons[activeCategory]}</span>
                <h3 className="font-heading text-base font-bold tracking-[3px] uppercase text-[#C9A84C]">{activeCategory}</h3>
                <span className="text-[10px] font-body text-[#7A8AA0] ml-1 tracking-wider">({filtered.length} items)</span>
              </div>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filtered.map((item) => (
                <div
                  key={`${item.category}-${item.name}`}
                  className="group flex items-center justify-between px-4 py-3.5 border border-[rgba(255,255,255,0.07)] rounded-sm hover:border-[rgba(201,168,76,0.35)] hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300"
                >
                  <span className="font-body text-sm text-stone-300 group-hover:text-stone-100 transition-colors duration-300 pr-2 leading-snug">{item.name}</span>
                  <span className="font-heading text-sm font-bold text-[#C9A84C] whitespace-nowrap shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="reveal text-center mt-16">
          <p className="font-body text-[#7A8AA0] mb-5 text-sm">
            Full menu available at the restaurant — including daily specials &amp; seasonal items
          </p>
          <a href="tel:+919714707576" className="btn-outline">
            Call to Ask About Today's Specials
          </a>
        </div>
      </div>
    </section>
  );
}

