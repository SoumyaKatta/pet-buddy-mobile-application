import { render } from "@testing-library/react-native";
import { Register } from "../src/screens/Register";

describe("Should render the Register screen",()=>{
 it("Should test the profile image is present or not",()=>{
    const {getByTestId} = render(<Register/>)
    expect(getByTestId('profile-image')).toBeTruthy()
 })
 it("Should test whether the user name placeholder exists or not",()=>{
    const {getByPlaceholderText} =render(<Register/>)
    expect(getByPlaceholderText('Username')).toBeDefined()
 })
 it('should check the Password placeholder',()=>{
    const {getByPlaceholderText} = render(<Register />);
    expect(getByPlaceholderText('Password')).toBeDefined();
  })
  it("should check the Register button text",()=>{
    const{getByText} = render(<Register/>)
    expect(getByText('Register')).toBeDefined();
 })
 it("should check the text element",()=>{
    const{getByText} = render(<Register/>)
    expect(getByText(`Already have an account?`)).toBeDefined();
 })
 it("should check the Register text element",()=>{
    const{getByText} = render(<Register/>)
    expect(getByText(`Login`)).toBeDefined();
 })
})