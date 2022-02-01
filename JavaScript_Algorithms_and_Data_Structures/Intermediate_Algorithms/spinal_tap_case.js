// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str){
  let split = str.split(/(?=[A-Z])|\-|\ /)
  let clean =  split.map(x => x.replace(/[^0-9a-z]/gi, ''))
  return clean.join("-").toLowerCase()
}



spinalCase("This Is Spinal Tap")
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")
