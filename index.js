export default (str, del = ',') => [... new Set(str.split(del).map(x => x.trim()).filter(x => x))];
