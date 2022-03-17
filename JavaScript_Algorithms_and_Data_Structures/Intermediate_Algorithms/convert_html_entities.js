// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  var splitted = str.split("");

  for (var i = 0; i < splitted.length; i++) {
    switch (splitted[i]) {
      case "<":
        splitted[i] = "&lt;";
        break;
      case "&":
        splitted[i] = "&amp;";
        break;
      case ">":
        splitted[i] = "&gt;";
        break;
      case '"':
        splitted[i] = "&quot;";
        break;
      case "'":
        splitted[i] = "&apos;";
        break;
    }
  }

  splitted = splitted.join("");
  return splitted;

}


convertHTML("Dolce & Gabbana")
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML("<>")
convertHTML("abc")

//using an object
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// alternative object split map join
 const htmlEntities = {
   "&": "&amp;",
   "<": "&lt;",
   ">": "&gt;",
   '"': "&quot;",
   "'": "&apos;"
 };
 return str
   .split("")
   .map(entity => htmlEntities[entity] || entity)
   .join("");
}
