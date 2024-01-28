// SIBEBAR
const manuItems = document.querySelectorAll('.manuItem');

// remove active class from all menu items 

const changeActiveItem =() => {
    manuItems.forEach(item => {
        item.classList.remove('active');
    })
}

manuItems.forEach( item => {
    item.addEventListener('click', () => {
        changeActiveItem ()
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notificationsPopus').style
            .display = 'none';
        } else{
            document.querySelector('.notificationsPopus').style
            .display = 'block';
            document.querySelector('#notifications .notificationsCount').style.display='none';
            
        }
    })
})