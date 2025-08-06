// Import all namespace files
import common from './common.json';
import nav from './nav.json';
import home from './home.json';
import about from './about.json';
import products from './products.json';
import solutions from './solutions.json';
import contact from './contact.json';
import footer from './footer.json';
import errors from './errors.json';
import thermalInsulation from './thermal-insulation.json';

// Export as a single object
export default {
  common,
  nav,
  home,
  about,
  products,
  solutions,
  contact,
  footer,
  errors,
  thermalInsulation,
} as const; 