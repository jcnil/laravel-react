import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowProducts = () => {
    const [ products, setProducts] = useState([])
    const [ search, setSearch ] =useState("")
    
    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? products.filter(product => product.delete === false) : products.filter( (product) =>product.name.toLowerCase().includes(search.toLocaleLowerCase()) || product.sku.toLowerCase().includes(search.toLocaleLowerCase()))

    results.sort((a, b) => a > b ? 1 : -1)

    useEffect ( () =>{
        getAllProducts()
    }, [])

  return (
    <div className='d-grip gap-2'>
        <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        <br/>
        <br/>
        <h2 className='test-center'>Products</h2>

        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>

        <table className='table table-striped table-hover mt-5 shadow-lg'>
        <thead className='bg-primary text-white'>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Image</th>
                <th>Delete</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { results.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.sku}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.image}</td>
                    <td>{product.delete}</td>
                    <td>
                       <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                       <button onClick={ ()=>deleteProduct(product.id) } className='btn btn-danger'>Delete</button>
                    </td>
                </tr>
            )) }
        </tbody> 
    </table>
    </div>
    
  )
}

export default ShowProducts