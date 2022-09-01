import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer () {
    return (
        <footer className=' py-8 bg-ThemeColor text-center text-white'>
            <p>Developed with <FontAwesomeIcon icon={ faHeart} /> by : <a href="https://github.com/agon-ny" target="_blank" rel="noreferrer" className=' border-b-[1px] border-white'>Agony</a></p>
        </footer>
    );
}