// South Indian recipes dataset covering Andhra Pradesh, Telangana, Tamil Nadu, Kerala, Karnataka
export const southIndiaStates = [
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
          { name: 'Green chillies, slit & Ginger', quantity: '3', unit: 'tbsp' },
          { name: 'Turmeric powder, Mustard seeds & Hing', quantity: '1.5', unit: 'tbsp' },
          { name: 'Sesame oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Simmer tamarind paste with turmeric, green chillies, and salt until thick.',
          'In hot sesame oil, fry mustard, peanuts, chana dal, urad dal, hing, and curry leaves.',
          'Mix cooked tamarind sauce and tempered spices thoroughly into cooled steamed rice.'
        ],
        fest: ['Sankranti', 'Temple Prasad', 'Ugadi'], meal: ['Lunch', 'Festival Foods']
      },
      { name: 'Pesarattu Upma', cat: 'Breakfast', sub: 'Dosa', veg: true, vegan: true, spice: 'Medium', protein: 14, cal: 310, diff: 'Medium', mins: 30,
        alt: ['MLA Pesarattu', 'Green Moong Dal Crepe with Semolina Upma'],
        desc: 'Crispy green gram crepe stuffed with savoury semolina upma, served with allam pachadi (spicy sweet ginger chutney).',
        ings: [
          { name: 'Whole green moong dal, soaked', quantity: '2', unit: 'cups' },
          { name: 'Ginger & Green chillies', quantity: '2', unit: 'tbsp' },
          { name: 'Prepared Rava Upma', quantity: '1.5', unit: 'cups' },
          { name: 'Finely chopped onions & Cumin', quantity: '4', unit: 'tbsp' },
          { name: 'Ghee or Oil', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Grind soaked moong dal with ginger, chillies, cumin, and salt to a smooth dosa batter.',
          'Spread batter on hot griddle into a thin crepe; sprinkle onions and drizzle ghee.',
          'Place a ladle of warm rava upma inside, fold crisp crepe over, and serve with ginger chutney.'
        ],
        fest: ['Traditional Breakfast'], meal: ['Breakfast', 'Dinner']
      },
      { name: 'Royyala Vepudu', cat: 'Seafood', sub: 'Fish', veg: false, spice: 'Hot', protein: 30, cal: 260, diff: 'Medium', mins: 30,
        alt: ['Andhra Prawn Fry'],
        desc: 'Succulent prawns roasted dry with sliced onions, ginger-garlic, curry leaves, crushed black pepper, and spicy red masala.',
        ings: [
          { name: 'Fresh prawns, cleaned', quantity: '400', unit: 'g' },
          { name: 'Sliced onions & Green chillies', quantity: '1.5', unit: 'cups' },
          { name: 'Ginger-garlic paste', quantity: '1.5', unit: 'tbsp' },
          { name: 'Crushed black pepper & Coriander powder', quantity: '1.5', unit: 'tbsp' },
          { name: 'Curry leaves & Oil', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Marinate prawns in turmeric, chilli powder, and salt for 15 minutes.',
          'Sauté onions, chillies, and curry leaves in oil until caramelised.',
          'Add prawns and fry on medium heat until water evaporates and masala coats prawns crisply.'
        ],
        fest: ['Weekend Feasts'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Andhra Tomato Pappu', cat: 'Dal', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 11, cal: 210, diff: 'Easy', mins: 30,
        alt: ['Tamata Pappu'],
        desc: 'Hearty yellow toor dal stewed with ripe juicy tomatoes, green chillies, garlic, and finished with a sizzling mustard-curry leaf tadka.',
        ings: [
          { name: 'Toor dal (Yellow split pigeon peas)', quantity: '1', unit: 'cup' },
          { name: 'Ripe red tomatoes, chopped', quantity: '3', unit: 'medium' },
          { name: 'Green chillies & Garlic cloves', quantity: '5', unit: 'each' },
          { name: 'Mustard seeds, Cumin & Dry red chillies', quantity: '1', unit: 'tbsp' },
          { name: 'Ghee or Oil & Curry leaves', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Pressure cook toor dal with tomatoes, green chillies, turmeric, and garlic until soft.',
          'Mash dal slightly, add salt and a splash of water, and bring to a simmer.',
          'Heat ghee, splutter mustard seeds, cumin, dry red chillies, hing, and curry leaves; pour over hot dal.'
        ],
        fest: ['Everyday Comfort'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Pootharekulu', cat: 'Sweets', sub: 'Desserts', veg: true, vegan: false, spice: 'Mild', protein: 2, cal: 220, diff: 'Hard', mins: 40,
        alt: ['Paper Sweet', 'Atreyapuram Pootharekulu'],
        desc: 'Famous Andhra wafer-thin edible rice starch sheets layered with pure desi ghee, powdered jaggery, cardamom, and chopped nuts.',
        ings: [
          { name: 'Edible rice paper sheets (Poothareku)', quantity: '10', unit: 'sheets' },
          { name: 'Pure Desi Ghee (melted)', quantity: '0.5', unit: 'cup' },
          { name: 'Powdered organic jaggery', quantity: '1', unit: 'cup' },
          { name: 'Cardamom powder & Pistachios', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Lay a thin rice sheet on a clean flat surface and brush generously with warm melted ghee.',
          'Sprinkle powdered jaggery, cardamom, and nuts evenly.',
          'Layer another sheet, add more ghee and jaggery, and delicately roll into flat rectangular parcels.'
        ],
        fest: ['Sankranti', 'Weddings', 'Diwali'], meal: ['Desserts', 'Festival Foods']
      },
      { name: 'Ulava Charu', cat: 'Soups', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Medium', protein: 9, cal: 160, diff: 'Medium', mins: 50,
        alt: ['Horsegram Broth Andhra Style'],
        desc: 'Nutrient-rich earthy brown soup made from slow-boiled horsegram reduction, tamarind, and aromatic spices.',
        ings: [
          { name: 'Horsegram (Ulavalu), soaked', quantity: '1', unit: 'cup' },
          { name: 'Tamarind pulp', quantity: '2', unit: 'tbsp' },
          { name: 'Onion & Green chillies', quantity: '0.5', unit: 'cup' },
          { name: 'Charu podi (Coriander-cumin-pepper powder)', quantity: '1.5', unit: 'tbsp' },
          { name: 'Mustard seeds & Curry leaves', quantity: '1', unit: 'tbsp' }
        ],
        steps: [
          'Boil soaked horsegram in 5 cups water until deep brown extract forms; strain the nutritious liquid.',
          'Simmer extract with tamarind, sliced onions, chillies, charu podi, and salt for 20 mins.',
          'Temper with mustard seeds and curry leaves in hot ghee; serve with hot rice and fresh cream.'
        ],
        fest: ['Winter Feasts', 'Everyday Healing'], meal: ['Lunch', 'Dinner']
      }
    ]
  },
  {
    region: 'South Indian',
    state: 'Telangana',
    cuisine: 'Hyderabadi Cuisine',
    dishes: [
      { name: 'Hyderabadi Chicken Dum Biryani', cat: 'Biryani', sub: 'Chicken', veg: false, spice: 'Hot', protein: 38, cal: 580, diff: 'Hard', mins: 75,
        alt: ['Kachi Dum Biryani'],
        desc: 'World-famous royal biryani layered with raw spiced chicken, saffron basmati rice, caramelised onions, and slow-dum cooked in a sealed pot.',
        ings: [
          { name: 'Chicken, large biryani cuts', quantity: '750', unit: 'g' },
          { name: 'Aged Basmati rice, soaked', quantity: '2.5', unit: 'cups' },
          { name: 'Fried onions (Birista)', quantity: '1.5', unit: 'cups' },
          { name: 'Hung curd (Yogurt)', quantity: '1', unit: 'cup' },
          { name: 'Saffron strands dissolved in warm milk', quantity: '0.25', unit: 'cup' },
          { name: 'Shahi jeera & Whole garam masala', quantity: '2', unit: 'tbsp' },
          { name: 'Mint & Fresh coriander leaves', quantity: '1', unit: 'cup' },
          { name: 'Desi Ghee & Lemon juice', quantity: '4', unit: 'tbsp' }
        ],
        steps: [
          'Marinate chicken in yogurt, ginger-garlic paste, red chilli, mint, coriander, fried onions, and garam masala for 2 hours.',
          'Par-cook basmati rice in whole-spiced boiling water until 70% done; drain.',
          'Layer raw marinated chicken at the bottom of a heavy handi, top with par-cooked rice, saffron milk, ghee, mint, and fried onions.',
          'Seal handi rim with dough and lid. Cook on high flame for 10 mins, then low flame on a tawa (dum) for 35 mins.'
        ],
        fest: ['Eid', 'Sunday Feasts', 'Celebrations'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Hyderabadi Haleem', cat: 'Non-Vegetarian', sub: 'Mutton', veg: false, spice: 'Medium', protein: 40, cal: 520, diff: 'Hard', mins: 120,
        alt: ['Shahi Haleem'],
        desc: 'Rich royal delicacy of pounded mutton, broken wheat, four lentils, ghee, and aromatic spices slow-cooked into a velvety porridge.',
        ings: [
          { name: 'Boneless mutton', quantity: '500', unit: 'g' },
          { name: 'Broken wheat (Dalia)', quantity: '0.75', unit: 'cup' },
          { name: 'Mixed lentils (Chana, Urad, Moong, Masoor)', quantity: '0.5', unit: 'cup' },
          { name: 'Pure Desi Ghee', quantity: '0.5', unit: 'cup' },
          { name: 'Fried onions & Cashews', quantity: '0.5', unit: 'cup' },
          { name: 'Potli masala & Green chillies', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Cook mutton with spices until falling apart tender.',
          'Cook broken wheat and lentils until completely soft and mushy.',
          'Combine meat and wheat-lentil mash; pound vigorously with a wooden masher (ghotni) while adding hot ghee until silky and fibrous.',
          'Garnish with fried onions, toasted cashews, mint, and lemon juice.'
        ],
        fest: ['Ramadan / Eid', 'Weddings'], meal: ['Dinner', 'Festival Foods']
      },
      { name: 'Mirchi Ka Salan', cat: 'Curries', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Hot', protein: 6, cal: 260, diff: 'Medium', mins: 40,
        alt: ['Hyderabadi Chilli Gravy'],
        desc: 'Nutty and tangy gravy made from roasted peanuts, sesame seeds, coconut, tamarind, and whole shallow-fried Bhavnagri green chillies.',
        ings: [
          { name: 'Large mild green chillies (Bhavnagri)', quantity: '8', unit: 'whole' },
          { name: 'Roasted peanuts & White sesame seeds', quantity: '4', unit: 'tbsp' },
          { name: 'Dry coconut & Poppy seeds', quantity: '3', unit: 'tbsp' },
          { name: 'Tamarind pulp & Jaggery', quantity: '2', unit: 'tbsp' },
          { name: 'Mustard seeds, Kalonji & Cumin', quantity: '1', unit: 'tbsp' },
          { name: 'Oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Slit and shallow-fry green chillies in oil until blistered; set aside.',
          'Roast peanuts, sesame, coconut, and spices; blend with water into a smooth paste.',
          'Sauté onion paste, add ground nutty paste, tamarind, and water; simmer until oil floats on top.',
          'Slide in fried green chillies and simmer for 5 minutes; serve with Hyderabadi Biryani.'
        ],
        fest: ['Eid', 'Biryani Accompaniment'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Double Ka Meetha', cat: 'Sweets', sub: 'Desserts', veg: true, vegan: false, spice: 'Mild', protein: 8, cal: 380, diff: 'Medium', mins: 35,
        alt: ['Hyderabadi Bread Pudding', 'Shahi Tukda Hyderabadi'],
        desc: 'Decadent royal dessert of crisp ghee-fried bread steeped in saffron syrup, layered with thick rabdi and chopped dry fruits.',
        ings: [
          { name: 'Milk bread slices, crust removed', quantity: '8', unit: 'slices' },
          { name: 'Pure Desi Ghee for frying', quantity: '0.75', unit: 'cup' },
          { name: 'Thickened milk Rabdi', quantity: '1.5', unit: 'cups' },
          { name: 'Sugar syrup infused with saffron and cardamom', quantity: '1', unit: 'cup' },
          { name: 'Silver vark & Slivered pistachios', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Deep fry bread triangles in hot ghee until deep golden and crunchy.',
          'Dip crispy bread pieces into warm saffron sugar syrup for 1 minute.',
          'Arrange bread in serving dish, pour rich creamy rabdi over top, and garnish with pistachios and silver leaf.'
        ],
        fest: ['Eid', 'Weddings', 'Diwali'], meal: ['Desserts', 'Festival Foods']
      },
      { name: 'Sarva Pindi', cat: 'Breakfast', sub: 'Snacks', veg: true, vegan: true, spice: 'Medium', protein: 6, cal: 240, diff: 'Medium', mins: 30,
        alt: ['Telangana Tapala Chekka'],
        desc: 'Traditional savory pancake made with rice flour, roasted peanuts, chana dal, sesame seeds, and curry leaves pressed into a pan with holes and cooked crisp.',
        ings: [
          { name: 'Rice flour', quantity: '2', unit: 'cups' },
          { name: 'Soaked chana dal & Roasted peanuts', quantity: '4', unit: 'tbsp' },
          { name: 'White sesame seeds', quantity: '2', unit: 'tbsp' },
          { name: 'Onions, finely chopped & Green chillies', quantity: '4', unit: 'tbsp' },
          { name: 'Ginger-garlic paste, curry leaves & Oil', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Mix rice flour with soaked dal, peanuts, sesame, onions, chillies, ginger-garlic, curry leaves, and water into a soft pliable dough.',
          'Grease a deep pan with oil and press a portion of dough thinly across the base; poke small holes.',
          'Drizzle oil in holes, cover with lid, and cook on medium flame until bottom is deep golden and crunchy.'
        ],
        fest: ['Traditional Breakfast', 'Evening Snacks'], meal: ['Breakfast', 'Snacks']
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
        desc: 'Golden crisp fermented rice-urad crepe spread with butter, filled with spiced mashed potato masala, and served with coconut chutney and sambar.',
        ings: [
          { name: 'Fermented Dosa batter', quantity: '3', unit: 'cups' },
          { name: 'Boiled potatoes, mashed', quantity: '3', unit: 'medium' },
          { name: 'Onions, sliced & Green chillies', quantity: '1', unit: 'cup' },
          { name: 'Mustard seeds, Chana dal & Turmeric', quantity: '1.5', unit: 'tbsp' },
          { name: 'Ghee or Sesame oil', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Sauté mustard seeds, chana dal, curry leaves, sliced onions, and green chillies in oil.',
          'Add turmeric, mashed potatoes, salt, and water; simmer into a moist bhaji.',
          'Pour batter on hot tawa, spread thin in spirals, drizzle ghee around edges, and cook till golden.',
          'Place potato filling inside, roll crisp dosa, and serve piping hot with chutneys.'
        ],
        fest: ['Everyday Breakfast', 'Pongal'], meal: ['Breakfast', 'Dinner']
      },
      { name: 'Idli Sambar', cat: 'Breakfast', sub: 'Idli', veg: true, vegan: true, spice: 'Medium', protein: 12, cal: 260, diff: 'Easy', mins: 25,
        alt: ['Steamed Rice Cakes with Lentil Stew'],
        desc: 'Pillowy steamed fermented rice and black gram cakes immersed in hot, aromatic vegetable-toor dal sambar.',
        ings: [
          { name: 'Fermented Idli batter', quantity: '3', unit: 'cups' },
          { name: 'Toor dal (Pigeon peas), boiled', quantity: '1', unit: 'cup' },
          { name: 'Shallots, drumsticks & Carrots', quantity: '1.5', unit: 'cups' },
          { name: 'Sambar powder & Tamarind extract', quantity: '2', unit: 'tbsp' },
          { name: 'Mustard seeds & Curry leaves', quantity: '1', unit: 'tbsp' }
        ],
        steps: [
          'Pour batter into greased idli molds and steam for 10 minutes until fluffy and springy.',
          'Boil shallots and drumsticks in tamarind water with sambar powder and salt.',
          'Add cooked toor dal mash, bring to rolling boil, and temper with mustard, hing, and curry leaves.',
          'Dunk hot idlis in a bowl of hot sambar and top with a drop of ghee.'
        ],
        fest: ['Everyday Breakfast'], meal: ['Breakfast']
      },
      { name: 'Medu Vada', cat: 'Breakfast', sub: 'Vada', veg: true, vegan: true, spice: 'Medium', protein: 9, cal: 240, diff: 'Medium', mins: 30,
        alt: ['Crispy Lentil Doughnut Fritters'],
        desc: 'Golden crisp urad dal fritters studded with crushed black pepper, ginger, curry leaves, and green chillies.',
        ings: [
          { name: 'Whole white urad dal, soaked', quantity: '1.5', unit: 'cups' },
          { name: 'Whole black peppercorns & Cumin', quantity: '1.5', unit: 'tbsp' },
          { name: 'Ginger, green chillies & Curry leaves', quantity: '3', unit: 'tbsp' },
          { name: 'Asafoetida (Hing) & Salt', quantity: '1', unit: 'tsp' },
          { name: 'Oil for deep frying', quantity: '3', unit: 'cups' }
        ],
        steps: [
          'Grind soaked urad dal with minimal ice water to a thick, fluffy, aerated batter.',
          'Fold in crushed peppercorns, cumin, ginger, chillies, curry leaves, and salt.',
          'Shape into donut rings with a center hole using wet hands and slide into hot oil.',
          'Fry on medium heat until golden brown and super crunchy on the outside.'
        ],
        fest: ['Pongal', 'Diwali', 'Sunday Mornings'], meal: ['Breakfast', 'Snacks']
      },
      { name: 'Chettinad Chicken Curry', cat: 'Curries', sub: 'Chicken', veg: false, spice: 'Very Hot', protein: 38, cal: 410, diff: 'Medium', mins: 45,
        alt: ['Kozhi Chettinad'],
        desc: 'Fiery chicken curry prepared with freshly stone-ground whole spices, kalpasi (black stone flower), dry coconut, and black peppercorns.',
        ings: [
          { name: 'Chicken pieces', quantity: '650', unit: 'g' },
          { name: 'Shallots (Sambhar onions)', quantity: '1.5', unit: 'cups' },
          { name: 'Chettinad masala (Kalpasi, star anise, fennel, peppercorns, dry chillies)', quantity: '3', unit: 'tbsp' },
          { name: 'Grated coconut', quantity: '0.5', unit: 'cup' },
          { name: 'Ginger-garlic paste & Curry leaves', quantity: '2', unit: 'tbsp' },
          { name: 'Gingelly (Sesame) oil & Salt', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Dry roast kalpasi, fennel, peppercorns, coriander, chillies, and coconut; grind to a fine masala paste.',
          'Sauté shallots and curry leaves in hot sesame oil until caramelized.',
          'Add ginger-garlic paste and chicken; sear well.',
          'Add ground Chettinad masala, tomatoes, and water; simmer until chicken is tender and oil floats.'
        ],
        fest: ['Sunday Feasts', 'Chettinad Feasts'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Ven Pongal', cat: 'Breakfast', sub: 'Rice Dishes', veg: true, vegan: false, spice: 'Mild', protein: 9, cal: 310, diff: 'Easy', mins: 25,
        alt: ['Ghee Pongal'],
        desc: 'Comforting porridge of raw rice and yellow moong dal tempered with crushed black pepper, cumin, fresh ginger, crunchy cashews, and generous desi ghee.',
        ings: [
          { name: 'Raw rice & Yellow moong dal', quantity: '1', unit: 'cup each' },
          { name: 'Pure Desi Ghee', quantity: '0.5', unit: 'cup' },
          { name: 'Black peppercorns & Cumin seeds', quantity: '1.5', unit: 'tbsp' },
          { name: 'Cashew nuts & Grated ginger', quantity: '3', unit: 'tbsp' },
          { name: 'Curry leaves, hing & salt', quantity: '1', unit: 'tbsp' }
        ],
        steps: [
          'Roast moong dal lightly, wash with rice, and pressure cook with 5 cups water and salt until mushy soft.',
          'In hot ghee, fry cashews till golden; add cumin, crushed pepper, ginger, hing, and curry leaves.',
          'Pour sizzling tadka over cooked rice-dal mash, mix thoroughly, and serve with coconut chutney and sambar.'
        ],
        fest: ['Pongal Festival', 'Margazhi Temple Food'], meal: ['Breakfast']
      }
    ]
  },
  {
    region: 'South Indian',
    state: 'Kerala',
    cuisine: 'Kerala Cuisine',
    dishes: [
      { name: 'Appam with Vegetable Stew', cat: 'Breakfast', sub: 'Dosa', veg: true, vegan: true, spice: 'Mild', protein: 6, cal: 280, diff: 'Medium', mins: 35,
        alt: ['Palappam with Kerala Ishtu'],
        desc: 'Lacy, bowl-shaped fermented rice crepes with a soft pillowy center, served with a gentle coconut milk vegetable stew.',
        ings: [
          { name: 'Fermented Appam batter (with coconut & yeast)', quantity: '3', unit: 'cups' },
          { name: 'Thick & Thin Coconut Milk', quantity: '2', unit: 'cups' },
          { name: 'Mixed vegetables (potatoes, carrots, green peas)', quantity: '2', unit: 'cups' },
          { name: 'Green chillies, slit & Ginger juliennes', quantity: '2', unit: 'tbsp' },
          { name: 'Whole spices (cardamom, cinnamon, cloves)', quantity: '1', unit: 'tbsp' },
          { name: 'Coconut oil & Curry leaves', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Boil vegetables in thin coconut milk with green chillies, ginger, whole spices, and salt.',
          'Stir in thick coconut milk, finish with curry leaves and raw coconut oil, and turn off heat immediately.',
          'Pour a ladle of appam batter in hot appachatti pan, swirl once to form lacy edges, cover and steam until center is fluffy.'
        ],
        fest: ['Easter', 'Christmas', 'Sunday Breakfast'], meal: ['Breakfast', 'Dinner']
      },
      { name: 'Puttu and Kadala Curry', cat: 'Breakfast', sub: 'Curries', veg: true, vegan: true, spice: 'Hot', protein: 15, cal: 340, diff: 'Medium', mins: 45,
        alt: ['Steamed Rice Cake with Black Chickpeas Curry'],
        desc: 'Steamed coarse rice flour and grated coconut cylinders served with a spicy roasted coconut and black chickpea gravy.',
        ings: [
          { name: 'Coarse rice flour (Puttu podi)', quantity: '2', unit: 'cups' },
          { name: 'Fresh grated coconut', quantity: '1', unit: 'cup' },
          { name: 'Black chickpeas (Kadala), soaked & boiled', quantity: '1.5', unit: 'cups' },
          { name: 'Roasted coconut & spice paste', quantity: '3', unit: 'tbsp' },
          { name: 'Coconut oil, mustard seeds & Curry leaves', quantity: '2', unit: 'tbsp' }
        ],
        steps: [
          'Moisten puttu flour with salted water; layer alternately with grated coconut in a cylindrical puttu maker and steam for 8 mins.',
          'Roast grated coconut with shallots and coriander powder until dark brown; grind to a smooth paste.',
          'Simmer boiled black chickpeas in the roasted coconut gravy with onions and spices.',
          'Temper with mustard and curry leaves in coconut oil; serve with hot puttu and ripe bananas.'
        ],
        fest: ['Everyday Breakfast', 'Onam'], meal: ['Breakfast']
      },
      { name: 'Karimeen Pollichathu', cat: 'Seafood', sub: 'Fish', veg: false, spice: 'Hot', protein: 32, cal: 310, diff: 'Medium', mins: 40,
        alt: ['Pearl Spot Fish in Banana Leaf'],
        desc: 'Backwater Pearl Spot fish marinated in spicy masala, shallow fried, smothered in shallot gravy, wrapped in banana leaf, and pan-roasted.',
        ings: [
          { name: 'Fresh Karimeen (Pearl Spot) fish, whole', quantity: '2', unit: 'whole' },
          { name: 'Banana leaves, wilted over flame', quantity: '2', unit: 'leaves' },
          { name: 'Shallots, finely sliced', quantity: '1.5', unit: 'cups' },
          { name: 'Ginger, garlic & Green chillies', quantity: '3', unit: 'tbsp' },
          { name: 'Kashmiri chilli powder, Kudampuli (Garcinia)', quantity: '2', unit: 'tbsp' },
          { name: 'Pure Coconut oil', quantity: '4', unit: 'tbsp' }
        ],
        steps: [
          'Marinate fish with chilli powder, turmeric, pepper, and lemon juice; shallow-fry for 3 mins per side.',
          'Sauté shallots, ginger, garlic, tomatoes, and spices in coconut oil until thick gravy forms.',
          'Place fish on banana leaf, coat both sides with shallot masala, fold leaf into a packet, and tie with twine.',
          'Pan-roast the banana leaf packet on a hot tawa with coconut oil for 10 minutes until fragrant and charred.'
        ],
        fest: ['Backwater Feasts', 'Celebration Meals'], meal: ['Lunch', 'Dinner']
      },
      { name: 'Kerala Avial', cat: 'Curries', sub: 'Vegetarian', veg: true, vegan: true, spice: 'Mild', protein: 5, cal: 190, diff: 'Easy', mins: 30,
        alt: ['Sadya Mixed Vegetable Stew'],
        desc: 'Sadya centerpiece of thirteen indigenous vegetables cooked with raw coconut-cumin-chilli paste and finished with fresh coconut oil and curd.',
        ings: [
          { name: 'Mixed vegetables (plantain, elephant yam, drumstick, snake gourd, carrots, beans)', quantity: '4', unit: 'cups' },
          { name: 'Fresh grated coconut', quantity: '1.5', unit: 'cups' },
          { name: 'Cumin seeds & Green chillies', quantity: '1.5', unit: 'tbsp' },
          { name: 'Whisked sour curd (optional for vegan)', quantity: '0.5', unit: 'cup' },
          { name: 'Pure Coconut oil & Fresh curry leaves', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Cook batons of mixed vegetables with turmeric, salt, and minimal water until tender but crisp.',
          'Coarsely grind fresh coconut, cumin, and green chillies without water.',
          'Fold coconut paste into cooked vegetables, simmer for 3 mins, and turn off flame.',
          'Gently mix in whisked curd, top with raw coconut oil and bruised curry leaves; cover and rest.'
        ],
        fest: ['Onam Sadya', 'Vishu Sadya'], meal: ['Lunch']
      },
      { name: 'Thalassery Biryani', cat: 'Biryani', sub: 'Chicken', veg: false, spice: 'Medium', protein: 36, cal: 520, diff: 'Hard', mins: 70,
        alt: ['Malabar Dum Biryani'],
        desc: 'Aromatic coastal biryani made with fragrant small-grain Kaima rice, pure ghee, tender chicken masala, cashews, raisins, and fried onions on dum.',
        ings: [
          { name: 'Chicken, medium pieces', quantity: '650', unit: 'g' },
          { name: 'Kaima / Jeerakasala rice', quantity: '2', unit: 'cups' },
          { name: 'Pure Desi Ghee', quantity: '0.5', unit: 'cup' },
          { name: 'Shallots & Onions, sliced', quantity: '2', unit: 'cups' },
          { name: 'Green chilli-ginger-garlic paste', quantity: '3', unit: 'tbsp' },
          { name: 'Garam masala, cashews & Raisins', quantity: '3', unit: 'tbsp' }
        ],
        steps: [
          'Cook chicken in a rich, spiced shallot, tomato, and crushed green chilli masala until thick gravy forms.',
          'Sauté Kaima rice in hot ghee with whole spices, add boiling water, and cook until fluffy.',
          'In a heavy handi, layer chicken masala, ghee rice, fried cashews, raisins, birista, and fresh coriander.',
          'Seal tightly and cook on slow dum for 25 minutes; serve with date pickle and coconut raita.'
        ],
        fest: ['Eid', 'Malabar Celebrations'], meal: ['Lunch', 'Dinner']
      }
    ]
  }
];

console.log("South India states data module ready.");
