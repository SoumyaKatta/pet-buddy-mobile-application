import { Welcome } from "../src/screens/Welcom";
import {render} from '@testing-library/react-native'

describe("Should render the welcome screen",()=>{
    it("should check whether background image is present or not",()=>{
        const {getByTestId} = render(<Welcome/>)
        expect(getByTestId('background-image')).toBeTruthy();
    })
    it('should check whether the `Hey!Welocme` text is present on the screen or not',()=>{
        const {getByText} = render(<Welcome/>)
        expect(getByText('Hey! Welcome')).toBeTruthy();
    })
    it("should check whether text is present or not",()=>{
        const {getByTestId} = render(<Welcome/>)
        expect(getByTestId('pet-text')).toBeTruthy();
    })
})