const { default: Icons } = require("@/app/_assets/icons");

const categories = [
  { title: "Phones", image: Icons.ic_categories_phones, active: false },
  { title: "Computers", image: Icons.ic_categories_computers, active: false },
  { title: "Smartwatch", image: Icons.ic_categories_smartwatch, active: false },
  { title: "Camera", image: Icons.ic_categories_camera, active: true },
  { title: "Headphones", image: Icons.ic_categories_headphones, active: false },
  { title: "Gaming", image: Icons.ic_categories_gaming, active: false },
];

export default categories