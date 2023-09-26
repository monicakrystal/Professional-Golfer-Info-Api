document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const golferName = document.querySelector('input').value 
    try{
        const response = await fetch(`http://localhost:8000/api/${golferName}`)
        const data = await response.json()

        console.log(data);

        const golferPhoto = document.querySelector('#golferPhoto');
        golferPhoto.src = data.photo;
        golferPhoto.style.display = 'block';

        document.querySelector('li#name').innerText = data.golferName;
        document.querySelector('li#age').innerText = `Age: ${data.age}`;
        document.querySelector('li#birthDate').innerText = `Date Of Birth: ${data.birthDate}`;
        document.querySelector('li#astro').innerText = `Astrological Sign: ${data.astrologicalSign}`; 
        document.querySelector('li#height').innerText = `Height: ${data.height}`;
        document.querySelector('li#birthLocation').innerText = `Birth Location: ${data.birthLocation}`;;
    
    } catch(error){
        console.log(error)
    }
}