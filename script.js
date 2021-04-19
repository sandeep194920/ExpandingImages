const panels = document.querySelectorAll('.panel')
const imgContainer = document.querySelector('.container')

// utility class
const removeActiveClass = () => {
    panels.forEach(panel => {
        panel.classList.remove('panel--active')
    })
}


// without event delegation and bubling
// panels.forEach(panel => {
//     panel.addEventListener('click', function () {
//         // remove active classes on all the elements
//         removeActiveClass()
//         // add active class to the clicked element
//         panel.classList.add('panel--active')
//     })
// });

// with event delegation
imgContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('panel')) {
        console.log("reached")
        removeActiveClass()
        e.target.classList.add('panel--active')
    }
})