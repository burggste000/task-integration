import{TheHeader}from"./TheHeader/TheHeader.js";
import{TheMiddle}from"./TheMiddle/TheMiddle.js";
import{ProfileMenu}from"./ProfileMenu/ProfileMenu.jsx";
import{SettingsMenu}from"./SettingsMenu/SettingsMenu.jsx";
import{ListsMenu}from"./ListsMenu/ListsMenu.jsx";
import react from"react";

const SteedsTasks=()=>{
    const[settingsIconClicked,setSettingsIconClicked]=react.useState(false);
    const[profileIconClicked,setProfileIconClicked]=react.useState(false);
    const[listsMenuClicked,setListsMenuClicked]=react.useState(true);
    const[currentList,setCurrentList]=react.useState(null);

    return(
        <>
            <TheHeader settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <ProfileMenu profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <SettingsMenu settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked} />
            <ListsMenu listsMenuClicked={listsMenuClicked}setListsMenuClicked={setListsMenuClicked}setCurrentList={setCurrentList} />
            <TheMiddle listsMenuClicked={listsMenuClicked}setListsMenuClicked={setListsMenuClicked}currentList={currentList} />
        </>
    );
};
export{SteedsTasks};