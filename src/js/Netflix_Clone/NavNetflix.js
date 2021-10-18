import React ,{useState , useEffect} from 'react'
import "/src/css/Netflix_Clone/NavNetflix.css";

export default function Nav (params)
{
     const [show , setHandleShow]=useState(false)

     useEffect(() =>
     {
          window.addEventListener('scroll', () =>
          {
               if (window.scrollY > 150)
               {
                         setHandleShow(true);
                     
                } else {
                         setHandleShow(false);
                }
          })
          
          return () =>
          {
               window.removeEventListener("scroll", setHandleShow);
          }


     } ,[])
     
     return (
				<div className={`Nav__netflix ${show && `Nav__netflixBlack`}`}>
					<img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' className='Nav__logo img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}' alt='' />
				</div>
			); 

}