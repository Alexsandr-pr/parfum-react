

class Services {
   // _apiBase = "http://localhost:5000/api/auth/";
    _apiBase = "https://server-parfum.onrender.com/api/auth/";
    
    gerResourse = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Error ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCards = async () => {
        return await this.gerResourse(`${this._apiBase}tovar?`);
    }

    getLimitCard = async (i = 3) => {
        return await this.gerResourse(`${this._apiBase}card?limit=${i}`);
    }

    getOneCard = async (id = 1011001) => {
        return await this.gerResourse(`${this._apiBase}card/${id}`);
    }

    getSaleCards = async () => {
        const res =  await this.gerResourse(`${this._apiBase}tovar`);
        return res.filter(item => item.sale)
    }

    getMaleCards = async () => {
        return await this.gerResourse(`${this._apiBase}card-sort?gender=male&limit=12&sortBy=name`);
    }
    
}

export default Services;
