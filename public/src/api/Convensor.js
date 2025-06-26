addEventListener('DOMContentLoaded', conversionRated)

let converter = document.getElementById('converter');
converter.addEventListener('click', getData);

async function getData() {
    let loading = document.getElementById('loading')
    loading.style.display = 'block'

    let coinTarget = document.getElementById('coinTarget').value
    let coinBaseValue = document.getElementById('coinBaseValue').value
    
    if(coinTarget ==='' || coinBaseValue === '') {
        alert('Os campos não podem estar vazios')
        return Error
    }

    try{
        const response = await fetch(`http://localhost:5001/api?coinTarget=${coinTarget}&coinBaseValue=${coinBaseValue}`)
        if (!response.ok){
            throw new Error('Erro ao obter dados da API')
        }

        const data = await response.json();

        let rated = document.getElementById('rated')
        rated.innerHTML = (data.conversion_result).toFixed(2) + ' ' + data.target_code

    } catch (error) {
        console.error(error)
    } finally {
        loading.style.display = 'none'
    }
}

async function conversionRated(){
    try{
        const response = await fetch(`http://localhost:5001/rate`)
        if(!response.ok) {
            throw new Error('Não foi possívvel obter os dados da API')
        }

        const data = await response.json()

            let conversionRate = data.conversion_rates;

            Object.entries(conversionRate).forEach(([currency, rate]) => {
                const options = document.createElement('option');
                options.value = currency;
                options.innerHTML = `${currency} - ${rate}`;
                document.getElementById('coinTarget').appendChild(options);
            });
        
    } catch (error) {
        console.error(error)
    }
}
conversionRated()
