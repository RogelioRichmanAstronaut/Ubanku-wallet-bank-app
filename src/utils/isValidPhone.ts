export const isValidPhone = (phone: string) => {
  var re = /^[0-9]{9,}$/; // Accepts numbers with at least 9 digits
  return re.test(phone);
};
