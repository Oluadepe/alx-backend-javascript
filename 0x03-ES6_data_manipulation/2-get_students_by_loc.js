export default function (arrObj, cityName) {
	  const cn = arrObj.filter((arr) => arr.location === cityName);
	  return cn;
}
