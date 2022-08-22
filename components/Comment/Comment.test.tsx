import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Comment from "./Comment";


test('should render correct comment', ()=> {
    const comment = {authorDisplayName:'alex',publishedAt:"02/12/2019", textDisplay:"is good!" }
    render(<Comment comment={comment} />);
    const divElement = screen.getByRole("content");
    expect(divElement).toHaveTextContent("is good!");
    expect(divElement).toHaveTextContent("alex • 4 years ago");
});

test('should render image', ()=> {
    render(<Comment />);
    const imgElement = screen.getByRole("image");
    expect(imgElement).toHaveAttribute("role", "image");
});