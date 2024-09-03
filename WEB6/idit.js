document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review');
    
    const reviewerName = document.createElement('h4');
    reviewerName.textContent = name;
    reviewContainer.appendChild(reviewerName);
    
    const reviewText = document.createElement('p');
    reviewText.textContent = review;
    reviewContainer.appendChild(reviewText);
    
    document.querySelector('.reviews').appendChild(reviewContainer);
    
    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('review').value = '';
});
