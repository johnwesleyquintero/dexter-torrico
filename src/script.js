document.addEventListener('DOMContentLoaded', () => {
  const printResumeLink = document.querySelector('p i.fa-print').closest('p')
  if (printResumeLink) {
    printResumeLink.style.cursor = 'pointer' // Add a pointer cursor to indicate it's clickable
    printResumeLink.addEventListener('click', () => {
      window.print()
    })
  }
})
