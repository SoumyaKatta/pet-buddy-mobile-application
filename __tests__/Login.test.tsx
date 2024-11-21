import {render} from '@testing-library/react-native';
import {Login} from '../src/screens/Login';

describe('should render the login screen', () => {
  it('should check the the PetBuddy text is present', () => {
    const {getByText} = render(<Login />);
    expect(getByText('PetBuddy!')).toBeDefined();
  });
  it('should check the Username placeholder',()=>{
    const {getByPlaceholderText} = render(<Login />);
    expect(getByPlaceholderText('Username')).toBeDefined();
  })
  it('should check the Password placeholder',()=>{
    const {getByPlaceholderText} = render(<Login />);
    expect(getByPlaceholderText('Password')).toBeDefined();
  })
  it("should check the Login button text",()=>{
     const{getByText} = render(<Login/>)
     expect(getByText('Login')).toBeDefined();
  })
  it("should check the text element",()=>{
    const{getByText} = render(<Login/>)
    expect(getByText(`Don't have an account?`)).toBeDefined();
 })
 it("should check the Register text element",()=>{
    const{getByText} = render(<Login/>)
    expect(getByText(`Register`)).toBeDefined();
 })
});
