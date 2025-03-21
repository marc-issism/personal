
const pivots = document.getElementsByClassName('pivot');


for (let i = 0; i < pivots.length; i++) {
    pivots[i].addEventListener('click', function() {
        
        // Give or take away 'active' class from this element
        // this.classList.toggle('active');

        // Toggle the visibility of this element
        const words = this.nextElementSibling;
        
        if (words.style.display === 'block') {
            words.style.display = 'none';
        }
        else {
            words.style.display = 'block';
        }

    });
}

// for (let i = 0; i < accordion.length; i++) {

//     accordion[i].addEventListener('click', function() {

//         console.log(this);

//         // give this element the 'active' class
//         this.classList.toggle('active');

//         // Toggle visibility
//         const panel = this.nextElementSibling;

//         if (panel.style.display === 'block') {
//             panel.style.display = 'none';
//         }
//         else {
//             panel.style.display = 'block';
//         }
//     });
// }