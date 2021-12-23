import React from 'react'

const Category = ({filterItem, catItems}) => {
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItems.map((currentitems,index) => {
                            return <button className="btn btn-warning" key={index} onClick={() => filterItem(currentitems)}>{currentitems}</button>        
                        })
                    }

                    {/* <button className="btn btn-warning" onClick={() => filterItem('Breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('Lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('Evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem('Dinner')}>Dinner</button> */}
                    {/* <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button> */}
                </div>
            </div>
        </>
    );
};

export default Category;
