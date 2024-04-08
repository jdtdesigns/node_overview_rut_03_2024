const fs = require('fs')
const inquirer = require('inquirer')

function getNames() {
  const data = fs.readFileSync('./students.txt', 'utf8')

  return data.split('\n')
}


function showMenu() {
  inquirer.prompt({
    message: 'Choose a menu option',
    type: 'list',
    choices: ['List Students', 'Get a random student', 'Add a student', 'Exit'],
    name: 'choice'
  }).then((answerObj) => {
    if (answerObj.choice === 'List Students') {
      const names = getNames()

      console.log('\nStudent List:', '\n-------------')

      names.forEach((name) => {
        console.log(name)
      })

      showMenu()
    } else if (answerObj.choice === 'Get a random student') {
      // Get student names and convert to array
      const names = getNames()

      // Grab random name from students array
      const randomIndex = Math.floor(Math.random() * names.length)
      const randomStudent = names[randomIndex]

      // Print random name to terminal
      console.log(randomStudent, 'has been chosen!')
      showMenu()
    } else if (answerObj.choice === 'Add a student') {
      inquirer.prompt({
        message: 'Type the student name',
        name: 'name',
      }).then((answerObj) => {
        fs.appendFile('./students.txt', '\n' + answerObj.name, (err) => {
          if (err) {
            return console.log(err)
          }

          console.log('Student has been added!')
        })

        showMenu()
      })
    } else {
      console.log('Thanks for using our student app!')
    }
  })
}

showMenu()


// function getNames() {
//   const data = fs.readFileSync('./students.txt', 'utf8')

//   return data.split('\n')
// }

// if (studentName === 'print') {
//   const names = getNames()

//   console.log('\nStudent List:', '\n-------------')

//   names.forEach((name) => {
//     console.log(name)
//   })
// } else if (studentName === 'random') {
//   // Get student names and convert to array
//   const names = getNames()

//   // Grab random name from students array
//   const randomIndex = Math.floor(Math.random() * names.length)
//   const randomStudent = names[randomIndex]

//   // Print random name to terminal
//   console.log(randomStudent, 'has been chosen!')
// } else {
//   fs.appendFile('./students.txt', '\n' + studentName, (err) => {
//     if (err) {
//       return console.log(err)
//     }

//     console.log('Student has been added!')
//   })
// }













// writeFile will overwrite a file's contents
// fs.writeFile('./students.txt', studentName, (err) => {
//   if (err) {
//     return console.log(err)
//   }

//   console.log('Student has been added!')
// })




