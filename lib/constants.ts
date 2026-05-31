export const APP_NAME = "RIZK STORE";
export const APP_DESCRIPTION = "Premium Luxury Smartphone E-Commerce Website";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890";

export const BRANDS = ["Apple", "Samsung", "Xiaomi", "OPPO", "Vivo", "OnePlus", "Google Pixel", "Huawei"];

export const COLORS = ["Black", "White", "Silver", "Gold", "Blue", "Purple", "Red", "Green"];

export const STORAGE_OPTIONS = ["64GB", "128GB", "256GB", "512GB", "1TB"];

export const RAM_OPTIONS = ["4GB", "6GB", "8GB", "12GB", "16GB"];

export const PRICE_RANGES = [
  { min: 0, max: 300, label: "Under $300" },
  { min: 300, max: 600, label: "$300 - $600" },
  { min: 600, max: 1000, label: "$600 - $1000" },
  { min: 1000, max: Infinity, label: "Above $1000" },
];

export const PAYMENT_METHODS = [
  { id: "cod", label: "Cash on Delivery", icon: "truck" },
  { id: "credit_card", label: "Credit Card", icon: "credit-card" },
  { id: "whatsapp", label: "WhatsApp Payment", icon: "message-circle" },
  { id: "bank_transfer", label: "Bank Transfer", icon: "banknote" },
];

export const CATEGORIES = [
  { id: "1", name: "Apple", nameAr: "أبل", slug: "apple" },
  { id: "2", name: "Samsung", nameAr: "سامسونج", slug: "samsung" },
  { id: "3", name: "Xiaomi", nameAr: "شاومي", slug: "xiaomi" },
  { id: "4", name: "OPPO", nameAr: "أوبو", slug: "oppo" },
  { id: "5", name: "Vivo", nameAr: "فيفو", slug: "vivo" },
  { id: "6", name: "OnePlus", nameAr: "ون بلس", slug: "oneplus" },
  { id: "7", name: "Google Pixel", nameAr: "جوجل بكسل", slug: "google-pixel" },
  { id: "8", name: "Huawei", nameAr: "هواوي", slug: "huawei" },
];
