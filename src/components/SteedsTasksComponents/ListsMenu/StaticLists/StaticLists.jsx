import"./staticLists.css";
import{graphConfig,loginRequest}from"../../../../authConfig.js";
import{callMsGraphForListTasks}from"../../../../graph.js";
import{useMsal}from"@azure/msal-react";

const StaticLists=props=>{

    const clickedListDiv=event=>{
        let thisText=event.target.children[1].textContent;
        props.setCurrentList(thisText);
    };
    
    const clickedListImg=event=>{
        let thisText=event.target.nextElementSibling.textContent;
        props.setCurrentList(thisText);
        event.stopPropagation();
    };

    const clickedListText=event=>{
        let thisText=event.target.textContent;
        props.setCurrentList(thisText);
        event.stopPropagation();
    };
    
    return(
        <>
            <div id={props.currentList!=="My Day"?"listsMenuDayDiv":"listsMenuDayDivDark"}onClick={clickedListDiv}>
                <img id={props.currentList!=="My Day"?"listsMenuDayImage":"listsMenuDayImageDark"}src="https://image.shutterstock.com/image-vector/sun-vector-icon-modern-design-600w-1415031134.jpg"alt="text"onClick={clickedListImg} />
                <h4 id={props.currentList!=="My Day"?"listsMenuDayText":"listsMenuDayTextBlue"}onClick={clickedListText}>My Day</h4>
            </div>
            <div id={props.currentList!=="Assigned To Me"?"listsMenuAssignedDiv":"listsMenuAssignedDivDark"}onClick={clickedListDiv}>
                <img id={props.currentList!=="Assigned To Me"?"listsMenuAssignedImage":"listsMenuAssignedImageDark"}src="https://image.shutterstock.com/image-vector/flat-portrait-black-man-icon-600w-2134341081.jpg"alt="text"onClick={clickedListImg} />
                <h4 id={props.currentList!=="Assigned To Me"?"listsMenuAssignedText":"listsMenuAssignedTextBlue"}onClick={clickedListText}>Assigned To Me</h4>
            </div>
            <div id={props.currentList!=="Flagged email"?"listsMenuFlaggedDiv":"listsMenuFlaggedDivDark"}onClick={clickedListDiv}>
                <img id={props.currentList!=="Flagged email"?"listsMenuFlaggedImage":"listsMenuFlaggedImageDark"}src="https://image.shutterstock.com/image-vector/line-icon-flag-600w-654361600.jpg"alt="text"onClick={clickedListImg} />
                <h4 id={props.currentList!=="Flagged email"?"listsMenuFlaggedText":"listsMenuFlaggedTextBlue"}onClick={clickedListText}>Flagged email</h4>
            </div>
            <div id={props.currentList!=="Tasks"?"listsMenuTasksDiv":"listsMenuTasksDivDark"}onClick={clickedListDiv}>
                <img id={props.currentList!=="Tasks"?"listsMenuTasksImage":"listsMenuTasksImageDark"}src="https://image.shutterstock.com/image-vector/home-icon-trendy-flat-style-600w-675381382.jpg"alt="text"onClick={clickedListImg} />
                <h4 id={props.currentList!=="Tasks"?"listsMenuTasksText":"listsMenuTasksTextBlue"}onClick={clickedListText}>{props.lists!==null?props.lists.value[0].displayName:"loading lists"}</h4>
            </div>
        </>
    );
};
export{StaticLists};