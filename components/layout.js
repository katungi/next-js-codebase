import Header from './header';

export default function layout({children}){
    return(
        <>
        <Header/>
        {children}
        </>
    );
}