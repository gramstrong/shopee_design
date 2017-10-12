const makeTitle = addr => {
  const title = addr.replace(/-/g, " ");

  return title.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

export default makeTitle;
