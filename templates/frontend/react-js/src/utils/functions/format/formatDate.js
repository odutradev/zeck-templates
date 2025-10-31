const formatDate = (date, withTime = false) => {
    const formatUnit = (unit) => String(unit).padStart(2, '0');
  
    const month = formatUnit(date.getMonth() + 1);
    const day = formatUnit(date.getDate());
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
  
    if (!withTime) return formattedDate;
  
    const minutes = formatUnit(date.getMinutes());
    const hours = formatUnit(date.getHours());

    return `${formattedDate} ${hours}:${minutes}`;
};

export default formatDate;