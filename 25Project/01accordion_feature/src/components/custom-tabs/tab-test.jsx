import Tabs from "./tabs";
import './style.css'

export default function TabTest(){
    const tabs = [
        {
            label : "Tab 1",
            content : <div>This is content for Tab 1</div>
        },
        {
            label : "Tab 2",
            content : <div>This is content for Tab 2</div>
        },
        {
            label : "Tab 3",
            content :<div>This is content for Tab 3</div>
        },
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }
    return(
        <Tabs tabsContent={tabs} onchange={handleChange}/>
    )
}