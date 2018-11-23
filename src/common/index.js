import TabItem from './tabs/TabItem'
import Tabs from './tabs/Tabs'
import Header from './header/Header'
import Content from './content/Content'
import NavBar from './navBar/NavBar'
import TimeLine from './timeLine/TimeLine'

export default {
    install(Vue){
        Vue.component(TabItem.name,TabItem);
        Vue.component(Tabs.name,Tabs);
        Vue.component(Header.name,Header);
        Vue.component(Content.name,Content);
        Vue.component(NavBar.name,NavBar);
        Vue.component(TimeLine.name,TimeLine);
    }
}