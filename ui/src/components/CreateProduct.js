import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'
const CreateProduct = () => {

    let prefix = "pro-"

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [sku, setSku] = useState(prefix+'')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name: name, description: description, sku: sku, price: price, stock: stock, image: image})
        navigate('/')
    }

  return (
    <div>
        <h3>Create Product</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input
                  placeholder='Name'
                  value={name}
                  onChange={ (e)=>setName(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input
                  placeholder='Description'
                  value={description}
                  onChange={ (e)=>setDescription(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>SKU</label>
                <input
                  placeholder='pro-00000'
                  value={sku}
                  onChange={ (e)=>setSku(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input
                  placeholder='Price'
                  value={price}
                  onChange={ (e)=>setPrice(e.target.value)}
                  type='number'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input
                  placeholder='Stock'
                  value={stock}
                  onChange={ (e)=>setStock(e.target.value)}
                  type='number'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Image</label>
                <input
                  value={image}
                  onChange={ (e)=>setImage(e.target.value)}
                  type='img'
                  className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
  )
}

export default CreateProduct