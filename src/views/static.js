import config from '../config'
const saveProperties = async () => {
    const res = await fetch(`${config.BASE_URL}/properties/save`,{
        method:'GET'
    })
    const payload = await res.json();
    if (payload.status === 1){
        return payload
    }else{
        alert('Something went wrong')
        return
    }
}

const getStates = async () => {
    const res = await fetch(`${config.BASE_URL}/states`,{
        method:'GET'
    })
    const payload = await res.json();
    if (payload.status === 1){
        return payload
    }else{
        alert('Something went wrong')
        return
    }
}

const getCountries = async () => {
    const res = await fetch(`${config.BASE_URL}/countries`,{
        method:'GET'
    })
    const payload = await res.json();
    if (payload.status === 1){
        return payload
    }else{
        alert('Something went wrong')
        return
    }
}

export {getStates, getCountries}