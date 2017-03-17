export const randomString = (length = 8) => {
  let string = "";
  while (string.length < length) {
    string += Math.round(Math.random() * Math.pow(16, 8)).toString(16);
  }
  return string;
};

export const sortDateModifiedDesc = (a, b) => {
    if (a.dateModified > b.dateModified) return -1;
    else if (a.dateModified < b.dateModified) return 1;
    return 0;
};

export const sortDateModifiedAsc = (a, b) => {
    if (a.dateModified > b.dateModified) return 1;
    else if (a.dateModified < b.dateModified) return -1;
    return 0;
};