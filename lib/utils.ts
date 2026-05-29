export const formatPrice = (price: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

export const calculateDiscount = (oldPrice: number, newPrice: number): number => {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const generateWhatsAppMessage = (
  customerName: string,
  phone: string,
  email: string,
  address: string,
  items: Array<{ name: string; quantity: number; price: number }>,
  total: number
): string => {
  const itemsList = items.map((item) => `${item.name} x${item.quantity} - $${item.price}`).join('\n');

  return `Hello! I would like to place an order.\n\n*Customer Information:*\nName: ${customerName}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\n\n*Order Details:*\n${itemsList}\n\n*Total: $${total.toFixed(2)}*`;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[0-9]{10,}$/;
  return phoneRegex.test(phone.replace(/[\s-()]/g, ''));
};

export const truncateText = (text: string, length: number): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};
