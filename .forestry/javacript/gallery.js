// selecting all photos
const filterItem = document.querySelector('.items__portfolio');
const filterImgs = document.querySelectorAll('.image');


window.onload = ()=>{
    filterItem.onclick =(selectedItem)=>{
        if(selectedItem.target.classList.contains('item__portfolio')){
            filterItem.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active');
            let filterName = selectedItem.target.getAttribute('data-name');

            filterImgs.forEach((image)=>{
                let filterImg = image.getAttribute('data-name')
                    if((filterImg == filterName) || filterName == 'all'){
                        image.classList.remove('hide');
                        image.classList.add('show');
                    } else{
                        image.classList.add('hide');
                        image.classList.remove('show');
                    }
            });
        }
    }
}

