const prepareMediumPost = ({ link, description, author, title }) => {
  let trimmedString;
  const tagIndex = description.indexOf("<img");
  const srcIndex = description.substring(tagIndex).indexOf("src=") + tagIndex;
  const srcStart = srcIndex + 5;
  const srcEnd = description.substring(srcStart).indexOf('"') + srcStart;
  const img = description.substring(srcStart, srcEnd);

  let yourString = description.replace(/<figure[^>]*>/g, "");
  yourString = yourString.replace(/<img[^>]*>/g, "");
  yourString = yourString.replace(/<hr>/g, "");
  yourString = yourString.replace(/<strong[^>]*>/g, "");
  yourString = yourString.replace(/<\/?a[^>]*>/g, "");
  yourString = yourString.replace(/<strong[^>]*>/g, "");
  yourString = yourString.replace(/<h[^>]*>/g, "");
  yourString = yourString.replace(/<p[^>]*>/g, "");

  const maxLength = 80;

  if (yourString.indexOf("</p>") < maxLength) {
    trimmedString = yourString.substr(0, yourString.indexOf("</p>"));
  } else {
    trimmedString = yourString.substr(0, maxLength) + "...";
  }

  return {
    link,
    img,
    title,
    description: trimmedString,
    author
  };
};

export default prepareMediumPost;
