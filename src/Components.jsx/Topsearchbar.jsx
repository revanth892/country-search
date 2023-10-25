import * as React from 'react';
import Input from '@mui/joy/Input';

export default function Topsearchbar() {

    const handlechange=e=>
    {
        const {value}=e.target;
        console.log(value);
    }
    const handlekey=e=>
    {
        if(e.key ==='Enter')
        {
            console.log('enter is clicked')
        }    

    }
    return (
        <>
            <Input
            sx={{ 
                maxWidth: "55%",
                backgroundColor: "grey", 
                borderRadius: '50px',
                mx: 'auto', 
                mt: 3,
                color: 'white',
                height: '22px',
                border:'none' 
                }} 
            size="md"
            name="Size"
            placeholder="Search.." 
            onChange={e=>handlechange(e)}
            onKeyDown={(e)=>handlekey(e)}
            />
        </>

    );

}
