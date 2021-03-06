import{TheHeader}from"./TheHeader/TheHeader.js";
import{TheMiddle}from"./TheMiddle/TheMiddle.js";
import{ProfileMenu}from"./ProfileMenu/ProfileMenu.jsx";
import{SettingsMenu}from"./SettingsMenu/SettingsMenu.jsx";
import{ListsMenu}from"./ListsMenu/ListsMenu.jsx";
import{OptionsMenu}from"./OptionsMenu/OptionsMenu.jsx";
import{SortMenu}from"./SortMenu/SortMenu.jsx";
import{SuggestionsMenu}from"./SuggestionsMenu/SuggestionsMenu.jsx";
import react from"react";

const SteedsTasks=()=>{
    const[lists,setLists]=react.useState(null);
    const[settingsIconClicked,setSettingsIconClicked]=react.useState(false);
    const[profileIconClicked,setProfileIconClicked]=react.useState(false);
    const[listsMenuClicked,setListsMenuClicked]=react.useState(true);
    const[currentList,setCurrentList]=react.useState("Tasks");
    const[currentListTasks,setCurrentListTasks]=react.useState(null);
    const[completedNumber,setCompletedNumber]=react.useState(0);
    const[centerPageOptions,setCenterPageOptions]=react.useState(false);
    const[sortMenuClicked,setSortMenuClicked]=react.useState(false);
    const[suggestionsClicked,setSuggestionsClicked]=react.useState(false);


    return(
        <>
            <TheHeader settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked}profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <ProfileMenu profileIconClicked={profileIconClicked}setProfileIconClicked={setProfileIconClicked} />
            <SettingsMenu settingsIconClicked={settingsIconClicked}setSettingsIconClicked={setSettingsIconClicked} />
            <OptionsMenu centerPageOptions={centerPageOptions}currentList={currentList}listsMenuClicked={listsMenuClicked} />
            <SortMenu sortMenuClicked={sortMenuClicked}currentList={currentList} />
            <SuggestionsMenu suggestionsClicked={suggestionsClicked}setSuggestionsClicked={setSuggestionsClicked} />
            <ListsMenu listsMenuClicked={listsMenuClicked}setListsMenuClicked={setListsMenuClicked}setCurrentList={setCurrentList}currentList={currentList}setCurrentListTasks={setCurrentListTasks}currentListTasks={currentListTasks}setCompletedNumber={setCompletedNumber}lists={lists}setLists={setLists} />
            <TheMiddle listsMenuClicked={listsMenuClicked}setListsMenuClicked={setListsMenuClicked}currentList={currentList}currentListTasks={currentListTasks}setCurrentListTasks={setCurrentListTasks}completedNumber={completedNumber}setCompletedNumber={setCompletedNumber}centerPageOptions={centerPageOptions}setCenterPageOptions={setCenterPageOptions}sortMenuClicked={sortMenuClicked}setSortMenuClicked={setSortMenuClicked}suggestionsClicked={suggestionsClicked}setSuggestionsClicked={setSuggestionsClicked}lists={lists}setLists={setLists} />
        </>
    );
};
export{SteedsTasks};