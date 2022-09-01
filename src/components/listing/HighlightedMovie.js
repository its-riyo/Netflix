import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HighlightedMovie ({ data }) {
    return (
        <section>
            <div className=" w-full h-[470px] bg-cover bg-no-repeat bg-center" style={{backgroundImage: "linear-gradient(to bottom, transparent, rgb(20, 20, 20)), url('https://image.tmdb.org/t/p/original"+data.backdrop_path+"')" }}>
                <div className=' px-16 pt-8'>
                    <div className=' text-white'>
                        <img className=' rounded' src={"https://image.tmdb.org/t/p/w200"+data.poster_path} alt="poster" />
                        <h2 className=' font-bold text-[25px] mt-2'>{ data.title }</h2>
                    </div>

                    <div className=' flex justify-between w-[200px] cursor-pointer mt-2'>
                        <div className=' bg-white rounded w-[95px] py-2 text-center '>
                            <h3><FontAwesomeIcon icon={ faPlay }/> Play</h3>
                        </div>

                        <div className=' bg-gray-500 text-white cursor-pointer text-center rounded w-[95px] py-2 '>
                            <h3>More Info</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </section>
    );
}