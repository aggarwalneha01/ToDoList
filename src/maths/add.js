const add = (a,b) => {
  if (typeof a === "number" && typeof b === "number") {
    return (a + b);
  }
  if (typeof a === "string" && typeof b === "string") {
    a = parseInt(a);
    b = parseInt(b);
    return (a + b);
  }
  if (typeof a === "number" && typeof b === "string") {
    a = parseInt(a);
    b = parseInt(b);
    return (a + b);
  }
  if (typeof a === "string" && typeof b === "number") {
    a = parseInt(a);
    b = parseInt(b);
    return (a + b);
  }
  return 'error';
};

export default add;