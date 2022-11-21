import {useEffect, useState } from 'react';


import Stack from 'react-bootstrap/Stack';
import axios, {AxiosResponse} from 'axios';
// const title = 'Diiwaanka Meheradaha ee Somaliland'
// const subTitle = 'U muuji meheraddaada aduunka oo idil'



 function NavBarBrand() {

    const [stories, dispatchStories] = useState(null);


    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios.get('https://africahornads-cms-production.up.railway.app/items/index_page')
        .then((response: AxiosResponse) =>  dispatchStories(response.data.data)).then(() => console.log(stories));
    }, []);
    return (
        <Stack gap={0} className="col-md-5 mx-auto">
            <a href="#home">
                {stories != null && stories['title']}
            </a> 
            {stories != null && stories['subtitle']}
        </Stack>
    );

}

export default NavBarBrand;