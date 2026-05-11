/* PRODUCTS */

const products = [

{
id: 1,
name: "Non-Stick Frying Pan",
price: "₦25,000",
category: "cookware",
image: "https://thf.bing.com/th/id/OIP.h_oZx9vqQiH_-ZPALfLOOgHaHa?w=151&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Premium non-stick frying pan perfect for eggs, steak, and everyday cooking."
},

{
id: 2,
name: "Cooking Pot Set",
price: "₦85,000",
category: "cookware",
image: "https://thf.bing.com/th/id/OIP.JT7IOZchvKFtM5XOvA076wHaHa?w=200&h=200&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Durable stainless cooking pot set designed for family-sized meals."
},

{
id: 3,
name: "Pressure Cooker",
price: "₦75,000",
category: "cookware",
image: "https://thf.bing.com/th/id/OIP.QpRLjszDoE-bbJ9PCEk2WwHaHa?w=192&h=192&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Fast and efficient pressure cooker that saves cooking time and energy."
},

{
id: 4,
name: "Blender Machine",
price: "₦65,000",
category: "appliance",
image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1200&auto=format&fit=crop",
description: "High-speed blender ideal for smoothies, juices, and food preparation."
},

{
id: 5,
name: "Electric Kettle",
price: "₦28,000",
category: "appliance",
image: "https://thf.bing.com/th/id/OIP.Nq2M40F7YeaMGiu_up9wWAHaHa?w=202&h=202&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Quick-boil electric kettle with modern design and safe automatic shutoff."
},

{
id: 6,
name: "Microwave Oven",
price: "₦120,000",
category: "appliance",
image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=1200&auto=format&fit=crop",
description: "Powerful microwave oven suitable for reheating, grilling, and baking."
},

{
id: 7,
name: "Food Storage Containers",
price: "₦15,000",
category: "storage",
image: "https://thf.bing.com/th/id/OIP.qKUl7g7C21RSEYknL-T46AHaHa?w=196&h=196&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Airtight food containers that help keep meals fresh and organized."
},

{
id: 8,
name: "Kitchen Rack",
price: "₦55,000",
category: "storage",
image: "https://thf.bing.com/th/id/OIP.fuCTzMkxMwz9cXI2x0XB8AHaHa?w=189&h=189&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Multi-layer kitchen rack for storing utensils, dishes, and cookware neatly."
},

{
id: 9,
name: "Spice Rack",
price: "₦15,000",
category: "storage",
image: "https://thf.bing.com/th/id/OIP.yEyHSr8KM9PPzM2lhxViEgHaHa?w=187&h=187&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Compact spice organizer that keeps seasonings arranged and easy to access."
},

{
id: 10,
name: "Kitchen Knife Set",
price: "₦35,000",
category: "utensil",
image: "https://thf.bing.com/th/id/OIP.pkWnDnodq8n6GqM0N50lRAHaIc?w=174&h=198&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Sharp stainless steel knife set suitable for slicing, chopping, and dicing."
},

{
id: 11,
name: "Wooden Spoon Set",
price: "₦12,000",
category: "utensil",
image: "https://thf.bing.com/th/id/OIP.IkiGpXNHj6J0Gf0ZXYpgHgHaHa?w=195&h=195&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Eco-friendly wooden spoon set safe for non-stick cookware."
},

{
id: 12,
name: "Kitchen Apron",
price: "₦8,000",
category: "utensil",
image: "https://thf.bing.com/th/id/OIP.ynQ4nk_SbSAUxAqtA7QbnAHaHa?w=206&h=206&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Comfortable kitchen apron designed to protect clothes while cooking."
},

{
id: 13,
name: "Dinner Plate Set",
price: "₦40,000",
category: "dining",
image: "https://thf.bing.com/th/id/OIP.P9OYEvfYjXe_B1jvbjLRNwHaEV?w=304&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Elegant dinner plate set perfect for family dining and special occasions."
},

{
id: 14,
name: "Glass Cup Set",
price: "₦14,000",
category: "dining",
image: "https://thf.bing.com/th/id/OIP.U1UT-0eVfhK_JuAau1r12gHaHa?w=186&h=186&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Stylish glass cups suitable for juice, soft drinks, and beverages."
},

{
id: 15,
name: "Cutlery Set",
price: "₦18,000",
category: "dining",
image: "https://thf.bing.com/th/id/OIP.ztfea1xI1GP9H2g0XZc0lQHaFq?w=278&h=213&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
description: "Modern stainless steel cutlery set with durable premium finishing."
}

];

/* DISPLAY PRODUCTS */

const productsContainer =
document.getElementById("productsContainer");

let output = "";

/* WHATSAPP NUMBER */
const whatsappNumber = "2349068666520";

products.forEach((product) => {

const message =
`Hello, I want to buy ${product.name} for ${product.price}`;

const whatsappLink =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

output += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="price">${product.price}</div>

<a href="${whatsappLink}" target="_blank" class="buy-btn">
Buy
</a>

</div>

</div>

`;

});

productsContainer.innerHTML = output;

/* MOBILE MENU */

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

/* CLOSE MENU AFTER CLICK */

document
.querySelectorAll("#navLinks a")
.forEach((link) => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

});

});
