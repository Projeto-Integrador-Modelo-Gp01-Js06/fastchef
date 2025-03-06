import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalPerfil.css'
import Cadastro from '../../cadastro/Cadastro';
import AtualizarPerfil from '../atualizarperfil/AtualizarPerfil';

function ModalPerfil() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='text-xs border rounded px-4 py-2 hover:bg-white hover:text-red-500'>
                        Atualizar Cadastro
                    </button>
                }
                modal
            >
                <AtualizarPerfil />
            </Popup>
        </>
    );
}

export default ModalPerfil;