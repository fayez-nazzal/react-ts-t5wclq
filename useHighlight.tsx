import { MutableRefObject, useEffect, useState } from 'react';
import { highlightKeyword } from './utils';

const useHighlight = (
  ref: MutableRefObject<HTMLDivElement>,
  keywords: Record<string, string>
) => {
  const [unhighlightedText, setUnhighlightedText] = useState<string>();

  useEffect(() => {
    if (!unhighlightedText && !!ref.current)
      setUnhighlightedText(ref.current.innerHTML);
  }, [ref.current]);

  useEffect(() => {
    if (!unhighlightedText) return;

    let html = unhighlightedText;

    const sortedKeywordsKeys = Object.keys(keywords).sort(
      (a: string, b: string) => (a.length > b.length ? -1 : 1)
    );

    for (const keyword of sortedKeywordsKeys) {
      console.log(keyword);
      html = highlightKeyword(keyword, html, keywords[keyword]);
    }

    ref.current.innerHTML = html;
  }, [keywords, unhighlightedText]);
};

export default useHighlight;
