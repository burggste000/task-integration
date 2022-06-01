import "./theMiddle.css";
import react from"react";

const TheMiddle=props=>{
    const[sortHovered,setSortHovered]=react.useState(false);
    const[shareHovered,setShareHovered]=react.useState(false);
    const[createTaskInputFocused,setCreateTaskInputFocused]=react.useState(false);
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let theDate=`${year}/${month<10?`0${month}`:`${month}`}/${date}`;

    const dateId=()=>{
        if(props.currentList==="My Day"){
            if(props.listsMenuClicked===true){
                return"date";
            }
            else{
                return"wideDate";
            }
        }
        else{
            return"hide";
        }
    };

    const createTaskInputDecideClass=()=>{
        if(props.listsMenuClicked===true&&createTaskInputFocused===false){
            return"createTaskInput";
        }
        if(props.listsMenuClicked===true&&createTaskInputFocused===true){
            return"focusedCreateTaskInput";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===false){
            return"wideCreateTaskInput";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===true){
            return"focusedWideCreateTaskInput";
        }
    };

    const createTaskDecideClass=()=>{
        if(props.listsMenuClicked===true&&createTaskInputFocused===false){
            return"createTask";
        }
        if(props.listsMenuClicked===true&&createTaskInputFocused===true){
            return"tallCreateTask";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===false){
            return"wideCreateTask";
        }
        if(props.listsMenuClicked===false&&createTaskInputFocused===true){
            return"tallWideCreateTask";
        }
    };

    return(
        <>
            <div id={props.listsMenuClicked===true?"leftTopCenterPage":"wideLeftTopCenterPage"}>
                <img id={props.listsMenuClicked===true?"hide":"centerPageMenuButton"}src="https://image.shutterstock.com/image-vector/menu-icon-trendy-flat-style-600w-1350292571.jpg"alt="text"onClick={()=>props.setListsMenuClicked(!props.listsMenuClicked)} />
                <h2 id="centerPageTitle">{props.currentList}</h2>
                <img id="centerPageOptions"src="https://image.shutterstock.com/image-vector/instagram-menu-icon-vector-gradient-600w-442224592.jpg"alt="text" />
            </div>
            <p id={dateId()}>{theDate}</p>
            <div id="rightTopCenterPage">
                <img className={sortHovered===false?"centerPageRightIcons":"centerPageRightIconsDark"}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}src="https://image.shutterstock.com/image-vector/down-black-arrow-icon-600w-1646995147.jpg"alt="text" />
                <h4 className={sortHovered===false?"centerPageRightWords":"centerPageRightWordsDark"}onMouseEnter={()=>setSortHovered(true)}onMouseLeave={()=>setSortHovered(false)}>Sort</h4>
                <img className={shareHovered===false?"centerPageRightIcons":"centerPageRightIconsDark"}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}src="https://image.shutterstock.com/image-illustration/add-friends-icon-600w-1184815669.jpg"alt="text" />
                <h4 className={shareHovered===false?"centerPageRightWords":"centerPageRightWordsDark"}onMouseEnter={()=>setShareHovered(true)}onMouseLeave={()=>setShareHovered(false)}>Share</h4>
            </div>
            <div className={createTaskDecideClass()}>
                <img id={createTaskInputFocused===false?"createTaskPlus":"hide"}src="https://image.shutterstock.com/image-vector/colored-plus-symbol-cross-icon-600w-494267107.jpg"alt="text" />
                <img id={createTaskInputFocused===false?"hide":"createTaskCircle"}src="https://image.shutterstock.com/image-photo/white-paper-texture-background-cardboard-600w-1384887293.jpg"alt="text" />
                <input className={createTaskInputDecideClass()}type="text"placeholder="Add a task"onFocus={()=>setCreateTaskInputFocused(true)}onBlur={()=>setCreateTaskInputFocused(false)} />
                <div id={createTaskInputFocused===false?"hideProfMenu":"createTaskIconsDiv"}>
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/black-calendar-icon-design-vector-600w-1818197549.jpg"alt="text" />
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/bell-icon-design-600w-1250740630.jpg"alt="text" />
                    <img className="createTaskIcons"src="https://image.shutterstock.com/image-vector/update-organizer-vector-icon-style-600w-338278388.jpg"alt="text" />
                </div>
                <h5 id={createTaskInputFocused===false?"hideProfMenu":"add"}>Add</h5>
            </div>
        </>
    );
};
export{TheMiddle};