// Object property short hand


const name = 'Jorige'
const userAge = 22

const user = {
    // name : name,
    name,
    age : userAge,
    location: 'hyderbad'
}


console.log(user)



// Object destructuring


const product = {
    label: 'RedNotebook',
    price : 3,
    stock: 201,
    salePrice:undefined
}


// const label = product.label
// const stock = product.stock

const {label: productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)



const transcation = (type, {label, stock=0}={})=>{
    console.log(type)
    console.log(label)
    console.log(stock)
}

transcation('order', product)