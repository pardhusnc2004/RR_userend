import Axios from 'axios'
import {Link} from 'react-router-dom'
function Studentlistrow(props) {
    const {_id, name, email, roll} = props.obj;
    return (
        <tr key={props.ind} className='text-center pt-2'>
            <td className='mt-2'>{name}</td>
            <td className='mt-2'>{roll}</td>
        </tr>
    )
}

export default Studentlistrow