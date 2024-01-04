import { render,screen } from "@testing-library/react";
import Header from "../Header";
import  {Provider}from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";
test("Should load header component witha login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}> 
            <Header/>
        </Provider>
        </BrowserRouter>
        
    );
    const loginButton=screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
})