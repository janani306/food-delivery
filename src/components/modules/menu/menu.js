import React, { useEffect, useState } from 'react';
import Monday from "../../../assets/icons/monday.png";
import Tuesday from "../../../assets/icons/tuesday.png";
import Wednesday from "../../../assets/icons/wednesday.png";
import Thursday from "../../../assets/icons/thursday.png";
import Friday from "../../../assets/icons/friday.png";
import Saturday from "../../../assets/icons/saturday.png";
import Sunday from "../../../assets/icons/sunday.png";
import data from '../../../config/Data';
import calendar from "../../../assets/icons/calendar.png"
import "./menu.css";
const Menu = () => {
    const [showDiv, setshowDiv] = useState(false);
    const [tabchange, settabChange] = useState(0);
    const [MealZone, setMealZone] = useState();
    const getCurrentDate = new Date();
    const getCurrentDay = getCurrentDate.getDay()
    const [selectedDay, setSelectedDay] = useState(getCurrentDay);
    const [selectedDayName, setSelectedDayName] = useState("")
    useEffect(() => {
        console.log(getCurrentDay, "getCurr")
        if (tabchange === 0) {
            const breakfast = data.filter((breakmeal) => breakmeal.category === "Breakfast" && breakmeal.day === selectedDay);
            console.log(breakfast, "break")
            setMealZone(breakfast)
        }
        else if (tabchange === 1) {
            const lunch = data.filter((lunch) => lunch.category === "Lunch" && lunch.day === selectedDay);
            setMealZone(lunch)
        }
        else if (tabchange === 2) {
            const dinner = data.filter((dinner) => dinner.category === "Dinner" && dinner.day === selectedDay);
            setMealZone(dinner)
        }

    }, [tabchange, selectedDay])
    useEffect(() => {
        console.log(selectedDay)
        switch (selectedDay) {
            case 1:
                setSelectedDayName("Monday");
                break;
            case 2:
                setSelectedDayName("Tuesday");
                break;
            case 3:
                setSelectedDayName("Wednesday");
                break;
            case 4:
                setSelectedDayName("Thursday");
                break;
            case 5:
                setSelectedDayName("Friday");
                break;
            case 6:
                setSelectedDayName("Saturday");
                break;
            default:
                break;

        }
    }, [selectedDay])
    console.log(new Date())
    return (
        <>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none heading-space">
                                <span class="fs-5 d-none d-sm-inline">Days of Week</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                    </a>
                                    <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li class="w-100" value={1} onClick={() => { setSelectedDay(1) }}>
                                            <a href="#" class="nav-link px-0" value={1} onClick={() => { setSelectedDay(1) }}> <span class="d-none d-sm-inline space-div">Monday</span> <img src={Monday} className='day' /> </a>
                                        </li>
                                        <li value={2} onClick={() => { setSelectedDay(2) }}>
                                            <a href="#" class="nav-link px-0" value={2} onClick={() => { setSelectedDay(2) }}> <span class="d-none d-sm-inline space-div">Tuesday</span>  <img src={Tuesday} className='day' /></a>
                                        </li>
                                        <li value={3} onClick={() => { setSelectedDay(3) }}>
                                            <a href="#" class="nav-link px-0" value={3} onClick={() => { setSelectedDay(3) }}> <span class="d-none d-sm-inline space-div">Wednesday</span>  <img src={Wednesday} className='day' /></a>
                                        </li>
                                        <li value={4} onClick={() => { setSelectedDay(4) }}>
                                            <a href="#" class="nav-link px-0" value={4} onClick={() => { setSelectedDay(4) }}> <span class="d-none d-sm-inline space-div">Thursday</span>  <img src={Thursday} className='day' /></a>
                                        </li>
                                        <li value={5} onClick={() => { setSelectedDay(5) }}>
                                            <a href="#" class="nav-link px-0" value={5} onClick={() => { setSelectedDay(5) }}> <span class="d-none d-sm-inline space-div">Friday</span> <img src={Friday} className='day' /></a>
                                        </li>
                                        <li value={6} onClick={() => { setSelectedDay(6) }}>
                                            <a href="#" class="nav-link px-0" value={6} onClick={() => { setSelectedDay(6) }}> <span class="d-none d-sm-inline space-div">Saturday</span>  <img src={Saturday} className='day' /></a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline space-div">Sunday</span> <img src={Sunday} className='day' /></a>
                                        </li>

                                    </ul>
                                </li>



                            </ul>
                            <hr />

                        </div>
                    </div>
                    <div class="col py-3">
                        <div className='header'><div className='select-days' ><img className='selectcalendar' src={calendar}></img></div><h1>SKS FOODS</h1></div>
                        <div className='day-header'>{selectedDayName}</div>
                        <div className='tab-view'>
                            <div className={tabchange === 0 ? 'meal-tab-selected' : 'meal-tab'} onClick={() => settabChange(0)}>BreakFast</div>
                            <div className={tabchange === 1 ? 'meal-tab-selected' : 'meal-tab'} onClick={() => settabChange(1)}>Lunch</div>
                            <div className={tabchange === 2 ? 'meal-tab-selected' : 'meal-tab'} onClick={() => settabChange(2)}>Dinner</div>
                        </div>
                        <div className='item-list'>
                            {MealZone?.map((ele) => {
                                const { images, name, desc } = ele;
                                return (

                                    <div className='item-box'>

                                        <img src={images} className='test-class'></img>
                                        <h5>{name}</h5>
                                        <p className='image-desc'>{desc}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Menu
