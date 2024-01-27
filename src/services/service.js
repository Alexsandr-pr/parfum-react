


class Services {

    gerResourse = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (`Error ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCards = async () => {
        return await this.gerResourse("http://localhost:3001/posts");
    }
    getAllBrands = async () => {
        return await this.gerResourse("http://localhost:3001/brands");
    }
    getOneCard = async (id = 1011001) => {
        return await this.gerResourse(`http://localhost:3001/posts/${id}`);
    }
    
    getSaleCards = async () => {
        const res =  await this.gerResourse("http://localhost:3001/posts");
        return res.filter(item => item.sale)
    }
}

export default Services;