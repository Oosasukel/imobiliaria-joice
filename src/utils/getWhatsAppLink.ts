export const getWhatsAppLink = (phoneNumber?: string, message?: string) => {
  const phoneNumberFormatted = phoneNumber?.replace(/\D+/g, '');

  return `https://api.whatsapp.com/send?phone=${phoneNumberFormatted}${
    message ? `&text=${message}` : ''
  }`;
};
