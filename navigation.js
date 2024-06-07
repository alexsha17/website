document.addEventListener('DOMContentLoaded', function() {
    function addAnimationAndRedirect(linkId) {
        var linkElement = document.getElementById(linkId);
        if (linkElement) {  
            linkElement.addEventListener('click', function(event) {
                event.preventDefault();  
                document.body.classList.add('animate-out'); 

                setTimeout(function() {
                    window.location.href = linkElement.href; 
                }, 500); 
            });
        }
    }

    
    addAnimationAndRedirect('über-mich'); 
    addAnimationAndRedirect('home');      
    addAnimationAndRedirect('fähigkeiten');
    addAnimationAndRedirect('portfolio');
    addAnimationAndRedirect('kontakt');
});
