import { Welcome } from "../src/screens/Welcom";
import {render} from '@testing-library/react-native'

describe("Should render the welcome screen",()=>{
    it("should check whether background image is present or not",()=>{
        const {getByTestId} = render(<Welcome/>)
        expect(getByTestId('background-image')).toBeTruthy();
    })
})