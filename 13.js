function Palindromio() {
  let word = document.getElementById('word')
  let isPalindrome = true;
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length-1-i])
      isPalindrome = false;
  }
  let p = document.querySelector('p');
  p.textContent = isPalindrome ? 'es palindroma' : 'no es palindroma';
  event.target.word.value = '';
}
