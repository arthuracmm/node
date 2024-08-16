import React, { useEffect, useState } from "react";
import axios from 'axios'

const Produtos = () =>{
    const[produtos, setProdutos] = useState([])

    useEffect(() =>{
        const fetchAllProdutos = async () =>{
            try{
                const res = await axios.get('http://localhost:3000/produtos')
                console.log(res);
            } catch (err){
                console.log(err);
            }
        }
        fetchAllProdutos();
    }, [])

    return(
        <div>Produtos</div>
    )
}

export default Produtos