export const showError = (callback)=>{
    callback(true)
    setTimeout(() => {
        callback(false)
    }, 1500)   
}

export const getYearDif = (year)=> new Date().getFullYear() - year;

export const getBrandCost = (brand)=>{
    switch (brand) {
        case 'american':
            return 0.1756
        case 'asian':
            return 0.05
        case 'european':
            return 0.30
        default:
            break;
    }
}

export const getContractTypeCost = (contractType)=>{
    return (contractType === 'basic') ? 0.2 : 0.5
}

export const capitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1)
}
