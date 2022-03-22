function useDate(dateString) {
  let date = null;

  if (dateString) {
    date = new Date(
      dateString.slice(0, 4) +
        "-" +
        dateString.slice(4, 6) +
        "-" +
        dateString.slice(6, 11) +
        ":" +
        dateString.slice(11, 13) +
        ":" +
        dateString.slice(13, dateString.length)
    );
  } else {
    date = new Date();
  }

  return date;
}

export default useDate;
