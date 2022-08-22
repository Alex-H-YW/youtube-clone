import {fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";


test('should render correct placeholder', ()=> {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(/search/i)
    expect(inputElement).toBeInTheDocument();
});

test('handles onclick', ()=> {
    const onClick = jest.fn();
    render(<button onClick={onClick}/>);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClick).toBeCalledTimes(1);
});

test('input should change', ()=> {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    const testValue = "test";
    fireEvent.change(inputElement, {target: {value: testValue}})
    expect(inputElement.value).toBe(testValue);
});