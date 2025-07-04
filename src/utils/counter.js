export const calculateCharacters = (string,encludeSpaces) => {
  if(encludeSpaces){
    return string.length;
  }else{
    return string.replace(/\s/g, '').length;;
  }
}

export const calculateWords = (string) => {
  const words = string.trim().match(/\b\w+\b/g);
  return words ? words.length : 0;
}

export const calculateSentence = (string) => {
  const sentences = string.match(/[^.!?]+[.!?]+/g);
  return sentences ? sentences.length : 0;
}