import { Recipe } from '../types';

export const DEFAULT_RECIPES: Recipe[] = [
  // ==========================================
  // NORTH INDIAN FAMOUS MASTERPIECES
  // ==========================================
  {
    id: 'delhi-butter-chicken',
    title: 'Authentic Old Delhi Murgh Makhani (Butter Chicken)',
    time: '40 mins',
    servings: '4',
    difficulty: 'Medium',
    rating: '4.9',
    category: 'Dinner',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Delhi / Punjab',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop',
    description: 'Tender tandoori-marinated chicken pieces simmered in a velvety, buttery tomato-cashew makhani gravy infused with crushed kasuri methi, honey, and aromatic garam masala.',
    calories: '490 kcal',
    isQuick: false,
    nutrition: {
      calories: 490,
      protein: 36,
      carbs: 18,
      fat: 32,
      fiber: 4,
      sugar: 8,
      sodium: 680
    },
    substitutions: [
      { original: 'Chicken thighs', substitute: 'Firm paneer cubes or pressed extra-firm tofu', notes: 'Pan-sear or grill until golden before simmering in makhani gravy.' },
      { original: 'Heavy cream', substitute: 'Soaked cashew cream or coconut cream', notes: 'Cashew cream delivers the signature silky royal texture.' },
      { original: 'Kasuri methi', substitute: 'Pinch of ground dried fenugreek or celery leaves', notes: 'Kasuri methi provides the authentic signature restaurant aroma.' }
    ],
    ingredients: [
      '600g Boneless chicken thighs, cut into bite-sized pieces',
      '1/2 cup Hung plain yogurt (dahi)',
      '1.5 tbsp Ginger-garlic paste (freshly crushed)',
      '2 tbsp Kashmiri red chili powder (for vibrant natural color)',
      '1 tsp Roasted cumin powder & 1 tsp Garam Masala',
      '500g Ripe red tomatoes, roughly chopped and pureed',
      '18-20 Raw cashew nuts, soaked in warm water',
      '3 tbsp Salted butter & 1 tbsp mustard oil or ghee',
      '1/4 cup Heavy fresh dairy cream',
      '1 tbsp Kasuri methi (dried fenugreek leaves), toasted & crushed',
      '1 tbsp Wildflower honey or sugar',
      'Whole spices: 1 bay leaf, 4 green cardamoms, 1-inch cinnamon stick'
    ],
    instructions: [
      'Marinate chicken in yogurt, 1 tbsp ginger-garlic paste, 1 tbsp Kashmiri chili powder, mustard oil, and salt for at least 30 minutes.',
      'Sear the marinated chicken in a hot cast-iron skillet or grill pan with a knob of butter until nicely charred on all edges (6-8 minutes). Set aside.',
      'Blend the soaked cashews with a splash of warm water into an ultra-smooth velvety paste.',
      'In a heavy-bottomed Dutch oven or kadai, melt 2 tbsp butter with whole spices (bay leaf, cardamoms, cinnamon) over medium heat until aromatic.',
      'Add remaining ginger-garlic paste and sauté for 1 minute. Pour in tomato puree, remaining Kashmiri chili, and cumin powder; simmer for 15 minutes until oil separates.',
      'Stir in the cashew paste and 1/2 cup warm water, whisking vigorously to create a silky, glossy gravy.',
      'Add charred chicken pieces, honey, and crushed kasuri methi. Simmer gently on low heat for 8-10 minutes.',
      'Swirl in fresh heavy cream and an extra knob of butter. Garnish with a drizzle of cream and ginger juliennes; serve with warm garlic naan or basmati rice.'
    ]
  },
  {
    id: 'punjabi-dal-makhani',
    title: 'Slow-Cooked Punjabi Dal Makhani with White Butter',
    time: '50 mins',
    servings: '5',
    difficulty: 'Medium',
    rating: '5.0',
    category: 'Dinner',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Punjab',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
    description: 'The iconic slow-simmered Punjabi whole black lentils (sabut urad) and red kidney beans, enriched with fresh tomato reduction, white butter, and aromatic dhungar charcoal smoke.',
    calories: '390 kcal',
    isQuick: false,
    nutrition: {
      calories: 390,
      protein: 19,
      carbs: 46,
      fat: 16,
      fiber: 14,
      sugar: 4,
      sodium: 540
    },
    substitutions: [
      { original: 'White butter / Ghee', substitute: 'Plant-based butter block and cashew milk', notes: 'Yields a wonderfully creamy 100% vegan Dal Makhani.' },
      { original: 'Rajma (kidney beans)', substitute: 'Brown lentils or black chickpeas', notes: 'Preserves the earthy thickness of the gravy.' }
    ],
    ingredients: [
      '1 cup Whole black lentils (sabut urad dal), soaked 8 hours',
      '1/4 cup Red kidney beans (rajma), soaked 8 hours',
      '4 large Ripe tomatoes, pureed',
      '2 tbsp Ginger-garlic paste',
      '2 tbsp Degi Kashmiri red chili powder',
      '4 tbsp Salted butter or fresh homemade makkhan',
      '3 tbsp Fresh double cream',
      '1 tsp Roasted cumin powder & 1 tsp Garam Masala',
      '1 tbsp Kasuri methi, lightly toasted and rubbed between palms',
      '1 tbsp Mustard oil or ghee for cooking',
      'Salt to taste'
    ],
    instructions: [
      'Rinse soaked urad dal and rajma thoroughly. Pressure cook with 4 cups water, 1 tsp salt, and 1 tsp Kashmiri chili for 6-7 whistles until completely soft and mashable.',
      'Gently mash a portion of the cooked lentils against the side of the pot with the back of a ladle to release starches.',
      'In a deep heavy kadai, heat 2 tbsp butter and 1 tbsp ghee. Add ginger-garlic paste and fry until raw aroma disappears.',
      'Add tomato puree and Kashmiri chili powder; cook on medium flame for 12-15 minutes until deep ruby red and fat begins to surface.',
      'Pour cooked dal with its cooking liquid into the tomato masala. Mix well and bring to a boil.',
      'Reduce heat to lowest setting and slow-simmer the dal for 30-40 minutes, stirring periodically and adding splashes of warm water as it thickens.',
      'Stir in roasted kasuri methi, garam masala, remaining butter, and fresh cream. Simmer for another 5 minutes.',
      'Optionally infuse with hot charcoal dhungar for 3 minutes for an authentic restaurant smokiness. Serve piping hot with jeera rice or butter tandoori roti.'
    ]
  },
  {
    id: 'tandoori-paneer-tikka',
    title: 'Tandoori Paneer Tikka with Mint Chutney & Charred Peppers',
    time: '25 mins',
    servings: '4',
    difficulty: 'Easy',
    rating: '4.9',
    category: 'Dinner',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Punjab / North India',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=1200&auto=format&fit=crop',
    description: 'Succulent cubes of fresh cottage cheese, bell peppers, and red onions marinated in spiced mustard-oil yogurt with carom seeds (ajwain) and charred to smokey tandoori perfection.',
    calories: '320 kcal',
    isQuick: true,
    nutrition: {
      calories: 320,
      protein: 22,
      carbs: 12,
      fat: 21,
      fiber: 4,
      sugar: 4,
      sodium: 460
    },
    substitutions: [
      { original: 'Paneer', substitute: 'Extra-firm tofu or button mushrooms', notes: 'Press tofu for 20 mins to ensure firm tandoori skewers.' },
      { original: 'Mustard oil', substitute: 'Desi ghee with a pinch of smoked paprika', notes: 'Mustard oil gives authentic Punjabi dhaba pungency.' }
    ],
    ingredients: [
      '400g Fresh Malai Paneer, cut into thick cubes',
      '1 large Green bell pepper & 1 Red bell pepper, cut into squares',
      '1 large Red onion, cut into petals',
      '3/4 cup Hung curd (thick Greek yogurt)',
      '2 tbsp Mustard oil (smoked)',
      '1.5 tbsp Roasted gram flour (besan)',
      '1.5 tbsp Ginger-garlic paste',
      '1.5 tbsp Kashmiri red chili powder & 1 tsp Turmeric',
      '1 tsp Ajwain (carom seeds), crushed between palms',
      '1 tsp Garam Masala & 1 tsp Chaat Masala',
      '1 tbsp Lemon juice & salt to taste',
      'Fresh mint-coriander chutney & onion rings to serve'
    ],
    instructions: [
      'Heat mustard oil in a small pan until smoking; pour over roasted gram flour (besan) and Kashmiri chili in a large bowl to bloom vibrant color.',
      'Add hung yogurt, ginger-garlic paste, crushed ajwain, garam masala, chaat masala, lemon juice, and salt. Whisk into a thick marinade.',
      'Gently fold in paneer cubes, bell pepper chunks, and onion petals. Marinate for at least 30 minutes.',
      'Thread paneer, peppers, and onions alternately onto skewers.',
      'Grill on a hot grill pan, cast-iron tawa, or bake in an oven at 450°F (230°C) for 10-12 minutes until nicely charred on edges.',
      'Brush with melted butter, dust with chaat masala and fresh lemon juice. Serve immediately with chilled mint chutney.'
    ]
  },
  {
    id: 'mumbai-pav-bhaji',
    title: 'Iconic Mumbai Butter Pav Bhaji with Toasted Ladi Pav',
    time: '30 mins',
    servings: '4',
    difficulty: 'Easy',
    rating: '5.0',
    category: 'Dinner',
    cuisine: 'West Indian',
    region: 'West India',
    state: 'Maharashtra / Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1200&auto=format&fit=crop',
    description: 'The world-famous Mumbai street-food sensation: a spiced mash of potatoes, green peas, cauliflower, and capsicum simmered with special Pav Bhaji masala, topped with a generous slab of Amul butter.',
    calories: '420 kcal',
    isQuick: false,
    nutrition: {
      calories: 420,
      protein: 11,
      carbs: 62,
      fat: 16,
      fiber: 9,
      sugar: 7,
      sodium: 620
    },
    substitutions: [
      { original: 'Amul Butter', substitute: 'Plant butter or extra virgin olive oil', notes: 'Traditional Mumbai flavor relies on generous salted butter.' },
      { original: 'Ladi Pav', substitute: 'Brioche slider buns or sourdough rolls', notes: 'Toast with butter and chili powder on a flat tawa.' }
    ],
    ingredients: [
      '3 large Potatoes & 1 cup Cauliflower florets, boiled and mashed',
      '3/4 cup Green peas & 1/2 cup Boiled beetroot (for natural ruby color)',
      '1 large Green bell pepper (capsicum), finely minced',
      '2 large Onions, finely chopped',
      '4 ripe Tomatoes, finely pureed',
      '2 tbsp Ginger-garlic paste',
      '2.5 tbsp Authentic Mumbai Pav Bhaji Masala',
      '1.5 tbsp Kashmiri red chili powder & 1/2 tsp Turmeric',
      '4 tbsp Salted butter (plus extra for buns)',
      '1 tbsp Kasuri methi & fresh cilantro',
      '8 soft Ladi Pav buns & 1 lemon cut into wedges'
    ],
    instructions: [
      'Boil potatoes, cauliflower, peas, and beetroot until completely soft. Mash thoroughly with a potato masher.',
      'Melt 2 tbsp butter in a wide flat tawa or skillet. Add chopped onions and sauté until translucent.',
      'Add minced bell pepper and ginger-garlic paste; sauté for 3 minutes until aromatic.',
      'Add tomato puree, turmeric, Kashmiri chili powder, and pav bhaji masala. Cook until butter separates from the edges.',
      'Add the mashed vegetable medley and 1 cup warm water. Using a potato masher, continuously mash and blend everything on the tawa over medium heat for 8-10 minutes.',
      'Stir in crushed kasuri methi, chopped cilantro, and fresh lemon juice. Simmer into a thick, glossy bhaji.',
      'Slice pav buns horizontally. Melt butter on the hot tawa with a pinch of pav bhaji masala and fresh coriander; toast pav until golden and buttery.',
      'Serve piping hot bhaji topped with a big dollop of butter, alongside toasted pav, diced raw onions, and lime wedges.'
    ]
  },
  {
    id: 'palak-paneer-dhaba',
    title: 'Dhaba-Style Creamy Palak Paneer with Golden Garlic Tadka',
    time: '25 mins',
    servings: '3',
    difficulty: 'Easy',
    rating: '4.8',
    category: 'Dinner',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Punjab / North India',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop',
    description: 'Vibrant emerald green spinach leaves blanched and pureed with green chilies, simmered with tender pan-crisped cottage cheese cubes, and finished with a sizzling garlic-cumin tadka.',
    calories: '340 kcal',
    isQuick: false,
    nutrition: {
      calories: 340,
      protein: 20,
      carbs: 14,
      fat: 24,
      fiber: 6,
      sugar: 3,
      sodium: 490
    },
    substitutions: [
      { original: 'Paneer', substitute: 'Extra-firm tofu or roasted halloumi', notes: 'Press and pan-sear tofu for identical texture.' },
      { original: 'Heavy cream', substitute: 'Cashew milk or coconut yogurt', notes: 'Maintains creamy consistency with zero dairy.' }
    ],
    ingredients: [
      '400g Fresh tender spinach leaves (palak), washed thoroughly',
      '250g Fresh Malai Paneer, cut into 1-inch cubes',
      '2 Green chilies & 1-inch Ginger piece',
      '6 cloves Garlic, finely chopped (for tadka)',
      '1 large Onion, finely minced',
      '2 medium Tomatoes, finely pureed',
      '1 tsp Cumin seeds & 1/2 tsp Garam Masala',
      '1/2 tsp Turmeric powder & 1 tsp Coriander powder',
      '2 tbsp Pure Desi Ghee & 1 tbsp butter',
      '2 tbsp Fresh dairy cream',
      'Pinch of Kasuri methi & ice water bath for blanching'
    ],
    instructions: [
      'Bring a pot of salted water to boil. Add spinach and green chilies; blanch for 2 minutes only, then immediately plunge into ice-cold water to retain brilliant green color.',
      'Blend blanched spinach, chilies, and ginger into a smooth, vibrant puree without adding extra water.',
      'Lightly pan-sear paneer cubes in 1 tsp ghee until delicate golden edges form (optional, or keep raw and soft).',
      'In a skillet, melt 1.5 tbsp ghee. Add cumin seeds and minced onions, sautéing until golden brown.',
      'Add pureed tomatoes, turmeric, coriander powder, and salt. Cook until tomatoes soften and ghee separates from the sides.',
      'Pour in the emerald spinach puree and 1/4 cup water. Simmer on medium-low heat for 4-5 minutes.',
      'Gently fold in paneer cubes, garam masala, and kasuri methi. Simmer for 2 minutes so paneer absorbs the flavors.',
      'Prepare the tadka: heat 1 tbsp ghee in a small ladle, fry chopped garlic until nutty and golden brown. Pour sizzling garlic tadka over the hot curry, swirl cream, and serve.'
    ]
  },
  {
    id: 'amritsari-pindi-chole',
    title: 'Authentic Amritsari Pindi Chole with Spiced Bhature Masala',
    time: '35 mins',
    servings: '4',
    difficulty: 'Medium',
    rating: '4.9',
    category: 'Lunch',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Punjab',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop',
    description: 'Dark, intensely spiced Amritsari chickpea curry brewed with black tea bag aromatics, roasted anardana (dried pomegranate), amchur, ginger juliennes, and slit green chilies.',
    calories: '370 kcal',
    isQuick: false,
    nutrition: {
      calories: 370,
      protein: 17,
      carbs: 56,
      fat: 11,
      fiber: 15,
      sugar: 5,
      sodium: 520
    },
    substitutions: [
      { original: 'Anardana (pomegranate powder)', substitute: 'Dry mango powder (Amchur) or tamarind pulp', notes: 'Gives the signature tart, earthy depth.' },
      { original: 'Black tea bag', substitute: 'Dried amla (Indian gooseberry) pieces', notes: 'Naturally creates the rich, deep classic dark color.' }
    ],
    ingredients: [
      '2 cups Kabuli chickpeas (chana), soaked overnight',
      '1 Black tea bag (for natural deep dark color)',
      'Whole spices: 1 black cardamom, 2 bay leaves, 1 cinnamon stick, 3 cloves',
      '2 tbsp Anardana powder (dried pomegranate seeds, roasted & ground)',
      '1.5 tbsp Chole Masala powder (coriander, cumin, black pepper, clove)',
      '1 tbsp Kasuri methi & 1 tsp Amchur (dry mango powder)',
      '2 Onions, finely pureed & 2 Tomatoes, pureed',
      '2 tbsp Ginger-garlic paste',
      '3 Green chilies, slit lengthwise & 2-inch Ginger juliennes',
      '3 tbsp Mustard oil or ghee',
      'Fresh coriander leaves for garnish'
    ],
    instructions: [
      'Boil soaked chickpeas in pressure cooker with 4 cups water, whole spices (black cardamom, bay leaf, cinnamon), tea bag, and 1 tsp salt for 5-6 whistles until completely tender.',
      'Discard the tea bag and whole spices. Lightly crush 2 tablespoons of chickpeas with a fork to help thicken the gravy naturally.',
      'Heat mustard oil in a heavy iron kadai until smoking hot, then reduce heat. Add ginger-garlic paste and sauté for 1 minute.',
      'Add pureed onions and cook until deep golden brown (approx 8 minutes).',
      'Add pureed tomatoes, anardana powder, chole masala, amchur, and turmeric. Cook until the oil releases and masala turns dark and fragrant.',
      'Add cooked chickpeas along with their spiced dark broth. Stir well and simmer on medium-low for 15-20 minutes, allowing flavors to infuse deeply.',
      'In a small pan, heat 1 tbsp ghee; flash fry slit green chilies and ginger juliennes for 30 seconds. Pour this aromatic tadka over the chole.',
      'Garnish with fresh cilantro and pickled red onions. Serve with piping hot puffed bhature, kulchas, or steamed rice.'
    ]
  },
  {
    id: 'kashmiri-rogan-josh',
    title: 'Royal Kashmiri Rogan Josh with Ratan Jot & Fennel',
    time: '45 mins',
    servings: '4',
    difficulty: 'Medium',
    rating: '4.8',
    category: 'Dinner',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Kashmir',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1200&auto=format&fit=crop',
    description: 'An aristocratic Kashmiri culinary treasure slow-braised in a rich yogurt gravy scented with ground fennel seeds (saunf), dried ginger powder (sonth), black cardamom, and Kashmiri red chilies.',
    calories: '460 kcal',
    isQuick: false,
    nutrition: {
      calories: 460,
      protein: 34,
      carbs: 12,
      fat: 30,
      fiber: 3,
      sugar: 4,
      sodium: 590
    },
    substitutions: [
      { original: 'Mutton / Lamb', substitute: 'Baby potatoes, lotus stem (nadru), or portobello mushrooms', notes: 'Kashmiri Dum Aloo and Nadru Rogan Josh are famous royal vegetarian variants.' },
      { original: 'Mustard oil', substitute: 'Pure desi ghee', notes: 'Maintains authentic Kashmiri richness.' }
    ],
    ingredients: [
      '600g Tender bone-in lamb or chicken pieces',
      '1 cup Whisked Greek yogurt or fresh hung curd (dahi)',
      '3 tbsp Cold-pressed mustard oil',
      '2.5 tbsp Kashmiri red chili powder (dissolved in 3 tbsp warm water)',
      '1.5 tbsp Ground fennel seeds (saunf powder)',
      '1 tsp Dry ginger powder (sonth)',
      '1/2 tsp Hing (asafoetida) & 1/2 tsp Shahi Jeera',
      'Whole spices: 2 black cardamoms, 4 green cardamoms, 4 cloves, 1-inch cinnamon',
      '1 tsp Kashmiri Garam Masala',
      'Salt to taste & fresh mint leaves to garnish'
    ],
    instructions: [
      'Heat mustard oil in a heavy-bottomed pot until smoking point; cool slightly to remove raw pungency.',
      'Reheat oil on medium. Add whole spices (black and green cardamoms, cloves, cinnamon) and a pinch of hing until fragrant.',
      'Add meat pieces and brown on high heat for 6-8 minutes until seared and aromatic.',
      'Lower flame. Add the Kashmiri red chili paste, stirring vigorously for 1 minute to impart a deep scarlet hue.',
      'Whisk yogurt thoroughly and slowly add 1 spoon at a time while continuously stirring to prevent curdling.',
      'Stir in ground fennel powder (saunf), dry ginger powder (sonth), and salt. Cook until oil floats to the top.',
      'Add 1.5 cups warm water, cover with a tight lid, and slow-braise on low flame for 30-35 minutes until the meat is succulent and fork-tender.',
      'Sprinkle Kashmiri garam masala and let rest covered for 5 minutes before serving with saffron pulao or hot Kashmiri girda bread.'
    ]
  },
  {
    id: 'punjabi-rajma-masala',
    title: 'Homestyle Punjabi Rajma Masala with Steamed Basmati',
    time: '35 mins',
    servings: '4',
    difficulty: 'Easy',
    rating: '4.9',
    category: 'Lunch',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Punjab / North India',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
    description: 'The ultimate North Indian comfort food: melt-in-mouth Jammu red kidney beans simmered in a spiced ginger-garlic-tomato bhuna masala with fresh coriander and desi ghee.',
    calories: '350 kcal',
    isQuick: false,
    nutrition: {
      calories: 350,
      protein: 16,
      carbs: 52,
      fat: 9,
      fiber: 13,
      sugar: 4,
      sodium: 480
    },
    substitutions: [
      { original: 'Red kidney beans (Rajma)', substitute: 'Black beans or pinto beans', notes: 'Cook until creamy and completely tender.' },
      { original: 'Desi Ghee', substitute: 'Coconut oil or olive oil', notes: 'Keeps dish 100% plant-based.' }
    ],
    ingredients: [
      '1.5 cups Kashmiri or Chitra Rajma (red kidney beans), soaked overnight',
      '2 large Onions, finely grated or pureed',
      '3 ripe Tomatoes, pureed',
      '1.5 tbsp Ginger-garlic paste',
      '2 Green chilies, finely chopped',
      '1 tsp Cumin seeds & 1 Bay leaf',
      '1 tsp Turmeric, 1 tbsp Kashmiri chili powder, 1.5 tbsp Coriander powder',
      '1 tsp Garam Masala & 1/2 tsp Amchur powder',
      '2 tbsp Pure Ghee or mustard oil',
      'Handful of fresh cilantro, chopped'
    ],
    instructions: [
      'Drain soaked rajma. Pressure cook with 4.5 cups water, 1 bay leaf, and 1 tsp salt for 6-7 whistles until beans mash effortlessly between fingers.',
      'Heat ghee in a deep pan. Add cumin seeds; once they crackle, add grated onions and sauté on medium until rich caramelized brown.',
      'Add ginger-garlic paste and chopped green chilies; sauté for 2 minutes.',
      'Add tomato puree, turmeric, chili powder, and coriander powder. Cook the bhuna masala until fragrant and oil separates from the edges (8-10 minutes).',
      'Add the boiled rajma along with all of its nutrient-rich cooking stock. Mash a few ladlefuls of beans to create a rich, thick gravy.',
      'Simmer gently on low flame for 15-20 minutes, stirring occasionally.',
      'Finish with garam masala, amchur powder, and chopped cilantro. Serve warm with piping hot steamed jeera basmati rice and sliced onions.'
    ]
  },
  {
    id: 'shahi-paneer-mughlai',
    title: 'Royal Mughlai Shahi Paneer in Saffron Cashew Cream',
    time: '25 mins',
    servings: '3',
    difficulty: 'Easy',
    rating: '4.8',
    category: 'Dinner',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Delhi / Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1200&auto=format&fit=crop',
    description: 'Silky cubes of fresh paneer poached in an aromatic Mughlai gravy of blended cashews, melon seeds, caramelized white onions, saffron threads, and green cardamom.',
    calories: '420 kcal',
    isQuick: false,
    nutrition: {
      calories: 420,
      protein: 18,
      carbs: 22,
      fat: 29,
      fiber: 3,
      sugar: 6,
      sodium: 510
    },
    substitutions: [
      { original: 'Paneer', substitute: 'Pan-seared tofu or roasted cauliflower florets', notes: 'Maintains delicate cream sauce pairing.' },
      { original: 'Cashews & Magaz seeds', substitute: 'Blanched peeled almonds', notes: 'Yields a mild, sweet nutty base.' }
    ],
    ingredients: [
      '300g Fresh Malai Paneer, sliced into delicate triangles',
      '2 medium White onions, boiled and pureed',
      '15-18 Cashews & 1 tbsp Magaz (watermelon seeds), soaked in warm milk',
      '1/2 cup Plain hung curd (yogurt), whisked smooth',
      '1/4 cup Heavy dairy cream & 2 tbsp Ghee',
      'A generous pinch of Kashmiri Saffron threads (Kesar), bloomed in warm milk',
      'Whole spices: 1 bay leaf, 3 green cardamoms, 1 mace blade (javitri)',
      '1/2 tsp White pepper powder & 1/2 tsp Shahi Garam Masala',
      '1 tbsp Kasuri methi & 1 tsp Rose water or Kewra water (optional)'
    ],
    instructions: [
      'Blend soaked cashews and melon seeds into a silky smooth ivory cream.',
      'Heat ghee in a pan with bay leaf, green cardamom, and mace until fragrant.',
      'Add boiled onion paste and cook gently for 4-5 minutes on low heat without browning.',
      'Lower flame, stir in whisked yogurt and cashew paste continuously until emulsified.',
      'Pour in 3/4 cup warm water, saffron milk, white pepper powder, and salt. Simmer for 6-8 minutes until velvety.',
      'Gently place fresh paneer triangles into the royal gravy. Cook on low heat for 3 minutes.',
      'Swirl in fresh cream, a drop of kewra water, and crushed kasuri methi. Serve garnished with slivered almonds and saffron threads alongside butter naan.'
    ]
  },
  {
    id: 'delhi-samosa-chaat',
    title: 'Crispy Samosa Chaat with Spiced Chana & Mint Tamarind Chutneys',
    time: '20 mins',
    servings: '4',
    difficulty: 'Easy',
    rating: '5.0',
    category: 'Snacks',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Delhi / Uttar Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop',
    description: 'Golden flaky potato-pea samosas crushed gently and smothered in warm spiced chickpea curry, chilled sweetened yogurt, tangy tamarind chutney, spicy green mint chutney, and crispy nylon sev.',
    calories: '360 kcal',
    isQuick: true,
    nutrition: {
      calories: 360,
      protein: 11,
      carbs: 52,
      fat: 14,
      fiber: 8,
      sugar: 12,
      sodium: 540
    },
    substitutions: [
      { original: 'Samosas', substitute: 'Crispy potato patties (Aloo Tikki) or papdi', notes: 'Creates classic Aloo Tikki Chaat.' },
      { original: 'Sweet yogurt', substitute: 'Coconut yogurt whisked with a pinch of black salt and sugar', notes: 'For a 100% vegan street-style chaat.' }
    ],
    ingredients: [
      '4 Freshly baked or fried crisp vegetable samosas',
      '1.5 cups Warm spiced chana masala (chickpea curry)',
      '1 cup Fresh plain yogurt, whisked with 1 tbsp sugar and pinch of salt',
      '1/3 cup Sweet Date-Tamarind Chutney (Saunth)',
      '1/3 cup Spicy Mint-Coriander Chutney',
      '1/2 cup Fine nylon sev & 1/4 cup Pomegranate pearls',
      '1 small Red onion, finely chopped',
      '1 tsp Chaat Masala & 1/2 tsp Roasted cumin powder',
      'Fresh cilantro leaves to garnish'
    ],
    instructions: [
      'Place 1 or 2 warm crispy samosas on each serving plate and crush gently with the back of a spoon.',
      'Ladle 1/2 cup of steaming hot chickpea curry over the crushed samosas.',
      'Generously drizzle chilled sweet whisked yogurt over the dish.',
      'Spoon over the spicy green mint chutney and sweet tangy tamarind chutney in zig-zag ribbons.',
      'Sprinkle roasted cumin powder, chaat masala, and black salt across the top.',
      'Garnish generously with finely diced onions, fresh cilantro leaves, crunchy nylon sev, and vibrant ruby pomegranate pearls. Serve immediately while samosas remain crisp.'
    ]
  },
  {
    id: 'malai-kofta-curry',
    title: 'Royal Malai Kofta in Velvety Cashew Tomato Shahi Gravy',
    time: '40 mins',
    servings: '4',
    difficulty: 'Medium',
    rating: '4.9',
    category: 'Dinner',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'Punjab / Rajasthan',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1200&auto=format&fit=crop',
    description: 'Melt-in-mouth dumplings crafted from paneer, mawa (khoya), and mashed potatoes stuffed with dry fruits, nestled in an ultra-luxurious aromatic cashew-tomato shahi gravy.',
    calories: '450 kcal',
    isQuick: false,
    nutrition: {
      calories: 450,
      protein: 15,
      carbs: 34,
      fat: 29,
      fiber: 4,
      sugar: 7,
      sodium: 520
    },
    substitutions: [
      { original: 'Mawa / Khoya', substitute: 'Grated paneer and milk powder blend', notes: 'Recreates the rich sweetness of traditional kofta filling.' },
      { original: 'Frying Koftas', substitute: 'Bake at 400°F (200°C) or Air-fry with oil spray for 12 mins', notes: 'Reduces calories while maintaining golden crisp crust.' }
    ],
    ingredients: [
      '200g Fresh Paneer, finely grated',
      '2 Boiled potatoes, peeled and grated',
      '2 tbsp Cornflour (cornstarch) & 2 tbsp All-purpose flour (maida)',
      'For Kofta Stuffing: 2 tbsp chopped cashews, raisins, green chili, and pinch of cardamom',
      'Oil for deep frying koftas',
      'For Shahi Gravy: 4 ripe tomatoes (boiled & pureed), 18 cashews (soaked & pureed)',
      '2 Onions (boiled & ground to paste)',
      '1.5 tbsp Ginger-garlic paste',
      '1/2 cup Fresh cream & 2 tbsp Butter',
      '1 tbsp Kasuri methi, 1 tsp Kashmiri chili, 1/2 tsp Garam masala'
    ],
    instructions: [
      'In a bowl, mix grated paneer, grated potatoes, cornflour, maida, and salt into a smooth soft dough.',
      'Divide into equal balls. Flatten each ball, place a pinch of chopped cashew-raisin stuffing in the center, and roll into smooth seamless spheres or ovals.',
      'Deep fry koftas in medium-hot oil until golden amber and crisp. Drain carefully on paper towels.',
      'In a pan, melt butter with whole spices. Add onion paste and sauté for 4 minutes until raw aroma vanishes.',
      'Add ginger-garlic paste, tomato puree, Kashmiri chili, and turmeric; cook until butter glistens on the sides.',
      'Pour in the blended cashew paste and 1 cup warm water. Whisk continuously and simmer on low for 8 minutes into a silky royal gravy.',
      'Stir in fresh cream, garam masala, sugar, and crushed kasuri methi.',
      'To serve: pour hot shahi gravy into a wide serving bowl and gently arrange the crispy malai koftas on top just before serving (do not boil koftas in gravy to avoid breaking).'
    ]
  },

  // ==========================================
  // SOUTH INDIAN FAMOUS MASTERPIECES
  // ==========================================
  {
    id: 'masala-dosa-mysore',
    title: 'Crispy Mysore Masala Dosa with Potato Sagu & Chutneys',
    time: '25 mins',
    servings: '3',
    difficulty: 'Medium',
    rating: '5.0',
    category: 'Breakfast',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Karnataka / South India',
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200&auto=format&fit=crop',
    description: 'Golden lace-thin fermented rice and urad dal crepes smeared with a spicy roasted red chili-garlic chutney, stuffed with comforting spiced mustard-tempered potato masala, and roasted with pure ghee.',
    calories: '360 kcal',
    isQuick: false,
    nutrition: {
      calories: 360,
      protein: 9,
      carbs: 58,
      fat: 12,
      fiber: 6,
      sugar: 3,
      sodium: 480
    },
    substitutions: [
      { original: 'Fermented Dosa Batter', substitute: 'Instant oats-rava batter or ready store-bought batter', notes: 'Let rava batter rest 15 mins for maximum crispness.' },
      { original: 'Ghee', substitute: 'Cold-pressed sesame oil (Gingelly oil)', notes: 'Imparts a wonderful traditional South Indian nutty aroma.' }
    ],
    ingredients: [
      '3 cups Fermented Dosa Batter (rice + urad dal + fenugreek)',
      '4 medium Potatoes, boiled, peeled, and gently crushed',
      '1 large Onion, thinly sliced & 2 green chilies, minced',
      '1 sprig Fresh curry leaves & 1/2 tsp Mustard seeds',
      '1/2 tsp Turmeric powder & 1 tsp Chana dal / Urad dal',
      'Red Mysore Chutney: 6 dried Byadgi red chilies, 4 garlic cloves, 2 tbsp roasted chana dal, tamarind, blended smooth',
      '3 tbsp Pure Desi Ghee or Gingelly oil for roasting',
      'Fresh coconut chutney and hot vegetable sambar for serving'
    ],
    instructions: [
      'Prepare Potato Masala: Heat 1 tbsp oil in a skillet. Add mustard seeds, chana dal, urad dal, curry leaves, and green chilies. Once dal turns golden, add sliced onions and turmeric.',
      'Sauté until onions are translucent. Add crushed boiled potatoes, salt, and 3 tbsp water. Simmer for 3 minutes into a moist, spreadable filling.',
      'Heat a seasoned cast-iron dosa tawa until smoking hot. Splash with cold water drops to regulate temperature and wipe clean.',
      'Pour a ladleful of batter in the center and spread outward in swift, concentric circles to form a thin crepe.',
      'Drizzle 1 tsp ghee around the edges and center. Cook on medium-high heat until bottom turns deep golden and crisp.',
      'Generously spread 1 tablespoon of red Mysore chutney across the surface of the dosa.',
      'Place a generous portion of potato masala in the center. Fold over into a neat cylinder or triangle.',
      'Serve sizzling hot with fresh coconut-green chili chutney, tomato-onion chutney, and piping hot toor dal sambar.'
    ]
  },
  {
    id: 'hyderabadi-chicken-dum-biryani',
    title: 'Authentic Hyderabadi Chicken Dum Biryani with Saffron',
    time: '50 mins',
    servings: '5',
    difficulty: 'Medium',
    rating: '5.0',
    category: 'Dinner',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Telangana / Hyderabad',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop',
    description: 'The monarch of Indian culinary traditions: fragrant 2-year aged long-grain basmati rice layered over deeply spiced, yogurt-marinated chicken, sealed with dough and slow-cooked on dum with saffron milk, mint, and crisp fried birista onions.',
    calories: '560 kcal',
    isQuick: false,
    nutrition: {
      calories: 560,
      protein: 38,
      carbs: 64,
      fat: 20,
      fiber: 5,
      sugar: 3,
      sodium: 690
    },
    substitutions: [
      { original: 'Chicken', substitute: 'Mixed vegetables (cauliflower, carrots, beans, peas, paneer)', notes: 'For authentic Hyderabadi Veg Dum Biryani, marinate vegetables identically.' },
      { original: 'Ghee', substitute: 'Vegetable oil + butter', notes: 'Ghee provides the indispensable regal aroma.' }
    ],
    ingredients: [
      '700g Chicken, bone-in pieces for rich flavor',
      '2.5 cups Aged Royal Basmati Rice, washed and soaked 30 mins',
      '1 cup Plain hung yogurt (dahi)',
      '2 tbsp Ginger-garlic paste',
      '3 large Onions, thinly sliced & fried into crisp golden-brown Birista',
      '1/2 cup Fresh mint leaves & 1/2 cup Fresh coriander leaves, chopped',
      '4 Green chilies, slit & juice of 1 lemon',
      'Whole Spices: 2 Star anise, 4 green cardamoms, 1 black cardamom, 1-inch cinnamon, 4 cloves, 1 tsp Shahi jeera',
      '1.5 tbsp Biryani Masala powder & 1.5 tbsp Kashmiri chili powder',
      '3 tbsp Pure Ghee & 1/4 cup Warm milk with crushed saffron strands',
      '1 tbsp Kewra or rose water'
    ],
    instructions: [
      'Marinate chicken with yogurt, ginger-garlic paste, half the fried onions (birista), chopped mint, cilantro, green chilies, chili powder, biryani masala, lemon juice, 2 tbsp ghee, and salt for at least 1 hour.',
      'Boil 8 cups water with whole spices (shahi jeera, cardamoms, cinnamon, cloves), 2 tbsp salt, and 1 tsp oil. Add soaked basmati rice.',
      'Cook rice until 70% done (firm to bite, approx 5-6 minutes). Drain immediately.',
      'In a heavy-bottomed handi or Dutch oven, lay the marinated chicken evenly at the bottom as the base layer.',
      'Spread the drained parboiled basmati rice over the chicken in an even layer.',
      'Top with remaining crispy fried onions, chopped mint, coriander, saffron-infused warm milk, 1 tbsp ghee, and kewra water.',
      'Seal the pot tightly with aluminum foil or wheat dough (dum seal), place lid on top, and cook on high heat for 5 minutes.',
      'Reduce heat to lowest possible setting (or place handi on an iron tawa) and slow-cook on dum for 30 minutes.',
      'Turn off heat and let rest unopened for 10 minutes. Gently fluff with a flat spatula and serve with Mirchi ka Salan and cucumber raita.'
    ]
  },
  {
    id: 'steamed-idli-sambar',
    title: 'Soft Fluffy Jasmine Idlis with Drumstick Sambar & Coconut Chutney',
    time: '20 mins',
    servings: '4',
    difficulty: 'Easy',
    rating: '5.0',
    category: 'Breakfast',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Tamil Nadu / Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop',
    description: 'Pillow-soft, naturally fermented steamed rice-lentil cakes served floating in piping hot tangy drumstick sambar and fresh tempered grated coconut chutney.',
    calories: '280 kcal',
    isQuick: true,
    nutrition: {
      calories: 280,
      protein: 10,
      carbs: 54,
      fat: 3,
      fiber: 6,
      sugar: 2,
      sodium: 410
    },
    substitutions: [
      { original: 'Idli Rice', substitute: 'Rava (semolina) or Foxtail Millet flour', notes: 'Rava Idlis can be made instantly with yogurt and fruit salt.' },
      { original: 'Toor Dal Sambar', substitute: 'Moong dal or split yellow peas', notes: 'Lighter and highly digestible.' }
    ],
    ingredients: [
      '3 cups Fermented Idli Batter (Idli rice + whole urad gota + fenugreek)',
      '1 cup Toor dal (pigeon peas), boiled and mashed',
      '1 drumstick (muringakka), cut into 2-inch pieces',
      '10 Small shallots (sambar onions) & 1 tomato, chopped',
      '2 tbsp Tamarind extract & 2 tbsp Sambar Masala powder',
      'For Tadka: 1 tsp mustard seeds, 1 sprig curry leaves, 2 dry red chilies, pinch of hing, 1 tbsp sesame oil',
      'Fresh Coconut Chutney: 1 cup freshly grated coconut, 2 green chilies, 1 tbsp roasted chana dal, ginger, ground smooth'
    ],
    instructions: [
      'Grease idli steamer plates lightly with sesame oil or ghee. Pour batter into indentations until 3/4 full.',
      'Steam in a hot idli steamer or pressure cooker (without weight whistle) for 10-12 minutes until toothpick comes out clean.',
      'Let rest for 2 minutes. Dip a spoon in water and scoop out delicate, cloud-soft idlis.',
      'For Sambar: In a pot, boil drumstick and shallots in tamarind water with turmeric and salt until tender. Add cooked toor dal and sambar powder; simmer for 5 minutes.',
      'Temper with mustard seeds, curry leaves, hing, and dry red chilies in hot oil. Pour sizzling tadka into the boiling sambar.',
      'Serve hot idlis generously bathed in hot sambar with fresh coconut chutney on the side.'
    ]
  },
  {
    id: 'chettinad-pepper-chicken',
    title: 'Fiery Chettinad Pepper Chicken Roast (Tamil Nadu)',
    time: '30 mins',
    servings: '3',
    difficulty: 'Medium',
    rating: '4.9',
    category: 'Dinner',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop',
    description: 'A bold, aromatic culinary marvel from the Chettinad region of Tamil Nadu, featuring chicken roasted with freshly dry-ground black peppercorns, star anise, fennel seeds, fresh curry leaves, and small shallots.',
    calories: '410 kcal',
    isQuick: false,
    nutrition: {
      calories: 410,
      protein: 37,
      carbs: 11,
      fat: 25,
      fiber: 4,
      sugar: 2,
      sodium: 560
    },
    substitutions: [
      { original: 'Chicken', substitute: 'Portobello mushrooms, paneer cubes, or baby potatoes', notes: 'Chettinad Mushroom Chukka is a world-famous vegetarian alternative.' },
      { original: 'Gingelly oil (Sesame)', substitute: 'Coconut oil or peanut oil', notes: 'Cold-pressed gingelly oil gives the authentic Tamil Nadu depth.' }
    ],
    ingredients: [
      '500g Chicken pieces, cut small',
      'Fresh Chettinad Masala: 1.5 tbsp whole black peppercorns, 1 tbsp coriander seeds, 1 tsp fennel seeds, 1 tsp cumin seeds, 4 dry red chilies, 1 star anise, 1 small piece stone flower (kalpasi), 2 tbsp grated fresh coconut (dry-roasted & ground)',
      '15 Small pearl onions (shallots/sambar onions), finely sliced',
      '2 sprigs Fresh curry leaves',
      '1.5 tbsp Ginger-garlic paste',
      '2 ripe Tomatoes, finely chopped',
      '1/2 tsp Turmeric powder',
      '3 tbsp Cold-pressed gingelly oil (sesame oil)',
      'Salt to taste & fresh coriander leaves'
    ],
    instructions: [
      'In a dry pan, gently roast whole black peppercorns, coriander seeds, fennel, cumin, dry red chilies, star anise, kalpasi, and grated coconut until fragrant. Cool and grind into a coarse aromatic masala powder.',
      'Heat gingelly oil in a heavy pan. Add curry leaves and sliced shallots, sautéing until shallots turn soft and golden.',
      'Add ginger-garlic paste and sauté for 1 minute until fragrant.',
      'Add chopped tomatoes and turmeric powder; cook until tomatoes break down into a soft paste.',
      'Add chicken pieces and salt. Sauté on high heat for 4-5 minutes until chicken is seared on the outside.',
      'Add the freshly ground Chettinad pepper spice powder and 1/2 cup warm water. Mix thoroughly.',
      'Cover with a lid and cook on medium-low flame for 15 minutes until chicken is juicy and fully cooked.',
      'Remove lid and roast on medium-high for 3-4 minutes until the spicy masala clings thick and roasted to each piece. Garnish with crisp curry leaves and serve with flaky parotta or rice.'
    ]
  },
  {
    id: 'kerala-meen-moilee',
    title: 'Kerala Coastal Coconut Meen Moilee (Fish Curry)',
    time: '25 mins',
    servings: '3',
    difficulty: 'Easy',
    rating: '4.9',
    category: 'Dinner',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Kerala',
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop',
    description: 'A delicate, fragrant coastal Kerala curry made with Kingfish or Pomfret gently poached in silky fresh coconut milk, flavored with julienned ginger, green chilies, curry leaves, and a touch of turmeric.',
    calories: '380 kcal',
    isQuick: false,
    nutrition: {
      calories: 380,
      protein: 32,
      carbs: 9,
      fat: 25,
      fiber: 3,
      sugar: 2,
      sodium: 460
    },
    substitutions: [
      { original: 'Kingfish / Seer fish', substitute: 'Firm tofu cubes, cauliflower florets, or large prawns', notes: 'Simmer gently without overcooking.' },
      { original: 'Coconut oil', substitute: 'Avocado oil or neutral cooking oil', notes: 'Coconut oil gives the irreplaceable Malabar aroma.' }
    ],
    ingredients: [
      '450g Firm white fish steaks (Kingfish, Pomfret, or Salmon)',
      '1 cup Thin coconut milk (second extract) & 1/2 cup Thick coconut milk (first extract)',
      '1 large Onion, sliced into thin wedges',
      '2 medium Tomatoes, cut into wedges',
      '2-inch Ginger, cut into fine juliennes',
      '4-5 Garlic cloves, sliced thin & 3 green chilies, slit',
      '2 sprigs Fresh green curry leaves',
      '1/2 tsp Turmeric powder & 1/2 tsp Black pepper powder',
      '1 tbsp Lemon juice or 2 pieces Kudampuli (Malabar tamarind)',
      '2 tbsp Pure Virgin Coconut Oil',
      'Salt to taste'
    ],
    instructions: [
      'Marinate fish steaks with 1/4 tsp turmeric, 1/4 tsp black pepper, lemon juice, and salt for 15 minutes.',
      'Lightly shallow-fry fish in 1 tbsp coconut oil for 1.5 minutes per side (do not fully cook). Remove and set aside.',
      'In the same pan, add remaining coconut oil, mustard seeds, curry leaves, sliced garlic, ginger juliennes, and slit green chilies. Sauté gently without browning.',
      'Add sliced onions and cook until translucent and sweet.',
      'Stir in turmeric powder and thin coconut milk. Bring to a gentle, low simmer.',
      'Gently slide the seared fish steaks and tomato wedges into the simmering coconut broth. Cook covered on low heat for 6-8 minutes.',
      'Turn heat to lowest setting and pour in the thick coconut cream (first extract). Gently swirl the pan (do not stir vigorously with a spoon to avoid breaking the fish).',
      'Warm for 1 minute without boiling. Remove from heat, drizzle a few drops of raw coconut oil, and serve with steaming hot Appams or Idiyappam.'
    ]
  },
  {
    id: 'karnataka-bisi-bele-bath',
    title: 'Traditional Karnataka Bisi Bele Bath with Ghee-Roasted Cashews',
    time: '35 mins',
    servings: '4',
    difficulty: 'Easy',
    rating: '4.8',
    category: 'Lunch',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Karnataka',
    imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1200&auto=format&fit=crop',
    description: 'The beloved comforting Karnataka hot-lentil-rice pot, simmered with toor dal, mixed country vegetables, tangy tamarind extract, freshly ground spiced coconut bisi bele masala, and crunchy ghee-fried cashews.',
    calories: '410 kcal',
    isQuick: false,
    nutrition: {
      calories: 410,
      protein: 14,
      carbs: 68,
      fat: 11,
      fiber: 10,
      sugar: 6,
      sodium: 490
    },
    substitutions: [
      { original: 'Sona Masoori rice', substitute: 'Brown rice, millets, or quinoa', notes: 'Millets create a wholesome rustic variation with extra fiber.' },
      { original: 'Ghee', substitute: 'Virgin coconut oil', notes: 'Keeps the hot-pot completely dairy-free.' }
    ],
    ingredients: [
      '1 cup Sona Masoori rice',
      '1/2 cup Toor dal (split pigeon peas)',
      '1.5 cups Diced mixed vegetables (carrots, green beans, peas, shallots, pumpkin)',
      '2 tbsp Tamarind paste & 1 tbsp grated jaggery (gud)',
      '2.5 tbsp Authentic Bisi Bele Bath powder (roasted chana dal, coriander, cinnamon, cloves, Marathi moggu, byadgi chili, kopra)',
      '1/2 tsp Turmeric powder & 4.5 cups Water',
      'For Tadka: 2 tbsp Desi Ghee, 1/2 tsp Mustard seeds, 1 sprig curry leaves, pinch of hing, 12 raw whole cashews',
      'Salt to taste'
    ],
    instructions: [
      'Wash rice and toor dal together. Pressure cook with 4 cups water, turmeric, and diced vegetables for 4 whistles until soft and porridge-like.',
      'In a wide heavy pot, add tamarind paste, jaggery, salt, and 1 cup water. Simmer for 3 minutes to remove raw tamarind taste.',
      'Stir in the Bisi Bele Bath spice powder, whisking well to ensure no lumps form.',
      'Add the cooked rice, dal, and vegetable mixture into the spiced tamarind broth. Mix thoroughly.',
      'Simmer on medium-low heat for 8-10 minutes, stirring frequently so the base doesn’t stick, until thick, creamy, and aromatic.',
      'Prepare the aromatic tempering (tadka): Heat ghee in a small pan. Fry whole cashews until golden; add mustard seeds, curry leaves, and asafoetida (hing).',
      'Pour the sizzling ghee-cashew tadka directly over the bubbling bisi bele bath.',
      'Serve steaming hot topped with a spoonful of cold curd, crispy potato chips, or boondi.'
    ]
  },
  {
    id: 'crispy-medu-vada-sambar',
    title: 'Crisp Urad Dal Medu Vada & Piping Hot Udupi Sambar',
    time: '30 mins',
    servings: '3',
    difficulty: 'Medium',
    rating: '4.9',
    category: 'Breakfast',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Karnataka / Tamil Nadu',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop',
    description: 'Golden, crisp-on-the-outside and fluffy-on-the-inside South Indian savory lentil fritters spiced with crushed black pepper, fresh ginger, and curry leaves, served submerged in aromatic Udupi vegetable sambar.',
    calories: '340 kcal',
    isQuick: false,
    nutrition: {
      calories: 340,
      protein: 13,
      carbs: 42,
      fat: 14,
      fiber: 8,
      sugar: 3,
      sodium: 470
    },
    substitutions: [
      { original: 'Deep frying', substitute: 'Air frying at 375°F (190°C) with a light oil spray', notes: 'Air fry for 12-14 mins until golden and crisp.' },
      { original: 'Urad dal', substitute: 'Moong dal or split yellow lentils', notes: 'Creates delicious yellow Moong Dal Vadas.' }
    ],
    ingredients: [
      '1.5 cups Whole white urad dal, soaked for 3 hours and drained',
      '1 tbsp Rice flour (for ultra-crispy outer shell)',
      '1 tsp Whole black peppercorns, coarsely crushed',
      '1-inch Ginger, finely minced & 2 green chilies, finely chopped',
      '2 sprigs Fresh curry leaves, chopped',
      '2 tbsp Fresh coconut pieces, finely chopped (optional for crunch)',
      'Pinch of Asafoetida (Hing) & salt to taste',
      'Oil for deep frying',
      '2 cups Fresh Udupi Toor Dal Sambar with drumsticks and shallots',
      'Freshly ground Coconut Chutney'
    ],
    instructions: [
      'Grind soaked urad dal with minimal ice water (only 2-3 tablespoons) in a wet grinder or food processor into an ultra-fluffy, thick batter.',
      'Aerate the batter: vigorously whip the batter with your hand or a whisk in one direction for 3 minutes until light and pillowy (test: a drop of batter should float on water).',
      'Fold in rice flour, crushed black pepper, minced ginger, green chilies, curry leaves, coconut bits, hing, and salt.',
      'Heat oil in a deep kadai over medium flame.',
      'Wet hands with water. Take a lemon-sized ball of batter, flatten slightly on fingers, make a hole in the center with thumb, and gently slide into hot oil.',
      'Fry on medium heat for 4-5 minutes, turning occasionally until golden amber and crunchy.',
      'Drain on wire rack or parchment paper.',
      'Serve piping hot paired with freshly ground coconut chutney and a bowl of piping hot aromatic Udupi vegetable sambar.'
    ]
  },
  {
    id: 'andhra-gongura-chicken-fry',
    title: 'Spicy Andhra Gongura Chicken Roast with Curry Leaf Tadka',
    time: '35 mins',
    servings: '4',
    difficulty: 'Medium',
    rating: '4.9',
    category: 'Dinner',
    cuisine: 'South Indian',
    region: 'South India',
    state: 'Andhra Pradesh',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1200&auto=format&fit=crop',
    description: 'An iconic fiery Andhra delicacy cooked with sour Sorrel leaves (Gongura), fiery Guntur red chilies, freshly crushed coriander, garlic, and tender chicken slow-roasted to perfection.',
    calories: '430 kcal',
    isQuick: false,
    nutrition: {
      calories: 430,
      protein: 38,
      carbs: 10,
      fat: 27,
      fiber: 4,
      sugar: 1,
      sodium: 580
    },
    substitutions: [
      { original: 'Gongura leaves', substitute: 'Fresh spinach leaves + 2 tbsp tamarind paste + splash of lime juice', notes: 'Recreates the signature earthy sour-tangy balance.' },
      { original: 'Chicken', substitute: 'Paneer, tender mutton, or button mushrooms', notes: 'Gongura Paneer is deeply flavorful.' }
    ],
    ingredients: [
      '600g Chicken, bone-in pieces',
      '2 big bunches Fresh Gongura (Sorrel) leaves, washed and dried',
      '6 Dried Guntur red chilies',
      '2 large Onions, finely sliced',
      '2 tbsp Ginger-garlic paste',
      '1 tbsp Coriander powder & 1 tsp Cumin powder',
      '1 tsp Turmeric powder & 1.5 tbsp Andhra chili powder',
      '1 tsp Garam Masala',
      '3 tbsp Groundnut oil or sesame oil',
      'Fresh curry leaves & salt to taste'
    ],
    instructions: [
      'In a dry pan, sauté cleaned Gongura leaves with 1 tsp oil and 3 dry red chilies for 3-4 minutes until leaves wilt completely. Cool and grind into a coarse tangy paste.',
      'Marinate chicken with turmeric, 1 tsp ginger-garlic paste, chili powder, and salt for 20 minutes.',
      'Heat oil in a heavy kadai. Add remaining dry red chilies and sliced onions; sauté until deep golden.',
      'Add remaining ginger-garlic paste and fresh curry leaves; cook until fragrant.',
      'Add the marinated chicken and sear on high flame for 5 minutes.',
      'Add coriander powder, cumin powder, and 1/2 cup warm water. Cover and cook on medium flame for 15 minutes until chicken is tender.',
      'Stir in the cooked Gongura paste and garam masala. Mix thoroughly to coat the chicken in the rich tangy green-red masala.',
      'Roast uncovered for 5-7 minutes on medium-high until oil separates and the masala turns dark and intensely flavorful. Serve hot with steamed rice and a dollop of pure ghee.'
    ]
  },
  {
    id: 'kolkata-kosha-mangsho',
    title: 'Kolkata Kosha Mangsho (Slow-Braised Bengali Mutton Curry)',
    time: '55 mins',
    servings: '4',
    difficulty: 'Medium',
    rating: '5.0',
    category: 'Dinner',
    cuisine: 'East Indian',
    region: 'East India',
    state: 'West Bengal / Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1200&auto=format&fit=crop',
    description: 'The crowning glory of Bengali Sunday feasts: succulent mutton pieces slow-braised in a dark caramelized onion, yogurt, and mustard-oil gravy with whole spices and sweet haldi potatoes.',
    calories: '520 kcal',
    isQuick: false,
    nutrition: {
      calories: 520,
      protein: 36,
      carbs: 14,
      fat: 36,
      fiber: 3,
      sugar: 5,
      sodium: 610
    },
    substitutions: [
      { original: 'Mutton / Goat meat', substitute: 'Chicken or portobello mushrooms & jackfruit (Echor)', notes: 'Bengali Echor Kosha (Raw Jackfruit) is identical in savory texture.' },
      { original: 'Mustard oil', substitute: 'Desi ghee', notes: 'Cold-pressed mustard oil creates the authentic pungent aroma.' }
    ],
    ingredients: [
      '750g Tender bone-in goat meat / mutton',
      '1/2 cup Whisked plain yogurt (dahi)',
      '4 large Red onions, finely sliced into threads',
      '2 large Potatoes, halved and fried golden with turmeric',
      '2.5 tbsp Fresh ginger-garlic paste',
      '4 tbsp Pure cold-pressed Kachi Ghani mustard oil',
      '2 tbsp Kashmiri red chili powder & 1 tsp Turmeric',
      '1 tsp Sugar (for deep caramelized dark color)',
      'Whole spices: 2 Bay leaves, 4 green cardamoms, 1 black cardamom, 4 cloves, 1-inch cinnamon stick',
      '1 tsp Bengali Garam Masala (cardamom, cinnamon, clove)'
    ],
    instructions: [
      'Marinate mutton with yogurt, 1 tbsp ginger-garlic paste, 1 tbsp mustard oil, turmeric, Kashmiri chili, and salt for at least 1 hour.',
      'Heat mustard oil in a heavy-bottomed iron kadai or Dutch oven until smoking; cool slightly.',
      'Fry potato halves with a pinch of turmeric and salt until golden-crusted. Set aside.',
      'In the same oil, add 1 tsp sugar to caramelize into deep amber, then add whole spices (bay leaf, cardamoms, cloves, cinnamon).',
      'Add sliced onions and fry patiently on medium heat for 12-15 minutes until rich caramelized dark brown.',
      'Add remaining ginger-garlic paste and cook for 2 minutes until aromatic.',
      'Add the marinated mutton. Sauté on high heat (Bhuna / Koshano) for 15-20 minutes, continuously turning until spices glisten dark and oil separates.',
      'Add 1.5 cups boiling warm water and fried potatoes. Cover with tight lid and slow-braise on lowest heat for 35-40 minutes (or pressure cook for 4 whistles) until meat is melt-in-mouth tender.',
      'Sprinkle Bengali garam masala and 1 tsp ghee. Rest 10 minutes before serving with fluffy Bengali Luchi or Basanti Pulao.'
    ]
  },
  {
    id: 'masala-chai-pakora',
    title: 'Adrak Elaichi Masala Chai with Crispy Onion Kanda Bhajji',
    time: '15 mins',
    servings: '2',
    difficulty: 'Easy',
    rating: '5.0',
    category: 'Snacks',
    cuisine: 'North Indian',
    region: 'North India',
    state: 'India / All Regions',
    imageUrl: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1200&auto=format&fit=crop',
    description: 'Freshly brewed aromatic whole-milk tea infused with crushed fresh ginger root, green cardamom pods, and cloves, paired with golden, crunchy, street-style spiced onion pakoras.',
    calories: '260 kcal',
    isQuick: true,
    nutrition: {
      calories: 260,
      protein: 8,
      carbs: 32,
      fat: 11,
      fiber: 4,
      sugar: 14,
      sodium: 320
    },
    substitutions: [
      { original: 'Whole milk', substitute: 'Oat milk or soy milk', notes: 'Yields an exceptionally creamy vegan masala chai.' },
      { original: 'Gram flour (Besan)', substitute: 'Chickpea flour + 1 tbsp rice flour', notes: 'Rice flour adds unmatched long-lasting crunch.' }
    ],
    ingredients: [
      'For Masala Chai: 2 cups Whole milk + 1.5 cups Water',
      '2.5 tbsp Assam CTC Black Tea leaves',
      '1.5-inch Fresh ginger root, coarsely crushed in a mortar',
      '4 Green cardamom pods, cracked open & 2 Cloves',
      '2 tbsp Raw jaggery (gud) or cane sugar',
      'For Onion Pakoras: 2 large Red onions, thinly sliced',
      '1 cup Besan (gram flour) & 2 tbsp Rice flour',
      '2 Green chilies, finely chopped & 1 sprig curry leaves',
      '1/2 tsp Ajwain (carom seeds) & 1/2 tsp Kashmiri chili',
      'Oil for deep frying'
    ],
    instructions: [
      'In a saucepan, bring water, crushed ginger, cracked cardamom, and cloves to a rolling boil for 3 minutes to extract spicy essential oils.',
      'Add Assam black tea leaves; simmer on medium flame for 2 minutes until deep amber.',
      'Pour in whole milk and sugar; bring to a vigorous boil, allowing the chai to rise up, then reduce heat. Repeat boil 3 times for creamy depth.',
      'Strain chai into earthenware kulhad cups.',
      'For Pakoras: In a bowl, toss sliced onions with salt, green chilies, ajwain, and curry leaves. Let sit 5 mins until onions release moisture.',
      'Mix in besan and rice flour without adding extra water (using onion moisture only).',
      'Drop small ragged clusters of batter into medium-hot oil and fry for 4 minutes until golden and super crispy.',
      'Serve hot crunchy pakoras alongside steaming cups of aromatic adrak-elaichi chai.'
    ]
  },

  // ==========================================
  // CONTINENTAL & ARTISAN CLASSICS
  // ==========================================
  {
    id: 'honey-garlic-salmon',
    title: 'Pan-Seared Honey Garlic Salmon with Toasted Sesame',
    time: '15 mins',
    servings: '2',
    difficulty: 'Easy',
    rating: '4.9',
    category: 'Dinner',
    cuisine: 'International',
    region: 'International',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop',
    description: 'Crispy skin salmon fillets coated in a rich honey-tamari-garlic glaze, finished with nutty toasted sesame seeds and fresh scallions.',
    calories: '420 kcal',
    isQuick: true,
    nutrition: {
      calories: 420,
      protein: 38,
      carbs: 22,
      fat: 18,
      fiber: 2,
      sugar: 17,
      sodium: 580
    },
    substitutions: [
      { original: 'Honey', substitute: 'Pure maple syrup or agave nectar', notes: 'Gives an equally rich glaze with slightly less floral sweetness.' },
      { original: 'Salmon fillets', substitute: 'Trout fillets or firm tofu cutlets', notes: 'Maintain high heat for crispy exterior searing.' },
      { original: 'Soy sauce', substitute: 'Tamari or coconut aminos', notes: 'Use for strict gluten-free or lower sodium.' }
    ],
    ingredients: [
      '2 Fresh Atlantic salmon fillets (approx. 6 oz each)',
      '3 tbsp Pure wildflower honey',
      '2 tbsp Low-sodium tamari or soy sauce',
      '3 cloves Garlic, finely minced',
      '1 tbsp Toasted sesame seeds',
      '2 Scallions, thinly sliced on bias',
      '1 tbsp Extra virgin olive oil',
      'Pinch of flaky sea salt and cracked black pepper'
    ],
    instructions: [
      'Pat the salmon fillets thoroughly dry with parchment or paper towels. Season both sides with flaky sea salt and cracked black pepper.',
      'In a small ceramic bowl, whisk together the wildflower honey, tamari, and minced garlic until smooth and emulsified.',
      'Heat extra virgin olive oil in a heavy stainless steel or cast-iron skillet over medium-high heat until shimmering.',
      'Place the salmon fillets skin-side down and sear undisturbed for 4-5 minutes until the skin is golden and crisp.',
      'Gently flip the fillets and pour the honey-garlic glaze directly into the hot pan around the salmon.',
      'Simmer for 2-3 minutes, continuously spooning the bubbly glaze over the fillets until sticky, rich, and glossy.',
      'Remove from heat, transfer to warmed ceramic plates, and garnish with toasted sesame seeds and fresh scallions.'
    ]
  },
  {
    id: 'avocado-sourdough-toast',
    title: 'Artisan Smashed Avocado Sourdough with Poached Farm Egg',
    time: '10 mins',
    servings: '1',
    difficulty: 'Easy',
    rating: '4.9',
    category: 'Breakfast',
    cuisine: 'International',
    region: 'International',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
    description: 'Crusty toasted sourdough layered with lemon-herb smashed Hass avocado, poached organic egg, flaky salt, and fresh microgreens.',
    calories: '320 kcal',
    isQuick: true,
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 28,
      fat: 19,
      fiber: 9,
      sugar: 2,
      sodium: 340
    },
    substitutions: [
      { original: 'Sourdough bread', substitute: 'Seeded rye or gluten-free artisan bread', notes: 'Toast firmly to support the avocado mash.' },
      { original: 'Poached egg', substitute: 'Thinly sliced radish or hemp hearts', notes: 'Adds delightful crunch for plant-based variation.' },
      { original: 'Lemon juice', substitute: 'Lime juice or white wine vinegar', notes: 'Provides essential bright acidity to balance fats.' }
    ],
    ingredients: [
      '2 thick slices Country sourdough artisan bread',
      '1 Ripe Hass avocado, halved and pitted',
      '1 Farm-fresh organic egg',
      '1/2 Lemon, freshly juiced',
      '1 tbsp Cold-pressed extra virgin olive oil',
      '1/4 tsp Aleppo chili flakes or red pepper flakes',
      'Maldon flaky sea salt and coarse black pepper',
      'Small handful of fresh garden microgreens'
    ],
    instructions: [
      'Toast sourdough slices in a skillet with a brush of olive oil until golden and rustic on the edges.',
      'Scoop avocado flesh into a shallow bowl; gently crush with a fork along with lemon juice, salt, and black pepper.',
      'Bring a small pot of water to a gentle simmer with a drop of vinegar, create a whirlpool, and poach the egg for 3 minutes.',
      'Generously spread the chunky avocado mixture across both warm toasted slices.',
      'Top with the warm poached egg, drizzle cold-pressed olive oil, and finish with Aleppo pepper flakes and microgreens.'
    ]
  },
  {
    id: 'wild-mushroom-risotto',
    title: 'Classic Wild Mushroom & Thyme Risotto with Aged Parmesan',
    time: '35 mins',
    servings: '4',
    difficulty: 'Medium',
    rating: '4.8',
    category: 'Dinner',
    cuisine: 'Italian',
    region: 'International',
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1200&auto=format&fit=crop',
    description: 'Slowly simmered creamy Carnaroli rice folded with pan-browned cremini and shiitake mushrooms, dry white wine, cultured butter, and Parmigiano-Reggiano.',
    calories: '480 kcal',
    isQuick: false,
    nutrition: {
      calories: 480,
      protein: 14,
      carbs: 66,
      fat: 18,
      fiber: 5,
      sugar: 4,
      sodium: 620
    },
    substitutions: [
      { original: 'Carnaroli / Arborio rice', substitute: 'Vialone Nano or pearl barley', notes: 'Barley requires an extra 10-15 minutes of simmer time.' },
      { original: 'White wine', substitute: 'Extra vegetable stock + 1 tsp apple cider vinegar', notes: 'Balances acidity without alcohol.' },
      { original: 'Parmigiano-Reggiano', substitute: 'Nutritional yeast or aged Pecorino Romano', notes: 'Offers intense savory umami depth.' }
    ],
    ingredients: [
      '1.5 cups Carnaroli or Arborio rice',
      '350g Mixed wild mushrooms (cremini, shiitake, chanterelle), sliced',
      '4 cups Warm homemade vegetable or chicken stock',
      '1 French shallot, finely minced',
      '2 cloves Garlic, crushed',
      '1/2 cup Crisp dry white wine',
      '1/2 cup Freshly grated 24-month Parmigiano-Reggiano',
      '2 tbsp Cultured unsalted butter & 1 tbsp olive oil',
      '3 sprigs Fresh garden thyme'
    ],
    instructions: [
      'Sauté the sliced mushrooms in 1 tbsp olive oil over medium-high heat until deeply caramelized and golden (6 minutes). Season lightly and set aside.',
      'In a wide, heavy-bottomed Dutch oven, melt 1 tbsp butter over medium heat. Add minced shallot and garlic, sweating until soft and fragrant.',
      'Add rice and toast for 2 minutes, stirring constantly until the grains become translucent around the edges.',
      'Pour in dry white wine, stirring gently until completely absorbed by the rice.',
      'Ladle in warm broth one scoop at a time, allowing each addition to absorb while stirring continuously for 18-20 minutes until creamy and al dente.',
      'Remove from heat. Fold in the sautéed mushrooms, remaining cultured butter, fresh thyme leaves, and grated Parmigiano. Cover and rest for 2 minutes before serving.'
    ]
  },
  {
    id: 'spicy-penne-arrabbiata',
    title: 'Rustic Penne all’Arrabbiata with San Marzano Tomatoes',
    time: '20 mins',
    servings: '3',
    difficulty: 'Easy',
    rating: '4.7',
    category: 'Lunch',
    cuisine: 'Italian',
    region: 'International',
    imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f45c51040c?q=80&w=1200&auto=format&fit=crop',
    description: 'Al dente bronze-cut penne rigate tossed in an aromatic sauce of sweet San Marzano tomatoes, sliced garlic, calabrian chili, and hand-torn basil.',
    calories: '390 kcal',
    isQuick: true,
    nutrition: {
      calories: 390,
      protein: 13,
      carbs: 64,
      fat: 10,
      fiber: 6,
      sugar: 7,
      sodium: 480
    },
    substitutions: [
      { original: 'Penne rigate', substitute: 'Rigatoni, fusilli, or gluten-free corn pasta', notes: 'Ensure pasta has ridges to hold the sauce.' },
      { original: 'Calabrian chili', substitute: 'Crushed red pepper flakes or fresh red chili', notes: 'Adjust quantity to your preferred spice tolerance.' },
      { original: 'Pecorino', substitute: 'Parmesan or vegan parmesan cheese', notes: 'Grate finely over hot pasta immediately.' }
    ],
    ingredients: [
      '350g Bronze-cut penne rigate',
      '1 can (14 oz) Whole peeled San Marzano tomatoes, hand-crushed',
      '4 cloves Garlic, sliced paper-thin',
      '1 tbsp Crushed Calabrian chili paste or red pepper flakes',
      '3 tbsp Extra virgin olive oil',
      'Handful of fresh Genovese basil leaves',
      'Grated Pecorino Romano to finish'
    ],
    instructions: [
      'Bring a large pot of water to a rolling boil and salt generously. Cook penne until 1 minute shy of al dente. Reserve 1/2 cup of starchy pasta water.',
      'In a wide skillet, warm olive oil over gentle medium-low heat. Add sliced garlic and chili paste, cooking gently for 2 minutes until aromatic and tender without browning.',
      'Carefully add the hand-crushed San Marzano tomatoes. Simmer gently over medium heat for 10 minutes until sauce thickens and olive oil pools gently.',
      'Transfer drained pasta directly into the sauce along with a splash of reserved cooking water. Toss vigorously for 1 minute over heat.',
      'Remove from heat, tear in fresh sweet basil leaves, and serve in warm pasta bowls dusted with freshly grated Pecorino Romano.'
    ]
  },
  {
    id: 'wild-blueberry-tart',
    title: 'French Wild Blueberry & Almond Frangipane Tart',
    time: '40 mins',
    servings: '6',
    difficulty: 'Medium',
    rating: '4.9',
    category: 'Desserts',
    cuisine: 'French',
    region: 'International',
    imageUrl: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop',
    description: 'Golden buttery shortcrust pastry filled with delicate almond frangipane cream, topped with wild mountain blueberries and powdered sugar.',
    calories: '340 kcal',
    isQuick: false,
    nutrition: {
      calories: 340,
      protein: 7,
      carbs: 42,
      fat: 16,
      fiber: 4,
      sugar: 24,
      sodium: 140
    },
    substitutions: [
      { original: 'Wild blueberries', substitute: 'Fresh raspberries, blackberries, or sliced figs', notes: 'All stone and soft fruits bake beautifully with frangipane.' },
      { original: 'Almond flour', substitute: 'Ground hazelnuts or pistachios', notes: 'Creates a nutty, earthy depth of flavor.' },
      { original: 'Butter', substitute: 'Plant-based European style butter block', notes: 'Keep thoroughly chilled when forming the pastry crust.' }
    ],
    ingredients: [
      '1 sheet Classic sweet shortcrust pastry dough (Pâte Sablée)',
      '2 cups Fresh or frozen wild blueberries',
      '1 cup Blanched almond flour',
      '1/3 cup Unsalted cultured butter, softened',
      '1/3 cup Organic cane sugar',
      '1 Large organic egg',
      '1 tsp Pure Bourbon vanilla extract',
      '1 tbsp Powdered confectioners sugar for dusting'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Roll shortcrust pastry into a 9-inch fluted tart pan with a removable base; prick base with a fork and chill 15 minutes.',
      'In a mixing bowl, beat softened butter and cane sugar together until light and fluffy. Beat in the egg and vanilla extract.',
      'Fold in almond flour until a smooth, spreadable frangipane cream forms.',
      'Spread frangipane evenly over the chilled pastry base. Scatter wild blueberries generously across the top, pressing in lightly.',
      'Bake for 32-35 minutes until the pastry crust is deep golden brown and the frangipane is set and fragrant.',
      'Cool on a wire rack to room temperature, dust lightly with powdered confectioners sugar, and slice into elegant wedges.'
    ]
  },
  {
    id: 'lemon-ricotta-pancakes',
    title: 'Fluffy Meyer Lemon & Whipped Ricotta Pancakes',
    time: '15 mins',
    servings: '3',
    difficulty: 'Easy',
    rating: '4.9',
    category: 'Breakfast',
    cuisine: 'International',
    region: 'International',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop',
    description: 'Cloud-like golden pancakes infused with fresh Meyer lemon zest and whipped whole-milk ricotta, served with warm pure maple syrup.',
    calories: '380 kcal',
    isQuick: true,
    nutrition: {
      calories: 380,
      protein: 15,
      carbs: 48,
      fat: 14,
      fiber: 2,
      sugar: 14,
      sodium: 410
    },
    substitutions: [
      { original: 'Whole-milk ricotta', substitute: 'Greek yogurt or cottage cheese (blended smooth)', notes: 'Yields a wonderful tang with higher protein content.' },
      { original: 'Meyer lemon', substitute: 'Standard Eureka lemon or orange zest', notes: 'Citrus zest gives the delicate aromatic brightness.' }
    ],
    ingredients: [
      '1.5 cups Unbleached all-purpose flour',
      '1 cup Whole milk ricotta cheese',
      '1 cup Whole milk or buttermilk',
      '2 Large farm eggs, whites and yolks separated',
      '2 Meyer lemons, zested and juiced (approx 2 tbsp juice)',
      '2 tbsp Cane sugar & 1.5 tsp baking powder',
      '1/2 tsp Baking soda & 1/4 tsp fine sea salt',
      '2 tbsp Melted unsalted butter for the griddle'
    ],
    instructions: [
      'In a large bowl, whisk flour, cane sugar, baking powder, baking soda, and sea salt.',
      'In a separate bowl, whisk egg yolks, whole milk, whipped ricotta, Meyer lemon zest, and lemon juice until smooth.',
      'In a clean glass bowl, whip egg whites with a hand whisk until soft peaks form.',
      'Gently stir wet ingredients into dry ingredients until just combined (do not overmix). Gently fold in the whipped egg whites with a spatula.',
      'Melt a knob of butter on a non-stick griddle over medium heat. Ladle 1/3 cup batter per pancake.',
      'Cook for 2-3 minutes until bubbly on surface, flip gently, and cook another 1-2 minutes until puffed and golden brown.',
      'Serve warm stacked high with fresh berries and warm maple syrup.'
    ]
  }
];
