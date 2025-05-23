import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>choose from a diverse men featuring a delectable array of dishes.</p>
    <div className='explore-menu-list'>
        {
            menu_list.map((item,index)=>{
                return (
                    <div 
                    className='explore-menu-list-item'
                    key={item.menu_name} 
                    onClick={()=>
                        setCategory(prev=>prev===item.menu_name?"all":item.menu_name)
                        }>
                        <img
                         src={item.menu_image} 
                         alt="menu_image"  
                         className={category===item.menu_name?"active":""}
                         />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
    </div>
       <hr />
    </div>
  )
}

export default ExploreMenu