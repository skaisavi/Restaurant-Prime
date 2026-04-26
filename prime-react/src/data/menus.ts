export interface MenuItem {
  name: string;
  description: string;
  price: string;
  note?: string;
}

export interface MenuSection {
  heading: string;
  items: MenuItem[];
}

export interface MenuTab {
  id: string;
  label: string;
  eyebrow: string;
  intro: string;
  sections: MenuSection[];
}

export const menus: MenuTab[] = [
  {
    id: 'a-la-carte',
    label: 'À la Carte',
    eyebrow: 'Available daily',
    intro: 'Seasonal ingredients. Classic technique. No concessions.',
    sections: [
      {
        heading: 'Starters',
        items: [
          { name: 'Beef Tartare', description: 'Aged sirloin, shallot, capers, cornichons, Dijon, brioche toast', price: '£14' },
          { name: 'Burrata', description: 'Heritage tomatoes, basil oil, aged balsamic, focaccia', price: '£12' },
          { name: 'Chicken Liver Parfait', description: 'Red onion marmalade, toasted brioche, pickled walnut', price: '£11' },
          { name: 'Seared Scallops', description: 'Cauliflower purée, crispy pancetta, golden raisin, chervil', price: '£16' },
          { name: 'Lobster Bisque', description: 'Crème fraîche, chives, sourdough croûtons', price: '£13' },
          { name: 'Bone Marrow', description: 'Toasted sourdough, chimichurri, crispy capers, shallot salad', price: '£12' },
        ],
      },
      {
        heading: 'Mains',
        items: [
          { name: '8oz Fillet Steak', description: 'Béarnaise, triple-cooked chips, watercress', price: '£46', note: 'Our finest cut' },
          { name: '10oz Ribeye', description: 'Peppercorn sauce, roasted garlic, watercress', price: '£38' },
          { name: '16oz T-Bone', description: 'Chimichurri, roasted garlic butter, hand-cut chips', price: '£56', note: 'For two to share' },
          { name: 'Prime Dry-Aged Sirloin', description: '28-day dry-aged, 9oz, café de Paris butter, fries', price: '£42' },
          { name: 'Whole Roasted Seabass', description: 'Samphire, lemon butter, new potatoes, salsa verde', price: '£29' },
          { name: 'Slow-Braised Short Rib', description: 'Horseradish mash, roasted shallots, red wine jus', price: '£34' },
          { name: 'Wild Mushroom Risotto', description: 'Aged parmesan, truffle oil, crispy sage', price: '£22', note: 'Vegetarian' },
        ],
      },
      {
        heading: 'Sides',
        items: [
          { name: 'Triple-Cooked Chips', description: 'Maldon sea salt', price: '£5' },
          { name: 'Truffle & Parmesan Fries', description: 'Aged parmesan, fresh truffle', price: '£7' },
          { name: 'Creamed Spinach', description: 'Nutmeg, shallots', price: '£5' },
          { name: 'Roasted Field Mushrooms', description: 'Thyme, garlic butter', price: '£5' },
          { name: 'Béarnaise Sauce', description: 'Classic French, tarragon', price: '£3' },
          { name: 'Peppercorn Sauce', description: 'Green peppercorns, brandy cream', price: '£3' },
        ],
      },
      {
        heading: 'Desserts',
        items: [
          { name: 'Dark Chocolate Fondant', description: 'Salted caramel centre, vanilla ice cream, cocoa soil', price: '£9' },
          { name: 'Crème Brûlée', description: 'Classic vanilla, shortbread finger', price: '£8' },
          { name: 'Sticky Toffee Pudding', description: 'Medjool date sponge, toffee sauce, clotted cream', price: '£9' },
          { name: 'Cheese Board', description: 'Three British cheeses, quince, celery, crackers', price: '£14' },
          { name: 'Affogato', description: 'Double espresso, vanilla ice cream, amaretto optional', price: '£7' },
        ],
      },
    ],
  },
  {
    id: 'sunday-roast',
    label: 'Sunday Roast',
    eyebrow: 'Every Sunday · 12pm – 8pm',
    intro: 'A British institution, taken seriously.',
    sections: [
      {
        heading: 'Choose your roast',
        items: [
          { name: 'Prime Rib of Beef', description: 'Slow-roasted, medium-rare, beef-bone gravy', price: '£32 pp', note: 'Most popular' },
          { name: 'Rack of Lamb', description: 'Herb & breadcrumb crust, redcurrant jus', price: '£32 pp' },
          { name: 'Free-Range Chicken', description: 'Lemon thyme butter, tarragon jus', price: '£28 pp' },
          { name: 'Slow-Roasted Pork Belly', description: 'Crackling, apple sauce, cider gravy', price: '£28 pp' },
          { name: 'Roasted Cauliflower', description: 'Spiced butter, pomegranate, pine nuts, all the trimmings', price: '£22 pp', note: 'Vegetarian' },
          { name: "Children's Roast", description: 'Smaller portion of any roast, all trimmings included', price: '£18 pp' },
        ],
      },
      {
        heading: 'All served with',
        items: [
          { name: 'Twice-Cooked Roast Potatoes', description: 'Goose fat, rosemary, sea salt', price: '—' },
          { name: 'Giant Yorkshire Pudding', description: 'Made fresh every hour', price: '—' },
          { name: 'Cauliflower Cheese', description: 'Mature cheddar, Dijon', price: '—' },
          { name: 'Honey-Glazed Heritage Carrots', description: 'Thyme butter', price: '—' },
          { name: 'Buttered Seasonal Greens', description: "Today's market selection", price: '—' },
          { name: 'Proper Beef-Bone Gravy', description: 'Reduced 12 hours', price: '—' },
        ],
      },
      {
        heading: 'Sunday extras',
        items: [
          { name: 'Extra Yorkshire Pudding', description: '', price: '£2' },
          { name: 'Extra Gravy', description: '', price: '£2' },
          { name: 'Starter & Dessert', description: 'Add any starter and dessert to your roast', price: '+£16 pp' },
        ],
      },
    ],
  },
  {
    id: 'set-menu',
    label: 'Set Menu',
    eyebrow: 'Tuesday – Friday · 12pm – 5pm',
    intro: 'The full Prime experience. Thoughtfully priced.',
    sections: [
      {
        heading: '2 courses — £28 · 3 courses — £36',
        items: [
          { name: '', description: 'Choose one from each course below. All dishes are freshly prepared and change with the seasons.', price: '' },
        ],
      },
      {
        heading: 'Starter',
        items: [
          { name: 'Soup of the Day', description: 'Seasonal, with warm sourdough', price: '' },
          { name: 'Chicken Liver Parfait', description: 'Red onion marmalade, brioche toast', price: '' },
          { name: 'Burrata', description: 'Heritage tomatoes, basil oil', price: '' },
          { name: 'Prawn Cocktail', description: 'Marie rose, cos lettuce, brown bread', price: '' },
        ],
      },
      {
        heading: 'Main',
        items: [
          { name: 'Salmon Fillet', description: 'Dill cream, crushed new potatoes, asparagus', price: '' },
          { name: '6oz Sirloin Steak', description: 'Peppercorn sauce, hand-cut chips, watercress', price: '' },
          { name: 'Wild Mushroom Risotto', description: 'Aged parmesan, truffle oil', price: '' },
          { name: 'Chicken Supreme', description: 'Tarragon butter sauce, dauphinoise, fine beans', price: '' },
        ],
      },
      {
        heading: 'Dessert',
        items: [
          { name: 'Crème Brûlée', description: 'Classic vanilla, shortbread', price: '' },
          { name: 'Dark Chocolate Tart', description: 'Raspberry coulis, vanilla cream', price: '' },
          { name: 'Seasonal Sorbet', description: "Today's flavour, ask your server", price: '' },
          { name: 'Affogato', description: 'Double espresso, vanilla ice cream', price: '' },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    eyebrow: 'Wine · Cocktails · Spirits',
    intro: 'A list built around the food. Nothing superfluous.',
    sections: [
      {
        heading: 'Wines by the glass',
        items: [
          { name: 'House White', description: 'Picpoul de Pinet, Languedoc — crisp, citrus', price: '£7 / £26' },
          { name: 'House Red', description: "Côtes du Rhône, grenache blend — smooth, peppery", price: '£7 / £26' },
          { name: 'House Rosé', description: 'Provence, Cinsault — pale, dry, elegant', price: '£7 / £26' },
          { name: 'Chablis Premier Cru', description: 'Louis Jadot — mineral, refined', price: '£14 / £52' },
          { name: 'Barolo DOCG', description: "Marchesi di Barolo — structured, complex", price: '£16 / £60' },
          { name: 'Champagne', description: 'Moët & Chandon Brut Impérial — NV', price: '£14 / £68' },
        ],
      },
      {
        heading: 'Cocktails',
        items: [
          { name: 'Prime Old Fashioned', description: 'Woodford Reserve, demerara, orange bitters, smoked glass', price: '£13' },
          { name: 'Espresso Martini', description: 'Tito\'s vodka, Kahlúa, double espresso, vanilla', price: '£12' },
          { name: 'The Herbsman', description: 'Hendrick\'s gin, elderflower, cucumber, tonic', price: '£12' },
          { name: 'Negroni', description: 'Campari, sweet vermouth, gin, orange', price: '£12' },
          { name: 'Passion Star', description: 'Passion fruit, vanilla vodka, Prosecco shot', price: '£13' },
        ],
      },
      {
        heading: 'Mocktails',
        items: [
          { name: 'Garden Spritz', description: 'Cucumber, elderflower, mint, soda', price: '£7' },
          { name: 'Smoked Berry Sour', description: 'Mixed berries, lemon, aquafaba, smoked salt rim', price: '£8' },
          { name: 'Ginger & Pear', description: 'Fresh pear, ginger beer, lime, rosemary', price: '£7' },
        ],
      },
      {
        heading: 'Soft drinks & more',
        items: [
          { name: 'Still / Sparkling Water', description: 'Hildon, 750ml', price: '£4' },
          { name: 'Soft Drinks', description: 'Fever-Tree range', price: '£3.50' },
          { name: 'Coffee', description: 'Espresso, flat white, cappuccino — Allpress beans', price: '£3.50' },
          { name: 'Loose Leaf Tea', description: 'Jing selection, pot for one', price: '£3.50' },
        ],
      },
    ],
  },
];
