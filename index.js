var katzDeli = [ ];


// function takeANumber(lineCurrent, newTicket)
// {
//   var lineUpdate = [];
//   var newCustomer = newTicket
  
//   for (var i in lineCurrent){
//     lineUpdate[i] = lineCurrent[i]
//   }
  
// lineUpdate.push(newCustomer)
//   var message = `Welcome, ${newTicket}. You are number ${lineUpdate.length} in line. `
//   return message
// }

 // for (var i in lineCurrent){
  //   lineUpdate[i] = lineCurrent[i]
  // }

function takeANumber(lineCurrent, newTicket)
{
  lineCurrent.push(newTicket)
  var message = `Welcome, ${newTicket}. You are number ${lineCurrent.length} in line.`
  return message
}


function nowServing(lineCurrent) {
  
  if (lineCurrent.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var message = `Currently serving ${lineCurrent[0]}.`
    lineCurrent.shift()
    return message
  }
}

function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    var str = "The line is currently: ";
    
    for (var i = 0 ; i < line.length; i++ ){
      str += `${i+1}.` + ` ${line[i]}, `
    }
    
    str.pop()
    return str
  }
}
