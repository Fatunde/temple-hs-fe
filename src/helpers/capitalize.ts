const Capitalize = (value: string | undefined | null) => {
  if (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    return "";
  }
};

export default Capitalize;
