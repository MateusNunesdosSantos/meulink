import { useEffect, useState } from 'react'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './links.css'

import LinkItem from '../../components/LinkItem'

import { getLinkSave, deleteLink } from '../../services/storeLinks'

function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState();

    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        async function getLinks() {
            const result  = await getLinkSave('@encurtalink');

            if(result.length === 0) {
               setEmptyList(true);
            }
            setMyLinks(result);
        }
        getLinks();
    },[])

    function handleOpenLink(link){
        setData(link)
        setShowModal(true)
    }

   async function handleDelete(id) {
       const result = await deleteLink(myLinks, id);
        
       if(result.length === 0){
        setEmptyList(true);
       }

       setMyLinks(result)

    }

  return (
    <div className='links-container'>

    <div className='links-header'>
        <Link to={'/'}>
            <FiArrowLeft size={38} color='#FFF' />
        </Link>
        <h1>Meus Links</h1>
    </div>

    { emptyList && (
        <div className='links-item'>
            <h2 className='empty-text'>
                Sua lista está vazia...
            </h2>
        </div>
    )}

    {myLinks.map( link => (
         <div className='links-item' key={link.id}>
         <button className='link' onClick={() => handleOpenLink(link) }>
             <FiLink size={18} color='#FFF' />
             {link.long_url}
         </button>
         <button className='link-delete' onClick={() => handleDelete(link.id)}>
             <FiTrash size={24} color='#FF5454' />
         </button>
        </div>
    ))}
   
   {showModal && (
       <LinkItem 
        closeModel={() => setShowModal(false)}
        content={data}
       />
   )}
 
    </div>
  );
}

export default Links;
