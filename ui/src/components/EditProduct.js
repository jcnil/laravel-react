import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product/'
const EditProduct = () => {
    
    let prefix = "pro-"
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [sku, setSku] = useState(prefix+'')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
            name: name,
            description: description,
            sku: sku,
            price: price,
            stock: stock,
            image: image
        })
        navigate('/')
    }

    useEffect(
        () => {
            const getProductById = async () => {
                const response = await axios.get(`${endpoint}${id}`)
                setName(response.data.name)
                setDescription(response.data.description)
                setSku(response.data.sku)
                setPrice(response.data.price)
                setStock(response.data.stock)
                setImage(response.data.image)
            }
            getProductById()
        } )

    return(
        <div>
        <h3>Edit Product</h3>
        <form onSubmit={update}>
        <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input
                  value={name}
                  onChange={ (e)=>setName(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input
                  value={description}
                  onChange={ (e)=>setDescription(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>SKU</label>
                <input
                  value={sku}
                  onChange={ (e)=>setSku(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Price</label>
                <input
                  value={price}
                  onChange={ (e)=>setPrice(e.target.value)}
                  type='number'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input
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
                  onChange={(e)=>setImage(e.target.value)}
                  type='img'
                  className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )

}

export default EditProduct