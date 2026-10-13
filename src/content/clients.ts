import type { Client } from "@/lib/types";

// `type` reflects each live site's current platform — adjust if your work there differs.
export const clients: Client[] = [
  { slug: "shape-republic", name: "Shape Republic", type: "shopify", industry: "Nutrition", url: "https://www.shape-republic.com" },
  { slug: "boards-and-more", name: "BoardsAndMore", type: "shopify", industry: "Watersports", url: "https://www.boardsandmore.com" },
  { slug: "lfdy", name: "LFDY", type: "shopify", industry: "Streetwear", url: "https://livefastdieyoung.com" },
  { slug: "mdm", name: "MDM", type: "other" }, // TODO: confirm platform + URL
  { slug: "atletica", name: "Atletica", type: "shopify", industry: "Fitness equipment", url: "https://atletica.de" },
  { slug: "lamy", name: "Lamy", type: "shopify", industry: "Writing instruments", url: "https://www.lamy.com" },
  { slug: "snushus", name: "Snushus", type: "shopify", industry: "Retail", country: "Sweden", url: "https://snushus.se" },
  { slug: "mister-spex", name: "Mister Spex", type: "other", industry: "Eyewear", url: "https://www.misterspex.de" },
  { slug: "oh-april", name: "Oh April", type: "shopify", industry: "Fashion", url: "https://oh-april.com" },
  { slug: "boc", name: "BOC", type: "shopify", industry: "Bikes & e-bikes", url: "https://boc24.de" },
  { slug: "ava-and-may", name: "Ava & May", type: "shopify", headless: true, industry: "Home fragrance", url: "https://www.ava-may.de" },
  { slug: "sportspar", name: "Sportspar", type: "other", industry: "Sportswear", url: "https://www.sportspar.de" },
  { slug: "ooia", name: "OOIA", type: "shopify", industry: "Period underwear", url: "https://ooia.de" },
  { slug: "ism", name: "ISM", type: "other" }, // TODO: confirm platform + URL
  { slug: "neuland", name: "Neuland", type: "shopify", industry: "Workshop materials", url: "https://www.neuland.com" },
  { slug: "bodyshake", name: "Bodyshake", type: "shopify", industry: "Sports nutrition", url: "https://bodyshake.com" },
  { slug: "hauhinco", name: "Hauhinco", type: "other", industry: "Industrial hydraulics", url: "https://www.hauhinco.de" },
  { slug: "spermidine", name: "Spermidine", type: "shopify", industry: "Supplements", url: "https://spermidinelife.com" },
  { slug: "allmedica", name: "Allmedica", type: "other" }, // TODO: confirm platform + URL
  { slug: "hashtag-you", name: "Hashtag You", type: "other", industry: "Brand studio", url: "https://www.hashtag-you.com" },
  { slug: "cramer", name: "Cramer", type: "other" }, // TODO: confirm platform + URL
  { slug: "ivy-and-oak", name: "Ivy & Oak", type: "shopify", headless: true, industry: "Fashion", url: "https://www.ivyoak.com" },
  { slug: "riab", name: "RIAB", type: "other" }, // TODO: confirm platform + URL
  { slug: "overkill", name: "Overkill", type: "shopify", industry: "Sneakers & streetwear", url: "https://www.overkillshop.com" },
  { slug: "vogue", name: "Vogue", type: "shopify", industry: "Media & fashion", country: "UK", url: "https://shop.vogue.co.uk" },
  { slug: "khujo", name: "Khujo", type: "shopify", industry: "Outerwear", url: "https://www.khujo.com" },
  { slug: "sennheiser", name: "Sennheiser", type: "other", industry: "Audio", url: "https://www.sennheiser.com" },
  { slug: "vitafy", name: "Vitafy", type: "shopify", industry: "Nutrition", url: "https://www.vitafy.de" },
  { slug: "markenkoffer", name: "Markenkoffer", type: "shopify", industry: "Luggage", url: "https://www.markenkoffer.de" },
  { slug: "wurtec", name: "Wurtec", type: "other", industry: "Elevator equipment", country: "USA", url: "https://wurtec.com" },
];
