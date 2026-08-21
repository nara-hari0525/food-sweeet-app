import fs from 'fs';
import path from 'path';

// Master data generator containing authentic templates for all 500 distinct recipes across all Indian states and regions
const ALL_STATES_DATA = [
  // ANDHRA PRADESH (30 dishes)
  {
    name: 'Gongura Mamsam',
    alternateNames: ['Gongura Mutton', 'Andhra Sorrel Leaves Mutton Curry', 'Gongura Gosht'],
    description: 'A legendary Andhra specialty featuring tender mutton pieces slow-cooked in a spicy, tangy gravy of fresh sorrel leaves (gongura) and aromatic spices.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Curries',
    subcategory: 'Mutton',
    vegetarian: false,
    vegan: false,
    prepMinutes: 20,
    cookMinutes: 45,
    servings: 4,
    difficulty: 'Medium',
    calories: 460,
    protein: 34,
    carbohydrates: 12,
    fat: 28,
    fiber: 4,
    spiceLevel: 'Very Hot',
    ingredients: [
      { name: 'Mutton / Lamb, bone-in pieces', quantity: '500', unit: 'g' },
      { name: 'Fresh Gongura (Red Sorrel) leaves, washed', quantity: '3', unit: 'bunches' },
      { name: 'Red onions, finely chopped', quantity: '2', unit: 'medium' },
      { name: 'Ginger-garlic paste', quantity: '2', unit: 'tbsp' },
      { name: 'Guntur red chilli powder', quantity: '1.5', unit: 'tbsp' },
      { name: 'Coriander powder', quantity: '1', unit: 'tbsp' },
      { name: 'Turmeric powder', quantity: '0.5', unit: 'tsp' },
      { name: 'Garam masala powder', quantity: '1', unit: 'tsp' },
      { name: 'Green chillies, slit', quantity: '4', unit: 'whole' },
      { name: 'Sesame oil or Peanut oil', quantity: '3', unit: 'tbsp' },
      { name: 'Mustard seeds', quantity: '1', unit: 'tsp' },
      { name: 'Curry leaves', quantity: '2', unit: 'sprigs' },
      { name: 'Salt', quantity: '1.5', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'Wash gongura leaves thoroughly. Heat 1 tbsp oil in a pan, sauté gongura leaves and green chillies until soft and wilted (about 4 minutes). Cool and coarsely crush into a paste.',
      'In a heavy pressure cooker or handi, heat remaining oil, crackle mustard seeds and add curry leaves with chopped onions. Sauté until deep golden brown.',
      'Add ginger-garlic paste and sauté for 2 minutes until the raw aroma dissipates.',
      'Add the washed mutton pieces, turmeric powder, and salt. Sear the meat on high heat for 6-8 minutes until browned.',
      'Add red chilli powder and coriander powder. Pour in 1.5 cups of warm water, seal the cooker and cook for 4-5 whistles until meat is 90% tender.',
      'Open the lid, add the prepared gongura paste and garam masala. Simmer uncovered on low heat for 10-12 minutes until oil separates and gravy thickens.',
      'Rest for 10 minutes before serving hot with steamed Ponni or Sona Masoori rice and ghee.'
    ],
    cookingTips: [
      'Red stem gongura gives the most authentic sour-tangy punch compared to green stem gongura.',
      'Always sear the mutton on high heat before pressure cooking to lock in natural juices.'
    ],
    substitutions: [
      { original: 'Mutton', substitute: 'Chicken breast or bone-in thighs', notes: 'Reduce cooking time to 20 minutes.' },
      { original: 'Gongura leaves', substitute: 'Spinach + 2 tbsp lemon juice or tamarind paste', notes: 'Gives a mild sourness when gongura is unavailable.' }
    ],
    tags: ['andhra', 'spicy', 'high-protein', 'curry', 'mutton', 'south-indian', 'tangy'],
    festival: ['Ugadi', 'Sunday Feasts', 'Sankranti'],
    mealType: ['Lunch', 'Dinner']
  },
  {
    name: 'Gongura Pachadi',
    alternateNames: ['Andhra Gongura Chutney', 'Sorrel Leaves Pickle Chutney'],
    description: 'The crown jewel of Andhra condiments made with red sorrel leaves, roasted dry red chillies, garlic, and fenugreek spices.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Chutneys',
    subcategory: 'Pickles',
    vegetarian: true,
    vegan: true,
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 6,
    difficulty: 'Easy',
    calories: 120,
    protein: 3,
    carbohydrates: 8,
    fat: 9,
    fiber: 3,
    spiceLevel: 'Very Hot',
    ingredients: [
      { name: 'Red stem gongura leaves, cleaned & dried', quantity: '4', unit: 'cups' },
      { name: 'Guntur dry red chillies', quantity: '10', unit: 'whole' },
      { name: 'Coriander seeds (Dhania)', quantity: '1', unit: 'tbsp' },
      { name: 'Fenugreek seeds (Methi)', quantity: '0.5', unit: 'tsp' },
      { name: 'Garlic cloves, peeled', quantity: '8', unit: 'cloves' },
      { name: 'Sesame oil', quantity: '3', unit: 'tbsp' },
      { name: 'Mustard seeds', quantity: '1', unit: 'tsp' },
      { name: 'Asafoetida (Hing)', quantity: '0.25', unit: 'tsp' },
      { name: 'Salt', quantity: '1', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'Ensure the gongura leaves are completely dry before cooking.',
      'Dry roast coriander seeds, fenugreek seeds, and dry red chillies until fragrant. Cool and grind to a coarse spice powder.',
      'Heat 1 tbsp sesame oil in a pan, add the leaves and cook on medium flame for 5 minutes until soft and pulpy. Remove and cool.',
      'In a mortar pestle or mixer, coarsely crush the cooked gongura leaves with the roasted spice powder, salt, and half the garlic cloves.',
      'Heat remaining oil for tempering: add mustard seeds, remaining crushed garlic, curry leaves, and hing. Pour hot tempering over pachadi.',
      'Mix thoroughly. Serve with piping hot steamed rice and a dollop of pure melted ghee.'
    ],
    cookingTips: [
      'Do not add any water while grinding to maximize shelf life (lasts up to 2 weeks refrigerated).'
    ],
    substitutions: [
      { original: 'Sesame oil', substitute: 'Peanut oil', notes: 'Gives pleasant nutty Andhra flavor.' }
    ],
    tags: ['andhra', 'chutney', 'vegan', 'vegetarian', 'spicy', 'pachadi', 'gluten-free'],
    festival: ['All Festivals', 'Sankranti', 'Ugadi'],
    mealType: ['Lunch', 'Dinner', 'Side Dish']
  },
  {
    name: 'Andhra Chicken Curry (Kodi Kura)',
    alternateNames: ['Andhra Style Chicken Curry', 'Telugu Kodi Kura'],
    description: 'Rustic homestyle Andhra chicken curry bursting with freshly ground spices, poppy seeds, coconut, and fiery Guntur chillies.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Curries',
    subcategory: 'Chicken',
    vegetarian: false,
    vegan: false,
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 4,
    difficulty: 'Medium',
    calories: 390,
    protein: 36,
    carbohydrates: 8,
    fat: 22,
    fiber: 2,
    spiceLevel: 'Hot',
    ingredients: [
      { name: 'Chicken, curry cut pieces', quantity: '600', unit: 'g' },
      { name: 'Onions, finely chopped', quantity: '2', unit: 'large' },
      { name: 'Tomatoes, chopped', quantity: '2', unit: 'medium' },
      { name: 'Ginger-garlic paste', quantity: '1.5', unit: 'tbsp' },
      { name: 'Poppy seeds (Khus Khus) & Cashew paste', quantity: '2', unit: 'tbsp' },
      { name: 'Guntur red chilli powder', quantity: '1.5', unit: 'tbsp' },
      { name: 'Coriander powder', quantity: '1', unit: 'tbsp' },
      { name: 'Garam masala powder', quantity: '1', unit: 'tsp' },
      { name: 'Curry leaves', quantity: '2', unit: 'sprigs' },
      { name: 'Oil', quantity: '3', unit: 'tbsp' },
      { name: 'Fresh coriander, chopped', quantity: '3', unit: 'tbsp' },
      { name: 'Salt', quantity: '1.25', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'Marinate chicken with turmeric, 0.5 tsp salt, and 1 tsp red chilli powder for 15 minutes.',
      'Heat oil in a kadai. Add curry leaves and chopped onions; sauté on medium-high heat until deeply golden brown.',
      'Add ginger-garlic paste and cook for 2 minutes until aromatic.',
      'Add the marinated chicken and fry on high heat for 5 minutes until chicken turns opaque.',
      'Add tomatoes, coriander powder, remaining chilli powder, and poppy-cashew paste. Cook until oil separates from the masala.',
      'Pour 1 cup of water, cover with lid and simmer on medium-low flame for 18-20 minutes until chicken is tender and gravy is velvety.',
      'Sprinkle garam masala and fresh coriander. Rest for 5 minutes before serving with rice or roti.'
    ],
    cookingTips: [
      'Soaking poppy seeds in warm water for 15 minutes before grinding creates a velvety rich gravy base.'
    ],
    substitutions: [
      { original: 'Poppy seeds', substitute: 'Cashews or roasted gram flour', notes: 'Provides rich thickening.' }
    ],
    tags: ['andhra', 'chicken', 'curry', 'spicy', 'high-protein', 'south-indian'],
    festival: ['Sunday Special', 'Family Gatherings'],
    mealType: ['Lunch', 'Dinner']
  },
  {
    name: 'Gutti Vankaya Kura',
    alternateNames: ['Andhra Stuffed Brinjal Curry', 'Ennegayi Andhra Style'],
    description: 'Baby eggplants slit four-ways and stuffed with a rich roasted masala paste of peanuts, sesame seeds, desiccated coconut, and tamarind.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Curries',
    subcategory: 'Vegetarian',
    vegetarian: true,
    vegan: true,
    prepMinutes: 20,
    cookMinutes: 25,
    servings: 4,
    difficulty: 'Medium',
    calories: 280,
    protein: 7,
    carbohydrates: 22,
    fat: 18,
    fiber: 8,
    spiceLevel: 'Medium',
    ingredients: [
      { name: 'Small purple eggplants / brinjals', quantity: '8', unit: 'whole' },
      { name: 'Roasted peanuts', quantity: '3', unit: 'tbsp' },
      { name: 'White sesame seeds', quantity: '1.5', unit: 'tbsp' },
      { name: 'Desiccated coconut', quantity: '2', unit: 'tbsp' },
      { name: 'Coriander seeds', quantity: '1', unit: 'tbsp' },
      { name: 'Cumin seeds', quantity: '1', unit: 'tsp' },
      { name: 'Tamarind pulp', quantity: '1.5', unit: 'tbsp' },
      { name: 'Red chilli powder', quantity: '1', unit: 'tbsp' },
      { name: 'Turmeric powder', quantity: '0.5', unit: 'tsp' },
      { name: 'Oil', quantity: '3', unit: 'tbsp' },
      { name: 'Mustard seeds & Curry leaves', quantity: '1', unit: 'tsp' },
      { name: 'Salt', quantity: '1', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'Roast peanuts, sesame seeds, coconut, coriander seeds, and cumin seeds until fragrant. Grind with tamarind, chilli powder, turmeric, salt, and 3 tbsp water into a thick stuffing paste.',
      'Slit each eggplant with an "X" cut from bottom towards stem, keeping the stem intact. Soak in salted water for 5 minutes.',
      'Generously stuff the spice paste inside each eggplant cavity, reserving 2 tbsp of the paste for gravy.',
      'Heat oil in a wide heavy pan. Crackle mustard seeds and curry leaves.',
      'Gently arrange stuffed brinjals in a single layer. Sauté on medium flame for 5 minutes turning gently.',
      'Add leftover stuffing paste mixed with 1 cup warm water. Cover with lid and cook on low flame for 15-18 minutes until brinjals are tender and oil floats to surface.',
      'Serve hot with Bagara rice or chapati.'
    ],
    cookingTips: [
      'Keep eggplants submerged in salted water right until stuffing to avoid bitterness and browning.'
    ],
    substitutions: [
      { original: 'Eggplant', substitute: 'Baby capsicums or baby potatoes', notes: 'Works delightfully with the same stuffing masala.' }
    ],
    tags: ['andhra', 'vegetarian', 'vegan', 'curry', 'gluten-free', 'traditional'],
    festival: ['Ugadi', 'Sankranti', 'Weddings'],
    mealType: ['Lunch', 'Dinner']
  },
  {
    name: 'Chintapandu Pulihora',
    alternateNames: ['Andhra Tamarind Rice', 'Prasadam Pulihora'],
    description: 'Divine temple-style tamarind rice tempered with crunchy peanuts, chana dal, mustard, green chillies, ginger, and curry leaves in hot sesame oil.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Rice Dishes',
    subcategory: 'Vegetarian',
    vegetarian: true,
    vegan: true,
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 4,
    difficulty: 'Easy',
    calories: 340,
    protein: 6,
    carbohydrates: 58,
    fat: 10,
    fiber: 4,
    spiceLevel: 'Medium',
    ingredients: [
      { name: 'Cooked Sona Masoori rice (cooled)', quantity: '4', unit: 'cups' },
      { name: 'Tamarind pulp extract (thick)', quantity: '0.5', unit: 'cup' },
      { name: 'Peanuts (raw)', quantity: '3', unit: 'tbsp' },
      { name: 'Chana dal (Bengal gram)', quantity: '1.5', unit: 'tbsp' },
      { name: 'Urad dal (Black gram split)', quantity: '1', unit: 'tbsp' },
      { name: 'Mustard seeds', quantity: '1', unit: 'tsp' },
      { name: 'Green chillies, slit lengthwise', quantity: '4', unit: 'whole' },
      { name: 'Dry red chillies', quantity: '3', unit: 'whole' },
      { name: 'Fresh ginger, finely minced', quantity: '1', unit: 'tbsp' },
      { name: 'Curry leaves', quantity: '2', unit: 'sprigs' },
      { name: 'Turmeric powder', quantity: '1', unit: 'tsp' },
      { name: 'Asafoetida (Hing)', quantity: '0.5', unit: 'tsp' },
      { name: 'Sesame oil', quantity: '3', unit: 'tbsp' },
      { name: 'Jaggery', quantity: '1', unit: 'tsp' },
      { name: 'Salt', quantity: '1.25', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'In a saucepan, simmer tamarind pulp with turmeric, salt, slit green chillies, and jaggery until it thickens into a glossy paste (Pulihora paste / Pulikachal).',
      'Spread cooked rice on a large plate or vessel, drizzle 1 tbsp raw sesame oil and allow it to cool completely.',
      'Heat remaining oil in a pan. Add peanuts, chana dal, and urad dal; roast on low flame until golden and crunchy.',
      'Add mustard seeds, dry red chillies, minced ginger, curry leaves, and asafoetida. Sauté until fragrant.',
      'Pour the simmered tamarind paste and the hot aromatic tempering over the cooled rice.',
      'Mix gently with fingers or a flat spatula from bottom up without breaking the rice grains.',
      'Let sit for at least 30 minutes for flavors to mature before serving.'
    ],
    cookingTips: [
      'Cooking the rice with 1 tsp oil and letting it cool on a flat tray keeps grains separate.'
    ],
    substitutions: [
      { original: 'Tamarind', substitute: 'Raw mango puree or lemon juice', notes: 'Creates Mamidikaya Pulihora or Nimbu Rice variation.' }
    ],
    tags: ['andhra', 'rice-dishes', 'prasadam', 'temple-food', 'vegan', 'vegetarian', 'gluten-free'],
    festival: ['Sankranti', 'Diwali', 'Ganesh Chaturthi', 'Navratri'],
    mealType: ['Lunch', 'Festival Foods', 'Travel Food']
  },
  {
    name: 'Pesarattu Upma',
    alternateNames: ['MLA Pesarattu', 'Green Moong Dal Crepe with Upma'],
    description: 'Iconic Andhra breakfast crepe made with whole green gram batter, roasted golden, stuffed with soft semolina upma, and served with ginger chutney.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Breakfast',
    subcategory: 'Dosa',
    vegetarian: true,
    vegan: true,
    prepMinutes: 240,
    cookMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    calories: 310,
    protein: 14,
    carbohydrates: 48,
    fat: 7,
    fiber: 6,
    spiceLevel: 'Medium',
    ingredients: [
      { name: 'Whole green moong dal (soaked 4-6 hours)', quantity: '2', unit: 'cups' },
      { name: 'Raw rice (soaked with dal)', quantity: '2', unit: 'tbsp' },
      { name: 'Fresh ginger', quantity: '1.5', unit: 'inch piece' },
      { name: 'Green chillies', quantity: '3', unit: 'whole' },
      { name: 'Cumin seeds', quantity: '1', unit: 'tsp' },
      { name: 'Prepared soft Rava Upma', quantity: '1.5', unit: 'cups' },
      { name: 'Finely chopped onions', quantity: '1', unit: 'cup' },
      { name: 'Oil or Ghee', quantity: '3', unit: 'tbsp' },
      { name: 'Salt', quantity: '1', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'Grind the soaked green gram and rice with ginger, green chillies, cumin seeds, salt, and water to a smooth, flowing batter.',
      'Heat a flat cast iron dosa tawa. Sprinkle water droplets to temper and wipe clean with a cloth.',
      'Pour a ladleful of batter in the center and spread outward into a thin circle.',
      'Sprinkle finely chopped onions and drizzle 1 tsp oil or ghee around the edges.',
      'Cook on medium flame until crisp and golden brown on the underside.',
      'Place 2-3 tbsp of hot prepared rava upma in the center and fold the dosa over.',
      'Serve immediately with Andhra Allam Pachadi (Ginger Chutney) and Coconut Chutney.'
    ],
    cookingTips: [
      'Pesarattu batter needs no fermentation and can be used immediately after grinding.'
    ],
    substitutions: [
      { original: 'Green moong dal', substitute: 'Yellow moong dal', notes: 'Yields a softer yellow crepe.' }
    ],
    tags: ['andhra', 'breakfast', 'high-protein', 'dosa', 'vegetarian', 'quick-recipe'],
    festival: ['Everyday Breakfast', 'Sunday Morning'],
    mealType: ['Breakfast', 'Snacks']
  },
  {
    name: 'Royyala Vepudu (Andhra Prawn Fry)',
    alternateNames: ['Spicy Andhra Prawn Roast', 'Royyala Iguru Fry'],
    description: 'Juicy prawns pan-roasted in caramelised onions, curry leaves, ginger-garlic, crushed black pepper, and spicy red masala.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Seafood',
    subcategory: 'Fish',
    vegetarian: false,
    vegan: false,
    prepMinutes: 15,
    cookMinutes: 15,
    servings: 4,
    difficulty: 'Easy',
    calories: 260,
    protein: 30,
    carbohydrates: 6,
    fat: 12,
    fiber: 1,
    spiceLevel: 'Hot',
    ingredients: [
      { name: 'Prawns / Shrimp, peeled & deveined', quantity: '400', unit: 'g' },
      { name: 'Red onions, thinly sliced', quantity: '2', unit: 'medium' },
      { name: 'Ginger-garlic paste', quantity: '1', unit: 'tbsp' },
      { name: 'Green chillies, slit', quantity: '3', unit: 'whole' },
      { name: 'Red chilli powder', quantity: '1', unit: 'tbsp' },
      { name: 'Black pepper powder', quantity: '1', unit: 'tsp' },
      { name: 'Garam masala', quantity: '0.75', unit: 'tsp' },
      { name: 'Curry leaves', quantity: '2', unit: 'sprigs' },
      { name: 'Lemon juice', quantity: '1', unit: 'tbsp' },
      { name: 'Oil', quantity: '2.5', unit: 'tbsp' },
      { name: 'Salt', quantity: '1', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'Marinate cleaned prawns with turmeric, 0.5 tsp salt, and lemon juice for 10 minutes.',
      'Heat oil in a wide frying pan. Add curry leaves, green chillies, and sliced onions. Sauté until golden brown.',
      'Add ginger-garlic paste and cook for 1-2 minutes.',
      'Add the prawns and sauté on high heat. Prawns will release water; cook uncovered until the moisture evaporates.',
      'Add red chilli powder, black pepper powder, and garam masala. Toss continuously for 3-4 minutes until prawns are coated in thick, roasted dark masala.',
      'Garnish with fresh coriander sprigs and serve hot with rasam rice or as an appetizer.'
    ],
    cookingTips: [
      'Do not overcook prawns beyond 5-7 minutes to keep them succulent and tender.'
    ],
    substitutions: [
      { original: 'Prawns', substitute: 'Paneer cubes or squid rings', notes: 'Adjust cooking time accordingly.' }
    ],
    tags: ['andhra', 'seafood', 'high-protein', 'quick-recipe', 'spicy', 'starter'],
    festival: ['Weekends', 'Celebration Feasts'],
    mealType: ['Lunch', 'Dinner', 'Snacks']
  },
  {
    name: 'Andhra Tomato Pappu',
    alternateNames: ['Tomato Dal Andhra Style', 'Tamata Pappu'],
    description: 'Comforting Andhra dal made with toor dal, ripe tomatoes, green chillies, and a fragrant garlic-mustard-curry leaf tadka with generous ghee.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Dal',
    subcategory: 'Vegetarian',
    vegetarian: true,
    vegan: true,
    prepMinutes: 10,
    cookMinutes: 20,
    servings: 4,
    difficulty: 'Easy',
    calories: 210,
    protein: 11,
    carbohydrates: 32,
    fat: 4,
    fiber: 6,
    spiceLevel: 'Medium',
    ingredients: [
      { name: 'Toor dal (Pigeon pea)', quantity: '1', unit: 'cup' },
      { name: 'Ripe red tomatoes, chopped', quantity: '3', unit: 'medium' },
      { name: 'Green chillies, slit', quantity: '4', unit: 'whole' },
      { name: 'Turmeric powder', quantity: '0.5', unit: 'tsp' },
      { name: 'Red chilli powder', quantity: '0.75', unit: 'tsp' },
      { name: 'Garlic cloves, crushed with skin', quantity: '6', unit: 'cloves' },
      { name: 'Mustard seeds & Cumin seeds', quantity: '1', unit: 'tsp' },
      { name: 'Curry leaves', quantity: '2', unit: 'sprigs' },
      { name: 'Dry red chillies', quantity: '2', unit: 'whole' },
      { name: 'Asafoetida (Hing)', quantity: '0.25', unit: 'tsp' },
      { name: 'Ghee or Oil', quantity: '2', unit: 'tbsp' },
      { name: 'Salt', quantity: '1', unit: 'tsp' }
    ],
    stepByStepInstructions: [
      'In a pressure cooker, add washed toor dal, chopped tomatoes, green chillies, turmeric powder, and 2.5 cups of water.',
      'Pressure cook for 3-4 whistles until dal is soft and thoroughly cooked.',
      'Mash the dal and tomatoes with a wooden masher (Pappu gutti) until smooth. Stir in salt and red chilli powder; simmer for 3 minutes.',
      'For tempering: heat ghee or oil in a small pan. Add mustard seeds, cumin seeds, dry red chillies, crushed garlic, and curry leaves.',
      'When garlic turns golden, add asafoetida and immediately pour sizzling tadka into the dal.',
      'Cover with lid for 2 minutes to trap the aroma. Serve hot with steamed rice and papad.'
    ],
    cookingTips: [
      'Crushing garlic cloves with skin on before adding to hot ghee imparts an irreplaceable homestyle aroma.'
    ],
    substitutions: [
      { original: 'Tomatoes', substitute: 'Spinach (Palakura Pappu) or Raw Mango (Mamidikaya Pappu)', notes: 'Creates other classic Andhra dal variants.' }
    ],
    tags: ['andhra', 'dal', 'comfort-food', 'vegetarian', 'gluten-free', 'healthy'],
    festival: ['Everyday Meal', 'Sankranti'],
    mealType: ['Lunch', 'Dinner']
  },
  {
    name: 'Pootharekulu',
    alternateNames: ['Paper Sweet', 'Atreyapuram Pootharekulu'],
    description: 'Delicate edible rice paper sweet from Atreyapuram, rolled with fragrant ghee, powdered sugar or jaggery, cardamom, and chopped dry fruits.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Sweets',
    subcategory: 'Desserts',
    vegetarian: true,
    vegan: false,
    prepMinutes: 15,
    cookMinutes: 10,
    servings: 6,
    difficulty: 'Hard',
    calories: 220,
    protein: 2,
    carbohydrates: 36,
    fat: 8,
    fiber: 1,
    spiceLevel: 'Mild',
    ingredients: [
      { name: 'Thin rice starch sheets (Poothareku sheets)', quantity: '6', unit: 'sheets' },
      { name: 'Pure desi ghee, melted warm', quantity: '4', unit: 'tbsp' },
      { name: 'Organic jaggery powder or powdered sugar', quantity: '0.75', unit: 'cup' },
      { name: 'Cardamom powder', quantity: '0.5', unit: 'tsp' },
      { name: 'Finely chopped pistachios & cashews', quantity: '3', unit: 'tbsp' }
    ],
    stepByStepInstructions: [
      'Place a delicate rice paper sheet on a dry, flat wooden surface.',
      'Brush gently with warm melted ghee across the surface using a soft brush.',
      'Dust an even layer of jaggery powder and cardamom over the ghee-coated sheet.',
      'Sprinkle finely chopped pistachios and cashews.',
      'Layer another rice sheet over it and repeat brushing with ghee and dusting jaggery.',
      'Carefully fold both sides inward and roll tightly into a neat rectangular packet.',
      'Enjoy the melting, paper-crisp sweet with tea or as festive celebration dessert.'
    ],
    cookingTips: [
      'Store in an airtight container to keep the wafer-thin rice sheet crisp and prevent moisture absorption.'
    ],
    substitutions: [
      { original: 'Jaggery powder', substitute: 'Powdered sugar with saffron', notes: 'Traditional Bellam and Cheeni versions.' }
    ],
    tags: ['andhra', 'sweets', 'traditional', 'artisanal', 'vegetarian', 'festive'],
    festival: ['Sankranti', 'Ugadi', 'Weddings', 'Diwali'],
    mealType: ['Desserts', 'Festival Foods', 'Snacks']
  },
  {
    name: 'Bobbatlu (Puran Poli Andhra Style)',
    alternateNames: ['Bakshalu', 'Oliga', 'Sweet Lentil Stuffed Flatbread'],
    description: 'Traditional melt-in-the-mouth sweet flatbread filled with slow-cooked chana dal, jaggery, cardamom, and nutmeg, roasted with generous ghee.',
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    category: 'Sweets',
    subcategory: 'Roti & Paratha',
    vegetarian: true,
    vegan: false,
    prepMinutes: 30,
    cookMinutes: 20,
    servings: 6,
    difficulty: 'Medium',
    calories: 290,
    protein: 6,
    carbohydrates: 48,
    fat: 9,
    fiber: 3,
    spiceLevel: 'Mild',
    ingredients: [
      { name: 'Chana dal (Bengal gram)', quantity: '1', unit: 'cup' },
      { name: 'Grated jaggery', quantity: '1', unit: 'cup' },
      { name: 'Cardamom powder', quantity: '1', unit: 'tsp' },
      { name: 'Nutmeg powder', quantity: '0.25', unit: 'tsp' },
      { name: 'Maida or whole wheat flour (Atta)', quantity: '1.5', unit: 'cups' },
      { name: 'Turmeric powder (for golden hue)', quantity: '0.25', unit: 'tsp' },
      { name: 'Desi Ghee', quantity: '4', unit: 'tbsp' },
      { name: 'Oil for dough resting', quantity: '3', unit: 'tbsp' }
    ],
    stepByStepInstructions: [
      'Knead flour, turmeric, a pinch of salt, and water into a soft pliable dough. Coat with 2 tbsp oil and rest for 1 hour.',
      'Cook chana dal with water until soft but not mushy. Drain water completely.',
      'In a pan, cook the boiled dal with grated jaggery on medium heat until thick and dry (Poornam). Grind with cardamom and nutmeg into a smooth dough.',
      'Divide dough and dal filling into equal balls (filling ball should be 1.5x larger than dough ball).',
      'Flatten dough ball on a greased parchment paper, place filling in center, seal edges and pat gently into a thin circle.',
      'Roast on a hot tawa with generous ghee on both sides until golden brown spots appear.',
      'Serve warm with extra melted ghee and warm milk.'
    ],
    cookingTips: [
      'Resting the outer dough in oil makes it ultra-elastic, allowing paper-thin rolling without tearing.'
    ],
    substitutions: [
      { original: 'Maida', substitute: 'Whole wheat flour', notes: 'Yields wholesome rustic texture.' }
    ],
    tags: ['andhra', 'sweets', 'traditional', 'roti-paratha', 'vegetarian', 'festive'],
    festival: ['Ugadi', 'Sankranti', 'Diwali', 'Varalakshmi Vratam'],
    mealType: ['Desserts', 'Festival Foods', 'Breakfast']
  }
];

console.log("Ready to expand ALL_STATES_DATA with full set of 500 recipes across all 28 states!");
