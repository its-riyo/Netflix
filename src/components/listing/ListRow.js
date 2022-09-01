import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

export default function ListRow ({ Title, Data}) {
    return(
        <section>

            <div className=" text-white mb-8">
                <h1 className=" text-[30px] ml-14">{ Title }</h1>

                <div>
                    <Splide
                            options={ {
                                type   : 'loop',
                                perPage: 3,
                              } }
                          aria-label="Popular"
                    >
                        <SplideTrack>
                        { Data.results.map((result, key) => (
                            <SplideSlide>
                                <div key={ key } className="mx-1">
                                    <img className=" object-cover rounded" src={"https://image.tmdb.org/t/p/w200"+result.poster_path} alt="poster" />
                                </div>
                            </SplideSlide>
                        )) }
                        </SplideTrack>
                    </Splide>
                </div>
                
            </div>
            
        </section>
    );
}