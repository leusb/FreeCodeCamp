// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/)){
    return (str+"way")
  }
  else if (str.match(/[aeiou]/) === null) {
    return (str + "ay");
  }
  else{
  let finder = str.indexOf(str.match(/[aeiou]/))
  return (str.substr(finder)+str.substr(0,finder)+"ay")
}
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin("schwartz");
translatePigLatin("rhythm");
