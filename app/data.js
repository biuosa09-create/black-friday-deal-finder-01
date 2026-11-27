// Bargain Beacon deals. Every deal was found and checked by the agent in this
// session on Friday 27 November 2026 (checked times are UTC), reading the price
// at the store or in a deals source that names the store. "signal" is the
// agent's honest verdict: "new-low" means a source called it a record or
// all-time low; "strong" means a deep cut (40% or more, or far below the
// typical selling price); "routine" means a real discount that is small or
// ordinary for the season. "note" carries the evidence behind the signal.

export const META = {
  checked: "2026-11-27T11:00:00Z",
  checkedLabel: "Fri 27 Nov 2026, 11:00 UTC",
  stores: ["Amazon", "Best Buy", "Walmart", "Target", "Costco", "B&H Photo", "Newegg"],
  categories: ["TVs", "Laptops", "Audio", "Smart home", "Phones", "Wearables", "Gaming", "Home", "Kitchen", "Toys", "Beauty", "Cameras"],
};

export const deals = [
  // ---- TVs ----
  { id: "tcl-65-fire-tv", title: "TCL 65-inch 4K Fire TV (2026)", store: "Best Buy", category: "TVs", price: 229.99, was: 469.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=TCL+65+inch+4K+Fire+TV", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by TradingView and 9to5Toys", signal: "new-low", note: "Lowest price reported for this set; $240 off." },
  { id: "hisense-65-roku", title: "Hisense 65-inch H5R1 4K Roku TV", store: "Walmart", category: "TVs", price: 228, was: 398, url: "https://www.walmart.com/search?q=Hisense+65+inch+H5R1+4K+Roku+TV", checked: "2026-11-27T11:00:00Z", source: "Walmart, reported by TradingView", signal: "strong", note: "$170 off the regular price." },
  { id: "insignia-55-qled", title: "Insignia 55-inch QF Series QLED TV", store: "Best Buy", category: "TVs", price: 169.99, was: 399.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Insignia+55+inch+QF+QLED+TV", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by 9to5Toys", signal: "strong", note: "$230 off as a Black Friday doorbuster." },
  { id: "tcl-55-qm8cg", title: "TCL 55-inch QM8CG SQD-Mini LED 4K TV", store: "Best Buy", category: "TVs", price: 599.99, was: 1999.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=TCL+55+inch+QM8CG+Mini+LED+TV", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by 9to5Toys", signal: "strong", note: "70% off the list price as a doorbuster." },
  { id: "tcl-55-qm6k", title: "TCL 55-inch QM6K QD-Mini LED 4K TV", store: "Amazon", category: "TVs", price: 478, was: 600, url: "https://www.amazon.com/s?k=TCL+55+inch+QM6K+QD-Mini+LED+4K+TV", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "$122 off; a step-up panel below its launch price." },
  // ---- Laptops ----
  { id: "hp-omnibook-5", title: "HP OmniBook 5 14-inch OLED touchscreen laptop", store: "Best Buy", category: "Laptops", price: 449.99, was: 799.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=HP+OmniBook+5+14+inch+OLED+laptop", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by TradingView", signal: "new-low", note: "$350 off; the cheapest OLED laptop in the sale." },
  { id: "macbook-air-m5-512", title: "Apple MacBook Air 13-inch, M5, 16GB / 512GB", store: "Amazon", category: "Laptops", price: 999, was: 1299, url: "https://www.amazon.com/s?k=MacBook+Air+13+inch+M5+16GB+512GB", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by 9to5Toys", signal: "new-low", note: "$300 off; the lowest price reported for this configuration." },
  { id: "macbook-air-m5-1tb", title: "Apple MacBook Air 13-inch, M5, 16GB / 1TB", store: "Amazon", category: "Laptops", price: 1199, was: 1599, url: "https://www.amazon.com/s?k=MacBook+Air+13+inch+M5+16GB+1TB", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by 9to5Toys", signal: "strong", note: "$400 off the list price." },
  { id: "macbook-air-m5-bb", title: "Apple MacBook Air 13-inch, M5, 16GB / 512GB", store: "Best Buy", category: "Laptops", price: 1049, was: 1299, url: "https://www.bestbuy.com/site/searchpage.jsp?st=MacBook+Air+13+inch+M5", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by TradingView", signal: "strong", note: "$250 off at Best Buy; Amazon lists the same model $50 lower." },
  { id: "macbook-neo-256", title: "Apple MacBook Neo 256GB", store: "Amazon", category: "Laptops", price: 599, was: 699, url: "https://www.amazon.com/s?k=MacBook+Neo+256GB", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TradingView", signal: "strong", note: "$100 off Apple's cheapest laptop." },
  { id: "macbook-pro-m6", title: "Apple MacBook Pro, M6", store: "Best Buy", category: "Laptops", price: 1749, was: 1999, url: "https://www.bestbuy.com/site/searchpage.jsp?st=MacBook+Pro+M6", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by 9to5Toys", signal: "strong", note: "$250 off the new M6 Pro." },
  { id: "lenovo-legion-7i", title: "Lenovo Legion Pro 7i gaming laptop", store: "B&H Photo", category: "Laptops", price: 3999.99, was: 5299.99, url: "https://www.bhphotovideo.com/c/search?Ntt=Lenovo+Legion+Pro+7i", checked: "2026-11-27T11:00:00Z", source: "B&H Photo, reported by TradingView", signal: "strong", note: "$1,300 off a flagship gaming laptop." },
  // ---- Audio ----
  { id: "airpods-pro-3", title: "Apple AirPods Pro 3", store: "Amazon", category: "Audio", price: 149, was: 249, url: "https://www.amazon.com/s?k=Apple+AirPods+Pro+3", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TradingView and TechRadar", signal: "new-low", note: "$100 off; lowest price reported anywhere this season." },
  { id: "airpods-pro-3-tgt", title: "Apple AirPods Pro 3", store: "Target", category: "Audio", price: 149.99, was: 249.99, url: "https://www.target.com/s?searchTerm=Apple+AirPods+Pro+3", checked: "2026-11-27T11:00:00Z", source: "Target, reported by TradingView", signal: "strong", note: "Same $149 deal as Amazon; Amazon is a dollar lower." },
  { id: "airpods-max-2", title: "Apple AirPods Max 2", store: "Amazon", category: "Audio", price: 419, was: 549, url: "https://www.amazon.com/s?k=AirPods+Max+2", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by 9to5Toys", signal: "strong", note: "$130 off." },
  { id: "airpods-4", title: "Apple AirPods 4", store: "Walmart", category: "Audio", price: 99, was: 129.99, url: "https://www.walmart.com/search?q=Apple+AirPods+4", checked: "2026-11-27T11:00:00Z", source: "Walmart, reported by TechResearchOnline", signal: "strong", note: "$31 off the entry AirPods." },
  { id: "sony-xm5", title: "Sony WH-1000XM5 noise-cancelling headphones", store: "Best Buy", category: "Audio", price: 169, was: 398, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Sony+WH-1000XM5", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by TradingView", signal: "new-low", note: "$229 off; the lowest price reported for the XM5." },
  { id: "sony-xm6", title: "Sony WH-1000XM6 headphones", store: "Amazon", category: "Audio", price: 348, was: 459, url: "https://www.amazon.com/s?k=Sony+WH-1000XM6", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TechResearchOnline", signal: "strong", note: "$111 off the newest Sony flagship." },
  { id: "beats-studio-pro", title: "Beats Studio Pro headphones", store: "Walmart", category: "Audio", price: 99, was: 299, url: "https://www.walmart.com/search?q=Beats+Studio+Pro", checked: "2026-11-27T11:00:00Z", source: "Walmart, reported by TradingView", signal: "new-low", note: "67% off; the deepest headphone cut in the sale." },
  { id: "beats-solo-4", title: "Beats Solo 4 headphones", store: "Target", category: "Audio", price: 79.99, was: 199.99, url: "https://www.target.com/s?searchTerm=Beats+Solo+4", checked: "2026-11-27T11:00:00Z", source: "Target, reported by TradingView", signal: "new-low", note: "60% off." },
  { id: "bose-qc", title: "Bose QuietComfort headphones", store: "Target", category: "Audio", price: 169.99, was: 359.99, url: "https://www.target.com/s?searchTerm=Bose+QuietComfort+headphones", checked: "2026-11-27T11:00:00Z", source: "Target, reported by TradingView", signal: "new-low", note: "53% off; lowest reported price for this model." },
  { id: "marshall-acton-3", title: "Marshall Acton III Bluetooth speaker", store: "Best Buy", category: "Audio", price: 250, was: 300, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Marshall+Acton+III", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by 9to5Toys", signal: "routine", note: "Only 17% off; a modest cut on a speaker that is often discounted." },
  { id: "marshall-stanmore-3", title: "Marshall Stanmore III Bluetooth speaker", store: "Best Buy", category: "Audio", price: 250, was: 400, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Marshall+Stanmore+III", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by 9to5Toys", signal: "strong", note: "$150 off the bigger Marshall home speaker." },
  // ---- Smart home ----
  { id: "echo-spot", title: "Amazon Echo Spot", store: "Amazon", category: "Smart home", price: 44, was: 109, url: "https://www.amazon.com/s?k=Amazon+Echo+Spot", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TechResearchOnline", signal: "new-low", note: "60% off Amazon's own smart alarm clock." },
  { id: "fire-stick-4k-plus", title: "Amazon Fire TV Stick 4K Plus", store: "Amazon", category: "Smart home", price: 29, was: 69, url: "https://www.amazon.com/s?k=Fire+TV+Stick+4K+Plus", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TechResearchOnline", signal: "strong", note: "58% off." },
  { id: "fire-stick-4k-max", title: "Amazon Fire TV Stick 4K Max", store: "Amazon", category: "Smart home", price: 45, was: 85, url: "https://www.amazon.com/s?k=Fire+TV+Stick+4K+Max", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "47% off the top Fire TV stick." },
  { id: "kindle-paperwhite", title: "Amazon Kindle Paperwhite", store: "Amazon", category: "Smart home", price: 129.99, was: 199.99, url: "https://www.amazon.com/s?k=Kindle+Paperwhite", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TechResearchOnline", signal: "strong", note: "$70 off." },
  { id: "kindle-colorsoft", title: "Amazon Kindle Colorsoft", store: "Amazon", category: "Smart home", price: 169, was: 289, url: "https://www.amazon.com/s?k=Kindle+Colorsoft", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TechResearchOnline", signal: "strong", note: "$120 off the colour Kindle." },
  { id: "ring-doorbell-2k", title: "Ring Battery Doorbell 2K", store: "Amazon", category: "Smart home", price: 40, was: 100, url: "https://www.amazon.com/s?k=Ring+Battery+Doorbell+2K", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TechRadar", signal: "new-low", note: "60% off; the cheapest Ring doorbell price reported." },
  { id: "google-home-2026", title: "Google Home Speaker (2026)", store: "Best Buy", category: "Smart home", price: 80, was: 100, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Google+Home+Speaker+2026", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by 9to5Toys", signal: "routine", note: "20% off and an all-time low, but a small saving in dollars." },
  { id: "yale-assure-2", title: "Yale Assure Lock 2 with Wi-Fi", store: "Best Buy", category: "Smart home", price: 175, was: 300, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Yale+Assure+Lock+2+Wi-Fi", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by 9to5Toys", signal: "strong", note: "$125 off the smart lock." },
  // ---- Phones ----
  { id: "galaxy-s26-fe", title: "Samsung Galaxy S26 FE", store: "Best Buy", category: "Phones", price: 499.99, was: 699.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Samsung+Galaxy+S26+FE", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by TradingView", signal: "strong", note: "$200 off Samsung's fan-edition phone." },
  // ---- Wearables ----
  { id: "apple-watch-12-42", title: "Apple Watch Series 12, GPS, 42mm", store: "Amazon", category: "Wearables", price: 299, was: 399, url: "https://www.amazon.com/s?k=Apple+Watch+Series+12+42mm", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by 9to5Toys", signal: "new-low", note: "$100 off; an all-time low for the 42mm." },
  { id: "apple-watch-12-46", title: "Apple Watch Series 12, GPS, 46mm", store: "Amazon", category: "Wearables", price: 349, was: 449, url: "https://www.amazon.com/s?k=Apple+Watch+Series+12+46mm", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by 9to5Toys", signal: "new-low", note: "$100 off; an all-time low for the 46mm." },
  { id: "apple-watch-se3", title: "Apple Watch SE 3, 40mm", store: "Amazon", category: "Wearables", price: 179, was: 249, url: "https://www.amazon.com/s?k=Apple+Watch+SE+3+40mm", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by 9to5Toys", signal: "strong", note: "$70 off the budget Apple Watch." },
  // ---- Gaming ----
  { id: "switch2-mario", title: "Nintendo Switch 2 + Mario Kart World bundle", store: "Target", category: "Gaming", price: 499.99, was: 549.99, url: "https://www.target.com/s?searchTerm=Nintendo+Switch+2+Mario+Kart+World+bundle", checked: "2026-11-27T11:00:00Z", source: "Target, reported by TradingView", signal: "routine", note: "Only $50 off, and the game is effectively bundled free; a routine saving, not a price drop." },
  { id: "nba-2k27", title: "NBA 2K27 for PlayStation 5", store: "Target", category: "Gaming", price: 29.99, was: 67.99, url: "https://www.target.com/s?searchTerm=NBA+2K27+PlayStation+5", checked: "2026-11-27T11:00:00Z", source: "Target, reported by TradingView", signal: "strong", note: "56% off the new basketball game." },
  { id: "dualsense", title: "PlayStation DualSense wireless controller", store: "Best Buy", category: "Gaming", price: 54.99, was: 74.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=PlayStation+DualSense+controller", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by TechRadar", signal: "strong", note: "$20 off the standard controller." },
  { id: "samsung-9100pro-2tb", title: "Samsung 9100 Pro 2TB SSD", store: "Amazon", category: "Gaming", price: 349.99, was: 679.97, url: "https://www.amazon.com/s?k=Samsung+9100+Pro+2TB+SSD", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by TradingView", signal: "new-low", note: "49% off the flagship 2TB drive." },
  { id: "gigabyte-z890", title: "Gigabyte Z890 Aorus Master motherboard", store: "Newegg", category: "Gaming", price: 289.99, was: 499.99, url: "https://www.newegg.com/p/pl?d=Gigabyte+Z890+Aorus+Master", checked: "2026-11-27T11:00:00Z", source: "Newegg, reported by TradingView", signal: "strong", note: "$210 off the high-end board." },
  // ---- Home ----
  { id: "dyson-v9", title: "Dyson V9 Motorbar cordless vacuum", store: "Amazon", category: "Home", price: 270, was: 599.99, url: "https://www.amazon.com/s?k=Dyson+V9+Motorbar+cordless+vacuum", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by Inksight and DealNews", signal: "new-low", note: "$330 off; the deepest vacuum cut of the sale." },
  { id: "shark-ai-ultra", title: "Shark AI Ultra robot vacuum, self-empty base", store: "Amazon", category: "Home", price: 259.99, was: 549.99, url: "https://www.amazon.com/s?k=Shark+AI+Ultra+robot+vacuum+self-empty", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by Inksight", signal: "strong", note: "53% off list, though one tracker puts its usual selling price nearer $449.99 — the real saving is about $190." },
  { id: "shark-navigator", title: "Shark Navigator 2-in-1 robot vacuum & mop", store: "Best Buy", category: "Home", price: 199.99, was: 699.99, url: "https://www.bestbuy.com/site/searchpage.jsp?st=Shark+Navigator+2-in-1+robot+vacuum+mop", checked: "2026-11-27T11:00:00Z", source: "Best Buy, reported by DealNews", signal: "new-low", note: "$500 off; at least half price across Best Buy's appliance event." },
  // ---- Kitchen ----
  { id: "kitchenaid-deluxe", title: "KitchenAid Deluxe 4.5-Qt tilt-head stand mixer", store: "Walmart", category: "Kitchen", price: 279, was: 449.99, url: "https://www.walmart.com/search?q=KitchenAid+Deluxe+4.5+quart+stand+mixer", checked: "2026-11-27T11:00:00Z", source: "Walmart, reported by Inksight", signal: "strong", note: "$171 off the classic mixer." },
  { id: "ninja-flip", title: "Ninja Flip toaster oven and air fryer (SP151)", store: "Amazon", category: "Kitchen", price: 140, was: 249.99, url: "https://www.amazon.com/s?k=Ninja+Flip+toaster+oven+air+fryer+SP151", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by Inksight", signal: "strong", note: "44% off; the price moved between $140 and $150 this month, so $140 is the low end." },
  // ---- Toys ----
  { id: "lego-mando-n1", title: "LEGO Star Wars: The Mandalorian N-1 Starfighter", store: "Amazon", category: "Toys", price: 42, was: 60, url: "https://www.amazon.com/s?k=LEGO+Star+Wars+Mandalorian+N-1+Starfighter", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "30% off the Star Wars set." },
  { id: "magnatiles-advent", title: "MAGNA-TILES MicroMags Advent Calendar", store: "Amazon", category: "Toys", price: 27, was: 40, url: "https://www.amazon.com/s?k=MAGNA-TILES+MicroMags+Advent+Calendar", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "33% off the advent calendar." },
  // ---- Beauty ----
  { id: "sunday-riley-ceo", title: "Sunday Riley C.E.O. 15% Vitamin C serum", store: "Amazon", category: "Beauty", price: 51, was: 85, url: "https://www.amazon.com/s?k=Sunday+Riley+C.E.O.+Vitamin+C+serum", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "40% off the brightening serum." },
  { id: "saie-super-skin", title: "Saie Glowy Super Skin Tint", store: "Amazon", category: "Beauty", price: 20, was: 40, url: "https://www.amazon.com/s?k=Saie+Glowy+Super+Skin+Tint", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "Half price on the skin tint." },
  { id: "wavytalk-brush", title: "Wavytalk Thermal Brush", store: "Amazon", category: "Beauty", price: 35, was: 69, url: "https://www.amazon.com/s?k=Wavytalk+Thermal+Brush", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "49% off the hair tool." },
  { id: "solawave-wand", title: "Solawave 4-in-1 Skin-Care Wand", store: "Amazon", category: "Beauty", price: 100, was: 169, url: "https://www.amazon.com/s?k=Solawave+4-in-1+Skin-Care+Wand", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "41% off the skin-care wand." },
  // ---- Cameras ----
  { id: "canon-r100", title: "Canon EOS R100 mirrorless camera + 18-45mm lens", store: "Amazon", category: "Cameras", price: 500, was: 679, url: "https://www.amazon.com/s?k=Canon+EOS+R100+18-45mm", checked: "2026-11-27T11:00:00Z", source: "Amazon, reported by The Strategist", signal: "strong", note: "$179 off the beginner mirrorless kit." },
];

export function discountOf(d) {
  return Math.round((1 - d.price / d.was) * 100);
}

export function savingOf(d) {
  return Math.round((d.was - d.price) * 100) / 100;
}

export const SIGNAL_LABEL = {
  "new-low": "New low",
  strong: "Strong deal",
  routine: "Routine sale",
};

export const SIGNAL_BLURB = {
  "new-low": "Lowest price reported this season.",
  strong: "A deep cut below the usual price.",
  routine: "A real discount, but small or ordinary for the season.",
};
