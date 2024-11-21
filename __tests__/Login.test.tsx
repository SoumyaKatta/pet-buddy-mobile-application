import {render} from '@testing-library/react-native';
import {Login} from '../src/screens/Login';

describe('should render the login screen', () => {
  it('should check the the PetBuddy text is present', () => {
    const {getByText} = render(<Login />);
    expect(getByText('PetBuddy!')).toBeDefined();
  });
  it('should check the Username label',()=>{
    const {getByText} = render(<Login />);
    expect(getByText('Username')).toBeDefined();
  })
});
