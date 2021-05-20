import { Header, Footer, Nav, LazyLoad, PopupLogin, PopupRegis} from "../../src/component";
export default function MainLayout({children}){
    return(
        <div className= "App">
            <Header/>
            <Nav/>
            <LazyLoad/>
            <PopupLogin/>
            <PopupRegis/>
            {children}
            <Footer/>
        </div>
    )
}