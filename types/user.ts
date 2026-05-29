export type User = {
  id: string;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  createdAt: Date;
};

export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterFormData = {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  password: string;
  confirmPassword: string;
};

export type CheckoutFormData = {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  paymentMethod: 'cod' | 'credit_card' | 'whatsapp' | 'bank_transfer';
};
