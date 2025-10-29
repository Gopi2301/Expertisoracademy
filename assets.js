// src/assets/assets.js

// --- Imports for Header, Footer, etc. ---
// You will already have some imports here, like these:
import logo_ex from './logo_ex.png';
import menu from './menu.svg';
// ... any other images your Header/Footer uses

// ✅ ADD THE IMPORTS FOR THE LOGIN MODAL ASSETS
// Make sure the image files 'ex_logo.png', 'ex_logo_mob.png', and 'close.svg'
// actually exist inside this 'assets' folder.
import ex_logo from './ex_logo.png';
import ex_logo_mob from './ex_logo_mob.png';
import close from './close.svg';


// This is the object that gets exported and used by your components.
export const assets = {
  // --- Existing assets that you already have ---
  logo_ex,
  menu,
  // ... other existing assets

  // ✅ ADD THE THREE KEYS FOR THE LOGIN MODAL TO THIS OBJECT
  ex_logo,
  ex_logo_mob,
  close,
};