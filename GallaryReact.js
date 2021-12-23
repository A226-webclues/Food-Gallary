import React, { useState } from 'react';
import "./tab.css";
import Menu from "./Menu";
import MenuItems from './MenuItems';
import Category from './Category';

const allCatValues = [...new Set (Menu.map((currentData) =>  currentData.category)), "All"];

const GallaryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatValues);

    const filterItem = (cateItem) => {

        if(cateItem === "All"){
            setItems(Menu);
            return;
        }

        const UpdatedItem = Menu.filter((curElem) => {
            return curElem.category === cateItem;
        });
        setItems(UpdatedItem);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading"> Order Your Favourite Dish </h1>
                <hr />
            
            <Category filterItem = { filterItem } catItems={catItems}/>
            <MenuItems items={items}/>
        </>
    );
};

export default GallaryReact;
