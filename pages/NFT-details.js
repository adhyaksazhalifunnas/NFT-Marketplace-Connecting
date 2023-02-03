import React from 'react'
import { FaRProject } from 'react-icons/fa'

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex"
import NFTDetailsPage from '@/NFTDetailsPage/NFTDetailsPage'

const NFTDetails = () => {
    return (
        <div>
            <NFTDetailsPage />
            <Category />
            {/* <Brand /> */}
        </div>
    )
}

export default NFTDetails