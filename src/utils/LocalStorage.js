const getFromLS = key => {
  const data = localStorage.getItem(key);
  if(data) {
    return JSON.parse(data);
  }
  return [];
}

const setToLs = (key, newData) => {
  const data = getFromLS(key);
  data.push(newData);
  localStorage.setItem(key, JSON.stringify(data));
}

const replaceToLs = (key, newData) => {
  localStorage.setItem(key, JSON.stringify(newData));
}

export {getFromLS, setToLs, replaceToLs}