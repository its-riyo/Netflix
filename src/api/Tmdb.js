const ApiKey = "79268a8a456e473bd9abd0dd650a9c7d";
const ApiBase = "https://api.themoviedb.org/3";

const MakeRequest = async (EndPoint) => {

    const response = await fetch(ApiBase+EndPoint+"?api_key="+ApiKey).then((response) => response.json());
    
    return response

}

const Data = {

    GetData: async () => {

        return [
            {
                Title: "Popular movies",
                Data: await MakeRequest("/movie/popular")
            },
            {
                Title: "Top rated Tv Shows",
                Data: await MakeRequest("/tv/top_rated")
            },
            {
                Title: "Upcoming",
                Data: await MakeRequest("/movie/upcoming")
            }
        ];

    }

}

export default Data;