import React from 'react'
import ArrowRight from './ArrowRight'

const MenuTree = ({menuItems}) => {

    const [classAttr, setClassAttr] = React.useState(null);

    const handleClickMenu = () => {
        setClassAttr("moved")
    }


    return (
        <ul>
            {
                menuItems.map(element => (
                    <li key={element?.id} onClick={handleClickMenu} className={classAttr}>
                        <a href='#' className='next'><span>{element.title}</span></a> <ArrowRight/>
                        {
                            element?.subMenus && <MenuTree menuItems={element?.subMenus} />
                        }
                    </li>

                ))
            }
        </ul>
    )
}

export default MenuTree