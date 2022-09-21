// CEP_VALIDO = '01001000';
// CEP_INEXISTENTE = '99999999';
// CEP_INVALIDO = '999';

const cep = document.getElementById('cep');
const addres = document.getElementById('endereco');
const district = document.getElementById('bairro');
const city = document.getElementById('cidade');
const state = document.getElementById('estado');

//fetch address when the user clicks anywhere outside CEP input element
cep.addEventListener('focusout', () => {
    fillAddress(cep.value);
});

//fill address inputs with data fetched from zip code
function fillAddress(code) {
    const errorMessage = document.getElementById('cep_erro');
    getAddress(code)
        .then( fullAddress => {
            errorMessage.innerText = '';
            addres.value = fullAddress.logradouro;
            district.value = fullAddress.bairro;
            city.value = fullAddress.localidade;
            state.value = fullAddress.uf;
        })
        .catch( () => {            
            errorMessage.innerText = 'CEP inválido. Por favor, verifique se digitou o CEP corretamente.'
            addres.value = '';
            district.value = '';
            city.value = '';
            state.value = '';        
        })
}

//version with then/catch/finally
// const queryZipCode = fetch(`https://viacep.com.br/ws/${CEP_VALIDO}/json/`)
//     //converts response to JSON
//     .then(response => response.json())
//     //extract data from the JSON
//     .then(data => {
//         //viaCEP will send erro = "true" as response for non-existent ZIP Code
//         if(data.erro) {
//             throw Error('Esse CEP não existe!');
//         } else {
//             console.log(data)
//         }
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(message => {
//         console.log('Task completed');
//     });
    
// version with async function and try/catch
// to prevent "callback hell" (a succession of then clauses)
async function getAddress(zipCode){
    try{
        // wait for a promise to be settled and store the response in the variable
        const queryZipCode = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    
        // wait for response to be converted to json, in order to be able to use it
        const data = await queryZipCode.json();

        // viaCEP will send erro = "true" as response for non-existent ZIP Code
        if(data.erro) {
            throw Error('Esse CEP não existe!');
        }

        // console.log(data);
        return data;
    } catch (err) {
        throw err;
    }
}

// working with a set of promises
// let codes = [CEP_VALIDO, CEP_INEXISTENTE, CEP_INVALIDO]
// let codeList = codes.map(code => getAddress(code))

// codeList is an array of Promises
// console.log(codeList);

// if we want the response of each promise, we use the method Promise.all()
// which will wait all the promises to be settled
// Promise.all(codeList).then(response => console.log(response));
