export const findKeywordIndices = (keyword: string, paragraph: string) => {
  const indicies: number[] = [];
  let lastIndex: number = null;

  while (lastIndex != -1) {
    lastIndex = paragraph.indexOf(keyword);
    console.log(lastIndex);

    lastIndex !== -1 && indicies.push(lastIndex);
  }

  return indicies;
};

export const highlightKeyword = (
  keyword: string,
  paragraph: string,
  color: string
) => {
  const indicies = findKeywordIndices(keyword, paragraph);
  const end = keyword.length;

  for (const start of indicies) {
    paragraph =
      paragraph.substring(0, start) +
      `<mark style="background-color: ${color};">` +
      paragraph.substring(start, end) +
      '</mark>' +
      paragraph.substring(end);
  }

  return paragraph;
};
