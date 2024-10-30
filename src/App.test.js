import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test("on change event testing", () => {
render(<App/>)
let inputCheck = screen.getByRole("textbox");
fireEvent.change(inputCheck, {target: {value:'abc'}});
expect(inputCheck.value).toBe("abc123");
})
