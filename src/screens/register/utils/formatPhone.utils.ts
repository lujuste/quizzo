export const formatPhone = (input: string) => {
  const numeric = input.replace(/\D/g, "");

  let masked = numeric;

  if (numeric.length > 2 && numeric.length <= 7) {
    masked = `${numeric.slice(0, 2)} ${numeric.slice(2)}`;
  } else if (numeric.length > 7) {
    masked = `${numeric.slice(0, 2)} ${numeric.slice(2, 7)} ${numeric.slice(
      7,
      11
    )}`;
  }

  return masked;
};
