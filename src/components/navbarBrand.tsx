import {useEffect, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import axios, {AxiosResponse} from 'axios';
import { NavBarTranslation} from '../schemas/schemas'

 function NavBarBrand({title, subtitle}:NavBarTranslation) {
    return (
        <Stack gap={0} className="col-md-5 mx-auto">
            <a href="#home">
                {title}
            </a> 
            {subtitle}
        </Stack>
    );
}

export default NavBarBrand;