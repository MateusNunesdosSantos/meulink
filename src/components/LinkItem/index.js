
import { FiX, FiClipboard } from 'react-icons/fi'
import './link-item.css'

export default function LinkItem( { closeModel, content }) {

   async function copylink(){
    await navigator.clipboard.writeText(content.link)
        alert('URL Copiada com sucesso!');
    }

    return(
        <div className='modal-container'>
            <div className='modal-header'>
            <h2>Link Encurtado</h2>
            <button onClick={closeModel}>
                <FiX size={28} color='#000'/>
            </button>
            </div>

            <span>{content.long_url}</span>

            <button className='modal-link' onClick={copylink}>
                {content.link}
                <FiClipboard size={20} color='#FFF' />
            </button>
        </div>
    )
}