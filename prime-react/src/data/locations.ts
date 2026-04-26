export interface Location {
  slug: string;
  name: string;
  shortName: string;
  address: string;
  addressLine2: string;
  postcode: string;
  phone: string;
  email: string;
  hours: string;
  mapSrc: string;
}

export const locations: Location[] = [
  {
    slug: 'st-albans',
    name: 'St Albans',
    shortName: 'St Albans',
    address: '83–85 London Road',
    addressLine2: 'St Albans',
    postcode: 'AL1 1LN',
    phone: '01727 000 000',
    email: 'stalbans@primesteakandgrill.com',
    hours: 'Mon–Fri: 12pm – 10pm\nSaturday: 11am – 11pm\nSunday: 11am – 9pm',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.8!2d-0.3331077!3d51.7486961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763f2062f5d5d1%3A0x2c5a80d767a5710!2sPrime%20Steak%20and%20Grill!5e0!3m2!1sen!2suk!4v1',
  },
  {
    slug: 'chandlers-cross',
    name: 'Chandlers Cross',
    shortName: 'Chandlers Cross',
    address: 'The Clarendon, Redhall Lane',
    addressLine2: "Chandler's Cross, Rickmansworth",
    postcode: 'WD3 4LU',
    phone: '01923 000 000',
    email: 'chandlerscross@primesteakandgrill.com',
    hours: 'Mon–Fri: 12pm – 10pm\nSaturday: 11am – 11pm\nSunday: 11am – 9pm',
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.2!2d-0.4602712!3d51.672943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a0fcf46b6d3%3A0xd42fb0f171a0859a!2sPrime%20Steak%20and%20Grill%20-%20Chandler's%20Cross!5e0!3m2!1sen!2suk!4v1",
  },
  {
    slug: 'beaconsfield',
    name: 'Beaconsfield',
    shortName: 'Beaconsfield',
    address: '180–182 Maxwell Road',
    addressLine2: 'Beaconsfield',
    postcode: 'HP9 1QX',
    phone: '01494 000 000',
    email: 'beaconsfield@primesteakandgrill.com',
    hours: 'Mon–Fri: 12pm – 10pm\nSaturday: 11am – 11pm\nSunday: 11am – 9pm',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.2!2d-0.6442472!3d51.6103301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487666bcf35b24a3%3A0x28b9d0f749775eda!2sPrime%20Steak%20%26%20Grill%20-%20Beaconsfield!5e0!3m2!1sen!2suk!4v1',
  },
  {
    slug: 'berkhamsted',
    name: 'Berkhamsted & The Secret Garden',
    shortName: 'Berkhamsted',
    address: '196 High Street',
    addressLine2: 'Berkhamsted',
    postcode: 'HP4 3BA',
    phone: '01442 000 000',
    email: 'berkhamsted@primesteakandgrill.com',
    hours: 'Mon–Fri: 12pm – 10pm\nSaturday: 11am – 11pm\nSunday: 11am – 9pm',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.2!2d-0.5647829!3d51.7608786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876431e6ed11437%3A0xe7b15c75766d2010!2sPrime%20Steak%20%26%20Grill!5e0!3m2!1sen!2suk!4v1',
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
