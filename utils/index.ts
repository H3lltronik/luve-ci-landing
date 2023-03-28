
export function searchAndHighlightLUVE () {
  const redClass = 'red'
  const luveLetters = ['L', 'U', 'V', 'E']

  const elements = document.querySelectorAll('.luve_red')

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]

    const words = element.innerHTML.split(' ')
    const newWords = []

    for (let j = 0; j < words.length; j++) {
      const word = words[j]
      let hasLUVE = false

      for (let k = 0; k < word.length; k++) {
        const letter = word[k]
        if (luveLetters.includes(letter.toUpperCase())) {
          newWords.push(`<span class="${redClass}">${letter}</span>${word.slice(k + 1)}`)
          hasLUVE = true
          break
        }
      }

      if (!hasLUVE && word.length > 0) {
        const randomLetterIndex = Math.floor(Math.random() * word.length)
        const letter = word[randomLetterIndex]
        newWords.push(`${word.slice(0, randomLetterIndex)}<span class="${redClass}">${letter}</span>${word.slice(randomLetterIndex + 1)}`)
      }
    }

    element.innerHTML = newWords.join(' ')
  }
}

function highlightLuveLetters() {
  const luveLetters = ['L', 'U', 'V', 'E'];

  const elements = document.getElementsByClassName('luve_red_letters');

  Array.from(elements).forEach((element) => {
    const words = element.textContent.split(' ');

    words.forEach((word) => {
      // Ignore words that are less than 4 characters long
      if (word.length < 4) {
        return;
      }

      let letterIndex = -1;

      // Find the index of the first "LUVE" letter in the word
      for (let i = 0; i < word.length; i++) {
        const letter = word.charAt(i).toUpperCase();

        if (luveLetters.includes(letter)) {
          letterIndex = i;
          break;
        }
      }

      // If no "LUVE" letter was found, highlight a random letter
      if (letterIndex === -1) {
        letterIndex = Math.floor(Math.random() * word.length);
      }

      // Highlight the selected letter by wrapping it in a span with the "luve_red_letter" class
      const wordArray = word.split('');
      wordArray[letterIndex] = `<span class="luve_red_letter">${word.charAt(letterIndex)}</span>`;
      const highlightedWord = wordArray.join('');

      element.innerHTML = element.innerHTML.replace(word, highlightedWord);
    });
  });
}


export function setCSSVariable (variable: string, value: string) {
  const root = document.querySelector(':root') as HTMLElement
  root.style.setProperty(`--${variable}`, value)
}

export function getOffset (element: HTMLElement) {
  const defaultWin = { pageYOffset: 0, pageXOffset: 0 }
  if (!element.getClientRects().length) {
    return { top: 0, left: 0 }
  }

  const rect = element.getBoundingClientRect()
  const win = element.ownerDocument.defaultView || defaultWin
  return (
    {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    })
}

export function getElementHeight (element: HTMLElement) {
  return element.clientHeight
}

export function scrollOnePage (direction: 'up'|'down') {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // let busy = false
  // let position = 0
  // let difVal = 0
  // let toScroll = 0

  // if (direction === 'up' && position < 0) {
  //   difVal = 100
  // } else if (direction === 'down' && position <= 0) {
  //   difVal = -100
  // } else {
  //   return
  // }
  // toScroll += difVal

  // console.log('Start:', position, toScroll)
  // anime({
  //   targets: '#scroll-body',
  //   translateY: [position, `${toScroll}vh`],
  //   easing: 'easeInOutSine',
  //   duration: 1000,
  //   complete: () => {
  //     busy = false
  //     position += difVal
  //     console.log('Finish:', position, toScroll)
  //   },
  //   begin: () => { busy = true }
  // })
}
