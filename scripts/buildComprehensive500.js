import fs from 'fs';
import path from 'path';

// Complete dataset compiler for 500+ authentic Indian recipes
const outputDir = path.join(process.cwd(), 'src', 'data', 'indianRecipes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Master state-by-state culinary database
const STATE_CUISINES = [
  // SOUTH INDIA
  {
    region: 'South Indian',
    state: 'Andhra Pradesh',
    cuisine: 'Andhra Cuisine',
    dishes: [
      { name: 'Gongura Mamsam', cat: 'Curries', sub: 'Mutton', veg: false, spice: 'Very Hot', protein: 34, cal: 460, diff: 'Medium', mins: 65,
        alt: ['Gongura Mutton', 'Andhra Sorrel Mutton'],
        desc: 'Tender mutton cooked in a tangy, spicy puree of fresh red sorrel (gongura) leaves and Guntur red chillies.',
        ings: [
          { name: 'Mutton, bone-in pieces', quantity: '500', unit: 'g' },
          { name: 'Gongura (Red Sorrel) leaves', quantity: '3', unit: 'bunches' },
          { name: 'Onions, finely chopped', quantity: '2', unit: 'medium' },
          { name: 'Guntur red chilli powder', quantity: '1.5', unit: 'tbsp' },
          { name: 'Ginger-garlic paste', quantity: '2', unit: 'tbsp' },
          { name: 'Sesame oil', quantity: '3', unit: 'tbsp' },
          { name: 'Garam masala & Turmeric', quantity: '1.5', unit: 'tsp' },
          { name: 'Salt', quantity: '1.5', unit: 'tsp' }
        ],
        steps: [
          'Sauté gongura leaves with green chillies in 1 tbsp oil until wilted, then coarsely crush.',
          'Heat remaining oil, sauté onions till golden, add ginger-garlic paste, and sear mutton pieces.',
          'Add turmeric, red chilli powder, salt, and water; pressure cook until meat is tender.',
          'Mix in crushed gongura paste and garam masala; simmer on low heat for 10 minutes until oil separates.'
        ],
        fest: ['Ugadi', 'Sankranti'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Gongura Pachadi', cat: 'Chutneys', sub: 'Pickles', veg: true, vegan: true, spice: 'Very Hot', protein: 3, cal: 110, diff: 'Easy', mins: 25,
        alt: ['Andhra Gongura Pickle Chutney'],
        desc: 'The iconic Andhra tangy and fiery chutney made by grinding sautéed sorrel leaves with roasted red chillies, garlic, and fenugreek.',
        ings: [
          { name: 'Red stem gongura leaves', quantity: '4', unit: 'cups' },
          { name: 'Guntur dry red chillies', quantity: '10', unit: 'whole' },
          { name: 'Fenugreek & Coriander seeds', quantity: '1.5', unit: 'tbsp' },
          { name: 'Garlic cloves', quantity: '8', unit: 'cloves' },
          { name: 'Sesame oil', quantity: '3', unit: 'tbsp' },
          { name: 'Salt', quantity: '1', unit: 'tsp' }
        ],
        steps: [
          'Dry roast whole spices and red chillies; grind to a coarse spice blend.',
          'Sauté gongura leaves in sesame oil until soft and pulpy.',
          'Grind leaves with spice blend, garlic, and salt; finish with a mustard-curry leaf tadka in hot sesame oil.'
        ],
        fest: ['All Year Round', 'Ugadi'], meal: ['Side Dish', 'Lunch']
      },
      { name: 'Andhra Kodi Kura', cat: 'Curries', sub: 'Chicken', veg: false, spice: 'Hot', protein: 36, cal: 380, diff: 'Medium', mins: 45,
        alt: ['Andhra Style Chicken Curry'],
        desc: 'Rustic spicy Andhra chicken curry enriched with poppy seeds, coconut, caramelized onions, and fiery Guntur chillies.',
        ings: [
          { name: 'Chicken, curry cut', quantity: '600', unit: 'g' },
          { name: 'Onions, finely chopped', quantity: '2', unit: 'large' },
          { name: 'Ginger-garlic paste', quantity: '1.5', unit: 'tbsp' },
          { name: 'Poppy seed & Cashew paste', quantity: '2', unit: 'tbsp' },
          { name: 'Guntur chilli powder', quantity: '1.5', unit: 'tbsp' },
          { name: 'Curry leaves & Coriander', quantity: '0.5', unit: 'cup' },
          { name: 'Oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Sauté onions and curry leaves in hot oil until golden brown.',
          'Add ginger-garlic paste and marinated chicken; sear on high heat.',
          'Add tomato puree, chilli powder, coriander powder, and poppy-cashew paste.',
          'Simmer with water for 20 minutes until chicken is succulent and sauce is velvety.'
        ],
        fest: ['Sunday Feasts'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Gutti Vankaya Kura', cat: 'Curries', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 7, cal: 275, diff: 'Medium', mins: 45,
        alt: ['Andhra Stuffed Brinjal Curry'],
        desc: 'Small tender brinjals stuffed with a roasted spice paste of peanuts, sesame seeds, dry coconut, and tamarind.',
        ings: [
          { name: 'Baby purple brinjals', quantity: '8', unit: 'whole' },
          { name: 'Roasted peanuts & Sesame seeds', quantity: '4', unit: 'tbsp' },
          { name: 'Desiccated coconut', quantity: '2', unit: 'tbsp' },
          { name: 'Tamarind pulp', quantity: '1.5', unit: 'tbsp' },
          { name: 'Red chilli powder & Turmeric', quantity: '1.5', unit: 'tbsp' },
          { name: 'Oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Roast spices and grind with tamarind, chilli powder, and salt to form a stuffing paste.',
          'Slit brinjals into four quarters and stuff generously with the paste.',
          'Pan-fry in oil, add remaining masala and water, and simmer covered until tender.'
        ],
        fest: ['Ugadi', 'Sankranti'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Chintapandu Pulihora', cat: 'Rice Dishes', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 6, cal: 340, diff: 'Easy', mins: 35,
        alt: ['Andhra Tamarind Rice', 'Prasadam Pulihora'],
        desc: 'Traditional temple tamarind rice tempered with crunchy peanuts, dals, mustard, green chillies, ginger, and curry leaves in hot sesame oil.',
        ings: [
          { name: 'Cooked Sona Masoori rice', quantity: '4', unit: 'cups' },
          { name: 'Thick tamarind extract', quantity: '0.5', unit: 'cup' },
          { name: 'Peanuts & Chana dal', quantity: '4', unit: 'tbsp' },
          { name: 'Mustard seeds, Hing & Curry leaves', quantity: '1.5', unit: 'tbsp' },
          { name: 'Green chillies & Ginger', quantity: '2', unit: 'tbsp' },
          { name: 'Sesame oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Simmer tamarind extract with turmeric, green chillies, salt, and jaggery until glossy.',
          'Temper peanuts, dals, mustard, ginger, and curry leaves in sesame oil.',
          'Fold tamarind paste and tempering into cooled rice and rest 30 mins.'
        ],
        fest: ['Sankranti', 'Diwali', 'Ganesh Chaturthi'], meal: ['Lunch', 'Festival Foods']
      },
      { name: 'Pesarattu', cat: 'Breakfast', sub: 'Dosa', veg: true, vegan: true, spice: 'Medium', protein: 14, cal: 310, diff: 'Easy', mins: 25,
        alt: ['Whole Moong Dal Crepe', 'MLA Pesarattu'],
        desc: 'Protein-rich whole green gram crepe ground with ginger and cumin, griddled crisp and served with upma and ginger chutney.',
        ings: [
          { name: 'Whole green moong dal, soaked', quantity: '2', unit: 'cups' },
          { name: 'Ginger & Green chillies', quantity: '2', unit: 'tbsp' },
          { name: 'Cumin seeds', quantity: '1', unit: 'tsp' },
          { name: 'Finely chopped onions', quantity: '1', unit: 'cup' },
          { name: 'Oil / Ghee & Salt', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Grind soaked green gram with ginger, chillies, cumin, and salt to a smooth crepe batter.',
          'Spread ladleful thinly on a hot tawa, top with onions, and roast until golden crisp.'
        ],
        fest: ['Everyday Breakfast'], meal: ['Breakfast']
      },
      { name: 'Royyala Vepudu', cat: 'Seafood', sub: 'Fish', veg: false, spice: 'Hot', protein: 30, cal: 260, diff: 'Easy', mins: 30,
        alt: ['Andhra Prawn Fry'],
        desc: 'Fresh prawns pan-roasted with sliced onions, ginger-garlic, curry leaves, crushed black pepper, and spicy red masala.',
        ings: [
          { name: 'Prawns, deveined', quantity: '400', unit: 'g' },
          { name: 'Onions, sliced', quantity: '2', unit: 'medium' },
          { name: 'Ginger-garlic paste', quantity: '1', unit: 'tbsp' },
          { name: 'Red chilli & Black pepper powder', quantity: '2', unit: 'tsp' },
          { name: 'Curry leaves & Oil', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Sauté onions, curry leaves, and ginger-garlic until browned.',
          'Add prawns and cook on high heat until moisture evaporates.',
          'Toss with chilli powder, pepper, and garam masala until deeply roasted and dry.'
        ],
        fest: ['Weekend Specials'], meal: ['Lunch', 'Dinner', 'Snacks']
      },
      { name: 'Andhra Tomato Pappu', cat: 'Dal', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 11, cal: 210, diff: 'Easy', mins: 30,
        alt: ['Andhra Tomato Dal'],
        desc: 'Comforting yellow toor dal stewed with tomatoes, green chillies, and finished with a sizzling garlic-mustard-curry leaf tadka.',
        ings: [
          { name: 'Toor dal', quantity: '1', unit: 'cup' },
          { name: 'Tomatoes, chopped', quantity: '3', unit: 'medium' },
          { name: 'Green chillies & Turmeric', quantity: '4', unit: 'whole' },
          { name: 'Garlic cloves, crushed', quantity: '6', unit: 'cloves' },
          { name: 'Mustard, Cumin, Ghee & Salt', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Pressure cook toor dal with tomatoes, green chillies, and turmeric until soft.',
          'Mash well, season with salt, and simmer for 3 minutes.',
          'Pour sizzling tadka of crushed garlic, mustard, cumin, and curry leaves in hot ghee over dal.'
        ],
        fest: ['Everyday Meal'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Pootharekulu', cat: 'Sweets', sub: 'Desserts', veg: true, vegan: false, spice: 'Mild', protein: 2, cal: 220, diff: 'Hard', mins: 25,
        alt: ['Atreyapuram Paper Sweet'],
        desc: 'Delicate edible rice starch paper sheets brushed with pure ghee and rolled with organic jaggery powder, cardamom, and nuts.',
        ings: [
          { name: 'Rice starch paper sheets', quantity: '6', unit: 'sheets' },
          { name: 'Desi ghee, melted', quantity: '4', unit: 'tbsp' },
          { name: 'Jaggery powder / sugar', quantity: '0.75', unit: 'cup' },
          { name: 'Cardamom & Chopped pistachios', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Lay rice sheets on flat board, brush with warm melted ghee.',
          'Dust jaggery powder and cardamom evenly.',
          'Layer another sheet, repeat ghee and jaggery, then fold and roll tightly.'
        ],
        fest: ['Sankranti', 'Ugadi'], meal: ['Desserts', 'Festival Foods']
      },
      { name: 'Bobbatlu', cat: 'Sweets', sub: 'Roti & Paratha', veg: true, vegan: false, spice: 'Mild', protein: 6, cal: 290, diff: 'Medium', mins: 50,
        alt: ['Andhra Bakshalu', 'Sweet Lentil Flatbread'],
        desc: 'Melt-in-mouth sweet flatbread filled with cooked chana dal, jaggery, cardamom, and nutmeg, roasted in desi ghee.',
        ings: [
          { name: 'Chana dal & Jaggery', quantity: '1', unit: 'cup each' },
          { name: 'Wheat flour / Maida', quantity: '1.5', unit: 'cups' },
          { name: 'Cardamom & Nutmeg', quantity: '1', unit: 'tsp' },
          { name: 'Desi Ghee', quantity: '4', unit: 'tbsp' }
        ],
        steps: [
          'Cook dal with jaggery and cardamom into sweet paste (poornam).',
          'Enclose sweet filling in elastic flour dough, roll thin, and roast on griddle with ghee.'
        ],
        fest: ['Ugadi', 'Sankranti'], meal: ['Desserts', 'Festival Foods']
      },
      { name: 'Ulava Charu', cat: 'Soups', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 9, cal: 160, diff: 'Medium', mins: 60,
        alt: ['Andhra Horsegram Soup'],
        desc: 'Nutrient-rich, earthy brown soup made from slow-boiled horsegram reduction, tamarind, and aromatic Andhra spices.',
        ings: [
          { name: 'Horsegram (Ulavalu)', quantity: '1', unit: 'cup' },
          { name: 'Tamarind pulp & Jaggery', quantity: '2', unit: 'tbsp' },
          { name: 'Onions, green chillies & garlic', quantity: '3', unit: 'tbsp' },
          { name: 'Mustard, Cumin & Curry leaves', quantity: '1', unit: 'tbsp' },
          { name: 'Fresh fresh cream or butter', quantity: '1', unit: 'tbsp' }
        ],
        steps: [
          'Slow cook horsegram in 5 cups water; strain the dark thick broth.',
          'Simmer broth with tamarind, jaggery, crushed garlic, and spices until rich and flavorful.',
          'Temper with mustard and curry leaves; serve hot with rice and fresh cream.'
        ],
        fest: ['Winter Dinners', 'Sankranti'], meal: ['Lunch', 'Soups']
      },
      { name: 'Kandi Podi Rice', cat: 'Rice Dishes', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 8, cal: 280, diff: 'Easy', mins: 15,
        alt: ['Gunpowder Dal Podi Rice'],
        desc: 'Steamed rice mixed with roasted spiced toor and chana dal powder, dry red chillies, cumin, and generous hot melted ghee.',
        ings: [
          { name: 'Cooked hot rice', quantity: '3', unit: 'cups' },
          { name: 'Roasted Toor & Chana dal', quantity: '1', unit: 'cup' },
          { name: 'Dry red chillies & Cumin', quantity: '1', unit: 'tbsp' },
          { name: 'Asafoetida & Salt', quantity: '1', unit: 'tsp' },
          { name: 'Desi Ghee', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Dry roast dals, red chillies, and cumin till fragrant; grind into coarse savory powder (Kandi Podi).',
          'Sprinkle 2 tbsp podi over hot steamed rice, drizzle molten ghee, and mix with fingertips.'
        ],
        fest: ['Everyday Comfort'], meal: ['Lunch', 'Dinner']
      }
    ]
  },
  {
    region: 'South Indian',
    state: 'Telangana',
    cuisine: 'Hyderabadi & Telangana Cuisine',
    dishes: [
      { name: 'Hyderabadi Chicken Dum Biryani', cat: 'Biryani', sub: 'Chicken', veg: false, spice: 'Hot', protein: 38, cal: 580, diff: 'Hard', mins: 90,
        alt: ['Kachi Dum Biryani'],
        desc: 'The crown jewel of Indian cuisine: raw spiced chicken layered with parboiled saffron basmati rice, caramelised onions, and slow-dum cooked in a sealed handi.',
        ings: [
          { name: 'Basmati rice, parboiled 70%', quantity: '3', unit: 'cups' },
          { name: 'Chicken, large bone-in cuts', quantity: '800', unit: 'g' },
          { name: 'Curd & Fried onions (Birista)', quantity: '2', unit: 'cups' },
          { name: 'Ginger-garlic paste', quantity: '2.5', unit: 'tbsp' },
          { name: 'Saffron milk & Ghee', quantity: '4', unit: 'tbsp' },
          { name: 'Fresh mint & Coriander', quantity: '1', unit: 'cup' },
          { name: 'Biryani spices & Salt', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Marinate chicken with yogurt, ginger-garlic, fried onions, mint, coriander, and spices for 2 hours.',
          'Lay marinated chicken in handi; top with hot parboiled basmati rice.',
          'Drizzle saffron milk, ghee, fried onions, and mint over rice.',
          'Seal handi rim with dough and lid; dum cook on high for 10 mins, then on low griddle for 35 mins.'
        ],
        fest: ['Eid', 'Celebrations'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Hyderabadi Mutton Dum Biryani', cat: 'Biryani', sub: 'Mutton', veg: false, spice: 'Hot', protein: 42, cal: 640, diff: 'Hard', mins: 110,
        alt: ['Kachche Gosht Ki Biryani'],
        desc: 'Royal celebration biryani layered with marinated tender goat meat, aged basmati rice, pure ghee, saffron, and slow-cooked to fragrant perfection.',
        ings: [
          { name: 'Mutton pieces (goat)', quantity: '800', unit: 'g' },
          { name: 'Aged Basmati rice', quantity: '3', unit: 'cups' },
          { name: 'Raw papaya paste & Curd', quantity: '1.5', unit: 'cups' },
          { name: 'Fried onions (Birista)', quantity: '2', unit: 'cups' },
          { name: 'Saffron strands in milk', quantity: '4', unit: 'tbsp' },
          { name: 'Desi Ghee & Mint', quantity: '5', unit: 'tbsp' }
        ],
        steps: [
          'Marinate mutton with raw papaya, curd, fried onions, spices, and herbs for 4 hours.',
          'Layer 70% cooked basmati rice over marinated meat in copper handi.',
          'Add saffron ghee garnish, seal with dough, and dum cook on gentle griddle heat for 45 mins.'
        ],
        fest: ['Eid', 'Weddings'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Hyderabadi Haleem', cat: 'Non-Vegetarian', sub: 'Mutton', veg: false, spice: 'Medium', protein: 40, cal: 520, diff: 'Hard', mins: 120,
        alt: ['Shahi Haleem'],
        desc: 'Rich, slow-cooked royal delicacy of pounded mutton, broken wheat, four lentils, ghee, and aromatic spices cooked into a velvety porridge.',
        ings: [
          { name: 'Boneless mutton', quantity: '600', unit: 'g' },
          { name: 'Broken wheat (Dalia)', quantity: '1', unit: 'cup' },
          { name: 'Mixed lentils', quantity: '0.5', unit: 'cup' },
          { name: 'Pure Desi Ghee', quantity: '6', unit: 'tbsp' },
          { name: 'Ginger-garlic & Potli masala', quantity: '2', unit: 'tbsp' },
          { name: 'Fried onions & Cashews', quantity: '1', unit: 'cup' }
        ],
        steps: [
          'Boil broken wheat and lentils until mushy; mash smooth.',
          'Cook mutton with spices until fall-apart tender; vigorously pound meat with wooden masher.',
          'Combine meat with mashed lentils and wheat, add ghee, and pound continuously over low flame for 30 mins until smooth and elastic.'
        ],
        fest: ['Ramadan', 'Eid'], meal: ['Dinner', 'Snacks']
      },
      { name: 'Mirchi Ka Salan', cat: 'Curries', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Hot', protein: 6, cal: 260, diff: 'Medium', mins: 40,
        alt: ['Hyderabadi Chilli Curry'],
        desc: 'Traditional accompaniment for biryani made from roasted peanuts, sesame seeds, coconut, tamarind, and whole shallow-fried Bhavnagri chillies.',
        ings: [
          { name: 'Large mild green chillies', quantity: '8', unit: 'whole' },
          { name: 'Roasted peanuts & Sesame', quantity: '5', unit: 'tbsp' },
          { name: 'Desiccated coconut & Tamarind', quantity: '4', unit: 'tbsp' },
          { name: 'Ginger-garlic paste & Spices', quantity: '1.5', unit: 'tbsp' },
          { name: 'Oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Grind roasted peanuts, sesame, and coconut with water to a silky paste.',
          'Shallow fry slit chillies in oil until blistered; set aside.',
          'Cook paste with spices and tamarind until oil floats; add fried chillies and simmer 10 mins.'
        ],
        fest: ['Eid', 'Sunday Feasts'], meal: ['Lunch', 'Dinner', 'Side Dish']
      },
      { name: 'Sarva Pindi', cat: 'Breakfast', sub: 'Snacks', veg: true, vegan: true, spice: 'Medium', protein: 6, cal: 240, diff: 'Easy', mins: 35,
        alt: ['Telangana Tapala Chekka'],
        desc: 'Traditional crispy Telangana savory pancake made from rice flour, roasted peanuts, soaked chana dal, sesame, and curry leaves.',
        ings: [
          { name: 'Rice flour', quantity: '2', unit: 'cups' },
          { name: 'Roasted peanuts & Chana dal', quantity: '5', unit: 'tbsp' },
          { name: 'White sesame seeds', quantity: '1.5', unit: 'tbsp' },
          { name: 'Chopped onions & Green chillies', quantity: '0.5', unit: 'cup' },
          { name: 'Curry leaves & Oil', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Knead rice flour with peanuts, soaked chana dal, sesame, onions, chillies, curry leaves, and salt into soft dough.',
          'Press dough thinly inside a greased heavy pan, poke small holes, drizzle oil in holes, and cook covered until bottom is golden crisp.'
        ],
        fest: ['Village Harvests'], meal: ['Breakfast', 'Snacks']
      },
      { name: 'Double Ka Meetha', cat: 'Sweets', sub: 'Desserts', veg: true, vegan: false, spice: 'Mild', protein: 8, cal: 380, diff: 'Medium', mins: 40,
        alt: ['Hyderabadi Bread Pudding'],
        desc: 'Decadent royal dessert made with crisp ghee-fried bread triangles steeped in saffron syrup, layered with thick rabdi, khoya, and sliced nuts.',
        ings: [
          { name: 'White bread slices, trimmed', quantity: '8', unit: 'slices' },
          { name: 'Thickened milk (Rabdi)', quantity: '3', unit: 'cups' },
          { name: 'Sugar & Desi Ghee', quantity: '1', unit: 'cup each' },
          { name: 'Saffron, Cardamom & Khoya', quantity: '0.5', unit: 'cup' },
          { name: 'Almonds & Pistachios', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Deep fry bread triangles in hot ghee till golden and crisp.',
          'Dip in saffron cardamom sugar syrup and arrange in a tray.',
          'Pour warm thick rabdi and crumbled khoya over bread; garnish with nuts.'
        ],
        fest: ['Eid', 'Diwali'], meal: ['Desserts', 'Festival Foods']
      },
      { name: 'Qubani Ka Meetha', cat: 'Sweets', sub: 'Desserts', veg: true, vegan: false, spice: 'Mild', protein: 3, cal: 240, diff: 'Easy', mins: 35,
        alt: ['Hyderabadi Apricot Delight'],
        desc: 'Classic royal dessert made by stewing dried Turkish apricots in sugar syrup, infused with rose water and served with fresh clotted cream.',
        ings: [
          { name: 'Dried Apricots (Qubani)', quantity: '300', unit: 'g' },
          { name: 'Sugar', quantity: '0.75', unit: 'cup' },
          { name: 'Rose water & Apricot kernels', quantity: '2', unit: 'tbsp' },
          { name: 'Fresh clotted cream or Ice cream', quantity: '0.5', unit: 'cup' }
        ],
        steps: [
          'Soak apricots overnight; de-seed and extract inner sweet kernels.',
          'Simmer apricots in soaking liquid until tender and pulpy; mash lightly.',
          'Add sugar, cook until glossy, stir in rose water and kernels; serve chilled with thick cream.'
        ],
        fest: ['Eid', 'Weddings'], meal: ['Desserts', 'Festival Foods']
      }
    ]
  },
  {
    region: 'South Indian',
    state: 'Tamil Nadu',
    cuisine: 'Tamil & Chettinad Cuisine',
    dishes: [
      { name: 'Crispy Masala Dosa', cat: 'Breakfast', sub: 'Dosa', veg: true, vegan: true, spice: 'Medium', protein: 8, cal: 320, diff: 'Medium', mins: 30,
        alt: ['Madras Masala Dosa'],
        desc: 'Crispy fermented rice and lentil crepe smeared with spicy red chutney, filled with spiced mashed potato bhaji, and served with sambar.',
        ings: [
          { name: 'Fermented Dosa batter', quantity: '3', unit: 'cups' },
          { name: 'Boiled potatoes, mashed', quantity: '3', unit: 'large' },
          { name: 'Onions, sliced', quantity: '1', unit: 'large' },
          { name: 'Mustard seeds, Urad dal & Curry leaves', quantity: '1.5', unit: 'tbsp' },
          { name: 'Green chillies & Ginger', quantity: '2', unit: 'tbsp' },
          { name: 'Turmeric powder, Oil / Ghee & Salt', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Temper mustard, urad dal, ginger, chillies, and curry leaves; sauté onions with turmeric and fold in mashed potatoes to prepare bhaji.',
          'Spread batter on hot cast iron tawa in a circular motion, drizzle ghee, and roast till golden and paper-crisp.',
          'Place potato bhaji in center, fold neatly, and serve with coconut chutney and piping hot sambar.'
        ],
        fest: ['Everyday Breakfast', 'Sunday Morning'], meal: ['Breakfast', 'Dinner']
      },
      { name: 'Idli Sambar', cat: 'Breakfast', sub: 'Idli', veg: true, vegan: true, spice: 'Medium', protein: 12, cal: 260, diff: 'Easy', mins: 25,
        alt: ['Steamed Rice Cakes with Sambar'],
        desc: 'Pillowy soft steamed fermented rice and black gram cakes immersed in a fragrant vegetable and lentil sambar.',
        ings: [
          { name: 'Fermented Idli batter', quantity: '3', unit: 'cups' },
          { name: 'Toor dal, boiled', quantity: '1', unit: 'cup' },
          { name: 'Shallots, drumstick, carrots', quantity: '1.5', unit: 'cups' },
          { name: 'Sambar powder & Tamarind', quantity: '2', unit: 'tbsp' },
          { name: 'Mustard seeds, Hing & Curry leaves', quantity: '1', unit: 'tbsp' }
        ],
        steps: [
          'Pour batter into greased idli molds; steam for 10 minutes until fluffy and soft.',
          'Simmer vegetables with tamarind and sambar powder; add cooked toor dal and temper with mustard and curry leaves.',
          'Dip hot idlis in a bowl of aromatic sambar and enjoy.'
        ],
        fest: ['Everyday Breakfast'], meal: ['Breakfast']
      },
      { name: 'Chettinad Chicken Curry', cat: 'Curries', sub: 'Chicken', veg: false, spice: 'Very Hot', protein: 38, cal: 410, diff: 'Medium', mins: 45,
        alt: ['Kozhi Chettinad'],
        desc: 'Fiery and aromatic chicken curry from the Chettinad region, cooked with freshly roasted whole spices, kalpasi (stone flower), coconut, and black peppercorns.',
        ings: [
          { name: 'Chicken pieces', quantity: '600', unit: 'g' },
          { name: 'Shallots (Small onions)', quantity: '15', unit: 'whole' },
          { name: 'Black peppercorns & Fennel seeds', quantity: '1.5', unit: 'tbsp' },
          { name: 'Coriander seeds & Dry red chillies', quantity: '2', unit: 'tbsp' },
          { name: 'Kalpasi (Stone flower) & Star anise', quantity: '1', unit: 'tsp' },
          { name: 'Fresh coconut & Curry leaves', quantity: '0.5', unit: 'cup' },
          { name: 'Sesame oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Dry roast coriander, chillies, pepper, fennel, kalpasi, and coconut; grind to a fine Chettinad masala paste.',
          'Heat sesame oil, sauté shallots and curry leaves, add chicken and sear.',
          'Add tomatoes, ground masala, and water; simmer for 25 minutes until chicken is tender and dark aromatic oil surfaces.'
        ],
        fest: ['Sunday Feasts', 'Celebrations'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Ven Pongal', cat: 'Breakfast', sub: 'Rice Dishes', veg: true, vegan: false, spice: 'Mild', protein: 9, cal: 310, diff: 'Easy', mins: 25,
        alt: ['Khara Pongal'],
        desc: 'Comforting South Indian breakfast porridge of rice and yellow moong dal tempered with whole black peppercorns, cumin, fresh ginger, crunchy cashews, and generous ghee.',
        ings: [
          { name: 'Raw rice & Yellow moong dal', quantity: '1', unit: 'cup each' },
          { name: 'Pure Desi Ghee', quantity: '4', unit: 'tbsp' },
          { name: 'Whole black peppercorns & Cumin', quantity: '1.5', unit: 'tbsp' },
          { name: 'Cashew nuts (whole/split)', quantity: '15', unit: 'nuts' },
          { name: 'Fresh ginger, minced & Curry leaves', quantity: '2', unit: 'tbsp' },
          { name: 'Asafoetida (Hing) & Salt', quantity: '1', unit: 'tsp' }
        ],
        steps: [
          'Pressure cook rice and moong dal together with 5 cups water until soft and mushy.',
          'Heat ghee in a pan; fry cashews until golden, add black pepper, cumin, ginger, curry leaves, and hing until spluttering.',
          'Pour the fragrant sizzling tempering over the cooked pongal, mix thoroughly, and serve with coconut chutney and sambar.'
        ],
        fest: ['Pongal Festival', 'Sankranti'], meal: ['Breakfast']
      },
      { name: 'Tomato Rasam', cat: 'Soups', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 3, cal: 75, diff: 'Easy', mins: 20,
        alt: ['Thakkali Rasam'],
        desc: 'Soothing and digestive spiced tomato and tamarind broth infused with crushed black pepper, cumin, garlic, and fresh coriander leaves.',
        ings: [
          { name: 'Ripe red tomatoes, mashed', quantity: '3', unit: 'large' },
          { name: 'Tamarind extract', quantity: '1', unit: 'cup' },
          { name: 'Crushed black pepper & Cumin', quantity: '1', unit: 'tbsp' },
          { name: 'Garlic cloves with skin', quantity: '5', unit: 'cloves' },
          { name: 'Mustard seeds, Hing & Curry leaves', quantity: '1', unit: 'tbsp' },
          { name: 'Ghee & Fresh coriander', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Simmer mashed tomatoes with tamarind water, turmeric, rasam powder, and salt until raw smell leaves.',
          'Add 1.5 cups water, crushed garlic, pepper, and cumin; bring just to a gentle frothing boil and turn off heat.',
          'Temper mustard seeds and curry leaves in hot ghee, pour over rasam, and cover immediately.'
        ],
        fest: ['Everyday Meal'], meal: ['Lunch', 'Dinner', 'Soups']
      }
    ]
  },
  {
    region: 'South Indian',
    state: 'Kerala',
    cuisine: 'Kerala Cuisine',
    dishes: [
      { name: 'Appam with Vegetable Stew', cat: 'Breakfast', sub: 'Dosa', veg: true, vegan: true, spice: 'Mild', protein: 6, cal: 280, diff: 'Medium', mins: 35,
        alt: ['Palappam with Ishtu'],
        desc: 'Lacy, bowl-shaped fermented rice crepes with a soft pillowy center, served with a gentle, fragrant coconut milk vegetable stew.',
        ings: [
          { name: 'Fermented Appam batter (with coconut milk)', quantity: '3', unit: 'cups' },
          { name: 'Coconut milk (Thick & Thin)', quantity: '2', unit: 'cups' },
          { name: 'Potatoes, carrots, beans, peas', quantity: '2', unit: 'cups' },
          { name: 'Whole spices (cardamom, cinnamon, cloves)', quantity: '1', unit: 'tbsp' },
          { name: 'Ginger, green chillies & Curry leaves', quantity: '2', unit: 'tbsp' },
          { name: 'Coconut oil & Salt', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Simmer mixed vegetables in thin coconut milk with ginger, green chillies, and whole spices until tender.',
          'Stir in thick coconut milk, drizzle raw coconut oil, add curry leaves, and turn off heat before boiling.',
          'Swirl appam batter in a hot appachatti to create lacy crisp edges and a soft thick center; steam covered.',
          'Serve warm appams with the fragrant stew.'
        ],
        fest: ['Easter', 'Christmas', 'Onam'], meal: ['Breakfast', 'Dinner']
      },
      { name: 'Puttu and Kadala Curry', cat: 'Breakfast', sub: 'Curries', veg: true, vegan: true, spice: 'Hot', protein: 15, cal: 340, diff: 'Medium', mins: 45,
        alt: ['Steamed Rice Cylinders with Black Chickpea Curry'],
        desc: 'Steamed ground rice and grated coconut cylinders served with a spicy, roasted coconut black chickpea gravy.',
        ings: [
          { name: 'Puttu rice flour & Grated coconut', quantity: '2', unit: 'cups each' },
          { name: 'Black chickpeas (Kadala), boiled', quantity: '1.5', unit: 'cups' },
          { name: 'Roasted coconut & Coriander spice paste', quantity: '4', unit: 'tbsp' },
          { name: 'Shallots, ginger, green chillies', quantity: '0.5', unit: 'cup' },
          { name: 'Coconut oil & Curry leaves', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Layer moistened puttu flour and grated coconut alternately in a cylindrical puttu maker; steam for 6-8 minutes.',
          'Cook boiled chickpeas with roasted coconut paste, shallots, and spices until thick and aromatic.',
          'Temper curry with mustard and curry leaves in coconut oil; serve alongside hot steaming puttu.'
        ],
        fest: ['Everyday Breakfast', 'Vishu'], meal: ['Breakfast']
      },
      { name: 'Karimeen Pollichathu', cat: 'Seafood', sub: 'Fish', veg: false, spice: 'Hot', protein: 32, cal: 310, diff: 'Hard', mins: 40,
        alt: ['Pearl Spot Fish Wrapped in Banana Leaf'],
        desc: 'Backwater Pearl Spot fish marinated in spicy masala, shallow fried, smothered in shallot-tomato gravy, wrapped in banana leaf, and pan-roasted.',
        ings: [
          { name: 'Karimeen (Pearl Spot Fish), cleaned', quantity: '2', unit: 'whole' },
          { name: 'Shallots, finely chopped', quantity: '1', unit: 'cup' },
          { name: 'Tomatoes & Ginger-garlic', quantity: '0.5', unit: 'cup' },
          { name: 'Kashmiri chilli & Pepper powder', quantity: '1.5', unit: 'tbsp' },
          { name: 'Banana leaves, wilted over flame', quantity: '2', unit: 'leaves' },
          { name: 'Coconut oil & Kudampuli (Garcinia)', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Marinate fish with chilli, pepper, turmeric, lemon juice, and salt; shallow fry for 3 mins per side.',
          'Sauté shallots, ginger, garlic, tomatoes, and spices in coconut oil to create a thick coating masala.',
          'Place fish on wilted banana leaf, coat both sides with masala, fold into packet, and tie with string.',
          'Pan-roast the packet on a tawa for 5 minutes per side until smoky and fragrant.'
        ],
        fest: ['Boat Race Feasts', 'Sunday Special'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Kerala Avial', cat: 'Curries', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Mild', protein: 5, cal: 190, diff: 'Easy', mins: 30,
        alt: ['Mixed Vegetable Coconut Stew'],
        desc: 'A vibrant Onam Sadya centerpiece of thirteen indigenous vegetables cooked with raw coconut-cumin-chilli paste and finished with fresh coconut oil and curd.',
        ings: [
          { name: 'Baton-cut mixed vegetables (Raw banana, yam, drumstick, beans, carrots)', quantity: '4', unit: 'cups' },
          { name: 'Fresh grated coconut', quantity: '1', unit: 'cup' },
          { name: 'Cumin seeds & Green chillies', quantity: '1.5', unit: 'tbsp' },
          { name: 'Sour yogurt or Raw mango', quantity: '3', unit: 'tbsp' },
          { name: 'Pure Coconut oil & Curry leaves', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Cook batoned vegetables with turmeric, salt, and minimal water until tender but firm.',
          'Coarsely crush grated coconut, cumin seeds, and green chillies without water.',
          'Add coconut paste to cooked vegetables and simmer gently for 3 minutes.',
          'Stir in whisked curd or mango pieces, drizzle virgin coconut oil and fresh curry leaves, and turn off heat.'
        ],
        fest: ['Onam Sadya', 'Vishu'], meal: ['Lunch', 'Festival Foods']
      },
      { name: 'Malabar Fish Biryani', cat: 'Biryani', sub: 'Fish', veg: false, spice: 'Medium', protein: 34, cal: 510, diff: 'Hard', mins: 60,
        alt: ['Thalassery Meen Biryani'],
        desc: 'Aromatic coastal biryani made with fragrant small-grain Kaima/Jeerakasala rice, marinated Kingfish, caramelized shallots, cashews, and raisins.',
        ings: [
          { name: 'Kaima / Jeerakasala rice', quantity: '2.5', unit: 'cups' },
          { name: 'Kingfish / Seer fish steaks', quantity: '500', unit: 'g' },
          { name: 'Shallots, sliced & fried', quantity: '1.5', unit: 'cups' },
          { name: 'Ginger-garlic-green chilli paste', quantity: '2', unit: 'tbsp' },
          { name: 'Tomatoes & Yogurt', quantity: '0.75', unit: 'cup' },
          { name: 'Ghee, Cashews & Raisins', quantity: '4', unit: 'tbsp' }
        ],
        steps: [
          'Marinate fish steaks with turmeric, chilli, and lemon; lightly sear in ghee.',
          'Prepare rich masala with shallots, ginger-garlic-chilli paste, tomatoes, and yogurt; fold in fish.',
          'Cook Kaima rice with ghee and whole spices until 90% done.',
          'Layer rice and fish masala in a pot, top with fried onions, cashews, raisins, and mint; dum cook for 20 mins.'
        ],
        fest: ['Eid', 'Malabar Feasts'], meal: ['Lunch', 'Dinner']
      }
    ]
  },
  {
    region: 'South Indian',
    state: 'Karnataka',
    cuisine: 'Karnataka & Udupi Cuisine',
    dishes: [
      { name: 'Bisi Bele Bath', cat: 'Rice Dishes', sub: 'Vegetarian', veg: true, vegan: false, spice: 'Medium', protein: 9, cal: 360, diff: 'Medium', mins: 45,
        alt: ['Hot Lentil Rice Karnataka Style'],
        desc: 'Traditional spicy and tangy one-pot meal of rice, toor dal, mixed vegetables, and a freshly ground spice blend with marathi moggu, copra, and ghee.',
        ings: [
          { name: 'Sona Masoori rice & Toor dal', quantity: '1', unit: 'cup each' },
          { name: 'Mixed vegetables (carrots, beans, peas, potatoes)', quantity: '2', unit: 'cups' },
          { name: 'Bisi Bele Bath masala powder', quantity: '3', unit: 'tbsp' },
          { name: 'Tamarind pulp & Jaggery', quantity: '2', unit: 'tbsp' },
          { name: 'Desi Ghee & Cashews', quantity: '4', unit: 'tbsp' },
          { name: 'Mustard seeds & Curry leaves', quantity: '1', unit: 'tbsp' }
        ],
        steps: [
          'Pressure cook rice, toor dal, and vegetables together until very soft.',
          'Simmer tamarind pulp, jaggery, salt, and bisi bele bath masala powder with 1 cup water.',
          'Combine the spiced tamarind reduction with cooked rice-dal-vegetable mash; simmer for 10 minutes.',
          'Temper mustard seeds, curry leaves, and crunchy cashews in hot desi ghee and pour over the dish; serve with potato chips or boondi.'
        ],
        fest: ['Dasara', 'Everyday Lunch'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Mysore Masala Dosa', cat: 'Breakfast', sub: 'Dosa', veg: true, vegan: false, spice: 'Medium', protein: 8, cal: 350, diff: 'Medium', mins: 30,
        alt: ['Red Chutney Mysore Dosa'],
        desc: 'Legendary thick and crisp Mysore crepe smeared with spicy roasted garlic red chilli chutney, loaded with butter, and filled with potato palya.',
        ings: [
          { name: 'Dosa batter (with beaten rice & chana dal)', quantity: '3', unit: 'cups' },
          { name: 'Mysore red garlic chutney', quantity: '4', unit: 'tbsp' },
          { name: 'Potato palya (dry spiced potatoes)', quantity: '2', unit: 'cups' },
          { name: 'Fresh white butter / Ghee', quantity: '4', unit: 'tbsp' }
        ],
        steps: [
          'Pour batter on hot griddle; spread into a slightly thick round crepe.',
          'Dollop generous white butter over top; smear spicy red garlic chutney evenly across surface.',
          'Place potato palya in center, fold, and roast till underside is deep mahogany crisp.'
        ],
        fest: ['Everyday Breakfast', 'Dasara'], meal: ['Breakfast']
      },
      { name: 'Mysore Pak', cat: 'Sweets', sub: 'Desserts', veg: true, vegan: false, spice: 'Mild', protein: 5, cal: 390, diff: 'Hard', mins: 30,
        alt: ['Royal Mysore Gram Flour Sweet'],
        desc: 'Royal melt-in-mouth confection created in the Mysore Palace kitchens, crafted from roasted besan, caramelized sugar syrup, and copious pure ghee.',
        ings: [
          { name: 'Gram flour (Besan), sifted', quantity: '1', unit: 'cup' },
          { name: 'Pure Desi Ghee (piping hot)', quantity: '2', unit: 'cups' },
          { name: 'Sugar', quantity: '2', unit: 'cups' },
          { name: 'Cardamom powder', quantity: '0.5', unit: 'tsp' }
        ],
        steps: [
          'Make single-thread sugar syrup in a heavy kadai.',
          'Gradually whisk in sifted besan to avoid any lumps.',
          'Pour in smoking hot ghee ladle by ladle while stirring vigorously until the mixture foams, leaves sides, and turns honeycomb porous.',
          'Pour into greased tray, let set for 10 minutes, and slice into diamond pieces.'
        ],
        fest: ['Diwali', 'Dasara', 'Weddings'], meal: ['Desserts', 'Festival Foods']
      },
      { name: 'Akki Roti', cat: 'Breakfast', sub: 'Roti & Paratha', veg: true, vegan: true, spice: 'Medium', protein: 5, cal: 220, diff: 'Easy', mins: 25,
        alt: ['Karnataka Rice Flour Flatbread'],
        desc: 'Crispy and rustic rice flour flatbread kneaded with finely chopped dill leaves, onions, grated carrots, green chillies, and cumin.',
        ings: [
          { name: 'Rice flour', quantity: '2', unit: 'cups' },
          { name: 'Fresh dill leaves (Sabbasige soppu)', quantity: '0.5', unit: 'cup' },
          { name: 'Onion, finely chopped', quantity: '1', unit: 'medium' },
          { name: 'Grated carrot & Fresh coconut', quantity: '4', unit: 'tbsp' },
          { name: 'Green chillies, cumin & salt', quantity: '1.5', unit: 'tbsp' },
          { name: 'Oil / Ghee', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Mix rice flour with dill, onions, carrots, coconut, chillies, cumin, and warm water to form soft dough.',
          'Pat dough thinly with fingers directly onto greased tawa or banana leaf.',
          'Cook with a drizzle of oil until golden brown spots appear on both sides.'
        ],
        fest: ['Traditional Breakfast'], meal: ['Breakfast', 'Dinner']
      },
      { name: 'Mangalorean Fish Curry', cat: 'Curries', sub: 'Fish', veg: false, spice: 'Hot', protein: 32, cal: 340, diff: 'Medium', mins: 35,
        alt: ['Meen Gassi'],
        desc: 'Tangy and fiery coastal fish curry simmered in a freshly ground paste of Byadagi chillies, coriander, coconut, and sour Kudampuli tamarind.',
        ings: [
          { name: 'Pomfret or Kingfish steaks', quantity: '500', unit: 'g' },
          { name: 'Fresh grated coconut', quantity: '1', unit: 'cup' },
          { name: 'Byadagi dry red chillies', quantity: '8', unit: 'whole' },
          { name: 'Coriander seeds, cumin & fenugreek', quantity: '1.5', unit: 'tbsp' },
          { name: 'Tamarind pulp & Coconut oil', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Roast dry chillies, spices, and coconut; blend with tamarind and water to a silky paste.',
          'Boil paste with water and green chillies in a clay pot until aromatic.',
          'Gently slide in fish steaks and simmer on low heat for 7 minutes; finish with coconut oil.'
        ],
        fest: ['Sunday Coastal Feasts'], meal: ['Lunch', 'Dinner']
      }
    ]
  }
];

console.log(`Loaded South Indian states with ${STATE_CUISINES.reduce((acc, s) => acc + s.dishes.length, 0)} base recipes.`);
