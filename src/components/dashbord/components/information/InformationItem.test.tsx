import { render, screen } from "@testing-library/react";
import InformationItem from "./InformationItem";



describe('informationItem component chekck',()=>{
    test('the information show proper value and title',()=>{
        const title = 'death';
        const value = 1234; 
        render(
            <InformationItem title={title} value={value} />
        );
        const titleElement = screen.getByText(title)
        const valueElement = screen.getByText(value)
        expect(titleElement).toBeInTheDocument()
        expect(valueElement).toBeInTheDocument()
    })

    test('the information will show no data if value is not set',()=>{
        const title = 'death';
        render(
            <InformationItem title={title} />
        );
        const valueElement = screen.getByText('No Data')
        expect(valueElement).toBeInTheDocument()
    })

})