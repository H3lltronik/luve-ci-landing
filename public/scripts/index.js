function highlightLettersInView () {
  const words = document.querySelectorAll('.luve_red *:not(script)')
  const luveLetters = ['L', 'U', 'V', 'E']

  words.forEach(word => {
    const rect = word.getBoundingClientRect()
    const wordInView = (
      rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )

    if (wordInView) {
      let letterHighlighted = false
      const letters = word.textContent.split('')

      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i].toUpperCase()

        if (luveLetters.includes(letter)) {
          letters[i] = '<span style="color: red;">' + letter + '</span>'
          letterHighlighted = true
          break
        }
      }

      if (!letterHighlighted) {
        const randomIndex = Math.floor(Math.random() * letters.length)
        const letter = letters[randomIndex]
        letters[randomIndex] = '<span style="color: red;">' + letter + '</span>'
      }

      word.innerHTML = letters.join('')
    }
  })
}
