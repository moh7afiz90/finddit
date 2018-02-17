const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')


// Form Event Listener
searchForm.addEventListener('submit', e => {
  // Get search value
  const searchTerm = searchInput.value
  // Get sort
  const sortby = document.querySelector('input[name="sortby"]:checked').value
  // Get limit
  const searchLimit = document.getElementById('limit').value
  // Check input
  if(searchTerm === ''){
    // Show error message
    showMessage('Please add a search term', 'alert-danger')
  }

  // Clear Input
  searchInput.value = ''

  // Search Reddit
  console.log(searchLimit)
  e.preventDefault()
})

// Show Message
function showMessage(message, className) {
  // Create Div Element
  const div = document.createElement('div')
  // Add class
  div.className = `alert ${className}`
  // Add Text
  div.appendChild(document.createTextNode(message))
  // Get parent container
  const searchContainer = document.getElementById('search-container')
  // Get Search
  const search = document.getElementById('search')
  // Insert message
  searchContainer.insertBefore(div, search)
  // Timeout alert
  setTimeout(() => document.querySelector('.alert').remove(), 3000)
}