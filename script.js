// script.js

function toggleLearnMore() {
    const moreContent = document.getElementById('moreContent');
    const button = document.getElementById('learnMoreBtn');
    const movePicture = document.getElementById('profileImage'); 
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';    

        
        
    } else {
        moreContent.style.display = 'none';   
        button.textContent = 'Learn More';    
    }
}

function toggleMovePic() {
    movePicture.style.marginLeft = '300px'; 
}
