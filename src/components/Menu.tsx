import { useEffect, useRef, useState } from 'react';

export interface SignatureDish {
  id: string;
  name: string;
  urduName?: string;
  subtitle: string;
  badge: string;
  tag: string;
  category: string;
  price?: string;
  image: string;
  features: string[];
  description: string;
}

export const signatureDishes: SignatureDish[] = [
  {
    id: 'mutton-ghee-roast',
    name: 'Mutton Ghee Roast',
    urduName: 'مٹن گھی روسٹ',
    subtitle: 'A Royal Roast for True Mutton Lovers',
    badge: 'Desi Ghee Specialty',
    tag: 'No Preservatives • Pure Flavour',
    category: 'Mutton Moghlai',
    price: 'Chef’s Special',
    image: '/images/menu/mutton-ghee-roast.jpg',
    features: [
      'Selected Tender Mutton Pieces',
      'Cooked in 100% Pure Desi Ghee',
      'Fresh Ginger, Garlic & Green Chilli',
      'No Artificial Colours or Preservatives',
    ],
    description:
      'Succulent selected mutton pieces slow-roasted in fragrant pure desi ghee with crushed ginger, garlic, and freshly slit green chillies. Served on crisp spiced bread for an authentic royal feast.',
  },
  {
    id: 'royal-raan-thal',
    name: 'Mann O Salwa Royal Raan Thal',
    urduName: 'من و سلویٰ ران تھال',
    subtitle: 'Where Every Meal Becomes A Memory',
    badge: 'King of Raan',
    tag: 'Grand Feast Platter',
    category: 'King Off Raan',
    price: '₹1699 / ₹2499',
    image: '/images/menu/royal-raan-thal.jpg',
    features: [
      'Whole Succulent Slow-Roasted Mutton Leg',
      'Aromatic Spiced Long-Grain Rice',
      'Charcoal Grilled Mutton Chops',
      'Accompanied with Signature Gravies & Dips',
    ],
    description:
      'Our iconic centerpiece feast: A whole tender leg of mutton marinated for 24 hours in heritage spices, slow-roasted to fall-off-the-bone perfection over a royal bed of fragrant rice with tandoori chops and accompaniments.',
  },
  {
    id: 'chicken-afghani-tikka',
    name: 'Chicken Afghani Tikka',
    urduName: 'چکن افغانی تکہ',
    subtitle: 'Not Just A Starter, It’s A Craving!',
    badge: 'Tandoor Masterpiece',
    tag: 'Mild • Smoky • Irresistible',
    category: 'Tawa-Ka-Jalwa',
    price: 'Starter Favorite',
    image: '/images/menu/chicken-afghani-tikka.jpg',
    features: [
      'Velvety Cashew & Cream Marination',
      'Clay Tandoor Charcoal Smoked',
      'Juicy, Tender & Mild Spice Profile',
      'Served with Mint Chutney & Spiced Onions',
    ],
    description:
      'Boneless tender chicken supreme marinated in rich cream, cashew paste, roasted spices, and herbs, then charred in a traditional clay oven. Mild, smoky, and irresistible in every single bite.',
  },
  {
    id: 'fish-tikka',
    name: 'The Royal Fish Tikka',
    urduName: 'فش تکہ شاہی',
    subtitle: 'Gravity Defying • Flavour Defining',
    badge: 'Seafood Sensation',
    tag: 'A Taste That Rises Above!',
    category: 'Sea Food Sp.',
    price: '₹370',
    image: '/images/menu/fish-tikka.jpg',
    features: [
      'Fresh & Premium River Fish Fillets',
      'Royal Spices & Lemon Marinade',
      'Charred to Smoky Perfection',
      'Signature Gravity-Defying Vertical Plating',
    ],
    description:
      'Succulent fish fillets marinated in royal spices and herbs, charred to golden crisp perfection in the tandoor and presented with dramatic golden fried onion rings, coriander, and lemon.',
  },
  {
    id: 'turkish-mutton',
    name: 'Turkish Mutton Feast',
    urduName: 'ترکش مٹن فیسٹ',
    subtitle: 'Boneless • Authentic • Unforgettable',
    badge: '5-Star Customer Rated',
    tag: 'Meat Lover’s Choice',
    category: 'Mutton Starter',
    price: 'Special Platter',
    image: '/images/menu/turkish-mutton.jpg',
    features: [
      '100% Boneless Tender Mutton Cuts',
      'Authentic Turkish Spice Blend',
      'Signature Turkish Deep Chutney / Dip',
      'Served with Green Chilli Garlic Naan',
    ],
    description:
      'An unforgettable Turkish culinary delight featuring melt-in-the-mouth boneless mutton chunks grilled with authentic middle-eastern and Turkish spices, charred tomatoes, signature dips, and freshly baked garlic naans.',
  },
];

const categories = [
  'All',
  'Royal Signatures',
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
  { category: 'King Off Raan', name: 'Mann O Salwa Sp. Raan', price: '₹1699', isSignature: true, image: '/images/menu/royal-raan-thal.jpg' },
  { category: 'King Off Raan', name: 'Golden Tawa Fry Raan', price: '₹1599' },
  { category: 'King Off Raan', name: 'B.B.Q. Raan', price: '₹1499' },
  { category: 'King Off Raan', name: 'Lebness Raan', price: '₹1699' },
  { category: 'King Off Raan', name: 'Cream Raan', price: '₹1699' },
  { category: 'King Off Raan', name: 'Raan Sizzler', price: '₹1999' },
  { category: 'King Off Raan', name: 'Peshawari Raan', price: '₹1699' },
  { category: 'King Off Raan', name: 'Raan Biriyani', price: '₹2000' },
  { category: 'King Off Raan', name: 'Mann O Salwa Sp. Raan Biriyani', price: '₹2499', isSignature: true, image: '/images/menu/royal-raan-thal.jpg' },

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
  { category: 'Tawa-Ka-Jalwa', name: 'Chicken Afghani Tikka', price: '₹349', isSignature: true, image: '/images/menu/chicken-afghani-tikka.jpg' },
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
  { category: 'Mutton Moghlai', name: 'Mutton Ghee Roast', price: '₹499', isSignature: true, image: '/images/menu/mutton-ghee-roast.jpg' },
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
  { category: 'Mutton Starter', name: 'Turkish Mutton Feast', price: 'Special Platter', isSignature: true, image: '/images/menu/turkish-mutton.jpg' },
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
  { category: 'Thal Ka Maza', name: 'Mann O Salwa Sp. Thal', price: '₹4999', isSignature: true, image: '/images/menu/royal-raan-thal.jpg' },
  { category: 'Thal Ka Maza', name: 'Maharaja Thal', price: '₹1999' },
  { category: 'Thal Ka Maza', name: 'Shahi Thal', price: '₹1599' },
  { category: 'Thal Ka Maza', name: 'Hangama Thal', price: '₹1499' },

  // ─── SEA FOOD SP. ───
  { category: 'Sea Food Sp.', name: 'Royal Fish Tikka', price: '₹370', isSignature: true, image: '/images/menu/fish-tikka.jpg' },
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

const categoryIcons: Record<string, string> = {
  'Royal Signatures': '⭐',
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
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [activeSpecialIdx, setActiveSpecialIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Accordion open state
  const actualCategories = categories.filter(c => c !== 'All' && c !== 'Royal Signatures');
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(() =>
    actualCategories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
  );

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const filtered = activeCategory === 'All'
    ? menuItems
    : activeCategory === 'Royal Signatures'
      ? menuItems.filter(m => m.isSignature)
      : menuItems.filter(m => m.category === activeCategory);

  // Group items by category for "All" view
  const groupedItems = actualCategories.reduce((acc, cat) => {
    const items = menuItems.filter(m => m.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {} as Record<string, typeof menuItems>);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 50);
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
    <section
      id="menu"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050811 0%, #090E1A 50%, #050811 100%)' }}
    >
      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 gold-line-h" />
      {/* Ambient glowing radial lights */}
      <div className="blob-gold w-[550px] h-[550px] top-10 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-diagonal opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="ornament" />
            <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">
              Royal Culinary Heritage
            </span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-100 mb-4">
            Our Complete <span className="text-gradient italic">Menu &amp; Specials</span>
          </h2>
          <p className="reveal font-body text-[#8E9DB2] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Crafted with pure desi ghee, slow-cooked royal spices, and live charcoal tandoor craftsmanship.
            Explore our signature creations and full restaurant menu.
          </p>
        </div>

        {/* ── 🌟 SIGNATURE DISHES SHOWCASE (Featured 5 Images) ── */}
        <div className="reveal mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[rgba(201,168,76,0.25)]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.4)] rounded-full text-xs font-body font-semibold tracking-wider text-[#F0D080] mb-2">
                <span>👑</span>
                <span>MUST-TRY ROYAL CREATIONS</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Chef’s <span className="text-gradient">Signature Masterpieces</span>
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-[#7A8AA0] mt-2 md:mt-0">
              Click any photo to enlarge &amp; view dish details
            </p>
          </div>

          {/* Signature Grid (5 Dishes Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureDishes.map((dish, idx) => (
              <div
                key={dish.id}
                className={`group relative bg-[#0C1220]/90 border border-[rgba(201,168,76,0.25)] hover:border-[rgba(201,168,76,0.7)] rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(201,168,76,0.15)] flex flex-col ${
                  idx === 0 || idx === 1 ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Image Container with Zoom Button */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-black/50"
                  onClick={() => setSelectedImage({ src: dish.image, title: dish.name, subtitle: dish.subtitle })}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220] via-transparent to-black/30 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md border border-[rgba(201,168,76,0.5)] rounded-full text-[10px] font-body font-bold tracking-wider text-[#F0D080] shadow-md">
                      {dish.badge}
                    </span>
                    <span className="px-2.5 py-1 bg-[#C9A84C]/90 text-black font-body font-extrabold text-[10px] rounded-full tracking-wide shadow-md">
                      {dish.tag}
                    </span>
                  </div>

                  {/* Click to Zoom Pill */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 text-[11px] font-body text-stone-200 group-hover:border-[#C9A84C] group-hover:text-[#F0D080] transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>View Poster</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4 className="font-heading text-xl font-bold text-white group-hover:text-[#F0D080] transition-colors">
                        {dish.name}
                      </h4>
                      {dish.urduName && (
                        <span className="text-sm font-serif text-[#C9A84C]/80 whitespace-nowrap">
                          {dish.urduName}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-xs text-[#C9A84C] font-semibold italic mb-3">
                      "{dish.subtitle}"
                    </p>
                    <p className="font-body text-xs text-[#98A8BD] leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {/* Features Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dish.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-body bg-white/[0.04] border border-white/[0.08] text-stone-300"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-body uppercase tracking-wider text-stone-400">Category</span>
                      <span className="text-xs font-semibold text-stone-200">{dish.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedImage({ src: dish.image, title: dish.name, subtitle: dish.subtitle })}
                        className="px-3 py-1.5 text-xs font-body font-semibold rounded bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.4)] text-[#F0D080] hover:bg-[#C9A84C] hover:text-black transition-all"
                      >
                        Enlarge Image
                      </button>
                      <a
                        href="tel:+919714707576"
                        className="px-3 py-1.5 text-xs font-body font-bold rounded bg-[#C9A84C] text-black hover:bg-[#deb854] transition-all flex items-center gap-1 shadow-sm"
                      >
                        Order / Book
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 🍽️ CATEGORY FILTER TABS ── */}
        <div className="reveal text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[#C9A84C]/40" />
            <span className="text-xs font-body font-bold uppercase tracking-[3px] text-[#C9A84C]">Browse Complete Menu</span>
            <span className="h-px w-8 bg-[#C9A84C]/40" />
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-stone-100 mb-6">
            Explore All 20+ Categories
          </h3>

          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] sm:text-xs font-body font-bold tracking-[1.5px] uppercase rounded-md border transition-all duration-300 flex items-center gap-1.5
                  ${
                    activeCategory === cat
                      ? 'bg-[rgba(201,168,76,0.16)] border-[#C9A84C] text-[#F0D080] shadow-[0_0_20px_rgba(201,168,76,0.2)]'
                      : 'bg-[#0B1020]/80 border-white/10 text-[#8E9DB2] hover:border-[rgba(201,168,76,0.4)] hover:text-[#C9A84C] hover:bg-[#0E1528]'
                  }`}
              >
                {categoryIcons[cat] && <span>{categoryIcons[cat]}</span>}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── MENU ITEMS LIST / ACCORDION ── */}
        {activeCategory === 'All' ? (
          // Grouped accordion view — All categories
          <div className="space-y-4">
            {Object.entries(groupedItems).map(([cat, items]) => {
              const isOpen = openCategories[cat] ?? true;
              return (
                <div
                  key={cat}
                  className="reveal border border-[rgba(201,168,76,0.2)] rounded-lg overflow-hidden bg-[#0A0F1E]/80 backdrop-blur-sm"
                >
                  {/* Clickable Category Heading */}
                  <button
                    onClick={() => toggleCategory(cat)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 bg-[rgba(201,168,76,0.06)] hover:bg-[rgba(201,168,76,0.12)] transition-all duration-300 group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{categoryIcons[cat] || '🍽️'}</span>
                      <h3 className="font-heading text-sm sm:text-base font-bold tracking-[2.5px] uppercase text-[#C9A84C] group-hover:text-[#F0D080] transition-colors duration-300">
                        {cat}
                      </h3>
                      <span className="text-[11px] font-body text-[#7A8AA0] tracking-wider">
                        ({items.length} items)
                      </span>
                    </div>
                    {/* Chevron */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-body text-[#7A8AA0] hidden sm:inline">
                        {isOpen ? 'Collapse' : 'Expand'}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#C9A84C] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Collapsible Items Grid */}
                  <div
                    style={{
                      maxHeight: isOpen ? `${Math.ceil(items.length / 2) * 90 + 60}px` : '0px',
                      transition: 'max-height 0.4s ease-in-out',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 p-4 border-t border-white/[0.05]">
                      {items.map((item) => (
                        <div
                          key={`${cat}-${item.name}`}
                          className={`group flex items-center justify-between px-4 py-3 border rounded-md transition-all duration-300 ${
                            item.isSignature
                              ? 'bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.45)] hover:border-[#C9A84C]'
                              : 'bg-white/[0.02] border-white/[0.07] hover:border-[rgba(201,168,76,0.35)] hover:bg-[rgba(201,168,76,0.04)]'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0 pr-2">
                            {item.isSignature && (
                              <button
                                onClick={() =>
                                  item.image &&
                                  setSelectedImage({
                                    src: item.image,
                                    title: item.name,
                                    subtitle: 'Chef Signature Dish',
                                  })
                                }
                                title="Click to view photo"
                                className="w-7 h-7 rounded shrink-0 overflow-hidden border border-[#C9A84C]/50 hover:scale-110 transition-transform"
                              >
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </button>
                            )}
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-body text-sm font-medium text-stone-200 group-hover:text-white transition-colors truncate">
                                  {item.name}
                                </span>
                                {item.isSignature && (
                                  <span className="px-1.5 py-0.2 bg-[#C9A84C] text-black text-[9px] font-bold rounded uppercase">
                                    Special
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="font-heading text-sm font-bold text-[#C9A84C] whitespace-nowrap shrink-0">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Single category view or Signature filter
          <div className="reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
              <div className="flex items-center gap-2.5 px-6 py-2.5 border border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.1)] rounded-full backdrop-blur-md">
                <span className="text-xl">{categoryIcons[activeCategory] || '🍽️'}</span>
                <h3 className="font-heading text-base font-bold tracking-[3px] uppercase text-[#C9A84C]">
                  {activeCategory}
                </h3>
                <span className="text-xs font-body text-[#7A8AA0] ml-1">({filtered.length} items)</span>
              </div>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {filtered.map((item) => (
                <div
                  key={`${item.category}-${item.name}`}
                  className={`group flex items-center justify-between px-4 py-3.5 border rounded-lg transition-all duration-300 ${
                    item.isSignature
                      ? 'bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.45)] hover:border-[#C9A84C]'
                      : 'bg-[#0C1220]/80 border-white/10 hover:border-[rgba(201,168,76,0.35)] hover:bg-[rgba(201,168,76,0.05)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                    {item.isSignature && (
                      <button
                        onClick={() =>
                          item.image &&
                          setSelectedImage({
                            src: item.image,
                            title: item.name,
                            subtitle: 'Chef Signature Dish',
                          })
                        }
                        title="Click to view photo"
                        className="w-8 h-8 rounded shrink-0 overflow-hidden border border-[#C9A84C]/50 hover:scale-110 transition-transform"
                      >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </button>
                    )}
                    <div className="min-w-0">
                      <span className="font-body text-sm font-medium text-stone-200 group-hover:text-white transition-colors truncate block">
                        {item.name}
                      </span>
                      {item.isSignature && (
                        <span className="text-[10px] text-[#C9A84C] font-body">★ Chef Recommendation</span>
                      )}
                    </div>
                  </div>
                  <span className="font-heading text-sm font-bold text-[#C9A84C] whitespace-nowrap shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Bottom Call To Action ── */}
        <div className="reveal text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-[rgba(201,168,76,0.05)] via-[rgba(201,168,76,0.12)] to-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.3)] max-w-3xl mx-auto">
          <h4 className="font-heading text-2xl font-bold text-stone-100 mb-2">
            Craving Something Special Tonight?
          </h4>
          <p className="font-body text-[#8E9DB2] mb-6 text-sm">
            Daily chef specials, fresh tandoor batches, and family thal preparations are ready. Reserve your table or call ahead for takeaway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919714707576"
              className="px-6 py-3 bg-[#C9A84C] hover:bg-[#deb854] text-black font-body font-bold text-sm rounded-md tracking-wider uppercase transition-all shadow-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              📞 Call +91 97147 07576
            </a>
            <a
              href="https://wa.me/919714707576?text=Hello%20Mann%20O%20Salwa,%20I%20would%20like%20to%20reserve%20a%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent hover:bg-white/[0.06] border border-[#C9A84C] text-[#F0D080] font-body font-bold text-sm rounded-md tracking-wider uppercase transition-all"
            >
              💬 WhatsApp Order
            </a>
          </div>
        </div>

      </div>

      {/* ── 🔍 HIGH RESOLUTION IMAGE LIGHTBOX MODAL ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#0A0E1A] border border-[rgba(201,168,76,0.5)] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(201,168,76,0.25)] bg-[#0C1222]">
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                  {selectedImage.title}
                </h4>
                {selectedImage.subtitle && (
                  <p className="font-body text-xs text-[#C9A84C]">{selectedImage.subtitle}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-all"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="overflow-auto max-h-[calc(85vh-120px)] flex items-center justify-center p-2 sm:p-4 bg-black/60">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain rounded shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-[rgba(201,168,76,0.2)] bg-[#0C1222] flex items-center justify-between gap-3">
              <span className="text-xs text-stone-400 font-body hidden sm:inline">
                Mann O Salwa Restaurant • Royal Heritage Cuisine
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <a
                  href="tel:+919714707576"
                  className="px-4 py-2 bg-[#C9A84C] text-black text-xs font-body font-bold rounded uppercase tracking-wider hover:bg-[#dfb953] transition-all"
                >
                  Order This Dish
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-stone-300 text-xs font-body font-semibold rounded transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
